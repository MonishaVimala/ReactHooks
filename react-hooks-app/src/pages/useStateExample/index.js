// import React from 'react'
import {useState } from 'react'



function useStateExample({title}) {
    const [state, setState] = useState(0);
    

    return (
        <>
        <h1>{title}</h1>
        <div>
            {state}
        </div>
        <button onClick = {()=>setState(state + 1)}> Increment </button>
        {/* <button onClick = { (e) => inc(e)}> Increment </button> */}
        <button onClick = {()=>setState(state - 1)}> Decrement </button>
        </>
    )
}

export default useStateExample
