/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  images: {
    domains: ["flowbite.com"], // Add flowbite.com to the list of allowed domains
  },
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
