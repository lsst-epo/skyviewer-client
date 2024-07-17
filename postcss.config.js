module.exports = {
  plugins: [
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
          grid: "no-autoplace",
        },
        stage: 2,
      },
    ],
  ],
};
