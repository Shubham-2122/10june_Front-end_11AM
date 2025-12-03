import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name:"userDetails",
    initialState:{
        loading : true,
        products : [],
        error : ""
    },
    reducers :{

    }
   
})

export const {} = productSlice.actions;
export default productSlice.reducer;