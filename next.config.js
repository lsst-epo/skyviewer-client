const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [
      path.join(__dirname, "theme/styles"),
      path.join(__dirname, "components"),
    ],
  },
};
