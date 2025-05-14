/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      borderColor: theme => ({
        DEFAULT: theme('color.gray,300', 'currentColor'),
        'gray':'#8fbc8f',
      }),
      borderColor: theme => ({
        'gray':'#a9a9a9',
      }),
    },
    varients: {
      extend:{
        backgroundColor: ['checked'],
      },
    },
    colors:{
     'white':'#ffffff',
     'whitegray':'#f5f5f5',
     'darknightblue':'#003366',
     'kleinblue':'#2976bc',
     'applegreen':'#72ae00',
     'gray':'#636a6f',
     'red':'#ff0000'
    },
    // screens:{
    //   'sm':'140px',
    //   'md':'768px',
    //   'lg':'1224px',
    //   'xl':'679px',
    // },

  },
  plugins: [],
}

