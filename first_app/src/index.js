import React from "react";
import { First,SecondClass } from "./App";
import ReactDom from "react-dom/client";

let container=document.getElementById('root');
let root = ReactDom.createRoot(container);

root.render(<><First/>
             <SecondClass/>
    </>

)