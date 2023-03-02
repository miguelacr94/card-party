module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./core/components/**/*.{js,ts,jsx,tsx}",
    "./core/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#502b7c",
          Hover: "#b57bb3",
          light: "#cfabd2",
          light2: '#e2cee5'
        },
        secondary: {
          DEFAULT: "#ffdbf0",
        },
      },

      with: {

      },
      height: {
        banner: '500px'
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn .3s ease-in-out",
      },
      transitionProperty: {
        "invitation-card": "all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)",
        "invitation-card-description":
          "all 1s cubic-bezier(0.645, 0.045, 0.355, 1)",
      },
    },
  },
  plugins: [
    require("tailwindcss-debug-screens"),
    require("@tailwindcss/forms"),
  ],
};
