
import { Select } from "antd";
import { FaSearch, FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";
import { DownOutlined } from "@ant-design/icons";
import amazonLogo from "../assets/amazon_logo.png";
import { useContext } from "react";
import { Link } from "react-router-dom";


import Footerlanguage from "../Components/Footerlanguage";
import { CartContext } from '../Components/CartProvider';


function Header({ openCart }) {
    const { cart } = useContext(CartContext);
    console.log("Header", cart);
    return (
        <div className="w-full">

            <div className="h-16 bg-[#131921] text-white flex items-center px-6 gap-6">


                <div className="flex items-center cursor-pointer">
                    <img src={amazonLogo} alt="Amazon" className="w-24 object-contain" />
                </div>


                <div className="flex items-center cursor-pointer">
                    <FaMapMarkerAlt className="text-xl" />
                    <div className="ml-1 leading-tight">
                        <p className="text-xs text-gray-300">Deliver to</p>
                        <p className="text-sm font-semibold">India</p>
                    </div>
                </div>


                <div className="flex flex-1 h-8">

                    <Select
                        defaultValue="All"
                        className="rounded-l-md bg-gray-100 text-black text-sm "
                        dropdownStyle={{ width: 120 }}
                        options={[
                            { value: "all", label: "All" },
                            { value: "electronics", label: "Electronics" },
                            { value: "fashion", label: "Fashion" },
                        ]}
                        style={{ width: 100 }}
                    />

                    {/* Search Input */}
                    <input
                        type="text"
                        placeholder="Search Amazon"
                        className="flex-1 px-3 outline-none text-black bg-white w-40!"
                    />

                    {/* Search Icon */}
                    <button className="bg-[#febd69] px-4 flex items-center justify-center rounded-r-md ">
                        <FaSearch className="text-black text-xl" />
                    </button>
                </div>

                {/* EN Flag */}
                <Footerlanguage />

                {/* Account */}
                <Link href="/login" className="text-white no-underline">
                    <div className="cursor-pointer leading-tight">
                        <p className="text-xs">Hello, sign in</p>
                        <p className="font-semibold text-sm flex items-center gap-1">
                            Account & Lists <DownOutlined className="text-[10px]" />
                        </p>
                    </div>
                </Link>


                <div className="cursor-pointer leading-tight">
                    <p className="text-xs">Returns</p>
                    <p className="font-semibold text-sm">& Orders</p>
                </div>


                <div className="flex items-center cursor-pointer">
                    <FaShoppingCart className="text-3xl" />
                    <span className="font-semibold text-sm mt-2">{cart.length}</span>

                    <button
                        onClick={openCart}
                        className="ml-2 bg-blue-500 text-white text-xs px-2 py-1 rounded hover:bg-blue-600 transition"
                    >
                        Open Cart
                    </button>
                </div>
            </div>
            <div className="h-10 bg-[#232f3e] text-sm px-6 text-white flex items-center gap-5">
                <span className="font-semibold">All</span>
                <span>Fresh</span>
                <span>MX Player</span>
                <span>Sell</span>
                <span>Bestsellers</span>
                <span>Mobiles</span>
                <span>Today's Deals</span>
                <span>Customer Service</span>
                <span>New Releases</span>
                <span>Prime ▾</span>
            </div>

        </div>

    );
}
export default Header;






