/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundColor: {
                'darkGreen': '#001707',
                'lightGreen': '#16a34a',
            },
            textColor: {
                'darkGreen': '#001707',
                'lightGreen': '#16a34a',
            }
        },
    },
    plugins: [],
}