const path = require("path");
module.exports = {
  mode: "development",
  entry: [path.resolve(__dirname, "./src/index.js")],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }

    ]
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 3000,
  }
};
