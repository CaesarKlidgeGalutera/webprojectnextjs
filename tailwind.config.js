/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-green": "var(--color-primary-green)",
        "secondary-green": "var(--color-secondary-green)",
      },
      backgroundImage: {
        link_image1: "url('/illustration.png')",
        link_image2: "url('/websites.jpg')",
        link_image3: "url('/apps.jpg')",
      },
    },
  },
  plugins: [],
};
