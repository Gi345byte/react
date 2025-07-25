import { useState } from "react";

export function MyComponent(){
    const[name,setName]=useState("bye");
    const[age,setAge]=useState(0);
    const[istoggle,setToggle]=useState(false);



    const handle=()=>{
        setName("hello")
    }

    const inc=()=>{
        setAge(age+1)
    }

    const toggle=()=>{
        setToggle(!istoggle)
    }

    return (<div>
        <p>Name : {name}</p>
        <button type="button" onClick={handle}>set name</button>


        <p>Age : {age}</p>
        <button type="button" onClick={inc}>set name</button>

        <p>toggler : {istoggle?'yes':'no'}</p>
        <button type="button" onClick={toggle}>toggle</button>
    </div>)

}