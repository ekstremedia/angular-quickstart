// var jQuery = require('jquery');

var webpack = require('webpack');
var path = require('path');
// var $ = require('jQuery');
module.exports = {
    entry: [
        'bootstrap-loader',
        './src'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'emapp.min.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src', "bower_components"],
        extension: ['', '.js', '.scss']
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
                test: /bootstrap-sass\/assets\/javascripts\//,
                loader: 'imports?jQuery=jquery'
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
            }
        ]
    },
    plugins: [

        new webpack.ProvidePlugin({
            jQuery: "jquery"
        })
    ],

};
