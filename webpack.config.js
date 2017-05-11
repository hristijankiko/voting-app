const webpack = require('webpack');

const config = {
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
    plugins: [
        new webpack.DefinePlugin({
        "process.env" : {
            "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        }
    }),
    ]
}

if(process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
        })
    );
}

module.exports = config;