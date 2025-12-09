'use client'

import React, { useState } from 'react'

function page() {

    const [count,setcount] = useState(0)

  return (
    <div>
      <h1>Hello this conatct page</h1>
      <h1>count :{count}</h1>
      <button className='bg-amber-200 p-4' onClick={()=>setcount(count+1)}>increment</button>
         <button className='bg-amber-200 p-4' onClick={()=>setcount(count-1)}>decrement</button>
    </div>
  )
}

export default page
