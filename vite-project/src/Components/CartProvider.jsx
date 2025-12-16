import React, { createContext, useState } from 'react'


export const CartContext = createContext()
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        console.log("Cart", item)
        setCart((prev) => [...prev, item]);
    }
    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}

        </CartContext.Provider>
    )
}

export default CartProvider;


