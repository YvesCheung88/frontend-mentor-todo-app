import { linear } from 'svelte/easing';

/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open\\ Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ...defaultTheme.colors,
        transparent: "transparent",
        current: "currentColor",
        blue: "hsl(220, 98%, 61%)",
        cyan: "hsl(192, 100%, 67%)",
        purple: "hsl(280, 87%, 65%)",
        light: {
          100: "hsl(0, 0%, 98%)",
          200: "hsl(236, 33%, 92%)",
          300: "hsl(233, 11%, 84%)",
          400: "hsl(236, 9%, 61%)",
          500: "hsl(235, 19%, 35%)",
        },
        dark: {
          100: "hsl(236, 33%, 92%)",
          200: "hsl(234, 39%, 85%)",
          300: "hsl(234, 11%, 52%)",
          400: "hsl(233, 14%, 35%)",
          500: "hsl(237, 14%, 26%)",
          600: "hsl(235, 24%, 19%)",
          700: "hsl(235, 21%, 11%)",
        },
      },
      linearGradient: {
         'gradient-custom':'linear-gradient(to top left, hsl(280, 87%, 65%), hsl(192, 100%, 67%))',
      }
    },
  },
plugins: [],
}