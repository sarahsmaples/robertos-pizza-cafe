/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.njk", "./src/**/*.html", "./src/**/*.md"],
  theme: {
    extend: {
      colors: {
        // Primary reds - pizza/tomato vibes
        'tomato': '#cc463f',
        'coral': '#d77262',
        'burgundy': '#9d303b',
        // Warm yellows - cheese/crust tones
        'cheese': '#f8e387',
        'cream': '#fffcdd',
        // Accent green - basil/fresh
        'basil': '#4f7543',
      },
      fontFamily: {
        'heading': ['"Rammetto One"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
