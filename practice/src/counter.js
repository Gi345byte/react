import { useState } from "react";


export function Counter(){
    const[count,setCount]=useState(0);
    

    const inc=()=>{
        setCount(count+1);
    }

    const dec=()=>{
        setCount(count-1)
    }

    const res=()=>{
        setCount(0)
    }

    return(
        <>
        <h1>Counter </h1>
        <input type="number" value={count}></input>
        <button type="button" onClick={inc}>increase</button>
        <button type="button" onClick={dec}>decrease</button>
        <button type="button" onClick={res}>reset</button></>
    )

}