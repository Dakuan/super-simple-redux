var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var config = require("./webpack.config");


// this is just a devtool that serves up index.html and tranpiles es6
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(3000, "localhost", function (err) {
  if (err) {
    console.log(err);
  }

  console.log("Listening at localhost:3000");
});
