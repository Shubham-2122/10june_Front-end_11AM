import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, zero } from './countSlice'

function Counter() {

    const count = useSelector((data)=>data.count.value)
    console.log(count)

    const dispatch = useDispatch()

  return (
    <div>
      <h1>hello this counter</h1>

      <h1>hello count : {count}</h1>
      
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrenent</button>
      <button onClick={()=>dispatch(zero())}>Zero</button>
    </div>
  )
}

export default Counter
