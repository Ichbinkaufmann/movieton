import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        fontFamily: {
            poppins: "Poppins, sans-serif",
        },
        extend: {
            colors: {
                mtcolor: "#FF4136",
                mtfocus: "#FB8F78",
                mtcolorhover: "#DD4524",
                "gray-1": "#B4B4B4",
                "gray-2": "#E2E0E0",
                "form-bg": "#212121",
            },
            screens: {
                laptopLg: "1160px",
                laptopXl: "1360px",
                tablet: "640px",
                phoneSm: "390px",
                phoneLg: "420px",
            },
        },
    },

    plugins: [forms],
};
