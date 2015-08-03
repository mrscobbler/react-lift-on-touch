module.exports = {
  context: __dirname + "/app",
  entry: "./app.js",
  
  output: {
    filename: "app.js",
    path: __dirname + "/public",
  },
  module: {
  loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ["babel-loader"],
    },
   
  ],
},
}