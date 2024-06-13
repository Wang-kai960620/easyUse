const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const {ProgressPlugin} = require('webpack')
const isProduction = process.env.NODE_ENV === 'production'


const plugins = [
    new ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({template: 'index.html', title: 'easyUse'}),
    new MiniCssExtractPlugin({
        filename:'./css/[name].[contenthash].css'
    })
]


module.exports = {
    mode: isProduction ? 'production' : 'development',
    entry: {
        app: resolve(__dirname, 'src/app.tsx'),
    },
    resolve: {
        extensions: [ '.ts', '.tsx' , '.js','.jsx', '.less', '.css' ],
    },
    output: {
        filename: '[name].[contenthash].js',
        path: resolve(__dirname, 'dist'),
        clean: true
    },
    devtool: isProduction? false : 'inline-source-map',
    devServer: {
        static: './index',
        compress: true,
        hot: true,
        port: 8080
    },
    plugins,
    module: {
        rules: [
            {
                // 添加扩展tsx jsx扩展 添加presets
                test: /\.(tsx?|jsx?)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env', '@babel/preset-typescript']
                    }
                }
            },
            {
                test: /\.(le|c)ss$/i,
                use: [
                    isProduction ? MiniCssExtractPlugin.loader :
                    'style-loader',
                    {
                        loader: "css-loader",
                    },
                    'less-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: "[file]"
                }
            }
        ],
    },
    optimization: {
        moduleIds: 'deterministic',
        minimize: true,
        minimizer: [
            // 压缩css
            new CssMinimizerWebpackPlugin(),
            // 压缩JS
            // new TerserPlugin()
        ],
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    }
}