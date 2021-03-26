import path from "path";
import webpack from "webpack";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
// import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
  entry: path.resolve(__dirname, './src/index.ts'),
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
		library: ["[name]"],
		libraryTarget: "umd",
    clean: true
	},
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}'
      }
    })
    // }),
    // new HtmlWebpackPlugin({
    //     template: path.join(__dirname, 'public', 'index.html')
    // })
  ],
  // output: {
  //   path: path.resolve(__dirname, "build"),
  //   filename: "bundle.js",
  // },
  // devServer: {
  //   contentBase: path.join(__dirname, "build"),
  //   compress: true,
  //   port: 4000,
  // },
};

export default config;