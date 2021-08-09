import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import ItemCount from "./ItemCount";

const ItemDetail = ({producto}) => {

    const onAdd = (contador) => {
        console.log(contador)
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
            <ItemCount stock={producto.stock} initial={producto.stock >= 1 ? 1 : 0} id={producto.id} onAdd={onAdd} />
        </Row>
    )
}
        
export default ItemDetail