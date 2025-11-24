import { configureStore } from "@reduxjs/toolkit";
import  countSlice  from "./features/counter/countSlice";

export default configureStore({
    reducer :{
        count : countSlice
    }
})