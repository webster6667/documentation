# operations

&emsp;&emsp; 🔹 Получить `localStorage`  
```js
const localStorage = await page.evaluate(() => JSON.stringify(window.localStorage));
```

&emsp;&emsp; 🔹 Получить элемент по содержимому текста
```js
await page.locator('text=Купить')
```

&emsp;&emsp; 🔹 Получить элемент по селектору
```js
await page.locator('.selector')
```

&emsp;&emsp; 🔹 Проверить появиться ли нужный элемент
```js
await expect(page.locator('text=Выход').first()).toBeVisible();
```

&emsp;&emsp; 🔹 Убедиться что элемент не появиться 
```js
await expect(page.locator('text=Выход').first()).toBeHidden();
```

&emsp;&emsp; 🔹 Скриншоты  
```js
await page.screenshot({ path: 'screenshot.png' });
await page.locator('.header').screenshot({ path: 'screenshot.png' });
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**