const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

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
          }
        ]
    }, 
    plugins: [
      new MiniCSSExtractPlugin({
        filename:'[name].css'
      })
  ]
} 
