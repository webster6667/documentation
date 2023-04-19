# hooks

🔹 `test.beforeEach`     
&emsp;&emsp; 👆 Выполняется перед началом каждого теста в группе

🔹 `test.afterEach`     
&emsp;&emsp; 👆 Запускается после завершения каждого теста в группе

🔹 `test.beforeAll`     
&emsp;&emsp; 👆 Запускается один раз для каждой группы перед запуском любых тестов

🔹 `test.afterAll`     
&emsp;&emsp; 👆 Запускается один раз для каждой группы после завершения всех тестов

```js
test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('https://playwright.dev/');
});
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**