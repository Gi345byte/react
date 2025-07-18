import { useRef } from "react";

export function Uncontrolled(){
    const head=useRef()

    const colors={
        color:'yellow',
        backgroundColor:'black'
    }

    const change=()=>{
        head.current.style.height='200px';
        head.current.style.width='50px'
        head.current.style.backgroundColor='blue'
    }

    // const change=()=>{         // assigning object.assign to apply multiple style in one time
    //     Object.assign(head.current.style,{  height: '200px',
    //     width: '100%',
    //     backgroundColor: 'lightblue',
    //     transition: '0.5s'});
    // }

    return <>
    <h1 ref={head} style={colors}>Uncontrolled Statement</h1>
    <button type="button" onClick={change}>Chanage color</button></>
}