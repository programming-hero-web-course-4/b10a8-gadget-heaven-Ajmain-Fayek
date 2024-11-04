import React from "react";
import WishList_SVG from "./WishList_SVG";
import AddToCard_SVG from "./AddToCard_SVG";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar gap-4 justify-between max-w-screen-2xl px-2 sm:px-6 md:px-10 lg:px-20 mx-auto">
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
                        className="menu menu-sm dropdown-content bg-color-pirmary text-white border rounded-box z-[1] mt-3 w-52 p-2 shadow-primary-shadow"
                    >
                        <li>
                            <Link to="/" className="link-hover">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/statistics" className="link-hover">
                                Statistics
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard" className="link-hover">
                                Dhashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/about us" className="link-hover">
                                About Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link
                    to="/"
                    className="text-lg sm:text-xl lg:text-2xl font-bold cursor-pointer"
                >
                    Gadget Heaven
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="gap-16 menu-horizontal px-1">
                    <li>
                        <Link to="/" className="link-hover">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/statistics" className="link-hover">
                            Statistics
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard" className="link-hover">
                            Dhashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/about us" className="link-hover">
                            About Us
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="gap-4">
                <a className="btn bg-white btn-circle">
                    <AddToCard_SVG />
                </a>
                <a className="btn bg-white btn-circle">
                    <WishList_SVG />
                </a>
            </div>
        </div>
    );
};

export default Navbar;
