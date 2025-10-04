//  useState :- it's simple varibale 
// state :- chnage a data in same component 
//  syntax :- hook 
// type [define,setdefine] = useState()

import React, { useState } from 'react'
import Images from './Images'

function FuncState() {

    // define,vari function ,string
    const [name, setname] = useState("jigar sir")
    const [count, setcount] = useState(0)
    const [isImage,setisIamge] = useState(true) 

    // resuse
    const chnagename = () => {
        setname("Het patel")
    }

    const Decrement = () => {
        setcount(count - 1)
    }

    return (
        <div>
            <h1>hello name {name}</h1>
            <button onClick={() => setname("shubham jadav")}>Change name</button>
            <button onClick={() => setname("manav")} >Chnage name 2</button>
            <button onClick={chnagename}>change func</button>


            <h1>Hello count : {count}</h1>
            <button onClick={() => setcount(count + 1)}>increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={() => setcount(0)}>Zero</button>

            <br /> <br />
            <button onClick={()=>setisIamge(false)}>Hide</button>
            <button onClick={()=>setisIamge(true)}>show</button>
            <button onClick={()=>setisIamge(!isImage)}>toglle</button>

            {(isImage)?<Images /> : false}

        </div>
    )
}

export default FuncState
