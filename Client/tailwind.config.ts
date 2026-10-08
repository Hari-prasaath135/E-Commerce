import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "footergray": "hsl(0, 0%, 60%)",
        "silver":"hsl(0, 0%, 47%)",
        "footerblack":"#13241b",
        "salmon":"#2f8064",
        "sandyBrown": "#c28e57",
        "bittersweet": "#c05638",
        "oceanGreen": "#2f8064",
        "davysilver":"hsl(0, 0%, 33%)",
        "cultured": "#f0f5ee",
        "white": "hsl(0, 100%, 100%)",
        "onyx": "#23332a",
        "eblack":"#16241c",
        "blueIn":"#1c533f",
        "blueAc":"#2f8064",
        "btnpurple":"#245e4a",
        "ecoForest": "#164c3b",
        "ecoGreen": "#2f8064",
        "ecoLeaf": "#72a95a",
        "ecoSage": "#e7f0e6",
        "ecoCream": "#fbfaf4",
        "ecoSand": "#e8ddc8",
        "ecoInk": "#20352e",
        "ecoMuted": "#68766f",
        "ecoEarth": "#b36b3c",
        primary: {"50":"#f2f8f4","100":"#e1efe7","200":"#c4dfcf","300":"#9cc6b0","400":"#6fa78d","500":"#2f8064","600":"#246851","700":"#1e5341","800":"#1b4335","900":"#164c3b","950":"#0c221a"},
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      dropShadow: {
        'custom-xl': '0 0 5px rgba(0, 0, 0, 0.25)', // Example values, adjust as needed
      },
      fontFamily: {
      'body': [
      'Inter', 
      'ui-sans-serif', 
      'system-ui', 
      '-apple-system', 
      'system-ui', 
      'Segoe UI', 
      'Roboto', 
      'Helvetica Neue', 
      'Arial', 
      'Noto Sans', 
      'sans-serif', 
      'Apple Color Emoji', 
      'Segoe UI Emoji', 
      'Segoe UI Symbol', 
      'Noto Color Emoji'
    ],
        'sans': [
      'Inter', 
      'ui-sans-serif', 
      'system-ui', 
      '-apple-system', 
      'system-ui', 
      'Segoe UI', 
      'Roboto', 
      'Helvetica Neue', 
      'Arial', 
      'Noto Sans', 
      'sans-serif', 
      'Apple Color Emoji', 
      'Segoe UI Emoji', 
      'Segoe UI Symbol', 
      'Noto Color Emoji'
    ]
      }
    },
  },
  darkMode: "class",
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
  
};
export default config;
