// CommonJS
// const React = require('react')

// ES6

// 1) Tener REACT en scope
import React from "react"
// 2) Tener REACT_DOM en scope
import ReactDOM from "react-dom"

import App from "./App"
// 3) Crear un componente
// const App = () => "Hola Mundo"

// 4) Renderizar la aplicación por única vez. "a" es el componente App que contiene el resto del DOM
ReactDOM.render(<App/>, document.getElementById('root'))