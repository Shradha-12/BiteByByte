/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        violet: "rgba(220, 151, 255, 0.6)",
        dimgray: "rgba(87, 87, 87, 0.81)",
        indigo: "#4a0a77",
        gray: "rgba(255, 255, 255, 0.6)",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      xs: "12px",
      base: "16px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
