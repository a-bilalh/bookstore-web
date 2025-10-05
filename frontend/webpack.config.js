const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Your main React entry point
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Bundled JavaScript file name
    clean: true, // Clean the output directory before each build
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Apply Babel to .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      // You can add rules for CSS, images, etc. here
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Use your public/index.html as a template
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'), // Serve content from 'dist'
    port: 3000, // Port for the dev server
    open: true, // Open browser automatically
    historyApiFallback: true, // For client-side routing
  },
};