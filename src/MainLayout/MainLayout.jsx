import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import CartWishState from "../Context/CartWishState";

const MainLayout = () => {
    return (
        <CartWishState>
            <div>
                {/* Navbar */}
                <Navbar />

                {/* Outlet */}
                <div>
                    <Outlet />
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </CartWishState>
    );
};

export default MainLayout;
