import { useEffect, useRef } from "react"

export function AvengerUncontrol(){

    const headref=useRef()

    const head={backgroundColor:'red'}

    const changecolor=()=>{
        headref.current.style.backgroundColor='blue'
    }

    const head1=useRef()

    useEffect(()=>{
        head1.current.focus()
    })

    return <>



    <h1 style={head} ref={headref}>Uncontrol componenet</h1>
    <button type="button" onClick={changecolor}>Change color</button>
    Fname : <input type="text" ></input>
    lname : <input type="text" ref={head1}></input></>
   
}