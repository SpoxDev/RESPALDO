// se le dice cual es el archivo de entrada y cual es el de salida
// Li que sucede en es te codigo es que webpack tomara el archivo main.js, lo convertira y lo colocara en una carpeta dis
/**
 * @description HTMLWebpacPlugin es para poder copiar los archivos .html dentro del dist
 */

const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: __dirname + "/dis",
    filename: "index_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  plugins: [new HTMLWebpackPlugin({ template: "./src/index.html" })],
};
