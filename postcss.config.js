module.exports = {
  plugins: [
    [
      "postcss-preset-env",
      {
        stage: 2,
        features: {
          "logical-properties-and-values": false,
        },
      },
    ],
    ["@csstools/postcss-global-data", { files: ["./styles/global/media.css"] }],
    "postcss-custom-media",
  ],
};
