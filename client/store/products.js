import axios from 'axios'

//ACTION TYPES
const GOT_PRODUCTS = 'GET_PRODUCTS'

//INITIAL STATE
const initialState = []

//ALL PRODUCTS - ACTION CREATOR
export const gotProducts = products => ({
  type: GOT_PRODUCTS,
  products
})

//ALL PRODUCTS - THUNK
export const getProducts = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/potions')
    dispatch(gotProducts(data))
  } catch (error) {
    console.error(error)
  }
}

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_PRODUCTS:
      return action.products
    default:
      return state
  }
}
