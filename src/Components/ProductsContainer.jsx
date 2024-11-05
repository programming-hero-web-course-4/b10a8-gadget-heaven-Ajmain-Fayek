import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import { useLoaderData } from "react-router-dom";

const ProductsContainer = () => {
    // const [laptop, setLaptopdata] = useState(null);

    const laptopsData = useLoaderData();
    // let laptop = laptopsData;

    // setLaptopdata([...laptopsData]);

    // useEffect(() => {
    //     if (laptopsData) {
    //         laptop = [laptopsData];
    //         console.log([...laptopsData]);
    //     }
    // }, [laptopsData]);

    // console.log(laptop);


    return (
        <div className="mx-auto">
            {/* Heading */}
            <p className="text-center px-4 py-6 lg:py-14 font-bold text-2xl md:text-3xl lg:text-4xl">
                Explore Cutting-Edge Gadgets
            </p>
            
            {/* Categories   ||   ProductCard  */}
            <div className="flex flex-col lg:flex-row gap-4">
                <Categories />
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center lg:grid-cols-3 gap-2 mx-auto">
                    {laptopsData.map((laptop) => (
                        <ProductCard
                            key={laptop.product_id}
                            name={laptop.product_title}
                            imageUrl={laptop.product_image}
                            price={laptop.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsContainer;
