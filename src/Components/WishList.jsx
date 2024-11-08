import React, { useContext, useEffect, useState } from "react";
import Cart_WishList_Cards from "./Cart_WishList_Cards";
import CartWishlistPageContext from "../Context/CartWishlistPageContext";
import AddToCartContext from "../Context/AddToCartContext";

const WishList = () => {
    const { wishList } = useContext(CartWishlistPageContext);
    const { wishListNumber } = useContext(AddToCartContext);

    return (
        <>
            <div className="max-w-screen-2xl mx-auto px-2 pt-10 pb-6 sm:px-6 md:px-10 lg:px-28 text-center">
                <p className="font-bold text-left pt-2">WishList</p>
                <div
                    className={
                        wishListNumber == 0
                            ? "py-2 rounded-xl bg-red-100 border-red-300 border text-red-600 mt-4"
                            : "hidden"
                    }
                >
                    You Haven't Wished Any Item
                </div>

                <div className={wishListNumber == 0 ? "hidden" : "pt-6 space-y-4"}>
                    {wishList &&
                        wishList.length &&
                        wishList.map((product) => (
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

export default WishList;
