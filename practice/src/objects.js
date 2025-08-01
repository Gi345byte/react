import { useState } from "react";


export function Obj(){
    const[car,setCar]=useState({year:2024,
        model:'ford',manf:'mustange'
    })

    const yearChange=(e)=>{
        setCar({...car,year:e.target.value})
    }

    const modelChange=(e)=>{
        setCar({...car,model:e.target.value})
    }

    const manfChange=(e)=>{
        setCar({...car,manf:e.target.value})
    }
    
    
    return(<>
    <div>
        <p>THis a site : {car.year} {car.model} {car.manf}</p>
    <input type="number" value={car.year} onChange={yearChange}/>
    <input type="text" value={car.model} onChange={modelChange}/>
    <input type="text" value={car.manf} onChange={manfChange}/>
    </div></>)





}

