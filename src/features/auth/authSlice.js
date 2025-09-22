import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null,
  role: null,
  userId: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials(state, action) {
      const { token, role, userId } = action.payload
      state.token = token
      state.role = role
      state.userId = userId
    },
    logout(state) {
      state.token = null
      state.role = null
      state.userId = null
    },
  },
})

export const { setCredentials, logout } = authSlice.actions
export const authReducer = authSlice.reducer
