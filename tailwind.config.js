module.exports = {
  // mode: "jit",

  content: [
    "./src/components/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5F9EA0",
        //primary: "#3A3845",
        secondary: "#00cba9",
        tertiary: "#eeeeee",
      },
      spacing: {
        128: "32rem",
      }, 
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        logo: ["liismaiil", "cursive"],
      },
      /*  typography: (theme) => ({
     DEFAULT: {
          css: {
            color: theme("colors.gray.700", defaultTheme.colors.gray(700)), 
          },
        },
      }), */
    },
    darkMode: "media",
    screens: {
      "2xl": { min: "1280px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
