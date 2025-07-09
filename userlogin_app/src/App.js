import { User } from "./userlogin";
import { Welcome } from "./welcome";
import { useState } from "react";

export function Total(){
    const[register,setRegister]=useState(false)

    const login=()=>{
        console.log("login")
        setRegister(true)
    }

    const logout=()=>{
        console.log("logout")
        setRegister(false)
    }

    if(register){
        return <Welcome islogout={logout}/>
    }
    else {
        return <User islogin={login}/>
    }

    
}