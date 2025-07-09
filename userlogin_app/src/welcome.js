import { Component } from "react";


export function Welcome(props){
    let isadmin=true


    return <><h1>Hello calling from welcome </h1>
    

    <button type="button" onClick={props.swapnil}>logout</button>
    {isadmin && <button type="button">Delete</button>}</>
}