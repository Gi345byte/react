import { useState } from "react";

export function Avenger(){
    const[formname,setForm]=useState({fname:'',lname:''})

    const changename=(e)=>{
        console.log(e.target.value)
        setForm({...formname,[e.target.name]:e.target.value}) // e handles the event or stores input via target
    }
    const handle=(e)=>{
        e.preventDefault() 
        console.log("form submitted")}
 return <>
    <form onSubmit={handle}>
        Name : <input type="text" value={formname.fname} onChange={changename} name="fname"></input>
        lName : <input type="text" value={formname.lname} onChange={changename} name="lname"></input>
        <input type="submit"/>

    </form></>

}