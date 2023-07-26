import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  var [bgcolor, setbackground] = useState();

  const Change = () => {
    var a = document.getElementById('btn').innerHTML;
    var b = document.querySelector('body');
    
    if (a == 'Dark') {
      bgcolor = "black";
      var coo = b.style.backgroundColor = bgcolor;
      b.style.color='white'
      document.getElementById('btn').innerHTML = 'White';
      setbackground(coo);

    }
    else if (a == 'White') {
      bgcolor = "white";
      var oo = b.style.backgroundColor = bgcolor;
      b.style.color='black'
      document.getElementById('btn').innerHTML = 'Dark';
      setbackground(oo);
    }
  }

  return (
    <div className='bg-gray rem'>
      <Link to='#' className='mr'>Starting Project</Link>
      <Link to='/home' className='rem co pd1'>Home</Link>
      <Link to='/contect' className='rem pd1'>Contact</Link>
      <Link to='/about' className='rem'>AboutMe</Link>
      <Link to='/calculator' className='rem'>Calculator</Link>
      <Link to='/converter' className='rem'>MeterToCentimeter</Link>
      <Link to='/feettoinches' className='rem'>FeetToInches</Link>
{/* 
      */}
      

      <Link to='#' className='ml' id='btn' style={{textDecoration:'none',color:'wheat'}} onClick={Change}>Dark</Link>


    </div>

  )
}

export default Navbar
