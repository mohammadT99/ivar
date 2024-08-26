import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

    },
  },
  darkMode: "class",
  plugins: [nextui({
    defaultTheme: 'dark',
    defaultExtendTheme:"dark" ,
    themes:{
      dark:{
        colors:{
          background:"#020204" ,
          primary:{
            DEFAULT:"#B6FF9C" ,
            foreground:"#020204" ,
          } ,
          secondary:{
            DEFAULT:"#0D5327" ,
            foreground:"#020204" ,
          } ,
          white:{
            DEFAULT:"#aaa",
            foreground:"#020204" ,
          }
        }

      }
    }
  })],
};
export default config;
