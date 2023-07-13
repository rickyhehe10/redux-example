import { createSlice } from '@reduxjs/toolkit'


export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addToCart: (state, action) => {
      // state.items.push(action.payload)
      state.items = [...state.items, action.payload]
    }
  }


})

const { addToCart } = cartSlice.actions

export const cartAction = { addToCart }
export default cartSlice.reducer