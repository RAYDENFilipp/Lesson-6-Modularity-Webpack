var webpack = require("webpack");

module.exports = {
	context: __dirname,
	devtool: "eval-source-map",
	entry: "./src/js/main.js",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},
	module: {
		rules: [{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'sass-loader']
			},
			{
				test: /\.js$/,
				enforce: 'pre',
				exclude: /(node_modules)/,
				use: [
					{
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				},
				{
					loader: 'jshint-loader'
				}
			]
			}
		]
	},
	plugins: [new webpack.optimize.UglifyJsPlugin({
		minimize: true,
		compress: {
			warnings: false
		}
	})],
	devServer: {
		inline: true,
		port: 8081
	}
}