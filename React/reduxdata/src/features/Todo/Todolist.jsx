import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteTodo } from './todoSlice'

function Todolist() {

    const todo = useSelector((data) => data.todos.todo)
    console.log(todo)

    const dispatch = useDispatch()

    return (
        <div>
            <ul>
                {
                    todo && todo.map((data, index) => {
                        return (
                            <li key={index}>{data} <button>Edit</button> <button onClick={() => dispatch(DeleteTodo(index))}>Delete</button></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Todolist
