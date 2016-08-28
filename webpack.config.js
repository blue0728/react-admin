'use strict'

var path = require("path");
var AssetsPlugin = require('assets-webpack-plugin');
var assetsPluginInstance = new AssetsPlugin({
	path: path.join(__dirname, 'dist', '')
});
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var cdnPrefix = '',
	buildPath = 'dist/',
	publishPath = cdnPrefix + buildPath;

module.exports = {
	entry: {
		app: ['./src/app.js']
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[hash].js",
		chunkFilename: "[id][chunkhash].js",
		publicPath: publishPath
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader?presets[]=es2015&presets[]=react'
		}, {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract("style-loader", "css-loader")
		}, {
			test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: "url-loader?limit=10000&minetype=application/font-woff"
		}, {
			test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: "file-loader"
		}, {
			test: /\.(jpg|png|gif)$/,
			loader: "url-loader?limit=8192&name=images/[name].[ext]?[hash]"
		}]
	},
	babel: {
		plugins: [
			['antd', [{
				libraryName: "antd",
				style: "css"
			}]]
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new ExtractTextPlugin("[hash].css"),
		assetsPluginInstance,
		new HtmlWebpackPlugin({
			filename: '../index.html',
			template: 'template.html'
		})
	],
	resolve: {
		root: __dirname + '/src',
		extensions: ['', '.js'],
		alias: {

		}
	}
};