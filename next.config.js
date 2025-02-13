const path = require("path");

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rubin.canto.com",
      },
    ],
  },
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
