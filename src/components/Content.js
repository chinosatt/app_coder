import {Route, Switch} from "react-router-dom"

import Container from 'react-bootstrap/Container'
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Cart from "./Cart";

const Content = () => {

    return (
        <Container>
            <Switch>
                <Route path="/item/:id" component={ItemDetailContainer} />
                <Route path="/categoria/:cat" component={ItemListContainer} />
                <Route path="/cart" component={Cart} />
                <Route path="/" component={ItemListContainer} exact />
            </Switch>
        </Container>
    )   
    
}
        

export default Content