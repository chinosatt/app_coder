import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const Item = ({id,title,price,pictureUrl}) => {

    const onAdd = () => {}

    return (
        <Col className='mt-3'>
            <Card>
                <Card.Link href={"/item/" + id}>
                    <Card.Img variant="top" src={pictureUrl} />
                </Card.Link>
                <Card.Body>
                    <Card.Link href={"/item/" + id}>
                        <Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>
                    </Card.Link>
                    <Card.Title>$ {price}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    )
    
}
        
export default Item