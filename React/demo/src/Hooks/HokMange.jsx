import React, { useReducer } from 'react'
import Header from '../layout/coman/Header'

const initialstate = 0

function reducer(state,action){
    switch (action) {
        case 'incre':
            return state + 1;
            break;
         case 'decr':
            return state - 1;
            break;
        case 'zero':
            return state = 0;
            break;
        default:
            return initialstate
            break;
    }
}

function HokMange() {

    const [count,dispatch] = useReducer(reducer,initialstate)
    console.log(count)

    return (
        <div>
            <Header />
            <h1>Hello this Reucer data</h1>
            <h1>counter : {count}</h1>
            <button onClick={()=>dispatch('incre')}>Increment</button>
            <button onClick={()=>dispatch('decr')}>Decrement</button>
             <button onClick={()=>dispatch('zero')}>Zero</button>
        </div>
    )
}

export default HokMange
