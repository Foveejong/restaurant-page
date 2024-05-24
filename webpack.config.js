const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "./dist"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Restaurant Page",
            filename: "index.html",
            template: "./src/index.html",
            inject: "head",
            scriptLoading: "defer"
        }),
    ]
}