import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserType } from '../../types/UserType'

const initialState: UserType = {
  name: 'John',
  lastName: 'Doe',
  email: 'jdoe@email.com'
}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setLastName: (state, action: PayloadAction<string>) => {
        state.lastName = action.payload
    },
    setEmail: (state, action: PayloadAction<string>) => {
        state.email = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setName, setLastName, setEmail } = counterSlice.actions

export const userReducer = counterSlice.reducer;