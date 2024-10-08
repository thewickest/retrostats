/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#c4a1ff',
        mainAccent: '#9e66ff', // not needed for shadcn components
        overlay: 'rgba(0,0,0,0.8)', // background color overlay for alert dialogs, modals, etc.
  
        // light mode
        bg: '#daf5f0',
        text: '#000',
        border: '#000',
  
        // dark mode
        darkBg: '#0f3730',
        darkText: '#eeefe9',
        darkBorder: '#000',
        secondaryBlack: '#1b1b1b', // opposite of plain white, not used pitch black because borders and box-shadows are that color 
      },
      borderRadius: {
        base: '8px'
      },
      boxShadow: {
        light: '2px 4px 0px 0px #000',
        dark: '2px 4px 0px 0px #000',
      },
      translate: {
        boxShadowX: '2px',
        boxShadowY: '4px',
        reverseBoxShadowX: '-2px',
        reverseBoxShadowY: '-4px',
      },
      fontWeight: {
        base: '500',
        heading: '700',
      },
    },
  },
  plugins: [],
}

