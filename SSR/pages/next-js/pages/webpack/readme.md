# Webpack

🔹 И клиентские и серверные настройки `webpack` храняться в файле `next.config`       

```typescript jsx
function staticLoader(config) {

    config.module.rules.push({
        test: /\.(png|jpe?g|webp|eot|ttf|woff|woff2)$/,
        use: {
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                esModule : false,
                publicPath: `/_next/static/files`,
                outputPath: 'static/files'
            }
        }
    })

}

function svgLoader(config) {

    config.module.rules.push({
        test: /\.svg$/,
        use: [
            //Записать инлайном svg
            { loader: '@svgr/webpack'},
            //Импорт svg
            {
                loader: 'file-loader',
                options: {
                    name: `[contenthash].[ext]`,
                    publicPath: `/_next/static/files`,
                    outputPath: 'static/files'
                },
            },
        ],
    })

}

module.exports = {
    env: {
        //...
    },
    webpack(config, {isServer}) {

        staticLoader(config)
        svgLoader(config)

        if (!isServer) {
            config.module.rules.push({
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            })
        }
        
        return config
    }
}
```

&emsp;&emsp; 🔹 Так же как и в обычном `webpack` можно добавлять свои лоадеры в конфиг       

&emsp;&emsp; 🔹 Опираясь на переменную `isServer`, можно добавлять настройки лишь к одному из конфигов

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**