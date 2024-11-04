import React from "react";

const ProductCard = ({name = "Example Product", imageUrl = null, price = "99.99"}) => {
    return (
        <div className="space-y-4 rounded-lg bg-white p-6 shadow-sm border">
            <img
                className={`h-[225px] w-[225px] rounded-lg object-cover ${
                    imageUrl ? "bg-white" : "bg-gray-300"
                }`}
                src={imageUrl}
                alt="card navigate ui"
            />
            <div className="grid gap-2">
                <h1 className="text-lg font-bold ">{name}</h1>
                <div className="text-base font-semibold text-gray-600">
                    Price : ${price}
                </div>
            </div>
            <div className="flex gap-4">
                <button className="rounded-full text-color-pirmary border border-color-pirmary px-4  py-2  duration-300 hover:bg-gray-200">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default ProductCard;