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
        ]
    }
}