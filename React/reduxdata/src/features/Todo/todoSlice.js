import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo : ["harsh","sujal"]
}

export const todoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{
        AddTodo:(state,action)=>{
            state.todo.push(action.payload)
        },
        DeleteTodo:(state,action)=>{
          state.todo = state.todo.filter((data,index)=> index !== action.payload)  
        }
    }
})

export const {AddTodo,DeleteTodo} = todoSlice.actions
export default todoSlice.reducer;