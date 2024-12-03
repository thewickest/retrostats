import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#a388ee',
        mainAccent: '#9e66ff', // not needed for shadcn components
        overlay: 'rgba(0,0,0,0.8)', // background color overlay for alert dialogs, modals, etc.

      // light mode
        bg: '#e3dff2',
        text: '#000',
        border: '#000',
  
        // dark mode
        darkBg: '#272733',
        darkText: '#eeefe9',
        darkBorder: '#000',
        secondaryBlack: '#212121',  // opposite of plain white, not used pitch black because borders and box-shadows are that color 
      },
      borderRadius: {
        base: '12px'
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

export default config;

