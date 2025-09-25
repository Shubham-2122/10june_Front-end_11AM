import React from 'react'
import "./style.css"

function Css() {

    let csselement = {
        background : "blue",
        color : "white"
    }

    return (
        <div>

            {/* 1) inline css  */}
            {/* 2) internal css / inline not use  */}
            {/* 3) external css  */}

            {/*1 inline css style atribute object */}
            <h1 style={{ background: "red", color: "white" }}>Hello this inline css</h1>


            {/* 2) internal css */}
            <h1 style={csselement}>Hello this internal css</h1>
            
            <h1 className='h1'>hello this Enxternal css</h1>

        </div>
    )
}

export default Css
