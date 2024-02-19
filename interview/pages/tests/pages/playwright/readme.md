# Playwright

<details>
<summary> Что такое?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Библиотека запускающая безголовый бразуер, и протыкивающая страничку   

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как работает</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Пишем файл конкретного действия       
🎯 Создаем экшены(авторизация/выход)       
🎯 Переходим на нужную страничку `page.goTo()`  
🎯 Ищем нужный элемент `await page.locator('[placeholder="Введите email..."]').fill(email)`      
🎯 Выполняем действия      
🎯 Ищем на страничке контент подтверждающий успешную операцию      


<details>
<summary><img src="https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/ts.svg" height="20px" title="ts" >&emsp; Экшен</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)


```typescript jsx
export const signIn = async (page, {email = '', password = ''}) => {
    await page.goto(`${host}${routes.login}`);

    await page.locator('[placeholder="Введите email..."]').fill(email);
    await page.locator('[placeholder="Введите пароль..."]').fill(password);
    await page.getByRole('button').click();
}
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary><img src="https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/ts.svg" height="20px" title="ts" >&emsp; Тест операция</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```typescript
const { test, expect } = require('@playwright/test');
import {users} from "./const"
import { signIn, signUp } from "./actions"

test.describe('sign-in', () => {

  test('validation', async ({ page }) => {
    await signIn(page, users.signed)

    await expect(page.locator('text=Выход').first()).toBeVisible();
  });

})

test.describe('sign-up', () => {

  test('signing', async ({ page }) => {
    const signingUser = users.toSignUp
    await signUp(page, signingUser)
    await signIn(page, signingUser)

    await expect(page.locator('text=Выход').first()).toBeVisible();
  });

})
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**