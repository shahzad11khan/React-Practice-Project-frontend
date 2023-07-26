import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from './shahzad.jpeg'
import './hover.css'

// use props
function BasicExample(props) {
    return (
        <Card style={{ width: '' }}>
            <Card.Img variant="top" src={logo} rounded />
            <Card.Body>
                <Card.Text>
                    {/* props is use here */}
                <Card.Title style={{height:15}}>{props.title}</Card.Title>
                    A Young and Enthusiast Computer Science Graduated soul who has expertise in C, C++, C# and an array of Computer Science Technologies including Data base etc. Beside this I am capable in data base programing, web development, desktop application development and a working experience with people from diverse background, self-supported, motivated and bright mind.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default BasicExample;