import Navbar from 'react-bootstrap/Navbar'
import {Link} from "react-router-dom" 

const CartWidget = () =>
    <Navbar.Brand as={Link} to="/">
        <img
            src="/image/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Tienda Sattler"
        />
    </Navbar.Brand>
    
export default CartWidget

