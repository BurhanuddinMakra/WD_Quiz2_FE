import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    loggedIn: false,
    token: ""
  }

const userSlice = createSlice({
    name: "user",
    initialState ,

    reducers: {
      login: (state, action)=> {
        state.loggedIn = true;
        state.token = action.payload;

        
      },

    }
  })
  
  export const { login  } = userSlice.actions
  export default userSlice;