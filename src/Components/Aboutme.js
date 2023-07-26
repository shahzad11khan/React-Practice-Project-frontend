import React from 'react'
import './Aboutme.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UncontrolledExample from './Carousel ';
import BasicExample from './Card'
import Skil from './Skill';
import Edu from './Education'
import Cours from './Courses';

//  <Container fluid>
const About = () => {
    return (
        <>
            <Container >
                <Row className=''>
                    {/* this slider */}
                    <Col><UncontrolledExample /></Col>
                </Row>
                <Row>
                    {/* this big card from there pass props*/}
                    <Col><BasicExample title="Shahzad Khan" /></Col>
                    <Col>
                        <Row>
                            <Skil/>
                        </Row>
                        <br></br>
                        <Row>
                            <Edu />
                        </Row>
                        <br></br>
                        <Row>
                            <Cours />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default About;