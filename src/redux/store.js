import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './userReducer'
import cartReducer from './cartReducer'

const store = configureStore({
  reducer: combineReducers({
    user: userReducer,
    cart: cartReducer
  }),
  devTools: true,
})

export default store
