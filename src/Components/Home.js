import React from 'react'
import Desert from './DesertsList'
import UseReg from './UseReg'
import Navbar from './Navbar'
import Footer from './Footer';

const Home = () => {
  const data=[
    {
      name:'gravey',
      calories: 503
    },
    {
      name:'pules',
      calories: 303
    },
    {
      name:'burger',
      calories: 300
    },
    {
      name:'fish',
      calories: 400
    },
    {
      name:'rice',
      calories: 500
    },
    {
      name:'chicken',
      calories: 505
    }

  ]
  return (
    <>
     {/* this is home page */}
    {/* <Navbar/> */}

     <h5 style={{marginTop:'10px'}}>Passing Data From One Component To Another Component</h5>
     <br></br>
     <Desert desert={data}/>
     <UseReg/>
{/* <Footer/> */}

    </>
  )
}

export default Home
