import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      Primary: {
        50: "#F9F5FF",
      },
      main: {
        100: "#6366f1",
        200: "#4f46e5",
        300: "#4338ca",
        400: "#6366f1",
        500: "#8b5cf6",
        950: "#0e7490",
      },
      light: {
        100: "#FFFFFF",
        200: "#FAFAFA",
        300: "#EAECF0",
        400: "#A3A3A3",
        500: "#98A2B3",
      },
      dark: {
        100: "#344054",
        200: "#0D0D0D",
        500: "#404040",
        600: "#727272",
      },
      dove: {
        500: "#727272",
        600: "#636363",
      },
      Gray: {
        50: "#F9FAFB",
        200: "#D3D3D3",
        300: "#D0D5DD",
        500: "#667085",
        600: "#475467",
        800: "#1D2939",
        950: "#0D0D0D",
      },
      Gallery: {
        200: "#f0f0f0",
      },
      mineShaft: {
        800: "#393939",
      },
      alto: {
        200: "#DFDFDF",
      },
      tundora: {
        900: "#404040",
      },
      Blue: {
        50: "#EFF8FF",
      },
      zest: {
        500: "#E4761B",
      },
      Thunderbird: {
        500: "#FF4242",
        700: "#B42318",
      },
      Error: {
        50: "#FEF3F2",
      },
      Malachite: {
        500: "#10D046",
      },
    },
    extend: {
      maxWidth: {
        container: "1440px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        customPrimary: "0 1px 2px 0px rgba(16, 24, 40, 0.06)",
        customSecondary: "0 1px 3px 0px rgba(16, 24, 40, 0.1)",
        customThird: "0 10px 24px 0px rgba(0, 0, 0, 0.18)",
      },
    },
  },
  plugins: [],
};
export default config;
