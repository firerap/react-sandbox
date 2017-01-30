module.exports = {
	entry: './index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			loader: 'babel',
			query: {
				presets: ['es2015', 'react']
			},
			exclude: /node_modules/
		}]
	},
	devtool: "#inline-source-map",
	devServer: {
		port: 8000,
		// inline: true,
	},
}
