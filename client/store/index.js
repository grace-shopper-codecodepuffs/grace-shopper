import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import products from './products'
import cart from './cart'

function saveToLocalStorage(state) {
  try {
    const serializedGuestCart = JSON.stringify(state.cart)
    localStorage.setItem('cart', serializedGuestCart)
  } catch (error) {
    console.error(error)
  }
}

const reducer = combineReducers({
  user,
  products,
  cart
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)

export const store = createStore(reducer, middleware)

store.subscribe(() => saveToLocalStorage(store.getState()))

export default reducer
export * from './user'
export * from './products'
export * from './cart'
