import React, { useContext, useState, useEffect } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import CartWishContext from "../Context/ButtonsActiveStateContext";
import Heading from "../Components/Heading";

const Dashboard = () => {
    const { wishListBtn, cartBtn } = useContext(CartWishContext);

    const loaction = useLocation();

    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        if (location.pathname == "/dashboard") {
            return setToggle(true);
        } else return setToggle(false);
    }, [loaction]);

    return (
        <>
            <div className="bg-color-pirmary text-center py-6 -mt-4">
                <Heading
                    title={"Dashboard"}
                    subtitle={
                        "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
                    }
                    titleColor="text-white"
                    subtitleColor="text-white/80"
                />
                <div className="space-x-2 dashboard-btn">
                    <NavLink
                        onClick={cartBtn}
                        to="/dashboard"
                        className={
                            toggle
                                ? "btn btn-sm text-color-pirmary bg-white rounded-full py-2 px-10 h-0"
                                : "btn btn-sm bg-color-pirmary text-white rounded-full py-2 px-10 h-0"
                        }
                    >
                        Cart
                    </NavLink>
                    <NavLink
                        onClick={wishListBtn}
                        to="/dashboard/wishlist"
                        className={
                            toggle
                                ? "btn btn-sm bg-color-pirmary text-white rounded-full py-2 px-10 h-0"
                                : "btn btn-sm text-color-pirmary bg-white rounded-full py-2 px-10 h-0"
                        }
                    >
                        wishlist
                    </NavLink>
                </div>
            </div>
            <div className="text-center mx-auto">
                <Outlet />
            </div>
        </>
    );
};

export default Dashboard;
