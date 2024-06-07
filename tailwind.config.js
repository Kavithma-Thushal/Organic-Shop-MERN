/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundColor: {
                'darkGreen': '#001800',
                'neonGreen': '#39ff14',
            },
            textColor: {
                'darkGreen': '#001800',
                'neonGreen': '#39ff14',
            }
        },
    },
    plugins: [],
}