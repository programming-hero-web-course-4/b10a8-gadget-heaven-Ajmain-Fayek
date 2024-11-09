import React from "react";
import { toast, Bounce } from "react-toastify";

const ErrorToast = (msg = "This is a Success Toast") => {
    // Show Success Toast
    toast.error(msg, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
};

export default ErrorToast;
