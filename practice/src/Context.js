import { useContext } from "react";
import { useState } from "react";
import React from 'react'

import React,{ createContext } from "react";
import { Con1 } from "./c1";

export const UserContext=React.createContext();

export function Context(){
    const[user,setUser]=useState('bro code')

    return (<>
    <h1>hello : {user}</h1>
    <UserContext.Provider value={user}>
        <Con1 user={user}/></UserContext.Provider></>)
}