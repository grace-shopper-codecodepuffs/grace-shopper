import axios from 'axios'

//ACTION TYPES
const GOT_PRODUCTS = 'GOT_PRODUCTS'
const GOT_A_PRODUCT = 'GOT_A_PRODUCT'

//INITIAL STATE
const initialState = {
  products: [],
  aProduct: {}
}

//ACTION CREATOR
export const gotProducts = products => ({
  type: GOT_PRODUCTS,
  products
})

//ALL PRODUCTS
export const getProducts = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/potions')
    dispatch(gotProducts(data))
  } catch (error) {
    console.error(error)
  }
}

export const gotAProduct = aProduct => ({
  type: GOT_A_PRODUCT,
  aProduct
})

export const getAProduct = productId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/potions/${productId}`)
    dispatch(gotAProduct(data))
  } catch (error) {
    console.error(error)
  }
}

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_PRODUCTS:
      return {
        ...state,
        products: action.products
      }
    case GOT_A_PRODUCT:
      console.log('in reducer: state>>', state)
      return {
        ...state,
        aProduct: action.aProduct
      }
    default:
      return state
  }
}
