import React from "react";
import { NavLink } from "react-router-dom";

const Categories = () => {
    


    return (
        <div className="category bg-white flex lg:flex-col flex-wrap lg:flex-nowrap justify-start items-start gap-4 p-4 rounded-xl border h-fit min-w-48">
            <NavLink
                to="/"
                id="c1"
                className=" category btn btn-sm lg:btn-md lg:w-full rounded-full justify-start"
            >
                All Products
            </NavLink>
            <NavLink
                to="/laptops"
                id="c2"
                className=" category btn btn-sm lg:btn-md lg:w-full rounded-full justify-start"
            >
                Laptops
            </NavLink>
            <NavLink
                to="/phones"
                id="c3"
                className=" category btn btn-sm lg:btn-md lg:w-full rounded-full justify-start"
            >
                Phones
            </NavLink>
            <NavLink
                to="/accessories"
                id="c4"
                className=" category btn btn-sm lg:btn-md lg:w-full rounded-full justify-start"
            >
                Accessories
            </NavLink>
            <NavLink
                to="/smartwatches"
                id="c5"
                className=" category btn btn-sm lg:btn-md lg:w-full rounded-full justify-start"
            >
                Smart Watches
            </NavLink>
            <NavLink
                to="/macbook"
                id="c6"
                className=" category btn btn-sm lg:btn-md lg:w-full rounded-full justify-start"
            >
                MacBook
            </NavLink>
            <NavLink
                to="/iphone"
                id="c7"
                className=" category btn btn-sm lg:btn-md lg:w-full rounded-full justify-start"
            >
                Iphone
            </NavLink>
        </div>
    );
};

export default Categories;
