/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,jsx}'],
  theme: {
    extend:{
      colors:{
        primary:'#85DF00',
        text:'#1A4900',
        footerColor:'#DEF9EC',
      }
    },
    screens:{
      'mobile':'320px',
      'middle':'471px',
      'tablet':'640px',
      'midd':'800px',
      'mid':'900px',
      'laptop':'1024px',
      'desktop':'1280px'
    }
    
  },
  plugins: []
};
