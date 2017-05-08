const webpack = require('webpack');

module.exports = {
    entry: './src/client/app.js',
    output: {
        path: __dirname + '/dist/client/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.sass$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }
        ]
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
        })
    ]
}