const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "app")],
    prependData: `@import "variables";`,
  },
};

module.exports = nextConfig;
