import { useState } from "react"
import "./new.css"


export function Counter(){

    const [count,setCount]=useState(0)

    const inc=()=>{
        setCount(count+1)
    }
    const res=()=>{
        setCount(0)
    }
    const dec=()=>{
        setCount(count-1)
    }
    return <>
    <div className="main">
        <h1 id="head">Counter</h1>
    </div>
    
    <div className="operation">
        <h2 className="count">{count}</h2> 
        <button type="button" onClick={inc}>Increase</button>
        <button type="button" onClick={dec}>Decrease</button>
        <button type="button" onClick={res}>Reset</button>
    </div>
    </>
}