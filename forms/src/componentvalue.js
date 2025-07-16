import { useRef } from "react";

export function Value(){
    const head2=useRef()

    const Changename=()=>{
        head2.current.value='Swapnil`'
    }

    const Getname=()=>{
        alert(head2.current.value)
    }

    return <>
    <h1>hello</h1>
    fanem : <input type="text" ref={head2}></input>
    lanem : <input type="text"></input>
    <button type="button" onClick={Changename}>SetNAme</button>
    <button type="button" onClick={Getname}>GetName</button></>
}