import React, { useContext } from "react";
import Heading from "../Components/Heading";
import { Link } from "react-router-dom";
import CartWishContext from "../Context/ButtonsActiveStateContext";

const Footer = () => {
    const { defaultBtn } = useContext(CartWishContext);
    return (
        <footer className="lg:py-24 lg:px-36 px-6 py-10 space-y-4">
            <div className="-mb-4">
                {/* Heading */}
                <Heading
                    title="Gadget Heaven"
                    subtitle="Leading the way in cutting-edge technology and innovation."
                />
            </div>
            <hr />
            <div className="flex flex-col md:flex-row gap-6 md:gap-36 lg:gap-40  justify-center text-center">
                <nav className="flex flex-col text-center">
                    <h6 className="footer-title opacity-100">Services</h6>
                    <Link
                        onClick={defaultBtn}
                        to="/product support"
                        className="link link-hover w-fit mx-auto text-gray-500 text-sm md:text-base"
                    >
                        Product Support
                    </Link>
                    <Link
                        onClick={defaultBtn}
                        to="/order tracking"
                        className="link link-hover w-fit mx-auto text-gray-500 text-sm md:text-base"
                    >
                        Order Tracking
                    </Link>
                    <Link
                        onClick={defaultBtn}
                        to="/shipping & selivery"
                        className="link link-hover w-fit mx-auto text-gray-500 text-sm md:text-base"
                    >
                        Shipping & Delivery
                    </Link>
                    <Link
                        onClick={defaultBtn}
                        to="/returns"
                        className="link link-hover w-fit mx-auto text-gray-500 text-sm md:text-base"
                    >
                        Returns
                    </Link>
                </nav>
                <nav className="flex flex-col text-center">
                    <h6 className="footer-title opacity-100">Company</h6>
                    <Link
                        onClick={defaultBtn}
                        to="/aboutUs"
                        className="link link-hover w-fit mx-auto text-gray-500 text-sm md:text-base"
                    >
                        About Us
                    </Link>
                    <Link
                        onClick={defaultBtn}
                        to="/careers"
                        className="link link-hover w-fit mx-auto text-gray-500 text-sm md:text-base"
                    >
                        Careers
                    </Link>
                    <Link
                        onClick={defaultBtn}
                        to="/contact"
                        className="link link-hover w-fit mx-auto text-gray-500 text-sm md:text-base"
                    >
                        Contact
                    </Link>
                </nav>
                <nav className="flex flex-col text-center">
                    <h6 className="footer-title opacity-100">Legal</h6>
                    <Link
                        onClick={defaultBtn}
                        to="Terms of Service"
                        className="link link-hover w-fit mx-auto text-gray-500 text-sm md:text-base"
                    >
                        Terms of Service
                    </Link>
                    <Link
                        onClick={defaultBtn}
                        to="Privacy policy"
                        className="link link-hover w-fit mx-auto text-gray-500 text-sm md:text-base"
                    >
                        Privacy policy
                    </Link>
                    <Link
                        onClick={defaultBtn}
                        to="Cookie policy"
                        className="link link-hover w-fit mx-auto text-gray-500 text-sm md:text-base"
                    >
                        Cookie policy
                    </Link>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
