import React, {useEffect} from "react"

// useEffect: sirve para hacer efectos secundarios
// Ejemplos: pedidos a Api, suscripciones, timers 

const Parrafo = ({contador}) => {

    // Recibe dos parámetros: a) una función, b) un array opcional
    // useEffect(function [,array])
    useEffect(() => {
        console.log("Render!!")
    }, [])

    return (
        <p>{contador}</p> 
    )
    
}
        

export default Parrafo