import { Powercontext } from "./powercontext"
import { useContext } from "react"

export function Child3(){
    const {powervalue,city}= useContext(Powercontext)
    return <><h1>child3</h1>
    <h1>hwllo : {powervalue}</h1>
    <h1>HELLLLLL:{city}</h1>
    
    </>
}