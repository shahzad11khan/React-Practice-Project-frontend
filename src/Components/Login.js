import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate,Link} from 'react-router-dom'


const Login = () => {

  const [values, setvalues] = useState({
    email: '',
    password: ''
  });
  const [msg,setMsg]=useState();

  const navigate=useNavigate();

  const handlerSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8001/login', values)
    .then(res => //navigate("/home"))//console.log(res))
     {
      if(res.data.Status === "Success"){
        setMsg("Logged In Successfully...");
    setTimeout(() => {
      setMsg("");
      navigate("/home")
    }, 1500);
      }else{
        alert("No Record found....")
      }
    })
     
    .catch(err => console.log(err));
    // fetch('http://localhost:8001/login').then(res => console.log(res)).then(err => console.log(err));
  }

  return (
    <div>
      <br></br>
      <form  onSubmit={handlerSubmit}>
        <div style={{ height: '100px', width: '100px', marginLeft: 'auto', marginRight: 'auto' }} id='notifi'></div>
        <h5>LogIn Page</h5><br></br>
        <input type='email' name='email'  id='user' onChange={e => setvalues({ ...values, email: e.target.value })} placeholder='Enter UserName'  /><br></br><br></br>
        <input type='password' id='pass'  name='password' onChange={e => setvalues({ ...values, password: e.target.value })} placeholder='Enter Password'  /><br></br><br></br>
        <h3>{msg}</h3>
        <button>Login</button>
        <Link to='/signup' className='rem' style={{color:'black'}}>SignUp</Link>
        <br></br><br></br>
      </form>
    </div>
  )
}

export default Login
