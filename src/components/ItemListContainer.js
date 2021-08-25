import {useParams} from "react-router-dom"

import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import React, {useEffect, useState} from "react"
import ItemList from "./ItemList";

import {firestore} from "../firebase"

const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const params = useParams()

    useEffect(() => {
        
        setIsLoaded(false)

        const collection = firestore.collection("productos")
        
        const productos = []
        if(params.cat) {
            
            const filter = collection.where("category", "==", params.cat)
            filter.get().then((resultados) => {
                resultados.forEach((documento) => {
                    const id = documento.id
                    const data = documento.data()
                    const data_final = {id, ...data}
                    productos.push(data_final)
                })
                setProductos(productos)
            }).finally(() => {
                setIsLoaded(true)
            })

        } else { 
            
            collection.get().then((resultados) => {
                resultados.forEach((documento) => {
                    const id = documento.id
                    const data = documento.data()
                    const data_final = {id, ...data}
                    productos.push(data_final)
                })
                setProductos(productos)
            }).finally(() => {
                setIsLoaded(true)
            })

        }

    }, [params])
   
    if (!isLoaded) {
        return <Spinner animation="grow" variant="primary" />;
    } else {
        return (
            <Container>
                <h2>{greeting}</h2>
                <ItemList productos={productos}/>
            </Container>
        )
    }

    
}

export default ItemListContainer
