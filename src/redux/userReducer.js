import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: null,
    email: null
  },
  reducers: {
    updateProfile: (state, action) => {
      state.name = action.payload.name
      state.email = action.payload.email
    },
    resetProfile: (state, action) => {
      state.name = null
      state.email = null
    },
  }


})

const { updateProfile, resetProfile } = userSlice.actions

export const userAction = { updateProfile, resetProfile }
export default userSlice.reducer