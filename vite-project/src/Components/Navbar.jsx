// src/Components/Navbar.jsx
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "./CartContext";

const Navbar = ({ openCart }) => {
    const { cart } = useCart(); // Get cart state

    return (
        <nav className="flex items-center justify-between p-4 bg-gray-100">
            <h1 className="text-xl font-bold">My Store</h1>
            <div className="flex items-center cursor-pointer">
                <FaShoppingCart className="text-3xl" />
                <span className="font-semibold text-sm mt-2 ml-1">{cart.length}</span>
                <button
                    onClick={openCart}
                    className="ml-2 bg-blue-500 text-white text-xs px-2 py-1 rounded hover:bg-blue-600 transition"
                >
                    Open Cart
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
