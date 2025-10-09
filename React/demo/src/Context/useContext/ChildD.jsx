import React, { useContext } from 'react'
import { data } from './ChildA'

function ChildD() {

    const {name,setname} = useContext(data)


  return (
    <div>
      <h1>hello Child D compo</h1>

      <h1>hello name : {name}</h1>

      <button onClick={()=>setname("shubham jadav")}>Change name</button>

    </div>
  )
}

export default ChildD
