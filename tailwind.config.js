/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#633CFF",
        purpleHover: "#BEADFF",
        purpleLight: "#EFEBFF",
        greyDark: "#333333",
        grey: "#737373",
        greyLight: "FAFAFA",
        borders: "#D9D9D9",
        white: "#FFFFFF",
        red: "#FF3939",
      },
      fontFamily: {
        instrumentSans: ["Instrument Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
