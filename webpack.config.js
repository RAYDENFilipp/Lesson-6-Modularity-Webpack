var webpack = require("webpack");

module.exports = {
	context: __dirname,
	devtool: "eval-source-map",
	entry: "./src/js/main.js",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},
	node: {
		fs: 'empty'
	},
	module: {
		rules: [{
				test: /\.s?css$/,
				exclude: /node_modules/,
				use: [{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: { importLoaders: 1 }
					}, {
						loader: 'sass-loader',
						options: { importLoaders: 1 }
					}, 
					{
						loader: 'postcss-loader',
						options: {
							plugins: (loader) => [
								require('autoprefixer'),
							]
						}
					}
				]
			},
			{
				test: /\.js$/,
				enforce: 'pre',
				exclude: /(node_modules)/,
				use: [{
						loader: 'babel-loader',
						options: {
							presets: ['env']
						}
					},
					{
						loader: 'jshint-loader'
					}
				]
			},
			{
				test: /\.png$/,
				use: ['file-loader']
			}
		]
	},
	plugins: [new webpack.optimize.UglifyJsPlugin({
		minimize: true,
		comments: false,
		compress: {
			warnings: false
		},
		extractComments: true
	})],
	devServer: {
		inline: true,
		port: 8081
	}
}