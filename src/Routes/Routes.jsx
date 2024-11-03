import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import About from "../Pages/About";
import ErrorPage from "../Pages/ErrorPage";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/statistics",
                element: <Statistics />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/about",
                element: <About />,
            },
        ],
    },
]);

export default routes;
