import {useParams} from "react-router-dom"

import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import React, {useEffect, useState} from "react"
import ItemList from "./ItemList";

const productList = [
    {id: 1001, title: "SSD Seagate 2.5'' 960Gb Sata3 Z1", price: "13100", pictureUrl: "https://www.quonty.com/img2/maxi/y/ya960vc1a001_00.jpg", category: "perifericos"},
    {id: 1002, title: "Raton NGS GMX-100 Gaming Optico 2400Dpi USB Negro LED", price: "670", pictureUrl: "https://www.quonty.com/img2/maxi/g/gmx-100_1.jpg", category: "perifericos"},
    {id: 1003, title: "Auriculares C/Microfono B-MOVE Typhoon Gaming Negro", price: "1130", pictureUrl: "https://www.quonty.com/img2/maxi/b/bg-aud08_1.jpg", category: "gaming"},
    {id: 1004, title: "Kingston Hx426C16Fb3/8 Hyperx FURY 8GB DDR4 2666Mh", price: "4950", pictureUrl: "https://www.quonty.com/img2/med/h/hx430c15fb3-16_00.jpg", category: "componentes"},
    {id: 1005, title: "Bateria Salicru 7Ah/12V PARA SAI UBT 12/7", price: "1800", pictureUrl: "https://www.quonty.com/img2/maxi/a/qtya0002565_00.jpg", category: "componentes"},
    {id: 1006, title: "Monitor Gaming ASUS Vp248H 24'' FHD 1MS HDMI VGA Negro", price: "14270", pictureUrl: "https://www.quonty.com/img2/maxi/a/qtyasu-mvp248h_00.jpg", category: "gaming"},
]

const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const params = useParams()

    useEffect(() => {
        const promesa = getItems()
        promesa.then(json => {
            setProductos(json)
        })
    }, [params])

    const getItems = () => {
        
        const promiseProductos = new Promise((res,rej) => {
            setIsLoaded(false)
            setTimeout(() => {
                if(params.cat) {
                    res(productList.filter(producto=>producto.category == params.cat))
                } else {
                    res(productList)
                }
                setIsLoaded(true)
            }, 2000)
        })
        return promiseProductos

        /*
        const promesa = new Promise((res,rej) => {
            setTimeout(() => {
                const pedido = fetch('https://fakestoreapi.com/products')
                pedido.then((respuesta) => {
                    return respuesta.json()    
                })
                .then((transformacion) => {
                    if(params.cat) {
                        res(transformacion.filter(producto=>producto.category == params.cat))
                    } else {
                        res(transformacion)
                    }
                })
                return pedido
            }, 2000)
        })
        promesa.then((array_productos) => {
            if(params.cat) {
                
                console.log(array_productos)
    
                setProductos(array_productos.filter(producto=>producto.category == params.cat))
            } else {
                setProductos(array_productos)
            }
            setIsLoaded(true)
        }) 
        // return promesa
        */
    } 
    

    /*
    useEffect(() => {
        const promiseProductos = new Promise((res,rej) => {
            setTimeout(() => {
                const get_productos = [
                    {id: 1001, title: "SSD Seagate 2.5'' 960Gb Sata3 Z1", price: "13100", pictureUrl: "https://www.quonty.com/img2/maxi/y/ya960vc1a001_00.jpg", category: ""},
                    {id: 1002, title: "Raton NGS GMX-100 Gaming Optico 2400Dpi USB Negro LED", price: "670", pictureUrl: "https://www.quonty.com/img2/maxi/g/gmx-100_1.jpg", category: ""},
                    {id: 1003, title: "Auriculares C/Microfono B-MOVE Typhoon Gaming Negro", price: "1130", pictureUrl: "https://www.quonty.com/img2/maxi/b/bg-aud08_1.jpg", category: ""},
                    {id: 1004, title: "Kingston Hx426C16Fb3/8 Hyperx FURY 8GB DDR4 2666Mh", price: "4950", pictureUrl: "https://www.quonty.com/img2/med/h/hx430c15fb3-16_00.jpg", category: ""},
                    {id: 1005, title: "Bateria Salicru 7Ah/12V PARA SAI UBT 12/7", price: "1800", pictureUrl: "https://www.quonty.com/img2/maxi/a/qtya0002565_00.jpg", category: ""},
                    {id: 1006, title: "Monitor Gaming ASUS Vp248H 24'' FHD 1MS HDMI VGA Negro", price: "14270", pictureUrl: "https://www.quonty.com/img2/maxi/a/qtyasu-mvp248h_00.jpg", category: ""},
                ]
                res(get_productos)
            }, 2000)
        })
        promiseProductos.then((array_productos) => {
            if(params.id) {
                setProductos(array_productos.filter(producto=>producto.category == params.id))
            } else {
                setProductos(array_productos)
            }
            setIsLoaded(true)
        })
    }, [])
    */

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
