import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    name: 'John Doe'
  },
  {
    id: '1',
    name: "Jane Doe"
  },
  {
    id: '2',
    name: "Andrew tate"
  }
]

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers:{

  }
})

export const selectAllUsers = (state)=>state.users;

export default userSlice.reducer;