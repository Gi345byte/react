import { useCounter } from "./customhooks";

export function AvengerCounter(){
    let cou=useCounter()
    let cou1=useCounter()

    return <>
    <h1>power :{cou.power}</h1>
    <button type="button" onClick={cou.increase}>Start</button>


    <h1>power2:{cou1.power}</h1>
    <button type="button" onClick={cou1.increase}>Press</button>
    </>
}