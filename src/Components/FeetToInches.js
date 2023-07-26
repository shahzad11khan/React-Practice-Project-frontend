import React, { useState } from 'react'

const FeetToInches = () => {
  const [inch, setFeet] = useState();
  const [feet,setinches]=useState();

  const feets = (e) => {
    let feetres = e.target.value;
    setFeet(feetres * 12);
  }

  const inches =(e)=>{
 let inchres = e.target.value;
 setinches(inchres / 12);
  }

  return (
    <div>
      <br></br>
      <h5>Converter | Feet To Inches</h5>
      <input type='number' id='feets' value={feet} onChange={feets} placeholder='Enter Feet' />
      <input type='number' id='inches' value={inch} onChange={inches} placeholder='Enter Inches' />
      <br></br>
      <br></br>
    </div>
  )
}

export default FeetToInches
