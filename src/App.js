import React from "react"

import {BrowserRouter} from "react-router-dom"

import Header from "./components/Header"
import Content from "./components/Content"

import "bootstrap/dist/css/bootstrap.min.css"

import "./estilos.css"
import CartContext from "./components/CartContext"

const App = () => {
    
    return (
        <>
            <CartContext>
                <BrowserRouter >
                    <Header />
                    <Content />
                </BrowserRouter>
             </CartContext>
        </>
    )

}

export default App