import React from 'react'
import A from './driling/A'
import ChildA from './useContext/ChildA'

function MainContext() {
    return (
        <div>
            <h1>hello this context data</h1>
            {/* proper driling */}
            {/* <A /> */}

            {/* usecontext */}
            {/* 1) create context 
            2) context data provide 
            3) useContext :- data use  */}
            <ChildA />
        </div>
    )
}

export default MainContext
