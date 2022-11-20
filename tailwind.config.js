/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('../images/mobile/image-header.jpg')",
        'desk': "url('../images/desktop/image-header.jpg')",
        'cherry': "url('../images/mobile/image-graphic-design.jpg')",
        'cherry-desk': "url('../images/desktop/image-graphic-design.jpg')",
        'photo': "url('../images/mobile/image-photography.jpg')",
        'photo-desk': "url('../images/desktop/image-photography.jpg')",
        

      },

      fontFamily: {
        'sans': ["Barlow", "sans-serif"],
        'serif' : ["Fraunces", "serif"],


        
      },

      colors: {
        primary: {
          'Soft red': "hsl(7, 99%, 70%)",
          'Yellow': "hsl(51, 100%, 49%)",
          'graphic': "hsl(167, 40%, 24%)",
          'photography': "hsl(198, 62%, 26%)",
          'Dark moderate cyan (footer)': "hsl(168, 34%, 41%)",
        },

        neutral: {
          'Very dark desaturated blue': "hsl(212, 27%, 19%)",
          'Very dark grayish blue': "hsl(213, 9%, 39%)",
          'Dark grayish blue': "hsl(232, 10%, 55%)",
          'Grayish blue': "hsl(210, 4%, 67%)",
          'White': "hsl(0, 0%, 100%)",
        }
      },


    },
  },
  plugins: [],
}
