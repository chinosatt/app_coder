import { useContext, useEffect, useState } from "react"
import {contexto} from './CartContext'

import { IconContext } from "react-icons"
import { BiCart } from "react-icons/bi"
import Badge from 'react-bootstrap/Badge'
import Nav from 'react-bootstrap/Nav'
import {Link} from "react-router-dom" 

const CartWidget = () => {

    const {cart} = useContext(contexto)

    const [contadorVacio, setContadorVacio] = useState(true)

    let countCart = 0
    cart.forEach((item) => {
        countCart = countCart + item.quantity
    })

    useEffect(() => {
        (countCart) ? setContadorVacio(false) : setContadorVacio(true)
    }, [cart])

    return(
        <Nav.Link as={Link} to="/cart">
            <IconContext.Provider value={{ color: "#0d6efd", size: "40" }}>
                <BiCart />
            </IconContext.Provider>
            {!contadorVacio ? (
                <Badge pill bg="danger">{countCart}</Badge>
            ) : (
               <div></div>
            )}
            
        </Nav.Link>
    )

}

export default CartWidget

