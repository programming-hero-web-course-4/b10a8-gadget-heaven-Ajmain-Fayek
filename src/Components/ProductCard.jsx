import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ProductDetailsContext from "../Context/ProductDetailsContext";

const ProductCard = ({
    name = "Example Product",
    imageUrl = null,
    price = "99.99",
    laptop,
}) => {
    const { handleProductDetails } = useContext(
        ProductDetailsContext
    );
    // console.log(productDetails);

    const navigate = useNavigate();

    const evendHandle = (laptop, name) => {
        navigate(`/details/${name}`);
        handleProductDetails(laptop);
    };

    return (
        <div className="space-y-4 rounded-xl bg-white p-6 shadow-sm border w-full mx-auto">
            <img
                className={`w-[250px] min-h-[150px] rounded-lg object-cover mx-auto ${
                    imageUrl ? "bg-white" : "bg-gray-300"
                }`}
                src={imageUrl}
                alt={name}
            />
            <div className="grid gap-2">
                <h1 className="text-lg font-bold ">{name}</h1>
                <div className="text-base font-semibold text-gray-600">
                    Price : ${price}
                </div>
            </div>
            <div className="flex gap-4">
                <button
                    onClick={() =>  evendHandle(laptop, name)}
                    className="rounded-full text-color-pirmary border border-color-pirmary px-4  py-2  duration-300 hover:bg-gray-200"
                >
                    View Details
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
