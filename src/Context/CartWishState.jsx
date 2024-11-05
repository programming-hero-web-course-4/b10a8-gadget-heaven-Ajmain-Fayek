import React, { useState } from "react";
import CartWishContext from "./ButtonsActiveStateContext";

const CartWishState = (props) => {
    const [toggleCart, setToggleCard] = useState(false);
    const [toggleWishlist, setToggleWishlist] = useState(false);

    const cartBtn = () => {
        setToggleCard(true);
        setToggleWishlist(false);
    };
    const wishListBtn = () => {
        setToggleCard(false);
        setToggleWishlist(true);
    };

    const defaultBtn = () => {
        setToggleCard(false);
        setToggleWishlist(false);
    };

    return (
        <CartWishContext.Provider
            value={{
                cartBtn,
                wishListBtn,
                defaultBtn,
                toggleCart,
                toggleWishlist,
            }}
        >
            {props.children}
        </CartWishContext.Provider>
    );
};

export default CartWishState;
