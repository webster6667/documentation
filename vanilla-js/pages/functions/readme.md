# Функции

Функция - это обычный объект с рядом особенностей

&emsp;&emsp; 🔹 Принимает в себя параметры `при вызове`       

&emsp;&emsp; 🔹 Всегда что-то возвращает `при вызове`  
&emsp;&emsp;&emsp;&emsp; 👆 Если не указали `return` вернет `undefined`

&emsp;&emsp; 🛑 Любая функция это объект, который может иметь свои свойства и методы    
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

&emsp;&emsp; 🔹 Свойства функции не обнуляются после вызова  
&emsp;&emsp;&emsp;&emsp; 🎯 Так как хранятся не в лексическом окружении, а в самой функции
    
&emsp;&emsp;&emsp;&emsp; 🎯 Свойства работают почти так-же как переменные в замыкании 

&emsp;&emsp;&emsp;&emsp; 🎯 Только переменные в замыкании закрыты от внешнего воздействия, а свойства нет

```javascript
const fn = function (a) {
  fn.count++;

  return a;
};

fn.count = 0; // свойство функции

console.log(fn("my-data")); // => 'my-data'
console.log(fn.count); // => 1
```

&emsp;&emsp; 🔹 У каждой функци есть свои дефолтные свойство

&emsp;&emsp;&emsp;&emsp; 🎯 `length` - Кол-во принимаемых аргументов функции

&emsp;&emsp;&emsp;&emsp; 🎯 `name` - Имя функции
```javascript
const fn = (a, b) => {
  console.log(fn.name, fn.length) // => 'fn' 2

  return a;
};

console.log(fn("my-data")); // => 'my-data'
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
👆🏽 Функция созданная внутри переменной

<br>

&emsp;&emsp; 🔹 Не доступна до объявления    
&emsp;&emsp;&emsp;&emsp; 👆 Находится в `ВМЗ`  

&emsp;&emsp; 🔹 Возможно переопределить

<br>
<br>

💠 **Named Function Expression**  
👆🏽 Функция созданная внутри переменной, с явно указанным именем

<br>

&emsp;&emsp; 🔹 Не может быть функцией стрелкой  
&emsp;&emsp;&emsp;&emsp; 👆 Им нельзя давать имя       

&emsp;&emsp; 🔹 Нужна для обращнию самой к себе из нутри  
&emsp;&emsp;&emsp;&emsp; 👆 Это нужно для перестраховки от случаев когда переменную переименовали  

```javascript
let fn = function myFn(a, b) {
  console.log(myFn.name, myFn.length);
  // => Обращается сама к себе по имени функции

  return a;
};

let newFn = fn;
fn = null;

console.log(newFn("my-data"));
```

<br>
<br>

💠 **Стрелочная Функция**  
👆🏽 Более современный, короткий вид функции

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
```javascript
(function () {
    console.log('init') //Сразу же отработает
})();
```

<br>
<br>

💠 **new Function`(arg1, ..., argN, functionBody)`**  
👆🏽 Функция генерируется на лету, из строки  
Все переданные аргументы, будут параметрами, а последняя строка телом функции

<br>

&emsp;&emsp; 🔹 `Function` пишется с большой буквы      

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
  
&emsp;&emsp; ⚡ Хак использование методов массива в псевдомассиве  
&emsp;&emsp;&emsp;&emsp; 👆 **Array.from`(arguments)`**   
&emsp;&emsp;&emsp;&emsp; Переобразует псевдо массив в массив
  
&emsp;&emsp;&emsp;&emsp; 👆 **[].join.call`(arguments)`**  
&emsp;&emsp;&emsp;&emsp; Отдолжит метод который раотает с `this` у массива

```javascript
function myFunc(a, b, d) {
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
```javascript
const fn = (a, b, ...rest) => {
    console.log(rest);
}

console.log(fn(1,2,3,4,5)) // => [3,4,5]:array
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**