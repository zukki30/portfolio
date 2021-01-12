const path = require("path");

module.exports = {
  env: {
    SITE_NAME: "Zukki portfolio",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
