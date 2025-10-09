import React from 'react'

function D({name,setname}) {
  return (
    <div>
      <h1>Hello D componenet</h1>

      <h1>Hello D : {name}</h1>
      <button onClick={()=>setname("vraj patel")}>Change name</button>
    </div>
  )
}

export default D
