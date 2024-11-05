import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import CartWishContext from "../Context/ButtonsActiveStateContext";

const Dashboard = () => {
    const { wishListBtn, cartBtn } = useContext(CartWishContext);
    // const [toggleCart, setToggleCard] = useState(false);
    // const [toggleWishlist, setToggleWishlist] = useState(false);

    // const cartBtn = () => {
    //     setToggleCard(true);
    //     setToggleWishlist(false);
    // };
    // const wishListBtn = () => {
    //     setToggleCard(false);
    //     setToggleWishlist(true);
    // };

    // const defaultBtn = () => {
    //     setToggleCard(false);
    //     setToggleWishlist(false);
    // };
    return (
        <>
            <div>Dashboard</div>
            <Link onClick={cartBtn} to="/dashboard">
                Cart
            </Link>
            <br />
            <Link onClick={wishListBtn} to="/dashboard/wishlist">
                wishlist
            </Link>
            <Outlet />
        </>
    );
};

export default Dashboard;
