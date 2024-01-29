const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require("path");

module.exports = {
  //先頭で取得した既存の設定をスプレッド構文（...）で以下に展開
  ...defaultConfig,
  // 既存の設定を上書き
  entry: {
    "wdl-block-01": "./src/wdl-block-01.js",
    "wdl-block-03": "./src/wdl-block-03.js",
    "wdl-block-05": "./src/wdl-block-05.js",
    "home-block-01": "./src/home-block-01.js",
  },
  output: {
    path: path.join(__dirname, "../custom-blocks/build"),
    filename: "[name].js",
  },
};
