import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './userReducer'

const store = configureStore({
  reducer: combineReducers({
    user: userReducer,
  }),
  devTools: true,
})

export default store
