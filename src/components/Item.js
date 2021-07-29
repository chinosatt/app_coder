import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ItemCount from "./ItemCount";

const Item = ({id,title,price,pictureUrl}) => {

    const onAdd = () => {}

    return (
        <Col className='mt-3'>
            <Card>
                <Card.Link href={"#" + id}>
                    <Card.Img variant="top" src={pictureUrl} />
                </Card.Link>
                <Card.Body>
                    <Card.Link href={"#" + id}>
                        <Card.Title>{title}</Card.Title>
                    </Card.Link>
                    <Card.Subtitle className="mb-2 text-muted">$ {price}</Card.Subtitle>
                    <ItemCount stock={5} initial={1} id={id} onAdd={onAdd} />
                </Card.Body>
            </Card>
        </Col>
    )
    
}
        
export default Item