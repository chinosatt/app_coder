import { useState } from "react"
import { Provider } from "../contexts"

const CartContext = ({children}) => {

    const [cart, setCart] = useState()
    
    const addItem = (itemId, quantity) => {
        console.log(itemId)
        console.log(quantity)
    }
    const removeItem = (itemId) => {
        
    }
    const clear = () => {
        
    }
    const isInCart = (itemId) => {
        
    }

    const providerValues = {
        cart: cart,
        addItem: addItem,
        removeItem: removeItem,
        clear: clear,
        isInCart: isInCart
    }

    return(
        <Provider value={ providerValues }>
            {children}
        </Provider>
    )
}

export default CartContext