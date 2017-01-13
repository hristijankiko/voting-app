module.exports = {
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
              presets: ['es2015']
            }
          }
        ]
    }
};