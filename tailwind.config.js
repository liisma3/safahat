module.exports = {
  content: [
    './src/components/**/*.{ts,tsx,js,jsx}', 
    './src/pages/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors:{
        themeColor:'#eeeeee',
        primary:'#5F9EA0',
        dents:'#00cba9'
      },
      fontFamily:{
        mont:['Montserrat', 'sans-serif'],
        logo:[ 'Edu VIC WA NT Beginner', 'cursive']
      }
    },

     screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
  },
  variants: {},
  plugins: [],
}
