import React, { useContext, useState, useEffect } from "react";
import Delete_SVG from "./Delete_SVG";
import AddToCartContext from "../Context/AddToCartContext";
import AddToCard_SVG from "./AddToCard_SVG";
import { useLocation } from "react-router-dom";
import CartWishlistPageContext from "../Context/CartWishlistPageContext";
import ErrorToast from "../Toast/ErrorToast";

const CartCards = ({ product }) => {
    const location = useLocation();
    const {
        handleCart,
        setWishListNumber,
        wishListNumber,
        setCartNumber,
        cartNumber,
        setCartTotalPrice,
        cartTotalPrice,
    } = useContext(AddToCartContext);

    const { removeWish, removeCart } = useContext(CartWishlistPageContext);

    const { price, product_image, product_title, description, product_id } =
        product;

    // Remove Card from Cart/Wishlist
    const removeCard = (product) => {
        if (location.pathname == "/dashboard/wishlist") {
            setWishListNumber(wishListNumber - 1);
            ErrorToast("Wished item Removed");
            return removeWish(product.product_id);
        }
        if (location.pathname == "/dashboard") {
            setCartNumber(cartNumber - 1);
            setCartTotalPrice(cartTotalPrice - product.price);
            ErrorToast("Cart item Removed");
            return removeCart(product.product_id);
        }
    };

    const addToCart = (product) => {
        handleCart(product);
        //check stock
        if (product.availability != "In Stock") return;
        removeCard(product);
    };

    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        if (location.pathname == "/dashboard/wishlist") {
            return setToggle(true);
        } else return setToggle(false);
    }, [location]);

    return (
        <div
            id={product_id}
            className="flex gap-4 items-center justify-between p-4 sm:p-6 bg-white rounded-2xl w-full"
        >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center w-full">
                <img
                    className="h-[150px]"
                    src={product_image}
                    alt={product_title}
                />
                <div className="text-left space-y-4 w-full">
                    <p className="font-bold">{product_title}</p>
                    <p className="text-gray-500 text-sm">{description}</p>
                    <p className="font-semibold">${price}</p>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                        <button
                            onClick={() => addToCart(product)}
                            className={
                                toggle
                                    ? "text-white btn-sm sm:btn-md border-color-pirmary bg-color-pirmary btn rounded-full px-6"
                                    : "hidden"
                            }
                        >
                            Add to Cart <AddToCard_SVG strokeColor="#ffffff" />
                        </button>
                        <button
                            onClick={() => removeCard(product)}
                            className="btn sm:hidden bg-red-100 btn-sm hover:bg-transparent border-red-500 text-[red] rounded-full shadow-none"
                        >
                            <Delete_SVG /> Remove
                        </button>
                    </div>
                </div>
            </div>
            <button
                onClick={() => removeCard(product)}
                className="btn hidden sm:block btn-circle bg-transparent btn-sm hover:bg-transparent border-none shadow-none"
            >
                <Delete_SVG />
            </button>
        </div>
    );
};

export default CartCards;
