module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFCFA",
          300: "#FFFCFA",
          400: "#FFFAF5",
          500: "#FFFAF5",
          600: "#FFC78F",
          700: "#FF962E",
          800: "#C76300",
          900: "#663300",
        },
        dark: {
          50: "#EBEBEA",
          100: "#D7D6D5",
          200: "#AFADAC",
          300: "#898785",
          400: "#605E5D",
          500: "#373635",
          600: "#2C2B2B",
          700: "#222121",
          800: "#151414",
          900: "#0A0A0A",
        },
        primary: {
          50: "#FAF5F0",
          100: "#F4ECE1",
          200: "#E8D6BF",
          300: "#DEC2A1",
          400: "#D3AF83",
          500: "#C89B63",
          600: "#B17E3E",
          700: "#845E2E",
          800: "#573D1F",
          900: "#2D2010",
        },
        secondary: {
          50: "#E5F6FF",
          100: "#C7EBFF",
          200: "#94DAFF",
          300: "#5CC6FF",
          400: "#29B4FF",
          500: "#009DEF",
          600: "#007EC2",
          700: "#005D8F",
          800: "#003F61",
          900: "#001E2E",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
