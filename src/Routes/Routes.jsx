import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import AboutUs from "../Pages/AboutUs";
import ErrorPage from "../Pages/ErrorPage";
import SetTitle from "../Components/setTitle";

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
                loader: ()=> fetch('./LaptopData.json'),
                element: (
                    <>
                        <SetTitle pagetitle="Home | Gadget Heaven" />
                        <Home />
                    </>
                ),
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
            },
            {
                path: "/about us",
                element: (
                    <>
                        <SetTitle pagetitle="About Us | Gadget Heaven" />
                        <AboutUs />
                    </>
                ),
            },
        ],
    },
]);

export default routes;
