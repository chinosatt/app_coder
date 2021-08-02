import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import React, {useEffect, useState} from "react"
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    
    const [producto, setProducto] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const getItems = new Promise((res,rej) => {
            setTimeout(() => {
                const pedido = fetch('https://fakestoreapi.com/products/1')
                pedido.then((respuesta) => {
                    return respuesta.json()    
                })
                .then((transformacion) => {
                    res(transformacion)   
                })
            }, 2000)
        })
        getItems.then((data_producto) => {
            setProducto(data_producto)
            setIsLoaded(true)
        })
    }, [])

    console.log(producto)

    if (!isLoaded) {
        return <Spinner animation="grow" variant="primary" />;
    } else {
        return (
            <Container>
                <ItemDetail producto={producto}/>
            </Container>
        )
    }
}

export default ItemDetailContainer
