'use strict'

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
config.entry.app.unshift('webpack-dev-server/client?http://localhost:8999', 'webpack/hot/dev-server');
config.plugins.push(new webpack.HotModuleReplacementPlugin());

var proxy = [{
	path: '/api/*',
	target: 'http://haitao.com',
	host: "haitao.com"
}];

var app = new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true,
	proxy: proxy
});
app.listen(8999, function() {
	console.log('start server：http://localhost:8999')
});