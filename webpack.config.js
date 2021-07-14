const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'lib'),
        library: 'AvilovUiKit',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: 'this',
    },
    mode: 'production',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            components: path.resolve(__dirname, 'src', 'components'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                type: 'asset/resource',
            },
            { test: /\.svg$/, loader: '@svgr/webpack' },
            {
                test: /\.(tsx|ts)?$/,
                use: ['ts-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: /\.module\.scss$/,
            },
            {
                test: /\.module\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]--[hash:base64:5]',
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom',
        },
        classnames: {
            root: 'classnames/bind',
            commonjs2: 'classnames/bind',
            commonjs: 'classnames/bind',
            amd: 'classnames/bind',
        },
    },
};
