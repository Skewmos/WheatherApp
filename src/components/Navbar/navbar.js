import "bootswatch/dist/litera/bootstrap.min.css";
import {Navbar, Nav,  Form, Button, FormControl} from 'react-bootstrap';
import {FaSearch} from 'react-icons/fa';


const NAVBAR = () => {
 return(
    <>
    <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">WeatherApp</Navbar.Brand>
        <Nav className="mr-auto ml-auto">
        <Form inline>
        <FormControl type="text" placeholder="Rechercher une ville..." className="mr-sm-2" />
        <Button variant="ligth"><FaSearch size={15}></FaSearch></Button>
        </Form>
        </Nav>
    </Navbar>
</>
 );
};

export default NAVBAR;
