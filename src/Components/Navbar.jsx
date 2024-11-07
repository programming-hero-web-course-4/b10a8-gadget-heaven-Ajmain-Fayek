import React, { useState, useContext, useEffect } from "react";
import WishList_SVG from "./WishList_SVG";
import AddToCard_SVG from "./AddToCard_SVG";
import { NavLink, Link, useLocation } from "react-router-dom";
import CartWishContext from "../Context/ButtonsActiveStateContext";
import AddToCartContext from "../Context/AddToCartContext";

const Navbar = () => {
    const { cartBtn, wishListBtn, defaultBtn, toggleCart, toggleWishlist } =
        useContext(CartWishContext);
    
    const { cartNumber, wishListNumber } = useContext(AddToCartContext);

    const location = useLocation();

    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        if (location.pathname == "/") {
            return setToggle(true);
        } else return setToggle(false);
    }, [location]);

    return (
        <div className="navbar gap-4 justify-between max-w-screen-2xl px-2 sm:px-6 md:px-10 lg:px-20 mx-auto py-4">
            <div className="flex items-center">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden mr-1.5"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="navbarLink  menu menu-sm dropdown-content bg-color-pirmary text-white border rounded-box z-[1] mt-3 w-52 p-2 shadow-primary-shadow"
                    >
                        <li className="home">
                            <NavLink
                                onClick={defaultBtn}
                                to="/"
                                className="link-hover"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={defaultBtn}
                                to="/statistics"
                                className="link-hover"
                            >
                                Statistics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={cartBtn}
                                to="/dashboard"
                                className="link-hover"
                            >
                                Dhashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={defaultBtn}
                                to="/aboutUs"
                                className="link-hover"
                            >
                                About Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <Link
                    onClick={defaultBtn}
                    to="/"
                    style={toggle ? { color: "white" } : { color: "black" }}
                    className="text-lg sm:text-xl lg:text-2xl font-bold cursor-pointer"
                >
                    Gadget Heaven
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul
                    className={
                        toggle
                            ? "navbarLink gap-16 menu-horizontal px-1 text-white"
                            : "navbarLink gap-16 menu-horizontal px-1"
                    }
                >
                    <li className="home">
                        <NavLink
                            onClick={defaultBtn}
                            to="/"
                            style={
                                toggle
                                    ? {
                                          color: "white",
                                          textDecoration: "underline",
                                      }
                                    : { color: "black" }
                            }
                            className="link-hover"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            onClick={defaultBtn}
                            to="/statistics"
                            className="link-hover"
                        >
                            Statistics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            onClick={cartBtn}
                            to="/dashboard"
                            className="link-hover"
                        >
                            Dhashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            onClick={defaultBtn}
                            to="/aboutUs"
                            className="link-hover"
                        >
                            About Us
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="cartWishBtn gap-4">
                {/* Cart */}
                <div className="relative">
                    <NavLink
                        onClick={cartBtn}
                        to="/dashboard"
                        className={
                            toggleCart
                                ? "btn bg-color-pirmary btn-circle"
                                : "btn bg-white btn-circle"
                        }
                    >
                        <AddToCard_SVG />
                    </NavLink>

                    {/* Cart Number */}
                    <p
                        className={
                            cartNumber == 0
                                ? "hidden"
                                : "absolute -top-1 -right-1 border bg-yellow-300 rounded-full px-1 font-semibold text-xs"
                        }
                    >
                        {cartNumber}
                    </p>
                </div>

                {/* Wish List */}
                <div className="relative">
                    <NavLink
                        onClick={wishListBtn}
                        to="/dashboard/wishlist"
                        className={
                            toggleWishlist
                                ? "btn bg-color-pirmary btn-circle"
                                : "btn bg-white btn-circle"
                        }
                    >
                        <WishList_SVG />
                    </NavLink>
                    {/* Wishlist Number */}
                    <p
                        className={
                            wishListNumber == 0
                                ? "hidden"
                                : "absolute -top-1 -right-1 border bg-yellow-300 rounded-full px-1 font-semibold text-xs"
                        }
                    >
                        {wishListNumber}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
