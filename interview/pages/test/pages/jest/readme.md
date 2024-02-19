# Jest  

<details>
<summary> Как хранишь тесты?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

В отдельном файле, с префиксом `index.test.ts`  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как работают тесты?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Пишем `describe` секцию       
🎯 В ней `test` кейсы       
🎯 Кидаем результат выполнения операции в `expect`       
🎯 Вызываем ожидаемый метод (`toBe()|toBeArray`) и тд    



```typescript jsx
test('function returns the sum of an array of numbers', () => {

    const sum = getArraySum([1,2,3])
    
    expect(sum).toBe(6);
});
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как зарендерить хук?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Получаем стартовый стейт отрендерив хук      
🎯 Получаем переменную `result`      
🎯 в `result.current`, получаем то что возвращает хук  
🎯 Оборачивая в `act`, дергаем методы хука      
🎯 Проверяем стейт хука в `exac()`


```typescript
import { renderHook, act } from "@testing-library/react-hooks";
import { useSwitch } from "./index";

describe("use-switch", () => {
  it("tubmler function is work", () => {
    const { result } = renderHook(() => useSwitch(false)),
      [visibility, show, hide] = result.current;

    expect(visibility).toBeFalsy();

    act(() => {
      show();
    });

    expect(result.current[0]).toBeTruthy();

    act(() => {
      hide();
    });

    expect(result.current[0]).toBeFalsy();
  });
});
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**