# Функции

Функция - это обычный объект с рядом особенностей

&emsp;&emsp; 🔹 Принимает в себя параметры `при вызове`       

&emsp;&emsp; 🔹 Всегда что-то возвращает `при вызове`  
&emsp;&emsp;&emsp;&emsp; 👆 Если не указали `return` вернет `undefined`

&emsp;&emsp; 🛑 Присваивание метода к функции работает    
&emsp;&emsp; 👆 Так как функция это объект, а метод это свойства
```javascript
const fn = (a) => {
  return a
}

fn.logger = (data) => {
  return `log: ${data}`
}

console.log(fn.logger('my-data')) // => 'log: my-data'
console.log(fn('my-data')) // => 'my-data'
```

<br>

## 🚩 Виды функций

<br>

💠 **Function Declaration**  
👆🏽 Функция созданная в основном потоке документа

<br>

&emsp;&emsp; 🔹 Доступна до объявления    
&emsp;&emsp;&emsp;&emsp; 👆 `Hoisting`  

<br>
<br>

💠 **Function Expression**  
👆🏽 Функция созданная в основном потоке документа

<br>

&emsp;&emsp; 🔹 Не доступна до объявления    
&emsp;&emsp;&emsp;&emsp; 👆 Находится в `ВМЗ`  

&emsp;&emsp; 🔹 Возможно переопределить

<br>
<br>

💠 **Стрелочная Функция**  
👆🏽 Функция созданная в основном потоке документа

<br>

&emsp;&emsp; 🔹 Не доступна до объявления    
&emsp;&emsp;&emsp;&emsp; 👆 Находится в `ВМЗ`  

&emsp;&emsp; 🔹 Не имеет своего `this`  
&emsp;&emsp;&emsp;&emsp; 👆 Возьмет родительский  

&emsp;&emsp; 🔹 Не имеет `arguments`  
&emsp;&emsp;&emsp;&emsp; 👆 Можно получить при помощи `...rest`

<br>
<br>

💠 **IIFE**  
👆🏽 Анонимная самовызывающиеся функция

<br>

&emsp;&emsp; 🔹 Выполняется сразу после объявления    
&emsp;&emsp;&emsp;&emsp; 👆 Раньше использовалась для модулей, инкапсулируя в себе область видимости библиотеки  


<br>
<br>

💠 **new Function`(arg1, ..., argN, functionBody)`**  
👆🏽 Функция генерируется на лету, из строки  
Все переданные аргументы, будут параметрами, а последняя строка телом функции

<br>

&emsp;&emsp; 🛑 Имеет доступ только глобальной области видимости, где бы не была вызванна      

```javascript
let sum = new Function('a', 'b', 'return a + b');

alert( sum(1, 2) ); // 3

//--------------------------------------------

let sayHi = new Function('alert("Hello")');

sayHi(); // Hello
```

<br>
<br>
  
## 🚩 Аргументы

<br>

💠 **arguments**  
👆🏽 Псевдо массив, со всеми параметрами функции

<br>

&emsp;&emsp; 🔹 Псевдо массив `arguments`, отсутствует у функции стрелки      
  
&emsp;&emsp; 🔹 Метод использование методов массива в псевдомассиве  
&emsp;&emsp;&emsp;&emsp; 👆 **Array.from`(arguments)`**   
&emsp;&emsp;&emsp;&emsp; Переобразует псевдо массив в массив
  
&emsp;&emsp;&emsp;&emsp; 👆 **[].join.call`(arguments)`**  
&emsp;&emsp;&emsp;&emsp; Отдолжит метод который раотает с `this` у массива

```
function myFunc(a, b, d) => {
    return arguments
}

console.log(myFunc(1,2,3)) // => [1,2,3]:psevdo
```

<br>
<br>

💠 **rest**  
👆🏽 Остаточные параметры

<br>

&emsp;&emsp; 🔹 Располагаются всегда в конце      

&emsp;&emsp; 🔹 Содержит массив вызванных но не объявленных свойств 

&emsp;&emsp; 🔹 Полноценный массив
```
const fn = (a, b, ...rest) => {
    console.log(rest);
}

console.log(fn(1,2,3,4,5)) // => [3,4,5]:array
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**