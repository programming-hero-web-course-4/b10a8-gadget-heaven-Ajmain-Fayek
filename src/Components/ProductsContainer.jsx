import React from "react";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import { useLoaderData } from "react-router-dom";

const ProductsContainer = () => {
    const laptops = useLoaderData();

    return (
        <>
            {/* Heading */}
            <p className="text-center px-4 py-6 lg:py-14 font-bold text-2xl md:text-3xl lg:text-4xl">Explore Cutting-Edge Gadgets</p>
            {/* Categories   ||   ProductCard  */}
            <div className="flex flex-col lg:flex-row gap-6 w-full">
                <Categories />
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center lg:grid-cols-3 gap-2">
                    {laptops.map((laptop) => (
                        <ProductCard
                            key={laptop.product_id}
                            name={laptop.product_title}
                            imageUrl={laptop.product_image}
                            price={laptop.price}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductsContainer;
