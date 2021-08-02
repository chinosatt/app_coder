import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

const ItemDetail = ({producto}) => {
    
    return(
        <Row>
            <Col xs={6}>
                <Image src={producto.image} rounded fluid />
            </Col>
            <Col xs={6}>
                <h2>{producto.title}</h2>
                <h3>$ {producto.price}</h3>
                <p>{producto.description}</p>
            </Col>
        </Row>
    )
}
        
export default ItemDetail