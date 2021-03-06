# Замыкание

> Прием программирования, в котором функция, возвращает другую функцию, совершенствуя дочернюю функци.   

> Может инкапсулировать переменные и сохранять их состояние 

💠 Позволяет делать декораторы для функций      
```javascript
//Функция возвращающая квадрат
function getNumberSquared(number) {
  return number * number;
}

//Функция кеширует результаты возведения в квадрат
function cacheDecorator(fn) {
  let cache = new Map()

  return (...args) => {
    //🎯 Получаем число которое нужно возвести в квадрат
    const numberToSquared = args[0]

    //🎯 Проверяем, если это число уже возводили в квадрат
    //🎯 Отдадим его из кеша 
    if (cache.has(numberToSquared)) {
      return cache.get(numberToSquared)
    }

    //🎯 Если числа нет в кеше
    //🎯 Выполняем вычисление
    const numberSquared = fn.apply(this, args);
    
    //🎯 Записываем результат в кеш
    cache.set(numberToSquared, numberSquared)
    
    return numberSquared
  };
}

//🎯 Без декоратора функция два раза выполнит вычисление 
console.log(getNumberSquared(2));
console.log(getNumberSquared(2));

//🎯 Оборачиваем функцию в кеш декоратор
const getNumberSquaredWithCache = cacheDecorator(getNumberSquared);

//🎯 Функция первый раз выполнит вычисление
console.log(getNumberSquaredWithCache(2));

//🎯 Второй раз возьмет результат этого вычисления из кеша
console.log(getNumberSquaredWithCache(2));
```
[![Edit decorator](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/decorator-jyl4b?fontsize=14&hidenavigation=1&theme=dark)

<br>
<br>

💠 Определять параметры функции, до ее вызова
```javascript
//Логер для приложений с разными id
function appsLogger(appId, text) {
  //...logic

  console.log(`send: ${text}, to application number: ${appId}`);
}

//Функция обертка
//Возвращает функцию логирования
//С уже прописанным id приложения
function sendLoggerWrapper(fn, appId) {
  return (...args) => {
    fn.call(this, appId, ...args);
  };
}

const sendLog = sendLoggerWrapper(appsLogger, 1);

sendLog("was payed"); //send: was payed, to application number: 1 
```

<br>
<br>

💠 Сохранять результат работы экземпляра конкретной функции

&emsp;&emsp; 🔹 После выполнения обычной функции, `сборщик мусора` очищает все переменные внутри нее  

&emsp;&emsp;&emsp;&emsp; 🎯 Это происходит из за того что эти переменные теряют достижимость  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 К ним больше никто не обращается

 
<br>

&emsp;&emsp; 🔹 Для того что бы сохранить состояние каких либо переменных внутри функции после выполнения, можно поместить их в замыкание


&emsp;&emsp;&emsp;&emsp; 🎯 Когда переменные находятся в замыкании, они попадают в `[[Scope]]` дочерней функции  
&emsp;&emsp;&emsp;&emsp; 🎯 Значит они достижимы, и сборщик мусора их не обнулит
```javascript
//Функция обертка, хранящая кол-во кликов в замыкании
function counterWrapper() {
  let count = 0;

  return () => {
    ++count;

    return count;
  };
}

const clickCount = counterWrapper();

console.log(clickCount()); // 👉🏼 1
console.log(clickCount()); // 👉🏼 2
console.log(clickCount()); // 👉🏼 3
```

<br>
<br>

💠 Создавать приватные переменные

&emsp;&emsp; 🔹 Обращение к переменным в замыкании, доступно только изнутри функции  
&emsp;&emsp;&emsp;&emsp; 👆 Если функция не возвращает ссылку на объект


&emsp;&emsp; 🔹 Обращения с наружи, возможно только при помощи созданных методов дочерней функции

```javascript
function elementSizesWrapper() {
  let _width = 0,
      _height = 0,
      _resetSizes = () => {
        _width = 0;
        _height = 0;
      },
      publicOptions = {
          radius: 0,
          border: 0
      }
  
  return {
    getSizes: () => {
      return { width: _width, height: _height };
    },
    setHeight: (size) => {
      _height = size;
    },
    resetSize: () => _resetSizes(),
    publicOptions  
  };
}

//🎯 Функция с значениями в замыкании
const elementSizes = elementSizesWrapper();

//🎯 Пробуем изменить значение на прямик
elementSizes._height = 20;

//🎯 Изменение в нутри замыкания не происходит
console.log(elementSizes.getSizes()); // 👉🏼 {width: 0, height: 0}

//🎯 Пробуем изменить через созданные методы
elementSizes.setHeight(20);

//🎯 Приватные свойства изменены
console.log(elementSizes.getSizes()); // 👉🏼 {width: 0, height: 20}

//🎯 Вызовем приватную функцию
elementSizes.resetSize()

//🎯 Приватная функция изменила приватные свойства
console.log(elementSizes.getSizes()); // 👉🏼 {width: 0, height: 0}

//---------------------------------------------------------------

//🎯 Пробуем изменить значения напрямик, через объект который был возвращен наружу
elementSizes.publicOptions.border = 5

//🎯 Изменения были произведенны и сохранены в замыкании, так как была возвращенна ссылка на объект
//🎯 Через которую можно изменять сам объект, даже снаружи
//🛑 Этот прием работает только с объектами, и массивами, примитивные данные так не работают
console.log(elementSizes.publicOptions); // 👉🏼 {radius: 0,border: 5}
```


##### 📗  **<a href="examplex/readme.md">Больше примеров замыкания</a>**

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**
