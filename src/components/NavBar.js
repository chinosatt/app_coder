import CartWidget from "./CartWidget";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import {NavLink} from "react-router-dom" 

const NavBar = () =>
    <Navbar bg="dark" variant="dark">
        <Container>
            <CartWidget/>
            <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/categoria/perifericos">Periféricos</Nav.Link>
                <Nav.Link as={NavLink}  to="/categoria/componentes">Componentes PC</Nav.Link>
                <Nav.Link as={NavLink}  to="/categoria/gaming">Gaming</Nav.Link>
            </Nav>
        </Container>
    </Navbar>

export default NavBar