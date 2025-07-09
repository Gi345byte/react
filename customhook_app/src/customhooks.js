import { useState } from "react";

export function useCounter(){
    const[power,setPower]=useState(100)
    

    const increase=()=>{
        setPower(power+1)
    }

    return{power,increase}

}