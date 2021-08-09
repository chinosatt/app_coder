import {useParams} from "react-router-dom"

import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import React, {useEffect, useState} from "react"
import ItemDetail from "./ItemDetail";

const productList = [
    {id: "1001", title: "SSD Seagate 2.5'' 960Gb Sata3 Z1", price: "13100", pictureUrl: "https://www.quonty.com/img2/maxi/y/ya960vc1a001_00.jpg", category: "perifericos", stock: "2"},
    {id: "1002", title: "Raton NGS GMX-100 Gaming Optico 2400Dpi USB Negro LED", price: "670", pictureUrl: "https://www.quonty.com/img2/maxi/g/gmx-100_1.jpg", category: "perifericos", stock: "3"},
    {id: "1003", title: "Auriculares C/Microfono B-MOVE Typhoon Gaming Negro", price: "1130", pictureUrl: "https://www.quonty.com/img2/maxi/b/bg-aud08_1.jpg", category: "gaming", stock: "1"},
    {id: "1004", title: "Kingston Hx426C16Fb3/8 Hyperx FURY 8GB DDR4 2666Mh", price: "4950", pictureUrl: "https://www.quonty.com/img2/med/h/hx430c15fb3-16_00.jpg", category: "componentes", stock: "5"},
    {id: "1005", title: "Bateria Salicru 7Ah/12V PARA SAI UBT 12/7", price: "1800", pictureUrl: "https://www.quonty.com/img2/maxi/a/qtya0002565_00.jpg", category: "componentes", stock: "0"},
    {id: "1006", title: "Monitor Gaming ASUS Vp248H 24'' FHD 1MS HDMI VGA Negro", price: "14270", pictureUrl: "https://www.quonty.com/img2/maxi/a/qtyasu-mvp248h_00.jpg", category: "gaming", stock: "5"},
]

const ItemDetailContainer = () => {
    
    const [producto, setProducto] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const params = useParams()

    useEffect(() => {
        setTimeout(() => {
            Promise
                .resolve(productList.filter(producto=>producto.id == params.id))
                .then(response => {
                    setProducto(response)
                })
            setIsLoaded(true)
        }, 2000)
    }, [params.id])
    
    if (!isLoaded) {
        return <Spinner animation="grow" variant="primary" />;
    } else {
        return (
            <Container>
                { producto.map( product => (<ItemDetail producto={product}/>) ) }
            </Container>
        )
    }
}

export default ItemDetailContainer
