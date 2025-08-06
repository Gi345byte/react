import { useContext } from "react"
import { UserContext } from "./Context"

export function Con3(){
    const user=useContext(UserContext)
    return(<><h1>Hello</h1>
    <h2>hello : {user}</h2></>)
}