import { useState } from "react";

export function Come(){
    const[name,setName]=useState("Guest")
    const[number,setNumber]=useState(0)

    const Named=(e)=>{
        setName(e.target.value)
    }

    const Num=(e)=>{
        setNumber(e.target.value)
    }
    return(<>
    <input type="text" onChange={Named} value={name}/>
    <p >name : {name}</p>
    
    <input type="number" value={number} onChange={Num}/>
    
    </>)
}