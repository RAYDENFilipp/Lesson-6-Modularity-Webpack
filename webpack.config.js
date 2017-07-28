var webpack = require("webpack");

module.exports = {
	context: __dirname,
	devtool: "eval-source-map",
	entry: "./src/js/main.js",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},
	parser: 'sugarss',
	plugins: {
		'postcss-import': {
			root: file.dirname
		},
		'postcss-cssnext': options.cssnext ? options.cssnext : false,
		'autoprefixer': env == 'production' ? options.autoprefixer : false,
		'cssnano': env === 'production' ? options.cssnano : false
	},
	module: {
		rules: [{
				test: /\.css$/,
				use: ['style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1
						}
					},
					'postcss-loader'
				]
			},
			{
				test: /\.scss$/,
				use: ['style-loader',
					{
						loader: 'sass-loader',
						options: {
							importLoaders: 1
						}
					},
					'postcss-loader'
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
		compress: {
			warnings: false
		}
	})],
	devServer: {
		inline: true,
		port: 8081
	}
}