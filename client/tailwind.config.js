module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        helvetica: ["helvetica"],
      },
      colors: {
        primarybg: "#edf0f8",
        sidebg: "#1C263D",
        sidebtn: "#304169",
        loginblue: "rgb(81,56,238)",
      },
      height: { side: "24px", header: "50px", chatf: "50px" },
      flex: { chat: "70%" },
      width: { side: "24px", login: "500px" },
      minHeight: { header: "80px" },
      minWidth: { side: "400px" },
      maxWidth: { side: "600px", login: "500px" },
      gridTemplateColumns: { convo: "90px 1fr 70px" },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
  },
  variants: {
    extend: {
      borderRadius: ["first", "last"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
