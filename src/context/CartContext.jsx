import { createContext, useState } from "react"

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addProductInCart = (product) => {
        const productInCart = cart.find((prod) => prod.id === product.id)

        if(productInCart){
            const cartUpdater = cart.map((prod) => {
                if(prod.id === productInCart.id){
                    return {...prod, quantity: prod.quantity + product.quantity}
                } else {
                    return prod
                } 
            })

            setCart(cartUpdater)
        } else {
            setCart([...cart, product])
        }
    }

    const totalQuantity = () => {
        const total = cart.reduce((total, product) => total + product.quantity, 0)
        return total
    }

    const totalPrice = () => {
        const total = cart.reduce((total, product) => total + (product.price * product.quantity), 0)
        return total
    }

    const deleteProductById = (id) => {
        const productsFiltered = cart.filter((product) => product.id !== id)
        setCart(productsFiltered)
    }

    const clearCart = () => {
        setCart([])
    }

    const updateQuantity = (id, newQuantity) => {
        const updatedCart = cart.map((prod) => {
            if (prod.id === id){
                return { ...prod, quantity: newQuantity }
            } else {
                return prod
            }
        })

        setCart(updatedCart)
    }

    return(
        <CartContext.Provider value={{ cart, addProductInCart, totalQuantity, totalPrice, deleteProductById, clearCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }