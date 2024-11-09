// src/BookChain_frontend/tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Adjust these paths to match your project structure
    './src/**/*.{js,ts,jsx,tsx}',
    './src/App.{js,ts,jsx,tsx}',
    './src/book-reader-ui.jsx',
    './src/main.jsx',
    './index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // Add this to force Tailwind to process all content
  safelist: [
    {
      pattern: /.*/
    },
  ]
}