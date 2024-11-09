import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import CartWishState from "../Context/CartWishState";
import ProductDetailsState from "../Context/ProductDetailsState";
import AddToCartState from "../Context/AddToCartState";
import PurchaseModal from "../Modal/PurchaseModal";
import ModalState from "../Context/ModalState";
import CartWishlistPageState from "../Context/CartWishlistPageState";
import { Bounce, ToastContainer } from "react-toastify";

const MainLayout = () => {
    return (
        <CartWishState>
            <AddToCartState>
                <CartWishlistPageState>
                    <ModalState>
                        <PurchaseModal />
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
                    </ModalState>
                </CartWishlistPageState>
            </AddToCartState>
        </CartWishState>
    );
};

export default MainLayout;
