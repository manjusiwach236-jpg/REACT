import axios from "axios";
import React, { useState, useContext } from "react";

import { Button, Form, Input } from "antd";
// import { useState } from "react";
// import { Link } from "react-router-dom";
import axiosInstance from "../utils/axiosinstance"

const Login = () => {
    const [m, setm] = useState();
    const onFinishFailed = errorInfo => {
        console.log("Failed:", errorInfo);
    };
    const onFinish = values => {
        console.log("Success:", values);
        try {
            axiosInstance.post("/api/login/", values)
                .then((res) => {
                    console.log("status:", res?.data?.message);
                    console.log("JWT Token:", res?.data?.jwt);
                    localStorage.setItem("jwttoken", res?.data?.jwt);

                    setm(res?.data?.message)
                })
                .catch((error) => {
                    console.error("status:", error?.response?.data?.message);
                    setm(error?.response?.data?.message)
                })
        }
        catch (error) {
            console.log(error);
        }
    };

    return (

        <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-100 to-white flex flex-col">
            <p>{m}</p>



            {/* 🌟 LOGIN CONTENT */}
            <div className="flex flex-1 justify-center items-center px-4">
                <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md border border-gray-200">
                    <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-6">
                        Login
                    </h2>

                    <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
                        {/* EMAIL FIELD */}
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                { required: true, message: "Please enter your email!" },
                                { type: "email", message: "Enter a valid email!" },
                            ]}
                        >
                            <Input
                                className="rounded-md py-2 border-gray-300"
                                placeholder="Enter your email"
                            />
                        </Form.Item>

                        {/* PASSWORD FIELD */}
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                { required: true, message: "Please enter your password!" },
                            ]}
                        >
                            <Input.Password
                                className="rounded-md py-2 border-gray-300"
                                placeholder="Enter your password"
                            />
                        </Form.Item>

                        {/* BUTTON */}
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 py-2 text-lg rounded-md"
                            >
                                Login
                            </Button>
                        </Form.Item>
                    </Form>

                    {/* EXTRA LINKS */}
                    <div className="text-center text-sm text-gray-600 mt-4">
                        <p>
                            Don’t have an account?
                            <span className="text-blue-600 cursor-pointer hover:underline">
                                Register
                            </span>
                        </p>
                    </div>


                    {/* <div className="text-center text-sm text-gray-600 mt-4">
                        <p>
                            Don’t have an account?{" "}
                            <Link
                                to="/register" // <-- path to your register page
                                className="text-blue-600 cursor-pointer hover:underline"
                            >
                                Register
                            </Link>
                        </p>
                    </div> */}



                </div>
            </div>
        </div>




    )
}
export default Login;



// import React, { useContext } from 'react'
// import { CartContext } from '../Components/CartProvider';

// const Login = () => {
//     const { cart, addToCart } = useContext(CartContext);
//     console.log("login page m value aa gi", cart)
//     const item = "Good Vibes"
//     return (
//         <div>

//             <button onClick={() => addToCart(item)}>click</button>
//         </div>
//     )
// }

// export default Login