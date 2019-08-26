const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

// entry / output / loaders / 

module.exports = {
    // entradas
    entry: {
        index: './src/js/index.js',
    },
    // salidas
    output: {
        // crea el archivo
        filename: '[name].bundle.js',
        // crea la carpeta
        path: path.join(__dirname, '/dist')
    },
    // web dev server
    devServer: {
        // esto son parametros exclusivos de web dev server
        // El primero es la carpeta donde se van a cargar la carpeta dist
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        // the port
        port: 9000
    },
    // loaders
    module: {
        //tests
        rules: [
            {
                test: /\.js$/,
                //excludes esto escluira la carpeta node_modules
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env']
                    }
                }
            },
            // other rule
            {
                // esto busca css y le aplica el loader
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            // other rule
            {
                // esto busca css y le aplica el loader
                test: /\.scss$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            }

        ]
    },
    // common Chunks
    optimization: {
        splitChunks: {
            cacheGroups: {
                //
                commons: {
                    // que archivos vamos a utilizar // todo lo que este en node modules
                    // esto es una expresion regular para que todo el codigo necesario entre al bundle, en este caso webpack
                    test: /[\\/]node_modules[\\/]/,
                    // el nombre
                    name: 'common',
                    // que todo se guarde en el archivo de common
                    chunks: 'all'
                    
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            // aqui le decimos que archivo crear
            filename: 'index.html',
            // de donde tomara los datos
            template: 'src/index.html',
            // el titulo que quieras
            title: 'Login'
        }),
        //si quieres mas crear mas paginas
        new HtmlWebpackPlugin({
            // aqui le decimos que archivo crear
            filename: 'about.html',
            // de donde tomara los datos
            template: 'src/about.html',
            // el titulo que quieras
            title: 'About'
        })
    ]
}