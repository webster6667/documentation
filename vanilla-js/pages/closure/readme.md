# Замыкание

 > Это прием программирования, который позволяет определить параметры функции, до ее вызова  
  А так же сохранять значения и состояние переменных в замыкании, даже после выполнения функции

Обычно после выполнение функции, сборщик функции очищает переменные  
Для того что бы сохранить какие-то данные от очищение, можно поместить их в замыкание

<br>

---

<br>

* Определение значений до вызова функции

Поместим переменную `phrase` в замыкание
```
function createPhrase(phrase) {
    return (name) => `${phrase} ${name}`
}

const sayHi = createPhrase('hi')

sayHi('Alex') // => hi Alex
sayHi('Ben') // => hi Ben
``` 

<br>

---

<br>

* Сохранение состояния переменной, даже после вызова

Функция тормозилка
```
const throttle = (fn, ms) => {
    let isThrottled = false

    return function (...args) => {
    
        if (isThrottled) return
       
        fn.apply(this, args)
        
        isThrottled = true
        
        setTimeout(() => {
            isThrottled = false 
        }, ms)
    
    };

}

const scrollHandler = () => console.log('was scroll')

addEventListener('scroll', throttle(scrollHandler, 100))

```
`throttle`, яркий пример сохранения состояния внутри замыкания, и определение параметров до вызова
* Сначала throttle оборачивает функцию обработчик скрола
* Принимает минимальный промежуток времени между вызовами обработчика
* Сохраняет эти данные в замыкании
* Так же в замыкании сохраняет состояние переменной - вызывать ли функцию обработчик, или игнорировать
* При первом вызове функции, которуе вернет `throttle`, она сработает, изменит состояние `let isThrottled`, на false, и запомнит
* Пока `isThrottled == false`, вызов функции обработчика будет игнорироватся
* Через время указанное в замыкании, таймер изменит `isThrottled` на `true`, и обработчик снова будет срабатывать. и так по кругу

<br>

---

<br>

`debounce`
```javascript
const debounce = (fn, ms) => {
  let timeout;

  return function (...args) {
    const fnCall = () => {
      fn.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, ms);

    return timeout;
  };
};

const validateData = (e) => {
  let $input = e.target;

  if ($input.value.length > 3) {
    console.log("ошибка");
  }
};

const myInput = document.querySelector("#myInput");
myInput.oninput = debounce(validateData, 500);
```
1. Оборачиваем вызываемую функцию

2. Сохраняем timeoutId в замыкании

3. Устанавливаем таймер через который должна вызватся функция

4. Если функцию вызывают опять, и в timeoutId есть значение

5. Удаляем старый таймаут, ставим новый

## Когда полезно замыкание
* Когда нужно определить какие либо параметры функции, еще до ее вызова
* Когда нужно сохранять состояние переменных после выполения функции