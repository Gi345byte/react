import { Child1 } from "./c1";
import { Powercontext } from "./powercontext";

export function Main(){

  const powervalue=1000
  const city='Mumbai'

  return <>
  <Powercontext value={{powervalue,city}}>
    <Child1/>
  </Powercontext>
  </>
  

}