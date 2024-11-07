import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import CartWishState from "../Context/CartWishState";
import ProductDetailsState from "../Context/ProductDetailsState";

const MainLayout = () => {
    return (
        <CartWishState>
            <div>
                {/* Navbar */}
                <Navbar />
                {/* Outlet */}
                <ProductDetailsState>
                    <div className="bg-gray-200 pt-2 pb-10">
                        <Outlet />
                    </div>
                </ProductDetailsState>
                {/* Footer */}
                <Footer />
            </div>
        </CartWishState>
    );
};

export default MainLayout;
