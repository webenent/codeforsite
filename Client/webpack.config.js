var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const here = (relPath) => {
	// console.log(__dirname + relPath);
	if(!relPath) {
		return __dirname;
	}
	else {
		return __dirname + relPath;
	}
}

module.exports = {
	entry: here('/src/index.js'),
	output: {
		path: here('/dist'),
		filename: 'bundle.js',
	},
	devServer: {
		hot: true,
		inline: true,
		historyApiFallback: true,
		host: '0.0.0.0',
		port: 3001,
	},
	module : {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						query: {
				          presets: ['es2015', 'react', 'stage-2'],
				        },
					}
				],
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
				],
			},
			{
				test: /\.(jpg|jpeg|png|gif|svg)(\?.*)?$/,
				use: [
					{
						loader: 'file-loader',
						query: {
							name: 'static/images/[name].[hash:8].[ext]',
						}
					}
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: './index.html',
		}),
		new webpack.HotModuleReplacementPlugin(),
	]
}