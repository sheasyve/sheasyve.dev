import path from 'path';
import { fileURLToPath } from 'url';
import TerserPlugin from 'terser-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
// Polyfill for __dirname in ES Modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    // 1. ENTRY & OUTPUT
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? '[name].[contenthash].js' : '[name].bundle.js',
      clean: true,
      publicPath: '/',
    },

    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'source-map' : 'eval-source-map',

    // 2. DEVELOPMENT SERVER
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      port: 3000,
      hot: true, 
      open: true,
      historyApiFallback: true,
      proxy: [
        {
          context: ['/api'],
          target: 'http://localhost:3001',
        },
      ],
    },

    performance: {
      hints: isProduction ? 'warning' : false,
      maxAssetSize: 6000000,
      maxEntrypointSize: 6000000,
    },

    // 3. LOADERS
    module: {
      rules: [
        {
          // JS/JSX: Transpile via Babel and enable React Fast Refresh in dev
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              sourceMaps: true,
              inputSourceMap: true,
              plugins: [
                !isProduction && 'react-refresh/babel',
              ].filter(Boolean),
            }
          },
        },
        {
          // CSS: Extract to files in prod, inject to DOM in dev
          test: /\.css$/i,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: { sourceMap: true }
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [['autoprefixer']],
                },
              },
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|mp4|webm|ogg)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'media/[name].[hash][ext]'
          }
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name].[hash][ext]'
          }
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },

    // 4. PLUGINS
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: 'public', to: '' }, 
        ],
      }),
      new HtmlWebpackPlugin({
        template: './index.html',
      }),
      ...(isProduction
        ? [
          new HtmlWebpackPlugin({
            filename: 'CNAME',
            templateContent: 'sheasyve.dev',
            inject: false,
          }),
          new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
          })
        ]
        : [
          new ReactRefreshWebpackPlugin()
        ]
      ),
    ],

    // 5. OPTIMIZATION & CODE SPLITTING
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin({// Minify JS
          terserOptions: {
            sourceMap: true,
            format: {
              comments: false,
            },
          },
          extractComments: false,
        }),
        new CssMinimizerPlugin(),
      ],
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {// Extract third-party libraries into a separate vendors chunk
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      }
    },
  };
};