import React from 'react'
import './hover.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// staring useState 
import { useState } from 'react';

const Contect = () => {
  // destructuring 
  const [newFirstName, SetNewFirstName] = useState();
  const [newLasttName, SetNewLastName] = useState();
  const [newPhone, SetNewPhone] = useState();
  const [newEmail, SetNewEmail] = useState();
  const [newCommant, SetNewComment] = useState();
// if you use this so you make another function name other wise you use disructure function name
  // this is onchange functions name
  // const EnterFirstName = (e)=>{
  //   SetNewFirstName(e.target.value);
  //   // console.log(e.target.value);
  // }
  // const EnterLastName = (e)=>{
  //   SetNewLastName(e.target.value);
  // }

  // const EnterPhone = (e) => {
  //   SetNewPhone(e.target.value);
  // }
  // const EnterEmail = (e) => {
  //   SetNewEmail(e.target.value);
  // }
  // const EnterComment = (e) => {
  //   SetNewComment(e.target.value);
  // }

  const showdate = (event) => {
    event.preventDefault();
    // this is object 
    // const show={
    //   fn:newFirstName,
    //   ln:newLasttName,
    //   pn:newPhone,
    //   em:newEmail,
    //   cm:newCommant
    // }
    // this is normal variable
    let fn = newFirstName;
    let ln = newLasttName;
    let pn = newPhone;
    let em = newEmail;
    let cm = newCommant;
    alert('firstname: ' + fn + " lastname:" + ln + " Phone: " + pn + " Email: " + em + " Comment: " +cm);
    // console.log(show);
    SetNewFirstName('');
    SetNewLastName('');
    SetNewPhone('');
    SetNewEmail('');
    SetNewComment('');

  }

  return (
    <>
      <Container fluid style={{ width: '60%' }}>
               {/* bootstrap form */}
        <form >
          <Row className='decoration' style={{ textAlign: 'left' }}>
            <Col style={{ fontSize: '30px', fontWeight: 'bold' }}>
              Contact Form
            </Col>
          </Row>
          <Row className='decoration'>
            <Col>
              <FloatingLabel controlId="floatingInput" label="First Name">
                <Form.Control type="text" xs={12} md={8} placeholder="First Name" name='newFirstName' value={newFirstName} onChange={(e) => { SetNewFirstName(e.target.value); }} />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel controlId="floatingInput" label="Last Name">
                <Form.Control type="text" xs={6} md={4} placeholder="Last Name" name='newLasttName' value={newLasttName} onChange={(e) => { SetNewLastName(e.target.value); }} />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className='decoration'>
            <Col>
              <FloatingLabel controlId="floatingInput" label="Phone">
                <Form.Control type="number" placeholder="Phone" name='newPhone' value={newPhone} onChange={(e) => { SetNewPhone(e.target.value); }} />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel controlId="floatingInput" label="Email">
                <Form.Control type="email" placeholder="Email" name='newEmail' value={newEmail} onChange={(e) => { SetNewEmail(e.target.value); }} />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className='decoration'>
            <Col>
              <FloatingLabel controlId="floatingInput" label="Comment">
                <Form.Control type="text" placeholder="Comment" name='newCommant' value={newCommant} onChange={(e) => { SetNewComment(e.target.value); }} />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className='decoration' style={{ textAlign: 'left' }}>
            <Col>
              <Button variant="primary" onClick={showdate}>Submit</Button>
            </Col>
          </Row>
        </form>
      </Container>
    </>
  )
}

export default Contect
