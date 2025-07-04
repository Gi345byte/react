import React, { useState } from 'react'


export function AvengerUseState(){
    const[name,setName]= useState('steve')
    const[heroic_name,setHeroicName]= useState('captain')



    const changeName=()=>{
        setName('tony stark')
        setHeroicName('Iron man')
    }

    return <>
    <h1> I am {name} and my heroic_name is {heroic_name}</h1>
    <button type='button' onClick={changeName}> change name</button></>

}