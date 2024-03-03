/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend:{
      colors:{
        primary:'#85DF00',
        text:'#1A4900',
        footerColor:'#DEF9EC',
      }
    }
    
  },
  plugins: []
};
