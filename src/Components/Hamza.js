import React, { useState } from 'react'
import './Hamza.css'

const Hamza =()=>{
    // hooks destructuring
    const [metter,setMetter]=useState();

// arrow function
// destruction
// const 
// hooks
// event

    const handler =(event)=>{
        let val=event.target.value;
        setMetter(val*100);
        // alert(event.target.value);
        // console.log(event.target.value)

    }
    // const change =()=>{
    //     alert("funtion called...")
    // }
    return(
        <div id='h'>
           <input id='' onChange={handler} placeholder='enter metter'/>
           <br></br>
           <input id='' value={metter}  placeholder='enter centimeter'/>
           <br></br>
        <button >M To C</button>
        </div>
    );

}
export default Hamza;