import NavBar from "./NavBar";

const Header = ({nombre,edad,usuarios,children}) => {

    // Destucturing
    // const {nombre,edad} = prop
    // const nombre = prop.nombre
    // const edad = prop.edad
    
    return (
        <header>
            <NavBar/>
            {/* Comentario dentro de JSX 
                <p>Hola {nombre}</p>
                {children}
            */}
        </header>
    )

}

export default Header
