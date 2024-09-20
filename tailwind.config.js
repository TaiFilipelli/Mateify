/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      'fontFamily':{
        'mont-light':'Mont Light',
        'mont-light-italic':'Mont Light Italic',
        'mont-md':'Mont Medium',
        'mont-md-italic':'Mont Medium Italic',
        'mont-thin':'Mont Thin',
        'mont-thin-italic':'Mont Thin Italic',
        'robtop-black':'Roboto Black',
        'robtop-bold':'Roboto Bold',
        'robtop-bold-italic':'Roboto Bold Italic'
      }
    },
  },
  plugins: [],
}

