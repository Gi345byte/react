import { Component } from "react";

export function First(){
  return <h1>Hello World ! from function</h1>
}


export class SecondClass extends Component{
  render(){
    return <h1>Hello World ! calling from class</h1>
  }
}