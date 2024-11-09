import React from "react";
import Heading from "../Components/Heading";

const AboutUs = () => {
    return (
        <>
            <div className="bg-color-pirmary text-center py-10 -mt-4">
                <Heading
                    title={"About Us"}
                    subtitle={
                        "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
                    }
                    titleColor="text-white"
                    subtitleColor="text-white/80"
                />
            </div>
            <div className="max-w-screen-2xl mx-auto px-2 sm:px-6 md:px-10 lg:px-28 mt-8">
                <div className="bg-white py-6 rounded-2xl space-y-10 mx-auto px-4">
                    <p className="text">
                        Welcome to <b>Gadget Haven your</b> ultimate hub for the
                        latest and greatest in tech! Here, you'll find a
                        handpicked selection of top-tier laptops, innovative
                        smartwatches, advanced smartphones, and must-have
                        accessories designed to elevate your tech experience. At
                        Gadget Haven, we bring you in-depth reviews, expert
                        insights, and a seamless shopping experience to help you
                        make the best choice for your lifestyle. Dive into a
                        world of possibilities and discover gadgets that blend
                        functionality with style. Gadget Haven is where
                        technology meets passion!
                    </p>
                    <div className="flex sm:justify-evenly flex-col sm:flex-row gap-8">
                        <div>
                            <p className="font-bold sm:text-xl text-lg">
                                # Tech Used Building this Master Piece
                            </p>
                            <ul className="list-disc ml-10">
                                <li>
                                    <b>React</b>
                                    <ul className="list-disc ml-10">
                                        <li>Props</li>
                                        <li>useState</li>
                                        <li>useEffect</li>
                                        <li>Context API</li>
                                        <li>React SVG</li>
                                    </ul>
                                </li>
                                <li>
                                    <b>React Router</b>
                                    <ul className="list-disc ml-10">
                                        <li>Link</li>
                                        <li>NavLink</li>
                                        <li>useLocation</li>
                                        <li>useNavigate</li>
                                        <li>useRouteError</li>
                                    </ul>
                                </li>
                                <li>
                                    <b>ES6</b>
                                    <ul className="list-disc ml-10">
                                        <li>filter()</li>
                                        <li>reduce()</li>
                                        <li>map()</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold sm:text-xl text-lg">
                                # Key Features
                            </p>
                            <ul className="list-disc ml-10">
                                <li>Add/Remove Cart</li>
                                <li>Add/Remove Wishlist</li>
                                <li>Short Cart</li>
                                <li>Can't Add Same product to Cart/Wishlist</li>
                                <li>View Total Price at Cart Section</li>
                                <li>View Statistics</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
