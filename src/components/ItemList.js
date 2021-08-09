import Row from 'react-bootstrap/Row'
import Item from "./Item";

const ItemList = (productos) => {

    return (
        <Row xs={1} md={3} lg={4} >
            { productos.productos.map( product => (<Item id={product.id} title={product.title} price={product.price} pictureUrl={product.pictureUrl} />) ) }
        </Row>
    )

}
        
export default ItemList