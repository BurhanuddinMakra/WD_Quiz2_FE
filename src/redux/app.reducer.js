import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    data: {},
    faq: []
};

const appSlice = createSlice({
    name: "app",
    initialState ,
    reducers: {
    setData: (state, action)=> {
        state.data = action.payload;
        }
    },

    setFaq: (state, action)=> {
        state.faq = action.payload;
    }

  })
  
  export const { setData, setFaq } = appSlice.actions
  export default appSlice;