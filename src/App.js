import Header from "./components/Header"
import Content from "./components/Content"

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    const usuarios = [
        {nombre: "Ezequiel"} , {nombre: "Juan"}
    ]

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