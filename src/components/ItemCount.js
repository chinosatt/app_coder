import {useState} from "react"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const ItemCount = ({stock,initial,id}) => {

    const [contador, setContador] = useState(initial)

    const sumarContador = () => {
        if(contador < stock)
            setContador(contador + 1)
    }

    const restarContador = () => {
        if(contador > initial)
            setContador(contador - 1)
    }

    const addCart = () => {
        console.log(contador)
        console.log(id)
    }

    return (
        <Container fluid>
            <Row xs="auto">
                <Col><Button onClick={restarContador}>-</Button ></Col>
                <Col>{contador}</Col>
                <Col><Button onClick={sumarContador}>+</Button ></Col>
            </Row>
            <Row xs="auto" className='mt-2'>
                <Col><Button onClick={addCart}>Agregar al carrito</Button ></Col>
            </Row>
        </Container>
    )
}

export default ItemCount