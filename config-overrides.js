// config-overrides.js
const {
  override,
  addWebpackModuleRule,
  addWebpackAlias,
} = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "@components": path.resolve(__dirname, "src/components"),
  }),

  // Add a rule to handle SVG files as images (default is 'file-loader' or 'url-loader')
  addWebpackModuleRule({
    test: /\.svg$/,
    use: [
      {
        loader: "file-loader", // Ensure you are using the file-loader (or url-loader)
        options: {
          name: "[name].[ext]",
          outputPath: "assets/", // Output path for your images
        },
      },
    ],
  })
);
