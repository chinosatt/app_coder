import { useState, useContext } from "react"
import {Link} from "react-router-dom" 

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'

import ItemCount from "./ItemCount"
import {contexto} from './CartContext'


const ItemDetail = ({producto}) => {
    
    const CartContext = useContext(contexto)

    const [terminarCompra, setTerminarCompra] = useState(false)

    const onAdd = (contador) => {
        const item = {
            item: producto,
            quantity: contador
        }
        CartContext.addItem(item)
        setTerminarCompra(true)
    }

    return(
        <Row>
            <Col xs={6}>
                <Image src={producto.pictureUrl} rounded fluid />
            </Col>
            <Col xs={6}>
                <h2>{producto.title}</h2>
                <h3>$ {producto.price}</h3>
            </Col>
            {terminarCompra ? (
                <Row xs="auto" className='mt-2'>
                    <Col><Nav.Link as={Link} to="/cart">Terminar Compra</Nav.Link></Col>
                </Row>
            ) : (
                <ItemCount stock={producto.stock} initial={producto.stock >= 1 ? 1 : 0} onAdd={onAdd} />
            )}
        </Row>
    )
}
        
export default ItemDetail