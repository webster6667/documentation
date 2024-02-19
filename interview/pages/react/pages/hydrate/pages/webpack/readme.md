# Webpack 

💠 Серверную часть, так же как и клиентскую, нужно прогнать через `webpack` со всеми лоадерами `frontend` фреймворка  
&emsp;&emsp; 👆 Так как `frontend` часть, рендериться на бекенде              

🔹 **Webpack**
```javascript
const path = require('path'),
      { CleanWebpackPlugin } = require('clean-webpack-plugin'),
      MiniCssExtractPlugin = require('mini-css-extract-plugin'),
      AssetsPlugin = require('assets-webpack-plugin'),
      TerserWebpackPlugin = require("terser-webpack-plugin"),
      CssMinimizerPlugin = require("css-minimizer-webpack-plugin"),
      CopyWebpackPlugin = require('copy-webpack-plugin'); // Обязательня версия 9.0.1


const isDev = process.env.NODE_ENV === 'development',
    isProd = !isDev,
    buildModeByNodeEnv = isDev ? 'development' : 'production',
    getFileRelativeConfigFile = filePath => path.resolve(__dirname, filePath),
    getFileNameByMode = (ext) => (isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`),
    getOptimizationSettingsByMode = () => {
        let config = {
            splitChunks: {
                chunks: 'all',
                name: (module, chunks, cacheGroupKey) => {
                    const name = cacheGroupKey === 'defaultVendors' ? 'vendors' : cacheGroupKey;
                    return name;
                },
            }
        }
        if (isProd) config.minimizer = [new CssMinimizerPlugin(), new TerserWebpackPlugin()]

        return config
    }


const commonParams = {
    entry: ['@babel/polyfill', './index.tsx'],
    mode: buildModeByNodeEnv,
    module: {
        rules: [
            {
                test: /\.[j|t]sx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
                            plugins: ['@babel/plugin-proposal-class-properties']
                        }
                    },
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.less', '.scss', '.sass', '.svg', '.png', '.jpg', '.jpeg', '.webp', '.eot', '.ttf', '.woff2']
    },
}

const clientConfig = {
    context: getFileRelativeConfigFile('src/client'),
    ...commonParams,
    devtool: isDev ? 'source-map' : false,
    output: {
        filename: getFileNameByMode('js'),
        publicPath: '/',
        path: getFileRelativeConfigFile('dist'),
    },
    optimization: getOptimizationSettingsByMode(),
    devServer: {
        overlay: true,
        contentBase: 'src',
        historyApiFallback: true,
        writeToDisk: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                "./favicon.ico" // смотрит от контекста webpack, 
            ],
        }),
        new MiniCssExtractPlugin(),
        new AssetsPlugin({filename: 'assets.json', fullPath: false, fileTypes: ['js', 'css']}),
    ]
}

const serverConfig = {
    context: getFileRelativeConfigFile('src/server'),
    ...commonParams,
    target: 'node',
    name: 'server',
    output: {
        path: __dirname,
        filename: 'server.js',
        libraryTarget: 'commonjs2',
    },
}

module.exports = [clientConfig, serverConfig]
```

<br>

🔹 **package.json**
```json
{
  "scripts": {
    "client:dev": "cross-env NODE_ENV=development webpack server --mode development --port 8081",
    "server:dev": "cross-env NODE_ENV=development nodemon server.js",
    "dev": "npm-run-all -p *:dev",
    "build": "cross-env NODE_ENV=production webpack --mode production",
    "start": "node server.js"
  }
}
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**