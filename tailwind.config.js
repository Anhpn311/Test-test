module.exports = {
  mode: 'jit',
  purge: [
    "**/*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        Gardient: "linear-gradient(208.18deg, #67C3F3 9.05%, #5A98F2 76.74%)"
      },
      borderRadius: {
        "5px": "5px",
        "20px": "20px"
      },
      container: {
        center: true,
      },
      fontFamily: {
        MulishFont: "'Mulish', sans-serif"
      },
      color: {
        "BlackC1": "#000000",
        "GrayC1": "#7D7987"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}