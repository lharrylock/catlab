const path = require('path');
const outputDir = 'dist';
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        // contentBase: path.join(__dirname, 'dist'),
        disableHostCheck: true,
        host: '0.0.0.0',
        port: 9000
    },
    entry: './src/renderer/renderer.tsx',
    output: {
        path: path.resolve(__dirname, outputDir),
        filename: '[name].[chunkhash].js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        configFile: path.resolve(__dirname, 'tsconfig.json'),
                        compilerOptions: {
                            noEmit: false,
                        },
                        // give responsibility of type checking to fork-ts-checker-webpack-plugin
                        // in order to speed up build times
                        transpileOnly: true,
                    },
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            tsconfig: path.resolve(__dirname, 'tsconfig.json'),
            tslint: path.resolve(__dirname, 'tslint.json'),
            workers: ForkTsCheckerWebpackPlugin.TWO_CPUS_FREE,
        }),
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname),
            watch: true,
        }),
        new HtmlWebpackPlugin({
            name: 'index.html',
            template: path.resolve(__dirname, 'src/index.template.html')
        })
    ]
};
