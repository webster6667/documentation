# Примеры

💠 **Debounce`(fn, ms)`**   
👆🏽 Выполняет `fn` через таймаут `ms`  

&emsp;&emsp; 🎯 Если менее чем через `ms` приходит новый вызов функции     
&emsp;&emsp; 🎯 `debounce` отменяет последний установленный таймер на вызов     
&emsp;&emsp; 🎯 Выставляет новый таймер      

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
🎯 Оборачиваем вызываемую функцию

🎯 Сохраняем timeoutId в замыкании

🎯 Устанавливаем таймер через который должна вызватся функция

🎯 Если функцию вызывают опять, и в `timeoutId` есть значение

🎯 Удаляем старый таймаут, ставим новый

<br><br>

💠 **Throttle`(fn, ms)`**  
👆🏽 При частых запросах выполняент `fn`, с таймаутом не меньше чем `ms`   

```javascript
const throttle = (fn, ms) => {
    let isThrottled = false

    return function (...args) {
    
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
🎯 Сначала `throttle` оборачивает функцию обработчик скрола

🎯 Принимает минимальный промежуток времени между вызовами обработчика

🎯 Сохраняет в замыкании состояние переменной - вызывать ли функцию обработчик, или игнорировать

🎯 При первом вызове результата обертки, `fn` сработает
 
🎯 Изменит состояние `isThrottled`, на `false`, и запомнит

🎯 Пока `isThrottled == false`, вызов функции обработчика будет игнорироватся

🎯 Через время указанное в замыкании, таймер изменит `isThrottled` на `true`, и 

🎯 Обработчик снова будет срабатывать

🎯 И так по кругу

<br>

### ⟵ **<a href="../readme.md">Назад</a>**