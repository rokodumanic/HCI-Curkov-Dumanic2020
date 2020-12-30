import Typography from "typography";

const typography = new Typography({
  baseFontSize: "15px",
  baseLineHeight: 1.45,
  headerFontFamily: ["Playfair Display", "serif"],
  bodyFontFamily: ["Montserrat", "sans-serif"]
});

// Insert styles directly into the <head>
typography.injectStyles();

export default typography;
