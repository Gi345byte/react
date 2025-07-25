import { useState } from "react";
import "./colorpicker.css"

export function ColorPicker(){
    const[color,setColor]=useState("#ffffff");

    const handle=(e)=>{
        setColor(e.target.value)
    }


    return(
        <>
        <div className="container">
            <h1>Select color</h1>
            <div className="color-display" style={{backgroundColor:color}}>
                <p>selected color :{color}</p>
            </div>
            <label>Select a color :</label>
            <input type="color" value={color} onChange={handle}/>

            </div></>
    )

}