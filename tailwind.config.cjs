/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        'lantern-gradient': 'radial-gradient(121.58% 100% at var(--lantern-x) var(--lantern-y), #8690a6 0%, #d5d5d6 100%)',
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      colors: {
        primary: "#050816",
        secondary: "#000000",
        "black-100": "#383B45",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.tertiary': {
          backgroundImage: 'radial-gradient(121.58% 100% at var(--lantern-x) var(--lantern-y), #0c2e79 0%, #727289 100%)',
          '--lantern-y': '32.53125px',
          '--lantern-x': '382px',
        },
      });
    },
  ],
};
