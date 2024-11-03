import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
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
    );
};

export default MainLayout;
