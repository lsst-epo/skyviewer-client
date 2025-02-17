const path = require("path");

module.exports = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: {
      ssr: true,
    },
  },
  sassOptions: {
    includePaths: [
      path.join(__dirname, "node_modules"),
      path.join(__dirname, "styles"),
      path.join(__dirname, "components"),
    ],
  },
};
