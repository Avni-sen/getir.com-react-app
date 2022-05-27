module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkmode: false,
  theme: {
    extend: {
      colors: {
        brandColor: "#4c3398",
        brandColorYellow: "#FFD300",
        primaryBrandColor: "#5d3ebc",
        secondaryBrandColor: "#7849f7",
      },
      gradientColorStops: (theme) => ({
        brandColor: "#4c3398",
        brandColorYellow: "#FFD300",
        primaryBrandColor: "#5d3ebc",
        secondaryBrandColor: "#7849f7",
      }),
    },
  },
  plugins: [],
};
