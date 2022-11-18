/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('../images/mobile/image-header.jpg')",
        'desk': "url('../images/desktop/image-header.jpg')",
        

      }
    },
  },
  plugins: [],
}
