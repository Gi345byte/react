import { useState } from "react";

export function Update(){

    const[count,setCount]=useState(0)

    const inc=()=>{
        setCount(count+1)
    }

    const dec=()=>{
        setCount(count-1)
    }

    const reset=()=>{
        setCount(0)
    }

    return (
        <>
        <h1>Counter App</h1>
        <input type="number" value={count} id="input"/>
        <button type="button" onClick={inc}>inc</button>
        <button type="button" onClick={dec}>dec</button>
        <button type="button" onClick={reset}>reset</button>
</>
    )
}