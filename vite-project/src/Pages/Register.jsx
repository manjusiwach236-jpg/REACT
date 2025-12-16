// import React from 'react'
// import { Button, Form, Input } from 'antd';


// import axios from "axios"
// import { useState } from 'react'
// const Register = () => {

//     const [husband, setwife] = useState()

//     const onFinish = values => {
//         try {
//             axios.post("http://127.0.0.1:8000/api/home/", values)
//                 .then((bakendkarespons) => {
//                     console.log("bakendkarespons:", bakendkarespons);
//                     setwife(bakendkarespons?.data?.message)
//                 })
//                 .catch((error) => {
//                     console.error("Error response from backend:", error?.response?.data?.message);
//                     setwife(error?.response?.data)


//                 })
//         }
//         catch (error) {
//             console.log(error)

//         };
//         console.log('Success:', values);
//     };
//     const onFinishFailed = errorInfo => {
//         console.log('Failed:', errorInfo);
//     };
//     // const axiosInstance = axios.create({
//     //     baseURL: " http://127.0.0.1:8000/",
//     // });

//     // const Register = () => {
//     //     const [message, setMessage] = useState("");

//     //     const onFinish = async (values) => {
//     //         console.log("Form values:", values);
//     //         try {
//     //             const res = await axiosInstance.post("/api/home/", values);
//     //             console.log("Message:", res?.data?.message);
//     //             console.log("JWT Token:", res?.data?.jwt);

//     //             // Store token in localStorage
//     //             localStorage.setItem("jwttoken", res?.data?.jwt);
//     //             setMessage(res?.data?.message);
//     //         } catch (error) {
//     //             console.error(
//     //                 "Error:",
//     //                 error?.response?.data?.message || error.message
//     //             );
//     //             setMessage(error?.response?.data?.message || "Something went wrong");
//     //         }
//     //     };

//     //     const onFinishFailed = (errorInfo) => {
//     //         console.log("Failed:", errorInfo);
//     //     };

//     // const Register = () => {
//     //     const [m, setm] = useState();
//     //     const onFinish = values => {
//     //         console.log("Success:", values);
//     //         try {
//     //             axiosInstance.post("/api/login/", values)
//     //                 .then((res) => {
//     //                     console.log("status:", res?.data?.message);
//     //                     console.log("status:", res?.data?.jwttoken);
//     //                     localStorage.setItem("jwttoken", res?.data?.jwttoken);
//     //                     setm(res?.data?.message)
//     //                 })
//     //                 .catch((error) => {
//     //                     console.error("status:", error?.response?.data?.message);
//     //                     setm(error?.response?.data?.message)
//     //                 })
//     //         }
//     //         catch (error) {
//     //             console.log(error);
//     //         }
//     //     };

//     //     const onFinishFailed = (errorInfo) => {
//     //         console.log("Failed:", errorInfo);
//     //     };
//     return (

//         <div className="flex flex-col gap-4 justify-center items-center min-h-screen bg-gray-600">

//             <p className='text-[20px] text-green-600 '>{m}</p>
//             <Form
//                 name="basic"
//                 onFinish={onFinish}
//                 onFinishFailed={onFinishFailed}
//                 className="flex flex-col justify-center items-center gap-4  w-[300px] !p-6 rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.15)] bg-white"
//             >
//                 <h1 className='text-2xl font-bold text-gray-800 text-center'>Register</h1>
//                 <Form.Item
//                     label="Username"
//                     name="name"
//                     placeholder="Enter your username"
//                 >
//                     <Input />
//                 </Form.Item>


//                 <Form.Item
//                     label="Subject"
//                     name="subject"
//                     placeholder="Enter the subject you teach"
//                 >
//                     <Input />
//                 </Form.Item>
//                 <Form.Item
//                     label="Email"
//                     name="email"
//                     placeholder="Enter your Email"
//                     rules={[{ type: 'email' }]}
//                 >
//                     <Input />
//                 </Form.Item>


//                 <Form.Item
//                     label="Password"
//                     name="password"
//                     placeholder="Enter your Password"
//                 >
//                     <Input.Password />
//                 </Form.Item>



//                 <Form.Item label={null}>
//                     <Button type="primary" htmlType="submit" className='!w-full !py-2 !text-[16px] !hover:bg-[red]'>
//                         Submit
//                     </Button>
//                 </Form.Item>
//             </Form>
//         </div>

//     )
// }
// export default Register;


// // import React, { useState } from "react";
// // import { Button, Form, Input } from "antd";
// // import axios from "axios";

