import axios from 'axios'
import { useEffect, useState } from 'react'
import { CartContext } from "../Components/CartProvider";

import { useContext } from 'react';

const Effect = () => {
    const { addToCart } = useContext(CartContext)
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/price/")
            .then((res) => {
                console.log("Backend Response:", res.data);
                setItems(res.data);
            })
            .catch((err) => {
                console.error("Axios Error:", err);
            });
    }, []);

    return (
        <div className="py-10 bg-gray-100 flex flex-col items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 max-w-7xl w-full mt-20 h-80">
                {items.map((item, index) => {

                    const mrp = item.mrp || 0;
                    const amount = item.amount || 0;
                    const discount = item.Discount || (mrp && amount ? Math.round(((mrp - amount) / mrp) * 100) : 0);

                    return (
                        <div
                            key={index}
                            className="bg-white shadow rounded-lg p-4 hover:shadow-xl transition-all duration-300 cursor-pointer "
                        >

                            <div className="w-full h-40 bg-gray-50 rounded flex justify-center items-center overflow-hidden p-4">
                                <img
                                    src={item.Image}
                                    alt={item.name}
                                    className="h-full object-contain"
                                />
                            </div>


                            <div className="mt-34 gap-10">
                                <h2 className="text-lg font-semibold text-gray-900">
                                    {item.name}
                                </h2>

                                <p className="text-sm text-gray-600 mt-10">
                                    {item.Description || "High-quality product with excellent value."}
                                </p>

                                <div className='mt-20'>
                                    <div className="mt-23 flex items-center gap-2">
                                        <p className="text-gray-500 line-through text-sm">
                                            ₹{mrp}
                                        </p>
                                        <p className="text-lg font-bold text-gray-900">
                                            ₹{amount}
                                        </p>
                                        {discount > 0 && (
                                            <p className="text-green-600 font-semibold text-sm">
                                                ({discount}% off)
                                            </p>

                                        )}
                                    </div>

                                    <div className="text-center">
                                        <button
                                            onClick={() => addToCart(item)}
                                            className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-50 mt-4!"
                                        >
                                            Add To Cart
                                        </button>
                                    </div>


                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Effect;
