import React, { createContext, useState } from 'react'
import ChildD from './ChildD'
import ChildB from './ChildB'
import ChildC from './ChildC'

export const data = createContext()

function ChildA() {

    const [name,setname] = useState("Sujal")

    const [form,setform] = useState({
        count : 0
    })

  return (
    <div>
      <h1>hello Child A compo</h1>

      <data.Provider value={{name,setname,form,setform}}>
        <ChildB />
        <ChildC />
        <ChildD />
      </data.Provider>
    </div>
  )
}

export default ChildA
