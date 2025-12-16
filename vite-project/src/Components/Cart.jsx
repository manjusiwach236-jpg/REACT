// src/Components/Cart.jsx
import React from "react";
import { useCart } from "./CartContext";

const Cart = ({ closeCart }) => {
    const { cart, removeFromCart } = useCart();

    return (
        <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-4 z-50">
            <h2 className="text-lg font-bold mb-4">Your Cart</h2>
            <button
                onClick={closeCart}
                className="mb-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
                Close
            </button>
            {cart.length === 0 ? (
                <p>Cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index} className="flex justify-between mb-2">
                            {item.name}
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 hover:underline"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
