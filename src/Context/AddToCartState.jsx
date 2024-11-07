import AddToCartContext from "./AddToCartContext";
import React, { useState } from "react";

const AddToCartState = (props) => {
    const cartCount = () => {
        if (localStorage.getItem("carts")) {
            const number = JSON.parse(localStorage.getItem("carts"));
            return number.length;
        } else return 0;
    };

    const [cartNumber, setCartNumber] = useState(cartCount());

    const showAlert = () => {
        alert("product already in Cart");
        return;
    };

    const handleCart = (laptop) => {
        if (localStorage.getItem("carts")) {
            const previusCart = JSON.parse(localStorage.getItem("carts"));

            // Set product in to the cart Calling this function
            const setCart = () => {
                previusCart.push(laptop);
                localStorage.setItem("carts", JSON.stringify(previusCart));
                // increase Cart Number
                setCartNumber(cartNumber + 1);
            };

            // Cheke product is already in cart or not, if not then call setCart() function
            previusCart.map((product) => {
                product.product_id == laptop.product_id
                    ? showAlert()
                    : setCart();
            });
        } else {
            localStorage.setItem("carts", JSON.stringify([laptop]));
            setCartNumber(cartNumber + 1);
        }
    };

    return (
        <AddToCartContext.Provider value={{ handleCart, cartNumber }}>
            {props.children}
        </AddToCartContext.Provider>
    );
};

export default AddToCartState;
