// ========== 前端 构建 打包 ==========
var path = require('path');
var webpack = require('webpack');
var ENTRY_PATH =  {
        login: path.resolve(__dirname, 'src/scripts/login.js'),
        main: path.resolve(__dirname, 'src/scripts/main.js')
    },
    OUTPUT_PATH = path.resolve(__dirname, 'src/build'),
    PUBLIC_PATH = path.resolve(__dirname, 'src'),
    INCLUDE_PATH = path.resolve(__dirname, 'src'),
    RESOLVE_PATH = path.resolve(__dirname, 'node_modules');

var config = {
    entry: {
        login: ENTRY_PATH.login,
        main: ENTRY_PATH.main
    },
    output: {
        path: OUTPUT_PATH,
        filename: '[name].js',
        publicPath: PUBLIC_PATH
    },
    plugins: [
        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery"
        // })
    ],
    module: {
        loaders: [
            { test: /\.less$/, loader: 'style!css!less' },
            { test: /\.css$/, loader: 'style!css' },
            { test:/\.woff$/,loader:"url-loader?prefix=font/&mimetype=application/font-woff"},
            { test:/\.woff2$/,loader:"url-loader?prefix=font/&mimetype=application/font-woff"},
            { test: /\.ttf$/, loader: "file-loader?prefix=font/"},
            { test: /\.eot$/, loader: "file-loader?prefix=font/"},
            { test: /\.svg$/, loader: "file-loader?prefix=font/"},
            { test: /\.jpg/, loader: "url-loader?mimetype=image/jpg" }
        ]
    },
    resolve: {  // 主要是为了加快构建速度,很快的找到指定的文件
        root: RESOLVE_PATH,
        alias: {
            // bootstrap 的 css 文件 (压缩后的css)
            bt_style: path.resolve(__dirname, 'node_modules/bootstrap/dist/css/bootstrap.min.css'),
            bt_datepicker_style: path.resolve(__dirname, 'node_modules/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css'),
            bt_js: path.resolve(__dirname, 'node_modules/bootstrap/dist/js/bootstrap.js'),
            jquery: path.resolve(__dirname, 'node_modules/jquery/dist/jquery.min.js'),
            director: path.resolve(__dirname, 'node_modules/director.min.js'),
            bt_select_js: path.resolve(__dirname, 'node_modules/bootstrap-select/dist/js/bootstrap-select.js'),
            bt_select_style: path.resolve(__dirname, 'node_modules/bootstrap-select/dist/css/bootstrap-select.min.css'),
            bt_collapse: path.resolve(__dirname, 'node_modules/bootstrap/js/collapse.js'),
            bt_transition: path.resolve(__dirname, 'node_modules/bootstrap/js/transition.js'),
            bt_datepicker: path.resolve(__dirname, 'node_modules/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js'),
            bt_validator: path.resolve(__dirname, 'node_modules/bootstrap-validator/dist/validator.js'),
            bt_modal: path.resolve(__dirname, 'node_modules/bootstrap/js/modal.js'),
            moment: path.resolve(__dirname, 'node_modules/moment/min/moment-with-locales.min.js')
        }
    }
}

module.exports = config;
