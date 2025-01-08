/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        delius: ['Delius Swash Caps', 'cursive'], // Adding Delius Swash Caps font
        edu: ['Edu AU VIC WA NT Pre', 'sans-serif'], // Adding your custom font here
        doto: ['Doto', 'sans-serif'], // Adding Doto font

      },
      
      backgroundImage: {
        'random-golden-stains': 'radial-gradient(circle at 20% 20%, rgba(255, 215, 0, 0.5) 10%, transparent 30%), radial-gradient(circle at 70% 70%, rgba(255, 215, 0, 0.5) 10%, transparent 30%), radial-gradient(circle at 50% 90%, rgba(255, 215, 0, 0.5) 10%, transparent 30%)',
      },

    },
  },
  plugins: [],
};


