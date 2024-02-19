# react-testing-library

<details>
<summary> Основная идея библиотеки?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Проверять ожидаемый контент, а не просто проверять наличие тего  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Тестирование компонента</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Рендерим компонент      
🎯 Результат рендера попадает в объект `screen`  
🎯 Ищем нужный `html` элемент   
🎯 Дергаем любые ивенты через `userEvents.(type|click|tab|hover)`   
🎯 Ищем в `screen.getElement`
🎯 Закидываем в `exec()`, результат работы методы    
🎯 Проверяем на `toBe()`      


```typescript jsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("input changes value", async () => {
    render(<input type='text' data-testid='input-text' />);

    userEvent.type(screen.getByTestId("input-text"), "react");

    expect(screen.getByTestId<HTMLInputElement>("input-text").value).toBe("react");
});
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**