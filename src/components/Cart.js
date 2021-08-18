import { useContext } from "react"
import {contexto} from './CartContext'


const Cart = () => {

    const {cart, removeItem, clear} = useContext(contexto)

    console.log(cart)

    return(
        <div>
            {cart.map(item => 
                <div> { }</div>

            )}
        </div>
    )
}

export default Cart