const path = require('path');

module.exports = {
  entry: './client/src/index.jsx',
  output: {
    path: path.join(__dirname, '/client/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
          {
            test: /\.jsx/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            }
          }
        ]
  },
}