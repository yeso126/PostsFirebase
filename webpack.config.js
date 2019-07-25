const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const devServer = require('webpack-dev-server');

module.exports = {
	entry: path.resolve(__dirname, './src/js/index.js'),
  	mode: 'development',
  		output:{
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js' 
    },
    module: {
      rules:[
          {
             test:/\.css$/,
              use: [
                  {
                    loader: MiniCSSExtractPlugin.loader
                  },
                  'css-loader'
              ]
		  },
		  {
			  test:/\.js$/,
			  use:'babel-loader',
			  exclude: /node_modules/
		  }
        ]
    }, 
    plugins: [
      new MiniCSSExtractPlugin({
        filename:'[name].css'
	  }),
	],
	devServer: {
		contentBase: path.resolve(__dirname,'dist'),
		hot: true
	}  
} 
