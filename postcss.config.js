module.exports = (ctx) => ({
  map: {
    inline: false,
  },
  plugins: [
    require("postcss-reporter"),
    require("postcss-preset-env")({
      autoprefixer: { grid: "autoplace" },
    }),
    require("cssnano"),
  ],
});
