import {Route, Switch} from "react-router-dom"

import Container from 'react-bootstrap/Container'
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";

const Content = () => {

    return (
        <Container>
            {/* <ItemListContainer greeting="Productos Destacado"/> */}
            {/* <ItemDetailContainer /> */}

            {/* Componente sin props - la librería envia sus propios props (match, location, history) */}
            <Switch>
                <Route path="/item/:id" component={ItemDetailContainer} />
                <Route path="/categoria/:cat" component={ItemListContainer} />
                <Route path="/" component={ItemListContainer} exact />
            </Switch>
            

            {/* Componente con props - no se envían los props de la libreria */}
            {/* <Route path="/">
                <ItemListContainer greeting="Productos Destacado"/>
            </Rout> */}

        </Container>
    )   
    
}
        

export default Content