import ReactDOM from 'react-dom/client'
import React from 'react'
// import { MyComponent } from "./usestate";
// import { Counter } from './counter'
// import { Come } from './onchange'
// import { App } from './App'
// import { Update } from './updtefuncorcounter'
// import { Obj } from './objects'
import { MyComponent } from './arrayupdate'

const container=document.getElementById('root')
const root=ReactDOM.createRoot(container)
root.render(<MyComponent/>)