import React , {useState} from "react"

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

    return (
        <>
            { /* <Header test test2 nombre = "Ezequiel" edad={40} usuarios={usuarios} >
                <p>Esto es un subtítulo</p>
            </Header> */ }
            <Header />
            <Content />
            
            { /* <Parrafo contador={contador} />
            <button onClick={aumentar}>sumar</button> */}

        </>
    )

}
    
// Para poder usar esta variable desde donde se importe el componente
export default App