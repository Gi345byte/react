import { useState } from "react";

export function Avengercontrol(){
    const[name,setName]=useState('')
    const[lname,setlName]=useState('')

    const fname=()=>{
        console.log(e.target.value)
        setName(e.target.value)
    }

    const Lname=(e)=>{
        console.log(e.target.value)   // we can givee deafult size of input , make upper case
        setlName(e.target.value.toUpperCase()) // substr(o,o) from to ,,, toUppercase() for upper case value in text input
    }

    const handle=(e)=>{
        e.preventDefault() // here the preventDefault is use bcz the browser atleast print one time the form submitted
        console.log("form submitted")

    }
    return <>
    <h1>calling from form</h1>
    <form onSubmit={handle}>
        Name : <input type="text" value={name} onChange={fname}></input>
        lname : <input type="text" value={lname} onChange={Lname}></input>
        <input type="submit"/>
        
    </form>
    </>
}