import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import AboutUs from "../Pages/AboutUs";
import ErrorPage from "../Pages/ErrorPage";
import SetTitle from "../Components/setTitle";
import ProductDetails from "../Pages/ProductDetails";
import Cart from "../Components/Cart";
import WishList from "../Components/WishList";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: (
            <>
                <SetTitle pagetitle="Error | Gadget Heaven" />
                <ErrorPage />
            </>
        ),
        children: [
            {
                path: "/",
                element: (
                    <>
                        <SetTitle pagetitle="Home | Gadget Heaven" />
                        <Home />
                    </>
                ),
                loader: async () => await fetch("/Laptops.json"),
            },
            {
                path: "/laptops",
                element: (
                    <>
                        <SetTitle pagetitle="Laptops | Gadget Heaven" />
                        <Home />
                    </>
                ),
                loader: async () => await fetch("/Laptops.json"),
            },
            {
                path: "/phones",
                element: (
                    <>
                        <SetTitle pagetitle="Phones | Gadget Heaven" />
                        <Home />
                    </>
                ),
                loader: async () => await fetch("/Phones.json"),
            },
            {
                path: "/accessories",
                element: (
                    <>
                        <SetTitle pagetitle="Accessories | Gadget Heaven" />
                        <Home />
                    </>
                ),
                loader: async () => await fetch("/Accessories.json"),
            },
            {
                path: "/iphone",
                element: (
                    <>
                        <SetTitle pagetitle="Iphones | Gadget Heaven" />
                        <Home />
                    </>
                ),
                loader: async () => await fetch("/Iphone.json"),
            },
            {
                path: "/smartwatches",
                element: (
                    <>
                        <SetTitle pagetitle="Smart Watches | Gadget Heaven" />
                        <Home />
                    </>
                ),
                loader: async () => await fetch("/SmartWatches.json"),
            },
            {
                path: "/macbook",
                element: (
                    <>
                        <SetTitle pagetitle="MacBooks | Gadget Heaven" />
                        <Home />
                    </>
                ),
                loader: async () => await fetch("/MacBook.json"),
            },
            {
                path: "/statistics",
                element: (
                    <>
                        <SetTitle pagetitle="Statistics | Gadget Heaven" />
                        <Statistics />
                    </>
                ),
            },
            {
                path: "/dashboard",
                element: (
                    <>
                        <SetTitle pagetitle="Dashboard | Gadget Heaven" />
                        <Dashboard />
                    </>
                ),
                children: [
                    {
                        path: "/dashboard",
                        element: <Cart />,
                    },
                    {
                        path: "/dashboard/wishlist",
                        element: <WishList />,
                    },
                ],
            },
            {
                path: "/aboutUs",
                element: (
                    <>
                        <SetTitle pagetitle="About Us | Gadget Heaven" />
                        <AboutUs />
                    </>
                ),
            },
            {
                path: "/details/:productsName",
                element: <ProductDetails />,
            },
        ],
    },
]);

export default routes;
