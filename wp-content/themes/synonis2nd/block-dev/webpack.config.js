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
        "home-block-04": "./src/home-block-04.js",
        "home-block-05": "./src/home-block-05.js",
        "home-block-06": "./src/home-block-06.js",
        "common-qa": "./src/common-qa.js",
        "common-qa-list": "./src/common-qa-list.js",
        "common-title-value": "./src/common-title-value.js",
        "common-title-value-group": "./src/common-title-value-group.js",
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
                style_04: {
                    test: /[\\/]home-style-04\.(sc|sa|c)ss$/, //対象のファイル style-02.scss
                    chunks: "all",
                    enforce: true,
                    name: "style-home-block-04", //出力されるファイル名
                },
                style_05: {
                    test: /[\\/]home-style-05\.(sc|sa|c)ss$/, //対象のファイル style-02.scss
                    chunks: "all",
                    enforce: true,
                    name: "style-home-block-05", //出力されるファイル名
                },
                style_06: {
                    test: /[\\/]home-style-06\.(sc|sa|c)ss$/, //対象のファイル style-02.scss
                    chunks: "all",
                    enforce: true,
                    name: "style-home-block-06", //出力されるファイル名
                },
                style_07: {
                    test: /[\\/]common-style-qa\.(sc|sa|c)ss$/, 
                    chunks: "all",
                    enforce: true,
                    name: "style-common-qa", //出力されるファイル名
                },
                style_08: {
                    test: /[\\/]common-style-title-value\.(sc|sa|c)ss$/, 
                    chunks: "all",
                    enforce: true,
                    name: "style-common-title-value", //出力されるファイル名
                },
                default: false,
            },
        },
    },
};
