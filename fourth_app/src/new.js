// import React, { Component } from 'react'

// export function Add(){
//     return <h1>Two numbers are adding from function</h1>
// }

// export function Sub(){
//     return <h1>Subtraction calling from function</h1>
// }

// export function Div(props){
//     return <h1>this from Div {props.name}</h1>
// }

// export class Mod extends Component{
//     render(){
//         return <h1>calling from modulp class</h1>
//     }
// }

import React, { Component } from "react";

export class AvengerClass extends Component {
  state = {
    name: this.props.name,
    heroic_name: this.props.heroic_name,
  };
  render() {
    return (
      <h1>
        hello this is {this.state.name} calling from class my heroic_name is
        {this.state.heroic_name}
      </h1>
    )
  }
}
