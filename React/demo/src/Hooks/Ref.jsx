import React, { useRef } from 'react'
import Header from '../layout/coman/Header'

function Ref() {

    const refelemet = useRef()

    const getdata=()=>{
        refelemet.current.focus();
    }

    const getstyle=()=>{
        refelemet.current.style.border = "5px solid red"
    }


  return (
    <div>
      <Header />

        <div className='mt-5'>
            <input ref={refelemet} type="text" placeholder='Enter your data' />

        <button onClick={getdata}>click me</button>

        <button onClick={getstyle}>Addstyle</button>
        </div>
    </div>
  )
}

export default Ref
