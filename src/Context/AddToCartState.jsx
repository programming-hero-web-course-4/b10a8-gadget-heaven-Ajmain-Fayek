import AddToCartContext from "./AddToCartContext";
import React, { useState } from "react";

const AddToCartState = (props) => {
    // Initial Cart Total Price Set
    const totalCartPrice = () => {
        if (localStorage.getItem("carts")) {
            const number = JSON.parse(localStorage.getItem("carts"));
            const totalPrice = number.reduce(
                (totalprice, product) => totalprice + product.price,
                0
            );
            return totalPrice;
        } else return 0;
    };

    // Cart Price Updatter
    const [cartTotalPrice, setCartTotalPrice] = useState(totalCartPrice());

    // Initial Cart Counter
    const cartCount = () => {
        if (localStorage.getItem("carts")) {
            const number = JSON.parse(localStorage.getItem("carts"));
            return number.length;
        } else return 0;
    };

    // Initial Wish list Counter
    const wishListCount = () => {
        if (localStorage.getItem("wishList")) {
            const number = JSON.parse(localStorage.getItem("wishList"));
            return number.length;
        } else return 0;
    };

    const [cartNumber, setCartNumber] = useState(cartCount());
    const [wishListNumber, setWishListNumber] = useState(wishListCount());

    // Handle Cart Button
    const handleCart = (product) => {
        if (localStorage.getItem("carts")) {
            const previusCart = JSON.parse(localStorage.getItem("carts"));

            // Check either the product exists or not
            const exist = previusCart.find(
                (p) => p.product_id == product.product_id
            );
            if (exist) return alert("Product already in Cart");
            if (product.availability != "In Stock")
                return alert("Product Out Of Stock");

            // If product does not exist then add to cart
            previusCart.push(product);

            // Cart price Setter / Count Total Price Using eval() method
            const totalPrice = previusCart.reduce(
                (totalprice, product) => totalprice + product.price,
                0
            );

            setCartTotalPrice(totalPrice);

            localStorage.setItem("carts", JSON.stringify(previusCart));
            // increase Cart Number
            setCartNumber(cartNumber + 1);
        } else {
            if (product.availability != "In Stock"){
                return alert("Product Out Of Stock");}

            localStorage.setItem("carts", JSON.stringify([product]));
            setCartNumber(cartNumber + 1);
            // Cart price Setter
            setCartTotalPrice(cartTotalPrice + product.price);
        }
    };

    // Handle Wish Button
    const handleWish = (product) => {
        if (localStorage.getItem("wishList")) {
            const previusWishList = JSON.parse(
                localStorage.getItem("wishList")
            );

            // Check either the product exists or not
            const exist = previusWishList.find(
                (p) => p.product_id == product.product_id
            );
            if (exist) return alert("Product already in Wish List");

            // If product does not exist then add to cart
            previusWishList.push(product);
            localStorage.setItem("wishList", JSON.stringify(previusWishList));
            // increase Cart Number
            setWishListNumber(wishListNumber + 1);
        } else {
            localStorage.setItem("wishList", JSON.stringify([product]));
            setWishListNumber(wishListNumber + 1);
        }
    };

    return (
        <AddToCartContext.Provider
            value={{
                handleCart,
                handleWish,
                setWishListNumber,
                setCartNumber,
                setCartTotalPrice,
                cartNumber,
                wishListNumber,
                cartTotalPrice,
            }}
        >
            {props.children}
        </AddToCartContext.Provider>
    );
};

export default AddToCartState;
