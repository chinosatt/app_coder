import {useParams} from "react-router-dom"

import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import React, {useEffect, useState} from "react"
import ItemDetail from "./ItemDetail";

import {firestore} from "../firebase"

const ItemDetailContainer = () => {
    
    const [producto, setProducto] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const params = useParams()

    useEffect(() => {
        
        const filtro = firestore.collection("productos").doc(params.id)
        const query = filtro.get()

        query.then((resultado) => {
            const data = resultado.data()
            setProducto(data)   
            setIsLoaded(true)
        })

    }, [params])
    
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
