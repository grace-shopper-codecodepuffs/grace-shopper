import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import products from './products'

function saveToLocalStorage(state) {
  try {
    const serializedUserCart = JSON.stringify(state.user.currentCart)
    localStorage.setItem('cart', serializedUserCart)
  } catch (error) {
    console.error(error)
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('cart')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (error) {
    console.error(error)
  }
}

const reducer = combineReducers({
  user,
  products
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)

const persistedState = {
  user: {
    currentCart: loadFromLocalStorage()
  },
  products: {
    products: [],
    aProduct: {}
  }
}

export const store = createStore(reducer, persistedState, middleware)

store.subscribe(() => saveToLocalStorage(store.getState()))

export default reducer
export * from './user'
export * from './products'
