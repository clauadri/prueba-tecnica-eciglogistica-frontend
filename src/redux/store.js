import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import userReducer from './user/user.reducer'
import productsReducer from './products/products.reducer'

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
