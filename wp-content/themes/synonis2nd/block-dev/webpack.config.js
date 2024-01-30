const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require("path");

module.exports = {
  //先頭で取得した既存の設定をスプレッド構文（...）で以下に展開
  ...defaultConfig,
  // 既存の設定を上書き
  entry: {
    "wdl-block-01": "./src/wdl-block-01.js",
    "home-block-01": "./src/home-block-01.js",
    "home-block-02": "./src/home-block-02.js",
    "home-block-03": "./src/home-block-03.js",
  },
  output: {
    path: path.join(__dirname, "../custom-blocks/build"),
    filename: "[name].js",
  },
  optimization: {
    splitChunks: {
      //複数のエントリポイントで共通のモジュールを別のファイルとして分離
      cacheGroups: {
        style_01: {
          test: /[\\/]home-style-01\.(sc|sa|c)ss$/, //対象のファイル style-01.scss
          chunks: "all",
          enforce: true,
          name: "style-home-block-01", //出力されるファイル名
        },
        style_02: {
          test: /[\\/]home-style-02\.(sc|sa|c)ss$/, //対象のファイル style-02.scss
          chunks: "all",
          enforce: true,
          name: "style-home-block-02", //出力されるファイル名
        },
        style_03: {
          test: /[\\/]home-style-03\.(sc|sa|c)ss$/, //対象のファイル style-02.scss
          chunks: "all",
          enforce: true,
          name: "style-home-block-03", //出力されるファイル名
        },
        default: false,
      },
    },
  },
};
