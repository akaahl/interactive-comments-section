const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        "primary-moderate-blue": "hsl(238, 40%, 52%)",
        "primary-soft-red": "hsl(358, 79%, 66%)",
        "primary-light-grayish-blue": "hsl(239, 57%, 85%)",
        "primary-pale-red": "hsl(357, 100%, 86%)",
        "neutral-dark-blue": "hsl(212, 24%, 26%)",
        "neutral-grayish-blue": "hsl(211, 10%, 45%)",
        "neutral-light-gray": "hsl(223, 19%, 93%)",
        "neutral-very-light-gray": "hsl(228, 33%, 97%)",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("not-first", "&:not(:first-child)");
    }),
  ],
};
