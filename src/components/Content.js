import Container from 'react-bootstrap/Container'
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";

const Content = () => {

    return (
        <Container>
            { /* <ItemListContainer greeting="Productos Destacado"/> */ }
            <ItemDetailContainer />
        </Container>
    )
    
}
        

export default Content