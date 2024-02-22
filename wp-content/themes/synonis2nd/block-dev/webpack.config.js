const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require("path");

module.exports = {
  //先頭で取得した既存の設定をスプレッド構文（...）で以下に展開
  ...defaultConfig,
  // 既存の設定を上書き
  entry: {
    "common-qa": "./src/common-qa.js",
    "common-qa-list": "./src/common-qa-list.js",
    "common-title-value": "./src/common-title-value.js",
    "common-title-value-group": "./src/common-title-value-group.js",
    "common-contactButton": "./src/common-contactButton.js",
  },
  output: {
    path: path.join(__dirname, "../custom-blocks/build"),
    filename: "[name].js",
  },
  optimization: {
    splitChunks: {
      //複数のエントリポイントで共通のモジュールを別のファイルとして分離
      cacheGroups: {
     
        style_07: {
          test: /[\\/]common-qa-style\.(sc|sa|c)ss$/,
          chunks: "all",
          enforce: true,
          name: "style-common-qa", //出力されるファイル名
        },
        style_08: {
          test: /[\\/]common-qa-list-style\.(sc|sa|c)ss$/,
          chunks: "all",
          enforce: true,
          name: "style-common-qa-list", //出力されるファイル名
        },
        style_09: {
          test: /[\\/]common-title-value-style\.(sc|sa|c)ss$/,
          chunks: "all",
          enforce: true,
          name: "style-common-title-value", //出力されるファイル名
        },
        style_10: {
          test: /[\\/]common-contactButton-style\.(sc|sa|c)ss$/,
          chunks: "all",
          enforce: true,
          name: "style-common-contactButton", //出力されるファイル名
        },
        default: false,
      },
    },
  },
};
