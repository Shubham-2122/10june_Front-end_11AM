import React, { useContext } from 'react'
import { data } from './ChildA'

function ChildC() {

    const {form,setform} = useContext(data)

  return (
    <div>
      <h1>hello Child C compo</h1>

      <h1>hello count : {form.count}</h1>

      <button onClick={()=>setform({...form,count :form.count+1})}>incmrenet</button>
    </div>
  )
}

export default ChildC
