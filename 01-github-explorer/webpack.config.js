const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE.ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        static: path.resolve(__dirname, 'public'), // Funciona para versão 4.0.0
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    module: {
        rules: [
            {// test vai retornar se é js ou nao então verfica se ele termina em .jsx (\) escape, verifica se tem o .
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader', // vai converter o arquivo para uma maneira que o browser entenda
            },
            {// test vai retornar se é js ou nao então verfica se ele termina em .jsx (\) escape, verifica se tem o .
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'], // vai converter o arquivo para uma maneira que o browser entenda
            }
        ],
    }
};