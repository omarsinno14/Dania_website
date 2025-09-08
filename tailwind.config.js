/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#f7fbff",          // page background
          surface: "#ffffff",     // cards/nav
          ink: "#0f172a",         // primary text
          mute: "#64748b",        // secondary text
          primary: "#0ea5e9",     // medical blue
          primaryDark: "#0369a1", // deeper blue
          accent: "#10b981",      // gentle teal
        },
      },
      boxShadow: {
        soft: "0 6px 20px rgba(2,132,199,0.08)",
        lift: "0 12px 30px rgba(2,132,199,0.14)",
      },
      borderRadius: { xlg: "1.25rem" },
    },
  },
  plugins: [],
};
