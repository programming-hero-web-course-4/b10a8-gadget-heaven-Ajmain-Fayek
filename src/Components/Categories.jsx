import React from "react";

const Categories = () => {
    return (<div className="flex lg:flex-col flex-wrap lg:flex-nowrap justify-start items-start gap-4 p-4 rounded-xl border h-fit min-w-48">
        <button className="btn bg-color-pirmary text-white btn-sm lg:btn-md lg:w-full rounded-full justify-start">All Products</button>
        <button className="btn btn-sm lg:btn-md lg:w-full rounded-full justify-start">Laptops</button>
        <button className="btn btn-sm lg:btn-md lg:w-full rounded-full justify-start">Phones</button>
        <button className="btn btn-sm lg:btn-md lg:w-full rounded-full justify-start">Accessories</button>
        <button className="btn btn-sm lg:btn-md lg:w-full rounded-full justify-start">Smart Watches</button>
        <button className="btn btn-sm lg:btn-md lg:w-full rounded-full justify-start">MacBook</button>
        <button className="btn btn-sm lg:btn-md lg:w-full rounded-full justify-start">Iphone</button>
    </div>)
};

export default Categories;
