# Configurations
👆 Подключение собственной конфигурации  

🎯 Создать свой файл конфигурации

📜 `tests/config.js`
```js
import { defineConfig } from '@playwright/test';
export default defineConfig({
    use: {
        headless: false,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        video: 'on',
    },
});
```

🎯 Подключить файл конфига при запуске
```
npx playwright test --config=tests/config.js --debug
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**