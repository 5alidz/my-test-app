const path = require('path')
const HTMLwebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const babel_rules = {
  test: /\.js/,
  include: [/node_modules\/nano_spa/, /src/],
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        ['@babel/preset-env', { targets: {edge: '44'}, modules: false }]
      ],
      plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-transform-template-literals',
        '@babel/plugin-syntax-object-rest-spread'
      ]
    }
  }
}

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLwebpackPlugin({ template: './src/index.html', inject: false }),
    new CopyPlugin([{ from: './src/static', to: 'static' }]),
  ],
  module: {rules: [babel_rules]},
  devServer: {
    port: 3000,
    historyApiFallback: { index: 'src/index.html' }
  }
}
