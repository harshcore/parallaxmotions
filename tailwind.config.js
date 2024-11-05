/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fricolage: ["Fricolage Grotesque"],
        mackinac: ["Mackinac"],
        fragment: ["Fragment Mono"],
      },
      backgroundImage: {
        "purple-primary":
          "linear-gradient(to bottom right, #A02BE4, transparent, #4f46e5)",
      },
    },
  },
  plugins: [],
};
