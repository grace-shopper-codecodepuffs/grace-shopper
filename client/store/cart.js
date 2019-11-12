import axios from 'axios'
import history from '../history'

// Action types
const GOT_CART = 'GOT_CART'
const ADDED_TO_CART = 'ADDED_TO_CART'
const REMOVED_FROM_CART = 'REMOVED_FROM_CART'
const EDITED_QUANTITY_IN_CART = 'EDITED_QUANTITY_IN_CART'

const defaultCart = JSON.parse(localStorage.getItem('cart')) || []
console.log(defaultCart)

// Action creators
const gotCart = cart => ({
  type: GOT_CART,
  cart
})
const addedToCart = newCart => ({
  type: ADDED_TO_CART,
  newCart
})
const removedFromCart = productId => ({
  type: REMOVED_FROM_CART,
  productId
})

const editedQuantityInCart = newCart => ({
  type: EDITED_QUANTITY_IN_CART,
  newCart
})

// ThunkCreators
export const getCart = () => async (dispatch, getState) => {
  try {
    let state = getState()
    if (state.user.id >= 0) {
      const {data} = await axios.get(`/api/user/cart`)
      dispatch(gotCart(data))
    } else {
      let cart = JSON.parse(localStorage.getItem('cart'))
      if (cart === null) cart = []
      dispatch(gotCart(JSON.parse(localStorage.getItem('cart'))))
    }
  } catch (err) {
    console.error(err)
  }
}

export const addToCart = (product, quantity) => async (dispatch, getState) => {
  try {
    let state = getState()
    if (state.user.id >= 0) {
      const {data} = await axios.post(`/api/user/cart`, {
        product,
        quantity
      })
      dispatch(addedToCart(data))
    } else {
      let cart = JSON.parse(localStorage.getItem('cart'))
      if (cart === null) cart = []
      const itemInd = cart.findIndex(item => item.potionId === product.id)
      if (itemInd >= 0) {
        cart[itemInd].quantity = Number(quantity)
        cart[itemInd].price = product.price
      } else {
        cart.push({
          potionId: product.id,
          quantity: quantity,
          price: product.price
        })
      }
      dispatch(addedToCart(cart))
      //won't work need to get current cart from local State and add product to it and send newCart
    }
  } catch (err) {
    console.error(err)
  }
}

export const removeFromCart = potionId => async (dispatch, getState) => {
  try {
    let state = getState()
    if (state.user.id >= 0) {
      await axios.delete(`/api/user/cart/${potionId}`)
      dispatch(removedFromCart(potionId))
    } else {
      dispatch(removedFromCart(orderPotionToRemove.potionId))
    }
  } catch (err) {
    console.error(err)
  }
}

export const editQuantityInCart = (potionId, newQuantity) => async (
  dispatch,
  getState
) => {
  try {
    let state = getState()
    if (state.user.id >= 0) {
      const {data} = await axios.put(`api/user/cart/${potionId}`, {
        quantity: newQuantity
      })
      dispatch(editedQuantityInCart(data))
    } else {
      let cart = JSON.parse(localStorage.getItem('cart'))
      cart = cart.map(orderPotionInst => {
        if (orderPotionInst.potionId === potionId) {
          orderPotionInst.quantity = newQuantity
        }
      })
      dispatch(editedQuantityInCart(cart))
    }
  } catch (err) {
    console.error(err)
  }
}

export default function(state = defaultCart, action) {
  switch (action.type) {
    case GOT_CART:
      return action.cart
    case ADDED_TO_CART:
      return action.newCart
    case REMOVED_FROM_CART:
      return state.filter(product => product.potionId !== action.productId)
    case EDITED_QUANTITY_IN_CART:
      return action.newCart
    default:
      return state
  }
}
