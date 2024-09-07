/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_Pink: "hsl(322, 100%, 66%)",
                c_Light_Pink: "hsl(321, 100%, 78%)",
                c_Light_Red: "hsl(0, 100%, 63%)",
                c_Very_Dark_Cyan: "hsl(192, 100%, 9%)",
                c_Very_Pale_Blue: "hsl(207, 100%, 98%)",
            },
            fontFamily: {
                open_sans: ["Open Sans", "system-ui"],
                poppins: ["Poppins", "sans-serif"]
            }
        },
    },
    plugins: [],
}

