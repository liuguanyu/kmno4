const path = require("path")

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        'path': path.resolve(__dirname, '../../', 'dist'),
        filename: 'bundle.js'
    },
    // http://www.imooc.com/article/17868
    resolve: { 
        alias: {
            'vue': 'vue/dist/vue.js'
        } 
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', {
                    loader: 'postcss-loader',
                    options: {           // 如果没有options这个选项将会报错 No PostCSS Config found
                        plugins: (loader) => [
                            require('autoprefixer')() //CSS浏览器兼容
                        ]
                    }                    
                }]
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true,
            title: 'vue-element-admin'
        })        
    ]
}
