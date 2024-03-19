import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "white-transparent-10": "rgba(255, 255, 255, 0.1)",
        "white-transparent-15": "rgba(255, 255, 255, 0.15)",
        "white-transparent-20": "rgba(255, 255, 255, 0.2)",
        "white-transparent-50": "rgba(255, 255, 255, 0.5)",
      },
      spacing: {
        "480px": "480px",
      },
    },
  },
  plugins: [],
};
export default config;
