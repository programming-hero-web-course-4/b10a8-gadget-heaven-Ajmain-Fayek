import React, { useContext, useState } from "react";
import ProductDetailsContext from "../Context/ProductDetailsContext";
import Heading from "../Components/Heading";
import AddToCard_SVG from "../Components/AddToCard_SVG";
import WishList_SVG from "../Components/WishList_SVG";
import ReactStars from "react-rating-stars-component";
import AddToCartContext from "../Context/AddToCartContext";

const ProductDetails = () => {
    const { productDetails } = useContext(ProductDetailsContext);
    const { handleCart, handleWish } = useContext(AddToCartContext);

    const {
        product_id,
        product_image,
        product_title,
        price,
        availability,
        description,
        specification,
        rating,
    } = productDetails;

    let specCount = 1;

    const ratingStar = {
        size: 30,
        value: rating,
        isHalf: true,
        edit: false,
    };

    const wishDisabled = (productDetails) => {
        handleWish(productDetails);
        document.getElementById(product_id).classList =
            "btn btn-disabled btn-circle bg-white border-gray-300";
    };

    return (
        <>
            <div className="bg-color-pirmary text-center pt-10 pb-36 -mt-4">
                <Heading
                    title={"Product Details"}
                    subtitle={
                        "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
                    }
                    titleColor="text-white"
                    subtitleColor="text-white/80"
                />
            </div>
            <div className="p-4 bg-white max-w-screen-xl w-11/12 mx-auto rounded-2xl border -mt-28 flex gap-4 flex-col sm:flex-row">
                <div className="w-full sm:w-fit flex items-center justify-center">
                    <img
                        src={product_image}
                        alt="productDetails.product_image"
                    />
                </div>
                <div className="flex flex-col justify-center items-start space-y-4">
                    <p className="font-bold text-xl">{product_title}</p>
                    <p className="font-semibold text-black/8">
                        Price: ${price}
                    </p>
                    <p
                        className={
                            availability == "In Stock"
                                ? "border border-green-600 py-1 px-2 text-xs font-semibold text-green-600 bg-green-50 rounded-full"
                                : "border border-red-600 py-1 px-2 text-xs font-semibold text-red-600 bg-red-50 rounded-full"
                        }
                    >
                        {availability}
                    </p>
                    <p className="text-black/75">{description}</p>
                    <div>
                        {/* Specifiactions */}
                        <p className="font-semibold mb-1">Specification: </p>
                        {specification.map((spec) => (
                            <p key={specCount++} className="text-black/75">
                                {specCount++}. {spec}
                            </p>
                        ))}
                    </div>

                    {/* Ratting */}
                    <div className="space-y-1">
                        <p className="font-semibold">Rating ⭐</p>
                        <div className="flex items-center gap-2">
                            <ReactStars {...ratingStar} />
                            <p className="bg-gray-200 py-1 px-4 rounded-full">
                                {rating}
                            </p>
                        </div>
                    </div>

                    {/* Buttons Sections */}
                    <div className="flex items-center justify-start gap-2">
                        <button
                            onClick={() => handleCart(productDetails)}
                            className="flex items-center justify-center gap-1.5 text-white btn rounded-full bg-color-pirmary"
                        >
                            Add to Cart <AddToCard_SVG strokeColor="#ffffff" />
                        </button>
                        <button
                            id={product_id}
                            onClick={() => wishDisabled(productDetails)}
                            className="btn btn-circle bg-white border-gray-300"
                        >
                            <WishList_SVG />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
