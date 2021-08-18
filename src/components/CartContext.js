import { createContext, useState } from "react"
// import { Provider } from "../contexts"

export const contexto = createContext() 

const {Consumer,Provider} = contexto

const CartContext = ({children}) => {

    const [cart, setCart] = useState([])
    const [inCart, setInCart] = useState(false)
    
    const addItem = (item) => {
        
        // console.log(item)

        console.log(isInCart(item.item.id))
        
        
        if(isInCart(item.item.id)) {

        } else {
            setCart([...cart, item])
        }
        

        // console.log(item)
        /* Version larga
        const cart_new = [...cart]
        cart_new.push(item)
        setCart(cart_new)
        */
        // Version corta
        // setCart([...cart, item])
        
    }
    const removeItem = (itemId) => {
        console.log(itemId)
        const cart_new = [...cart]
        cart_new.array.splice(producto => producto.item.id, itemId);
        setCart(cart_new)

    }
    const clear = () => {
        setCart([])
    }
    const isInCart = (itemId) => {
        
        console.log(cart)

        const result = cart.find(items => (items.item.id == itemId) ? setInCart(true) : setInCart(false))

        // cart.find(producto => producto.item.id == itemId) ? setInCart(true) : setInCart(false)

        return inCart;

    }
    
    return(
        <Provider value={{cart,addItem,removeItem,clear}}>
            {children}
        </Provider>
    )
}

export default CartContext