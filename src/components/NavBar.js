import CartWidget from "./CartWidget";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const NavBar = () =>
    <Navbar bg="dark" variant="dark">
        <Container>
            <CartWidget/>
            <Nav className="me-auto">
                <Nav.Link href="#Perifiericos">Periféricos</Nav.Link>
                <Nav.Link href="#Ordenadores">Ordenadores</Nav.Link>
                <Nav.Link href="#Componentes">Componentes PC</Nav.Link>
                <Nav.Link href="#Gaming">Gaming</Nav.Link>
            </Nav>
        </Container>
    </Navbar>

export default NavBar