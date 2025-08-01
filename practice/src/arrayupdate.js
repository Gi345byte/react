import { useState } from "react";

export function MyComponent(){
    const[foods,setFoods]=useState(['Apple','Orange','Banana']);


    const handleAdd=()=>{
        let newh=document.getElementById('new').value
        setFoods([...foods, newh])
        document.getElementById('new').value='';
    } 

    const handleRemove=(index)=>{
        setFoods(foods.filter((_,i)=>i!==index));
    }

    return(<>
    <div>
        <h2>List of foods</h2>
        <ul>
            {foods.map((food,index)=> <li key={index} onClick={handleRemove}>{food}</li>)}
            </ul>
            <input type="text" placeholder="your fruit"  id="new"/>
            <button type="button" onClick={handleAdd}>Change</button></div></>)
}
