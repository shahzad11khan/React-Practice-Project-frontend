import React from 'react'
import './App.css';
import Home from './Components/Home'
import Contect from './Components/Contect'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import About from './Components/Aboutme';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Calculator from './Components/Calculator';
import MeterToCentimeter from './Components/MeterToCentimeter';
import FeetToInches from './Components/FeetToInches';
import Hamza from './Components/Hamza';
import {Route,Routes} from 'react-router-dom'
import 'tachyons'

function App() {
  const name="shahzad khan"
  return (
    <div className="App">
      {/* <Hamza/> */}

      <Navbar/>

    <Routes>
      <Route path='/home' element={<Home nam={name}/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contect' element={<Contect/>}></Route>
      <Route path='/calculator' element={<Calculator/>}></Route>
      <Route path='/converter' element={<MeterToCentimeter/>}></Route>
      <Route path='/feettoinches' element={<FeetToInches/>}></Route>


      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>

    </Routes>
<Footer/>
    
    </div>
  );
}

export default App;
