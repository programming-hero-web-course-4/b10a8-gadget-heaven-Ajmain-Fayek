import React, { useContext, useState, useEffect } from "react";
import ProductsContainer from "../Components/ProductsContainer";
import Banner from "../assets/banner.jpg";
import { Link, useLocation } from "react-router-dom";
import CartWishContext from "../Context/ButtonsActiveStateContext";

const Home = () => {
    const { cartBtn } = useContext(CartWishContext);
    const location = useLocation();

    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        if (location.pathname == "/") return setToggle(true);
        else return setToggle(false);
    }, [location]);
 
    return (
        <div className="mx-auto">
            {/* Headings */}
            {/* Button */}
            <div
                className={
                    toggle
                        ? "mx-auto max-w-screen-2xl bg-color-pirmary rounded-3xl border-4 border-white shadow-primary-shadow pt-20 pb-36 -mt-[88px]"
                        : "mx-auto max-w-screen-2xl bg-color-pirmary rounded-3xl border-4 border-white shadow-primary-shadow pt-10 pb-36"
                }
            >
                <div className="max-w-screen-2xl mx-auto px-2 sm:px-6 md:px-10 lg:px-28 text-center space-y-6 lg:space-y-10 py-10">
                    <h1 className="font-black text-white text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl">
                        Upgrade Your Tech Accessorize with Gadget Heaven
                        Accessories
                    </h1>
                    <p className="max-w-screen-md mx-auto text-white/75">
                        Explore the latest gadgets that will take your
                        experience to the next level. From smart devices to the
                        coolest accessories, we have it all!
                    </p>
                    <Link
                        onClick={cartBtn}
                        to="/dashboard"
                        className="btn rounded-full text-color-pirmary"
                    >
                        Shop Now
                    </Link>
                </div>
            </div>
            {/* Banner Image */}
            <div className="max-w-screen-2xl mx-auto px-2 sm:px-6 md:px-10 lg:px-28 -mt-32 mb-10">
                <div className="lg:w-3/4 w-11/12 mx-auto border-2 border-white rounded-3xl p-4 lg:p-6 bg-gray-50/25">
                    <img
                        className="w-full max-h-[500px] object-cover object-center mx-auto rounded-2xl"
                        src={Banner}
                        alt="Gadget Heaven Banner Image"
                    />
                </div>
            </div>
            {/* ProductsContainer */}
            <div className="max-w-screen-2xl mx-auto px-2 sm:px-6 md:px-10 lg:px-28">
                <ProductsContainer />
            </div>
        </div>
    );
};

export default Home;
