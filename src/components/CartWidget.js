import { IconContext } from "react-icons";
import { BiCart } from "react-icons/bi";
import Badge from 'react-bootstrap/Badge'
import Nav from 'react-bootstrap/Nav'
import {Link} from "react-router-dom" 

// Badge con carrito

const CartWidget = () =>
 
    <Nav.Link as={Link} to="/cart">
        <IconContext.Provider value={{ color: "#0d6efd", size: "40" }}>
            <BiCart />
        </IconContext.Provider>
        <Badge pill bg="danger">1</Badge>
    </Nav.Link>

export default CartWidget

