import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// read
export const readdata = createAsyncThunk(
    "readdata" , async(data,{rejectWithValue})=>{
        try {
            const res = await axios.get("http://localhost:3000/user")
            const result = await res.data;
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// create
export const createuser = createAsyncThunk(
    'createuser' , async (data,{rejectWithValue})=>{
        try {
            const res = await axios.post("http://localhost:3000/user",data)
            const resp = await res.data
            return resp;
        } catch (error) {
             return rejectWithValue(error)
        }
    }
)

export const userSlice = createSlice({
    name:"userDetails",
    initialState:{
        loading : true,
        users : [],
        error : ""
    },
    reducers :{
        // pending
        Userpending:(state,action)=>{
            state.loading = true;
            state.error = ""
        },
        Userfulfield:(state,action)=>{
            state.loading = false
            state.users.push(action.payload)
        },
        Userreject:(state,action)=>{
            state.loading = false
            state.error = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(readdata.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(readdata.fulfilled,(state,action)=>{
            state.loading = false
            state.users = action.payload
        })
         .addCase(readdata.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload
        })
         .addCase(createuser.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(createuser.fulfilled,(state,action)=>{
            state.loading = false
            state.users.push(action.payload)
        })
         .addCase(createuser.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload
        })
    }
   
})

export const {Userpending,Userfulfield,Userreject} = userSlice.actions;
export default userSlice.reducer;