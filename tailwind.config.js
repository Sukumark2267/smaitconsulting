const config = {
  theme: {
    extend: {
      boxShadow: {
        'text-black': '2px 2px 4px rgba(0, 0, 0, 0.6)', // mimic text shadow using boxShadow
      },
      colors: {
        primary: "#f1c419", // Replace with your desired color
        gradient: "linear-gradient(135deg, #f1c419, #f1c419, #e7b826)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-black': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
        },
      })
    }
  ],
};


export default config;
