/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                //primary
                "pale-blue": "hsl(225, 100%, 94%)",
                "bright-blue": "hsl(245, 75%, 52%)",

                // Neutral

                "dark-blue": "hsl(223, 47%, 23%)",
                "desaturated-blue": "hsl(224, 23%, 55%)",
                "very-pale-blue": "hsl(225, 100%, 98%)",
            },
        },
    },
    plugins: [],
};
