import { User } from "./userand";
import { Welcome } from "./welcome";

export function Fianl(props){
  const register=false
  if(register) {
    return <Welcome admin={false}/>
  }
  else{
    return <User/>
  }
}