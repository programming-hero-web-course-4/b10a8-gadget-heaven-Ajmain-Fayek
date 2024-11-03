/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                "color-pirmary": "rgb(149, 56, 226)",
                "primary-shadow":
                    "inset 0rem 0.25rem 3.13rem 0rem rgba(11, 11, 11, 0.15)",
                "color-secondary": "rgba(9, 8, 15, 0.05)",
            },
            fontFamily: {
                sora: '"Sora", serif',
            },
        },
    },
    plugins: [require("daisyui")],
};
