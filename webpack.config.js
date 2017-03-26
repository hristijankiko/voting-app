module.exports = {
<<<<<<< HEAD
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
=======
    watch: true,
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [
          {
            test: /\.js$/,
            loader: "babel-loader",
            query: {
              presets: ['es2015', 'react']
            }
          }
        ]
    }
};
>>>>>>> 19298b0756991e03f30443f33193d091794bb672
