import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// read 
export const proRead = createAsyncThunk(
    'proRead', async (data, { rejectWithValue }) => {
        try {
            const res = await axios.get("http://localhost:3000/product")
            const resp = await res.data
            return resp
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
// product created
export const procreate = createAsyncThunk(
    'procreate', async (data, { rejectWithValue }) => {
        try {
            const res = await axios.post("http://localhost:3000/product", data)
            const resp = await res.data
            return resp
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const prodelete = createAsyncThunk(
    'prodelete', async (id, { rejectWithValue }) => {
        try {
            const res = await axios.delete(`http://localhost:3000/product/${id}`)
            const resp = await res.data
            return resp
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const productSlice = createSlice({
    name: "userDetails",
    initialState: {
        loading: true,
        products: [],
        error: ""
    },
    reducers: {
        Propending: (state, action) => {
            state.loading = true
        },
        Profullfield: (state, action) => {
            state.loading = false
            state.products.push(action.payload)
        },
        Proreject: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            // read
            .addCase(proRead.pending, (state, action) => {
                state.loading = true
            })
            .addCase(proRead.fulfilled, (state, action) => {
                state.loading = false
                state.products = action.payload
            })
            .addCase(proRead.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload

            })
            .addCase(procreate.pending, (state, action) => {
                state.loading = true
            })
            .addCase(procreate.fulfilled, (state, action) => {
                state.loading = false
                state.products.push(action.payload)
            })
            .addCase(procreate.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase(prodelete.pending, (state, action) => {
                state.loading = true
            })
            .addCase(prodelete.fulfilled, (state, action) => {
                state.loading = false
                state.products = state.products.filter((data,index)=> index !== action.payload)
            })
            .addCase(prodelete.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export const { Propending, Profullfield, Proreject } = productSlice.actions;
export default productSlice.reducer;