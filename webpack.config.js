import path from 'path';
import { fileURLToPath } from 'url';
import TerserPlugin from 'terser-webpack-plugin';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'production', 
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            sourceMaps: true,
            inputSourceMap: true,
          }
        },
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: { sourceMap: true } 
          }
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          sourceMap: true, 
          format: {
            comments: false, 
          },
        },
        extractComments: false,
      }),
    ],
  },
};