import { useContext, useEffect, useState } from "react"
import {contexto} from './CartContext'
import {Link} from "react-router-dom" 
import {firestore} from "../firebase"

import moment from "moment";

import Checkout from "./Checkout";

import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Image from 'react-bootstrap/Image'

const Cart = () => {

    const {cart, removeItem, clear} = useContext(contexto)

    const [carritoVacio, setCarritoVacio] = useState(true)
    const [ordenOk, setOrdenOk] = useState(false)
    const [idCompra, setIdCompra] = useState(0)

    let totalCart = 0
    cart.forEach((item) => {
        totalCart = totalCart + (item.item.price * item.quantity)
    })

    useEffect(() => {
        (cart.length) ? setCarritoVacio(false) : setCarritoVacio(true)
    }, [cart])

    const checkoutCart = (buyer) => {
        
        const items = cart.map( items => ({id:items.item.id, title:items.item.title, price:items.item.price, quantity:items.quantity}) )

        const collection = firestore.collection("ordenes")

        const query = collection.add( { items : items , 
                                        buyer, 
                                        total: totalCart, 
                                        date: moment().format("YYYY-MM-DD HH:mm") } 
                                    )                                    
        query.then((resultado)=>{
            setIdCompra(resultado.id)
            setOrdenOk(true)
            clear()
        })
    }

    return(
        <Container>
            <h2>Carrito</h2>
            { ordenOk ? 
                
                <Alert variant="success">
                    <Alert.Heading>Tu compra se procesó con éxito</Alert.Heading>
                    <p>Este es el identificador de la misma</p>
                    <hr />
                    <Alert.Heading>{idCompra}</Alert.Heading>
                </Alert>
                
            : ( carritoVacio ? 
                    <Alert variant="warning">
                        <p>Carrito Vacío</p>
                        <Alert.Link as={Link} to="/">Volver al listado</Alert.Link>
                    </Alert>
                : (
                    <div>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Producto</th>
                                    <th>Precio Unitario</th>
                                    <th>Cantidad</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(item => 
                                    <tr>
                                        <td><Button onClick={()=>removeItem(item.item.id)}>X</Button ></td>
                                        <td><Image src={item.item.pictureUrl} rounded height="50" /> {item.item.title}</td>
                                        <td>${item.item.price}</td>
                                        <td>{item.quantity}</td>
                                        <td>${item.item.price * item.quantity}</td>
                                    </tr>
                                )}
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Total</td>
                                    <td>${totalCart}</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Checkout checkoutCart={checkoutCart}/>
                    </div>
                )
            )}
        </Container>
    )
}

export default Cart