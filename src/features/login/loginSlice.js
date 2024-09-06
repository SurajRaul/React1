import { createSlice } from '@reduxjs/toolkit'
export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    value: "",
  },
  reducers: {
    setUser: (state,action) => {
      state.value=action.payload;
    }
  }
})
export const { setUser } = loginSlice.actions
const loginReducer= loginSlice.reducer
export default loginReducer

/* action:
setUser */