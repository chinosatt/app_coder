import { createContext, useState } from "react"

export const contexto = createContext() 

const {Consumer,Provider} = contexto

const CartContext = ({children}) => {

    const [cart, setCart] = useState([])
    
    const addItem = (item) => {
        const promesa = isInCart(item.item.id)
        promesa.then(result => {
            if(typeof result === 'undefined'){
                setCart([...cart, item])
            } else {
                const newCart = []
                cart.forEach((list) => {
                    if(list.item.id == item.item.id) {
                        newCart.push({"item": {id: list.item.id, title: list.item.title, price: list.item.price, pictureUrl: list.item.pictureUrl, category: list.item.category, stock: list.item.stock}, "quantity" : list.quantity + item.quantity})
                    } else {
                        newCart.push(list)
                    }   
                })
                setCart(newCart)
            }
        })
    }

    const removeItem = (itemId) => {
        let cart_new = [...cart]
        cart_new = cart_new.filter(function(items) {
            return items.item.id !== itemId
        })
        setCart(cart_new)
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        const result = new Promise((res,rej) => {
            res(cart.find(items => items.item.id == itemId))
        })
        return result
    } 
    
    return(
        <Provider value={{cart,addItem,removeItem,clear}}>
            {children}
        </Provider>
    )
}

export default CartContext