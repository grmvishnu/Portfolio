const {
  override,
  addWebpackModuleRule,
  addWebpackAlias,
} = require("customize-cra");
const path = require("path");

module.exports = override(
  // Add Webpack alias
  addWebpackAlias({
    "@components": path.resolve(__dirname, "src/components"),
  }),

  // Add a rule to handle SVG files as React components
  addWebpackModuleRule({
    test: /\.svg$/,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          // Option to avoid namespace errors
          throwIfNamespace: false,
        },
      },
    ],
  })
);
