# Type Script
👆 Сторибук по умолчанию поддерживает `ts`, без дополнительных установок, но есть некоторые настройки  

&emsp;&emsp; 🔹 Подключение `tsconfig.json` файла в сторисы

📜 `.storybook/main.js`
```typescript
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
    webpackFinal: async config => {
        config.resolve.plugins = [new TsconfigPathsPlugin()] // 👉🏼 Подключение tsconfig
        // ...
    },
    stories: [
        "../src/**/*.stories.@(js|jsx|ts|tsx)" // 👉🏼 Разрешить storybook читать файлы с ts расширением
    ],
}
```

&emsp;&emsp; 🔹 После подключения `ts`, можно писать коментарии к пропсам которые отобразяться в документации  
```typescript
import {ButtonHTMLAttributes} from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * How large should the button be?
     */
    sizeMod?: "sm" | "md";
    /**
     * Button contents
     */
    label: string;
    /**
     * Button modifications
     */
    mod?: 'primary' | 'secondary'
}
```

### ⟵ **<a href="../../readme.md">Назад</a>**