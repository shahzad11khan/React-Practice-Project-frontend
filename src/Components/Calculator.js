import React, { useState } from 'react'

const Calculator = () => {
  const [result,setResult]=useState("");
const clickbutton =(event)=>{
  // e.priventDefault();
  // console.log(parseInt(event.target.value));
  // + - all arithmatic operation is not a number so that why we will not convert string into number
  setResult(result.concat(event.target.value));
//  console.log("hi");

}
const equal =()=>{
// alert("this is equal")
setResult(eval(result));
}

const clearbtn = () =>{
let hi=document.getElementById('clr').innerHTML="";
setResult(hi);
}

  return (
    <div>
      <h5>Calculator</h5>
    <input type='text' value={result} id='clr' /><br></br><br></br>
    <button value='1'onClick={clickbutton}>1</button>
    <button value='2'onClick={clickbutton}>2</button>
    <button value='+'onClick={clickbutton}>+</button>
    <button value='=' onClick={equal}>=</button><br></br>
    <button value='3'onClick={clickbutton}>3</button>
    <button value='4'onClick={clickbutton}>4</button>
    <button value='5'onClick={clickbutton}>5</button>
    <button value='-' onClick={clickbutton}>-</button>
    <button  onClick={clearbtn}>C</button>
    <br></br><br></br>
  

    </div>
  )
}

export default Calculator

