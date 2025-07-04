import React, { Component } from 'react'


export class AvengerState extends Component{
    state={
        name:'steve Rogers'
    }

    changeState=()=>{
        this.setState({'name' :'tony stark'})
    }

    render(){
        return <> <h1>i am {this.state.name}</h1>
        <button type='button' onClick={this.changeState}>Change name</button>
        </>
    }
}