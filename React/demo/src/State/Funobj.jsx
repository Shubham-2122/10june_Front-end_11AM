import React, { useState } from 'react'
import Images from './Images'

function Funobj() {

    const [data,setdata] = useState({
        name : "het patel",
        count : 0,
        isImage : true
    })

    console.log(data)

  return (
    <div>
      <h1>hello this Function State Object</h1>
      <h1>Hello name : {data.name}</h1>
      <button onClick={()=>setdata({...data,name : "varj patel"})}>Change name</button>
      <button onClick={()=>setdata({...data,name : "shubham jadav"})}>Change name 2</button>

      <h1>Hello count : {data.count}</h1>
      <button onClick={()=>setdata({...data,count : data.count + 1})}>icnrement</button>
      <button onClick={()=>setdata({...data,count : data.count - 1})}>Derement</button>
      <button onClick={()=>setdata({...data,count : 0})}>Zero</button>

        <br /> <br />

        <button onClick={()=>setdata({...data,isImage:false})}>Hide</button>

      {
        (data.isImage)?<Images /> : false
      }
    </div>
  )
}

export default Funobj
