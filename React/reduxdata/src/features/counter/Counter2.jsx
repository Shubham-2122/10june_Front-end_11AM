import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement } from './countSlice'

function Counter2() {
  
    const dispatch =  useDispatch()

    return (
    <div>
      <h1>Hello counter</h1>

      <button onClick={()=>dispatch(decrement())}>Decrement by</button>
    </div>
  )
}

export default Counter2
