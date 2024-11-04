import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <>
            <section className="flex items-center h-full p-16">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-lg text-center">
                        <h2 className="mb-8 font-extrabold text-9xl text-color-pirmary shadow-primary-shadow">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">
                            Sorry, we couldn't find this page.
                        </p>
                        <p className="mt-4 mb-8 text-gray-600">{error.data}</p>
                        <Link
                            rel="noopener noreferrer"
                            to="/"
                            className="px-8 py-3 font-semibold rounded bg-color-pirmary text-gray-50"
                        >
                            Back to homepage
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ErrorPage;
