var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
	entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        chunkFilename: '[id].js',
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        }
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
		
		// NOTE: FOR PRODUCTION ON AZURE!!!
        // config: JSON.stringify({ apiUrl: 'https://pso-express-react-users.azurewebsites.net/' })
		 
		// REAL LOCAL BACKEND - FOR TESTING
		 config: JSON.stringify({ apiUrl:'http://localhost:443' })
        // WITH FAKE BACKEND
		// config: JSON.stringify({ apiUrl:'http://localhost:4000' })
    }
}