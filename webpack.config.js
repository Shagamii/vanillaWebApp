const path = require("path");
const glob = require("glob");

const entries = {};
const baseUrl = path.join(__dirname, "src", "public");
glob.sync(path.join(baseUrl, "js", "*.ts")).forEach(file => {
  const key = file.replace(baseUrl, "").replace(".ts", "");
  entries[key] = file;
});

module.exports = {
  entry: entries,
  mode: process.env.NODE_ENV || "development",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.webpack.json"
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "/[path][name].[ext]",
              outPutPath: path.join(__dirname, "/public/")
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"]
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist", "public")
  }
};
