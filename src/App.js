// import {useState} from "react"

import Header from "./components/Header"
import Content from "./components/Content"

import "bootstrap/dist/css/bootstrap.min.css"

import "./estilos.css"

const App = () => {

    const usuarios = [
        {nombre: "Ezequiel"} , {nombre: "Juan"}
    ]
    
    // const resultado = useState(0)
    // const contador = resultado[0]
    // const setContador = resultado[1]
    // o destructuring
    // const [contador, setContador] = useState(0)
    /*
    const sumarContador = () => {
        console.log('Hola')
        setContador(contador + 1)
    }
    */
    return (
        <>
            <Header test test2 nombre = "Ezequiel" edad={40} usuarios={usuarios} >
                <p>Esto es un subtítulo</p>
            </Header>
            <Content />
        </>
    )

}
    
// Para poder usar esta variable desde donde se importe el componente
export default App