// // // Create an axios instance with your backend base URL
// // const axiosInstance = axios.create({
// //     baseURL: " http://127.0.0.1:8000/", // change this to your backend URL
// // });

// // const Register = () => {
// //     const [message, setMessage] = useState("");

// //     const onFinish = async (values) => {
// //         console.log("Form values:", values);
// //         try {
// //             const res = await axiosInstance.post("/api/login/", values);
// //             console.log("Message:", res?.data?.message);
// //             console.log("JWT Token:", res?.data?.jwttoken);

// //             // Store token in localStorage
// //             localStorage.setItem("jwttoken", res?.data?.jwttoken);
// //             setMessage(res?.data?.message);
// //         } catch (error) {
// //             console.error(
// //                 "Error:",
// //                 error?.response?.data?.message || error.message
// //             );
// //             setMessage(error?.response?.data?.message || "Something went wrong");
// //         }
// //     };

// //     const onFinishFailed = (errorInfo) => {
// //         console.log("Failed:", errorInfo);
// //     };

// //     return (
// //         <div className="flex flex-col gap-4 justify-center items-center min-h-screen bg-gray-600">
// //             <p className="text-[20px] text-green-600">{message}</p>
// //             <Form
// //                 name="register"
// //                 onFinish={onFinish}
// //                 onFinishFailed={onFinishFailed}
// //                 className="flex flex-col justify-center items-center gap-4 w-[300px] !p-6 rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.15)] bg-white"
// //             >
// //                 <h1 className="text-2xl font-bold text-gray-800 text-center">
// //                     Register
// //                 </h1>

// //                 <Form.Item
// //                     label="Username"
// //                     name="name"
// //                     rules={[{ required: true, message: "Please enter your username!" }]}
// //                 >
// //                     <Input placeholder="Enter your username" />
// //                 </Form.Item>

// //                 <Form.Item
// //                     label="Subject"
// //                     name="subject"
// //                     rules={[{ required: true, message: "Please enter your subject!" }]}
// //                 >
// //                     <Input placeholder="Enter the subject you teach" />
// //                 </Form.Item>

// //                 <Form.Item
// //                     label="Email"
// //                     name="email"
// //                     rules={[
// //                         { required: true, message: "Please enter your email!" },
// //                         { type: "email", message: "Please enter a valid email!" },
// //                     ]}
// //                 >
// //                     <Input placeholder="Enter your email" />
// //                 </Form.Item>

// //                 <Form.Item
// //                     label="Password"
// //                     name="password"
// //                     rules={[{ required: true, message: "Please enter your password!" }]}
// //                 >
// //                     <Input.Password placeholder="Enter your password" />
// //                 </Form.Item>

// //                 <Form.Item>
// //                     <Button
// //                         type="primary"
// //                         htmlType="submit"
// //                         className="!w-full !py-2 !text-[16px] !hover:bg-[red]"
// //                     >
// //                         Submit
// //                     </Button>
// //                 </Form.Item>
// //             </Form>
// //         </div>
// //     );
// // };

// // export default Register;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form, Input } from 'antd';

const Register = () => {

    const [m, setwife] = useState()

    const onFinish = values => {
        try {
            axios.post("http://127.0.0.1:8000/api/home/", values)
                .then((bakendkarespons) => {
                    console.log("bakendkarespons:", bakendkarespons);
                    setwife(bakendkarespons?.data?.message)
                })
                .catch((error) => {
                    console.error("Error response from backend:", error?.response?.data?.message);
                    setwife(error?.response?.data)


                })
        }
        catch (error) {
            console.log(error)

        };
        console.log('Success:', values);
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="flex flex-col gap-4 justify-center items-center min-h-screen bg-gray-600">
            <p className='text-[20px] text-green-600 '>{m}</p>
            <Form
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className="flex flex-col justify-center items-center gap-4  w-[300px] !p-6 rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.15)] bg-white"
            >
                <h1 className='text-2xl font-bold text-gray-800 text-center'>Register</h1>
                <Form.Item
                    label="Username"
                    name="name"
                    placeholder="Enter your username"
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label="Subject"
                    name="subject"
                    placeholder="Enter the subject you teach"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    placeholder="Enter your Email"
                    rules={[{ type: 'email' }]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label="Password"
                    name="password"
                    placeholder="Enter your Password"
                >
                    <Input.Password />
                </Form.Item>



                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit" className='!w-full !py-2 !text-[16px] !hover:bg-[red]'>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )

};
export default Register;