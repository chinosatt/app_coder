import React , {useState} from "react"

import {BrowserRouter, Route} from "react-router-dom"

import Header from "./components/Header"
import Content from "./components/Content"

import "bootstrap/dist/css/bootstrap.min.css"

import "./estilos.css"
import Parrafo from "./components/Parrafo"



const App = () => {

    /* const usuarios = [
        {nombre: "Ezequiel"} , {nombre: "Juan"}
    ] */
    
    // const resultado = useState(0)
    // const contador = resultado[0]
    // const setContador = resultado[1]
    // o destructuring
    /* const [contador,setContador] = useState(0)
    const aumentar = () => {
        setContador(contador + 1)
    } */

    // Pomesas: es un objeto que representa una operación que dura en el tiempo
    // propiedades: estado (pending, fullfield, rejected) - value
    /* const operacion = new Promise((resolver,rechazar) => {
        setTimeout(() => {
            console.log("Hola!")
            const pedido_a_db = ["Juan","Pepe"]
            const salio_bien = true
            if(salio_bien) {
                resolver(pedido_a_db)
            } else {
                rechazar()
            }
        }, 2000)
    })
    operacion.then((array_de_usuarios) => {
        console.log("Terminó la promesa bien")
        console.log(array_de_usuarios)
    })
    operacion.catch((error) => {
        console.log("Terminó la promesa mal")
    }) */

    /* Pomesa Fetch:
    const pedido = fetch('https://jsonplaceholder.typicode.com/users')
    // Transformacion
    pedido.then((respuesta) => {
        // respuesta.text()
        // respuesta.blob()
        return respuesta.json()    
    }) // Respuesta
    .then((transformacion) => {
        console.log(transformacion)   
    }) // Error
    pedido.catch(() => {
        console.log('Pedido Mal')
    })
    // Version corta
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
    */

    /* Eventos
    const hacerClick = (e) => {
        console.log("Hola")
        console.log(e)
    }
    */

    return (
        <>
            { /* <Header test test2 nombre = "Ezequiel" edad={40} usuarios={usuarios} >
                <p>Esto es un subtítulo</p>
            </Header> */ }

            <BrowserRouter >
                <Header />
                <Content />
            </BrowserRouter>

            { /* <Parrafo contador={contador} />
            <button onClick={aumentar}>sumar</button> */}

            { /* Eventos  
            <button onClick={hacerClick}> Click Me</button>
            */ }

        </>
    )

}
    
// Para poder usar esta variable desde donde se importe el componente
export default App