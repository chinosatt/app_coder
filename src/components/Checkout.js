import { useState } from "react"

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

const Checkout = ({checkoutCart}) => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [validated, setValidated] = useState(false);
    const guardarNombre = (e) => {
        setName(e.target.value)
    }
    const guardarTelefono = (e) => {
        setPhone(e.target.value)
    }
    const guardarMail = (e) => {
        setEmail(e.target.value)
    }
    const realizarPedido = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() !== false) {
            const buyer = {name,phone,email}
            checkoutCart(buyer)
        }
        setValidated(true);
    }

    return(
        <Form noValidate validated={validated} onSubmit={realizarPedido}>
            <Row className="mb-3">
                <Form.Group md="4">
                    <Form.Control required type="text" placeholder="Nombre" onChange={guardarNombre} />
                    <Form.Control.Feedback type="invalid">El nombre es requerido.</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group md="4">
                    <Form.Control required type="text" placeholder="Teléfono" onChange={guardarTelefono} />
                    <Form.Control.Feedback type="invalid">El teléfono es requerido.</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group md="4">
                    <Form.Control required type="text" placeholder="E-Mail" onChange={guardarMail} />
                    <Form.Control.Feedback type="invalid">El e-mail es requerido.</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Button variant="primary" type="submit">Confirmar Pedido</Button>
        </Form>
    )
}

export default Checkout