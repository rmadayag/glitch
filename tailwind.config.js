module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../src/assets/images/bg.png')",
      },
      colors: {
        primary: '#000000',
        secondary: '#D012F7',
        accent: '#009FEE',
        txtcolor: '#101010',
        bgcolor: '#FFFFFF',
        bgaccent: '#F9F9F9',
      },
      fontFamily: {
        Poppins : "Poppins ",
      },
      
    
    },
  },
  plugins: [],
};