const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, 'assets', 'js', 'main.js');
const OUTPUT_DIR = path.join(__dirname, 'static');

const config = {
  entry: ["@babel/polyfill", ENTRY_FILE],
  mode: MODE,
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader', // -webkit-, -moz 같은 브라우저 맞춤 prefix 자동설정. 각각 브라우저에 쓰이는 prefix를 자동으로 추가한다.
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'autoprefixer',
                    {
                      //options
                      browsers: "cover 99.5%"
                    },
                  ]
                ]
              }
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  // 확장자가 scss인 파일을 찾고 ㄴscsss를 css로 바꾸고, 전체 텍스트 중에 그 css의 텍스트를 추출하고, 추출된 css를 분리된 하나의 파일로 만든다.
  output: {
    path: OUTPUT_DIR,
    filename: '[name].js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
    }),
  ]
};

// webpack은 config 파일에서 아래에서 위로 실행한다. what...!
module.exports = config;
