import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddTodo } from './todoSlice'

function AddData() {

    const [name,setname] = useState("")

    const dispatch =  useDispatch()

    const getdata=(e)=>{
        e.preventDefault()
        dispatch(AddTodo(name))
        setname("")
    }


  return (
    <div>
       <form action="">
            <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder='Enter Your Name'/>
            <input type="submit" onClick={getdata} />
        </form>
    </div>
  )
}

export default AddData
