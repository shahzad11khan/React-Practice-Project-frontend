import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate,Link} from 'react-router-dom'
const SignUp = () => {
// 

const [values, setvalues] = useState({
  username: '',
  email: '',
  password: '',
  phone: ''

});

const navigate=useNavigate();

const handlerSubmit = (event) => {
  event.preventDefault();
  axios.post('http://localhost:8001/signup', values)
  .then(res =>//navigate("/home"))//console.log(res))
   {
    if(res.data.Status === "Success"){
      navigate("/")

    }else{
      alert("No Record found....")
    }
  })
   
  .catch(err => console.log(err));
  // fetch('http://localhost:8001/login').then(res => console.log(res)).then(err => console.log(err));
}
// 

  return (
    <div>
      <form onSubmit={handlerSubmit}>
      <br></br>
      <div style={{ height: '100px', width: '100px', marginLeft: 'auto', marginRight: 'auto' }} id='notifi'></div>
      <h5>SignUp Page</h5><br></br>
      <input type='text' id='user' onChange={e => setvalues({ ...values, username: e.target.value })} placeholder='Enter UserName' required /><br></br><br></br>
      <input type='email' id='email' onChange={e => setvalues({ ...values, email: e.target.value })} placeholder='Enter Email' required /><br></br><br></br>
      <input type='password' id='pass' onChange={e => setvalues({ ...values, password: e.target.value })} placeholder='Enter Password' required /><br></br><br></br>
      <input type='number' id='phone' onChange={e => setvalues({ ...values, phone: e.target.value })} placeholder='Enter Phone' required /><br></br><br></br>
      <button>SignUp</button>
      <Link to='/' className='rem' style={{color:'black'}}>Login</Link>
      <br></br><br></br>
      </form>
    </div>
  )
}

export default SignUp
