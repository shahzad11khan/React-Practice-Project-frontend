import React, { useState } from 'react'

const MeterToCentimeter = () => {
  
  const [result,setresult]=useState();
  const [centi,setresultinch]=useState();



  const meter =(e)=>{
    let revalue=e.target.value;
    setresult(revalue * 100);
  }

  const centimeter = (e) =>{
    let meter=e.target.value;
    setresultinch(meter / 100);
  }


  return (
    <div>
      <br></br>
      <h5>Converter | Metter To Centimeter</h5>
      <input type='number' id='meter' value={centi}  onChange={meter} placeholder='Enter Meter'/> 
      <input type='number' id='centimeter' value={result} onChange={centimeter} placeholder='Enter Centimeter'/>
      <br></br>
      <br></br>
    
    </div>
  )
}

export default MeterToCentimeter
