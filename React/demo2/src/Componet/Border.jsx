import React from 'react'

function Border() {
  return (
    <div>
      <h1 className='text-3xl border-2 border-red-400'>Hello this border data</h1>
      <h1 className='text-3xl border-4 border-green-500 rounded-3xl'>Hello this border data</h1>
      <h1 className='text-3xl border-4 border-dashed'>Hello this border data</h1>
      <h1 className='text-3xl border-4 border-dotted '>Hello this border data</h1>

    <h1 className='outline outline-fuchsia-600 text-4xl'>Hello this outline</h1>
     <h1 className='outline-2 text-4xl'>Hello this outline</h1>
      <h1 className='outline-4  text-4xl'>Hello this outline</h1>
       <h1 className='outline text-4xl'>Hello this outline</h1>
    </div>
  )
}

export default Border
