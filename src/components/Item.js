import { useContext } from 'react'
import contexto from '../App'
import {Link} from "react-router-dom" 

import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const Item = ({id,title,price,pictureUrl}) => {
    
    const resultado = useContext(contexto)

    console.log(resultado)

    return (
        <Col className='mt-3'>
            <Card>
                <Card.Link as={Link} to={"/item/" + id}>
                    <Card.Img variant="top" src={pictureUrl} />
                </Card.Link>
                <Card.Body>
                    <Card.Link as={Link} to={"/item/" + id}>
                        <Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>
                    </Card.Link>
                    <Card.Title>$ {price}</Card.Title>
                </Card.Body>
            </Card>

            {/* <button onClick={resultado.cambiarNombre}>Cambiar Nombre</button> */}

        </Col>
    )
    
}
        
export default Item