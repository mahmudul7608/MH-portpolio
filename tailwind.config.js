module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.{vue,js}",
    "./pages/**/*.{vue,js}",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "base-100": "#0b0f19",
      },
      keyframes: {
        waves: {
          "0%, 100%": {
            clipPath:
              "polygon(0% 45%, 16% 44%, 33% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%)",
          },
          "50%": {
            clipPath:
              "polygon(0% 60%, 15% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%)",
          },
        },
        typingFrontend: {
          "0%": { width: "0%" },
          "50%": { width: "100%" },
          "100%": { width: "100%" },
        },
        typingDeveloper: {
          "0%, 50%": { width: "0%" },
          "50%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        waves: "waves 4s ease-in-out infinite",
        frontend: "typingFrontend 6s steps(30) infinite",
        developer: "typingDeveloper 6s steps(30) infinite",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
