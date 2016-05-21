// var jQuery = require('jquery');

var webpack = require('webpack');
var path = require('path');
// var $ = require('jQuery');
module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        'bootstrap-loader',
        './src'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'emapp.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src', "bower_components"],
        extension: ['', '.js', '.scss']
    },
    node: {
  fs: "empty"
},
    module: {
        loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }, {
                test: /\.html$/,
                loader: 'raw'
            },
            // {
            //     test: require.resolve('snapsvg'),
            //     loader: 'imports-loader?this=>window,fix=>module.exports=0'
            // },
            {
                test: /\.css$/,
                loader: 'style!css?sourceMap'
            }, {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            }, {
                test: /\.scss$/,
                loaders: [
                    'style',
                    'css',
                    'autoprefixer?browsers=last 3 versions',
                    'sass?outputStyle=expanded'
                ]
            }, {
                test: /\.(woff2?|ttf|eot|svg)$/,
                loader: 'url?limit=10000'
            }, {
                test: /bootstrap-sass\/assets\/javascripts\//,
                loader: 'imports?jQuery=jquery'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            jQuery: "jquery"
        })
    ],
    devServer: {
        hot: true,
        proxy: {
            '*': 'http://localhost:3000'
        }
    }
};
