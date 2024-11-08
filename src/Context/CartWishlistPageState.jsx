import CartWishlistPageContext from "./CartWishlistPageContext";
import AddToCartContext from "./AddToCartContext";
import React, { useContext, useEffect, useState } from "react";

const CartWishlistPageState = (props) => {
    const { cartNumber } = useContext(AddToCartContext);
    // Get Initial wishlist
    const wishListProducts = () => {
        if (localStorage.getItem("wishList")) {
            const wishlist = JSON.parse(localStorage.getItem("wishList"));
            return wishlist;
        }
    };

    // Remove & Update Wishlist
    const [wishList, setWishlist] = useState(wishListProducts());

    const removeWish = (PfromW) => {
        const wish = JSON.parse(localStorage.getItem("wishList"));
        const newWish = wish.filter((w) => w.product_id != PfromW);
        setWishlist(newWish);
        if (newWish.length == 0) return localStorage.removeItem("wishList");
        localStorage.setItem("wishList", JSON.stringify(newWish));
    };

    // Get Initial Cart
    const CartProducts = () => {
        if (localStorage.getItem("carts")) {
            const cart = JSON.parse(localStorage.getItem("carts"));
            return cart;
        }
    };

    // Remove & update Cart
    const [cart, setCart] = useState(CartProducts());

    useEffect(() => {
        if (localStorage.getItem("carts")) {
            const cart = JSON.parse(localStorage.getItem("carts"));
            setCart(cart);
        }
    }, [cartNumber]);

    const removeCart = (PfromC) => {
        const cart = JSON.parse(localStorage.getItem("carts"));
        const newCart = cart.filter((c) => c.product_id != PfromC);

        setCart(newCart);
        if (newCart.length == 0) return localStorage.removeItem("carts");
        localStorage.setItem("carts", JSON.stringify(newCart));
    };

    // Sort cart By Price <H-L>
    const sortCart = () => {
        const cart = JSON.parse(localStorage.getItem("carts"));
        const newCart = cart.sort((a, b) => b.price - a.price);
        setCart(newCart);
        localStorage.setItem("carts", JSON.stringify(newCart));
    };
    return (
        <CartWishlistPageContext.Provider
            value={{
                removeWish,
                removeCart,
                sortCart,
                wishList,
                cart,
            }}
        >
            {props.children}
        </CartWishlistPageContext.Provider>
    );
};

export default CartWishlistPageState;
