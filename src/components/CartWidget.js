import Navbar from 'react-bootstrap/Navbar'

const CartWidget = () =>
    <Navbar.Brand href="#home">
        <img
            src="/image/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Tienda Sattler"
        />
    </Navbar.Brand>
    
export default CartWidget

