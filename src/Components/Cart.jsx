import React, { useContext, useState } from "react";
import { Sort_SVG } from "./Sort_SVG";
import CartWishlistPageContext from "../Context/CartWishlistPageContext";
import AddToCartContext from "../Context/AddToCartContext";
import Cart_WishList_Cards from "./Cart_WishList_Cards";
import ModalContext from "../Context/ModalContext";

const Cart = () => {
    const { cart, sortCart } = useContext(CartWishlistPageContext);
    const { cartNumber, cartTotalPrice } = useContext(AddToCartContext);
    const { purchase } = useContext(ModalContext);
    return (
        <>
            <div className="max-w-screen-2xl mx-auto px-2 pt-10 pb-6 sm:px-6 md:px-10 lg:px-28 text-center">
                <div className="flex gap-2 justify-between items-center">
                    <p className="font-bold">Cart</p>
                    <div className="flex flex-col gap-2 sm:justify-end sm:flex-row sm:items-center justify-center items-end">
                        <p className="font-semibold">
                            Total cost: ${cartTotalPrice}
                        </p>
                        <button
                            onClick={sortCart}
                            className="btn btn-sm rounded-full bg-transparent border-color-pirmary text-color-pirmary"
                        >
                            Sort by Price <Sort_SVG />
                        </button>
                        <button
                            onClick={purchase}
                            className={
                                cartNumber == 0
                                    ? "btn-disabled btn-sm btn rounded-full bg-color-pirmary text-white border-color-pirmary"
                                    : "btn-sm btn rounded-full bg-color-pirmary text-white border-color-pirmary"
                            }
                        >
                            Purchase
                        </button>
                    </div>
                </div>
                <div
                    className={
                        cartNumber == 0
                            ? "py-2 rounded-xl bg-red-100 border-red-300 border text-red-600 mt-4"
                            : "hidden"
                    }
                >
                    You Haven't Cart Any Item
                </div>
                <div className={cartNumber == 0 ? "hidden" : "pt-6 space-y-4"}>
                    {cart &&
                        cart.length &&
                        cart.map((product) => (
                            <Cart_WishList_Cards
                                key={product.product_id}
                                product={product}
                            />
                        ))}
                </div>
            </div>
        </>
    );
};

export default Cart;
