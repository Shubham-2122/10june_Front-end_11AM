import React, { useContext } from 'react'
import { data } from './ChildA'

function ChildB() {

    const {name} = useContext(data)

  return (
    <div>
      <h1>hello Child B compo</h1>
      <button>Setname</button>
      
    </div>
  )
}

export default ChildB
