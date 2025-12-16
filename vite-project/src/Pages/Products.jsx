import axios from 'axios'
import { useEffect, useState } from 'react'

const Products = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/product/")
            .then((res) => {
                console.log("Backend Response:", res.data);
                setItems(res.data);
            })
            .catch((err) => {
                console.error("Axios Error:", err);
            });
    }, []);
    return (


        <div className="te p-4">
            <div className="grid grid-cols-4 gap-2">
                {items.map((item, index) => (
                    <div className="w-[300px] mt-10! bg-green-400 text-white hover:bg-black  p-4 flex flex-col items-center rounded transition-colors duration-300">
                        <h2 className="text-xl font-bold mb-2 text-white ">{item.heading}</h2>
                        <div className="grid grid-cols-2 gap-2 text-white flex justify-center items-center">
                            <div>
                                <img src={item.image1}
                                    className="w-35 h-35 object-cover mb-2 rounded mt-5!"></img>
                                <p>{item.text1}</p>

                            </div>
                            <div>
                                <img src={item.image2}
                                    className="w-35 h-35 object-cover mb-2 rounded mt-5!" ></img>
                                <p>{item.text2}</p>
                            </div>
                            <div>
                                <img src={item.image3}
                                    className="w-35 h-35 object-cover mb-2 rounded mt-1!"></img>
                                <p>{item.text3}</p>
                            </div>
                            <div>
                                <img src={item.image4}
                                    className="w-35 h-35 object-cover mb-2 rounded mt-1!" ></img>
                                <p>{item.text4}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;