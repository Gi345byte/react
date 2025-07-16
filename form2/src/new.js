import { useState } from "react";


export function Comp(){

    const[name,setName]=useState({fname:"",lname:"",adrres:""})

    const changename=(e)=>{
        console.log(e.target.value)
        setName({...name,[e.target.name]:e.target.value})
    }

    const handle=()=>{
        console.log("form submitted")
    }

    return (

        <form onSubmit={handle}>
            Fname :<input type="text" value={name.fname} onChange={changename} name="fname"></input>
            Lname:  <input type="text" value={name.lname} onChange={changename} name="lname"></input>
             Address : <input type="text" value={name.adrres} onChange={changename} name="adrres"></input>
            <input type="submit"/>

        </form>
    )



}