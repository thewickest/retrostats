/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#A3E636',
        mainAccent: '#88cc19', // not needed for shadcn components
        overlay: 'rgba(0,0,0,0.8)', 
        // background color overlay for alert dialogs, modals, etc.
  
        // light mode
        bg: '#E0E7F1',
        text: '#000',
        border: '#000',
  
        // dark mode
        darkBg: '#111903',
        darkText: '#eeefe9',
        darkBorder: '#000',
      },
      borderRadius: {
        base: '5px'
      },
      boxShadow: {
        light: '5px 5px 0px 0px #000',
        dark: '5px 5px 0px 0px #000',
      },
      translate: {
        boxShadowX: '5px',
        boxShadowY: '5px',
        reverseBoxShadowX: '-5px',
        reverseBoxShadowY: '-5px',
      },
      fontWeight: {
        base: '500',
        heading: '700',
      },
    },
  },
  plugins: [],
}

