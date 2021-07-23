import CartWidget from "./CartWidget";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const NavBar = () =>
    <Navbar bg="dark" variant="dark">
        <Container>
            <CartWidget/>
            
            <Nav className="me-auto">
                <Nav.Link href="#CPU">CPU</Nav.Link>
                <Nav.Link href="#RAM">RAM</Nav.Link>
                <Nav.Link href="#Almacenamiento">Almacenamiento</Nav.Link>
                <Nav.Link href="#Notebook">Notebook</Nav.Link>
            </Nav>
        </Container>
    </Navbar>

export default NavBar