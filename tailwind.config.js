import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        dividerWeight: "1px", 
        disabledOpacity: 0.45, 
        fontSize: {
          tiny: "0.75rem",
          small: "0.875rem",
          medium: "0.9375rem",
          large: "1.125rem",
        },
        lineHeight: {
          tiny: "1rem", 
          small: "1.25rem", 
          medium: "1.5rem", 
          large: "1.75rem", 
        },
        radius: {
          small: "6px", 
          medium: "8px", 
          large: "12px", 
        },
        borderWidth: {
          small: "1px", 
          medium: "1px", 
          large: "2px", 
        },
      },
      themes: {
        dark: {
          colors: {
            background: {
              DEFAULT: "#000000"
            },
            content1: {
              DEFAULT: "#18181b",
              foreground: "#fafafa"
            },
            content2: {
              DEFAULT: "#27272a",
              foreground: "#f4f4f5"
            },
            content3: {
              DEFAULT: "#3f3f46",
              foreground: "#e4e4e7"
            },
            content4: {
              DEFAULT: "#52525b",
              foreground: "#d4d4d8"
            },
            divider: {
              DEFAULT: "rgba(255, 255, 255, 0.15)"
            },
            focus: {
              DEFAULT: "#006FEE"
            },
            foreground: {
              50: "#18181b",
              100: "#27272a",
              200: "#3f3f46",
              300: "#52525b",
              400: "#71717a",
              500: "#a1a1aa",
              600: "#d4d4d8",
              700: "#e4e4e7",
              800: "#f4f4f5",
              900: "#fafafa",
              DEFAULT: "#ECEDEE"
            },
            overlay: {
              DEFAULT: "#000000"
            },
            primary: {
              50: "#001731",
              100: "#002e62",
              200: "#004493",
              300: "#005bc4",
              400: "#006FEE",
              500: "#338ef7",
              600: "#66aaf9",
              700: "#99c7fb",
              800: "#cce3fd",
              900: "#e6f1fe",
              DEFAULT: "#006FEE",
              foreground: "#fff"
            }
          }
        }
      }
    })
  ]
}
