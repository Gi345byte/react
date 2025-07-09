import ReactDOM from 'react-dom/client'

import { AvengerCounter } from './plus'
import React from 'react'

let container=document.getElementById('root')
let r=ReactDOM.createRoot(container)
r.render(<AvengerCounter/>)