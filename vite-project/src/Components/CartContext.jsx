// src/Components/CartContext.jsx
import { createContext, useContext, useState } from "react";

// 1. Create context
const CartContext = createContext();

// 2. Create provider
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prev) => [...prev, item]);
    };

    const removeFromCart = (itemId) => {
        setCart((prev) => prev.filter((item) => item.id !== itemId));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

// 3. Custom hook for consuming the context
export const useCart = () => useContext(CartContext);
