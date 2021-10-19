# Массивы
Перебираемый тип данных, имеющий ряд собственных свойств и методов

## 🚩 Добавления элементов в массив

<br>

💠 **myArray.push`(el1, ..., elN)`**   
👆🏽 В конец массива  
```javascript
[1, 2].push(3, 4) // => [1, 2, 3, 4]
```

<br>
<br>

💠 **myArray.unshift`(el1, ..., elN)`**  
👆🏽 В начало массива
```javascript
[2,3].unshift(1, 2) // => [1, 2, 3, 4]
```
🔸 Размешение элемента в начале массива переиндексирует все элементы, это ресурсозатратная операция

<br>


## 🚩 Удаление элементов массива

<br>

💠 **myArray.pop`()`**   
👆🏽 Удаляет один элемент из конца массива и возвращает его
```javascript
[1, 2].pop() // => вернет 2, массив[1]
```

<br>
<br>

💠 **myArray.shift`()`**    
👆🏽 Удаляет один элемент из начала массива и возвращает его 
```javascript
[1, 2].shift() // => вернет 1, массив[2]
```
🔸 Удаление элемента из начале массива переиндексирует все элементы, это ресурсозатратная операция

<br>
<br>

💠 **myArray.filter`((item, index, array), this)`:**   
👆🏽 Создаст новый массив, со всеми элементами прошедшими проверку, исключив лишние
```javascript
const people = [
    {id: 1},
    {id: 2},
    {id: 3}
]

const filtredArray = people.filter(((item) => item.id !== 2)) // => [{id: 1}, {id: 3}]
```

<br>
<br>

💠 **myArray.splice`(startIndex, deleteCount)`**   
👆🏽 Удалит указанное кол-во элементов массива, начиная с указанного индекса(`включая`)
    
&emsp;&emsp; 🔹 Принимает отрицательный `startIndex`               
&emsp;&emsp;&emsp;&emsp; 👆 Если `startIndex` отрицательный, поиск индекса для удалениея, начнется с конца   
```javascript
[1, 2 ,3 , 4].splice(-2, 1).toString() === [1, 2 ,3 , 4].splice([1, 2 ,3 , 4].length - 2, 1).toString()
```

&emsp;&emsp; 🔹 Если `deleteCount` больше элементов оставшихся справа, удаление не пойдет в начало массива 
```javascript
[1, 2 ,3 , 4].splice(0, 1) // => [2,3,4]
```

<br> 

## ❗🚩 Длина массива

🎯 Длина массива хранится в свойстве length, но оно обманчиво, важно помнить об этом  

🎯 Так как в нем хранится не кол-во элементов, а индекс последнего элемента +1  

🎯 И если в массиве будет дырка, length не отобразит этого

<br> 


## 🚩 Перебор массива

<br>

💠 `for (let i = 0; i < myArray.length; i++)`    
👆🏽 Перебор с индексом

<br>
<br>


💠 **myArray.foreach`((index, item, fullArray))`**   
👆🏽 Перебос с индексом, но уже в функции

<br>
<br>


💠 `for (let item of myArray)`   
👆🏽 Перебор значений массива(`без индексов`)

<br>
<br>

🛑 `for (let item in myArray)`   
👆🏽 Никогда не использовать for in для перебора массива

&emsp;&emsp; 🔹 Он был создан для перебора объекта, может вывести в итерации лишние свойства из прототипа      
&emsp;&emsp;&emsp;&emsp; 👆 Которые не являются частью массива, + он гораздо медленней

<br> 


## 🚩 Армейский нож для массива
Один метод способный производить различные преобразования массива

💠 **myArray.splice`(startIndex, deleteQuantity, elForAdd1, ..., elForAddN)`**

&emsp;&emsp; 🔹 Работает с отрицательным `startIndex`

&emsp;&emsp; 🔹 Возвращает удаленные элементы массива

&emsp;&emsp; 🔹 `startIndex` указывает с какого индекса начинать удаление

&emsp;&emsp; 🔹 `startIndex` указывает до какого индекса добавить новые элементы

<br><br>

👇🏽  **Удаление:** 

**myArray.splice`(startIndex, deleteQuantity)`** 
```javascript
const array = [1, 2 ,3 , 4]

array.splice(0, 1) // => [1]

console.log(array) // => [2,3,4]
```

<br><br>

👇🏽  **Замена:**   
**myArray.splice`(startIndex, deleteQuantity, elForAdd1, ..., elForAddN)`**  
```javascript
const array = [1, 2 ,3 , 4]

array.splice(1, 2, 10, 11) // => [2, 3]

console.log(array) // => [1,10,11,4]
``` 

<br><br>


👇🏽  **Добавление:**   
**myArray.splice`(startIndex, deleteQuantity, elForAdd1, ..., elForAddN)`**
```javascript
const array = [1, 2, 3, 4]

array.splice(1, 0, 10, 11) // => []

console.log(array) // => [1, 10, 11, 2, 3, 4]
``` 

<br>

## 🚩 Скопировать массив по указанным индексам старта и финиша

<br>

💠 **myArray.slice`(startIndex, indexBeforeFinish)`**  
👆🏽 Берет элементы, начиная с индекса `startIndex`, заканчивая элементом перед `indexBeforeFinish`

&emsp;&emsp; 🔹 Вернет элементы с индексом от 1(`включая 1`) до 3(`не включая 3`)   
&emsp;&emsp;&emsp;&emsp; 👆 ['1', `2, 3,` '4']       

&emsp;&emsp; 🔹 Работает с отрицательными значениями

&emsp;&emsp; 🔹 Если `start` больше `finish`, вернет пустой массив

&emsp;&emsp; 🔹 Если не указать `finish`, скопирует массив до конца

```javascript
console.log([1, 2 , 3, 4].slice(1, 3)) // => [2, 3]
```

<br> 

## 🚩 Склеить массив

<br>

💠 **myArray.concat`(arr1, ..., arrN)`**   
👆🏽 Объединит массивы с указанным
```javascript
[1, 2, 3, 4].concat([5,6,7]) // => [1, 2, 3, 4, 5, 6, 7]
[].concat([1,2,3],[4, 5]) // => [1, 2, 3, 4, 5]
```

<br> 

## 🚩 Поиск в массиве

<br>

💠 **myArray.includes`(value)`**   
👆🏽 Проверит есть ли элемент в массиве - вернет `true/false`
```javascript
[1, 2, 3].includes(2) // => true
[1, 2, 3].includes(4) // => false
```

<br><br>

💠 **myArray.indexOf`(value, from)`**   
👆🏽 Проверит наличия элемента в массиве `с лева на право`

&emsp;&emsp; 🔹 `from` - индекс элемента с которого начнется поиск, с лева на право(`включая сам элемент`)
    
&emsp;&emsp; 🔹 При наличии значения вернет его ключ, при отсутствии `-1`
    
&emsp;&emsp; 🔹 Если не указать `from` поиск будет с самого начала массива
```javascript
[1, 2, 3].indexOf(1) // => 0
[1, 2, 3, 4].indexOf(1, 2) // => -1
```    

<br><br>

💠 **myArray.lastIndexOf`(value, from)`**   
👆🏽  Проверит наличия элемента в массиве `с права на лево`

&emsp;&emsp; 🔹 `from` - индекс элемента c которого будет вестить поиск, с права на лево(`включая сам элемент`)

&emsp;&emsp; 🔹 При наличии значения вернет его ключ, при отсутствии `-1`
    
&emsp;&emsp; 🔹 Если не указать `from` поиск будет с самого конца

```javascript
[1, 2, 3].lastIndexOf(2) // => 1
[1, 2, 3, 4].lastIndexOf(3, 1) // => -1
```

🛑 При проверке результата поиска, нужно проверять на совпадение с `-1`
```javascript
const elementIndex = [1, 2, 3].indexOf(1),
      isFound = elementIndex !== -1
      
if (isFound) {
    //...
}
``` 

<br> 

## 🚩 Поиск элемента в массиве по условию 

<br>

💠 **myArray.find`((item, index, array))`**   
👆🏽 Начнет перебирать массив, вернет первый элемент, на котором функция вернула `true`, остановит перебор
```javascript
const myArray = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"}
];

const needId = 2,
      needUser = myArray.find(item => item.id === needId) // => {id: 2, name: "Петя"}
      
const needId2 = 3, 
      needUser2 = myArray.find(item => { // => {id: 3, name: "Маша"}
    
        if (item.id === needId) {
            return true
        }
    
      })           
```
&emsp;&emsp; 🔹 Если функция не вернет `true`, to `find` вернет `undefined`  

<br><br>

💠 **myArray.findIndex`((item, index, array))`**  
👆🏽  Начнет перебирать массив, вернет индекс первого элемента, на котором функция вернула `true`, остановит перебор
```javascript
const myArray = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"}
];

const needId = 2,
      needUser = myArray.findIndex(item => item.id === needId) // => 1
      
const needId2 = 3, 
      needUser2 = myArray.find(item => { // => 2
    
        if (item.id === needId) {
            return true
        }
    
      })           
```
&emsp;&emsp; 🔹 Если функция не вернет `true`, to `find` вернет `undefined` 

<br><br>

💠 **myArray.filter`((item, index, array))`**    
👆🏽 Перебирает весь массив, возвращает только те элементы, на которых функция вернула `true`
```javascript
const myArray = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" },
  { id: 4, name: "Борис" }
];

const needUsers = myArray.filter((item) => item.id > 2); //[{ id: 3, name: "Маша" }, { id: 4, name: "Борис" }]

const needUsersIds = [1, 3],
      needUsers2 = myArray.filter((item) => needUsersIds.includes(item.id)); //[{ id: 1, name: "Вася" }, { id: 3, name: "Маша" }]
```
&emsp;&emsp; 🔹 Если функция не вернет `true`, to `filter` вернет `[]` 

<br>

## 🚩 Преобразование массива

* **myArray.map`((item, index, array))`**   
👆🏽 Трансформирует элементы массива

&emsp;&emsp; 🎯 Проходится по каждому элементу указанного массива    
&emsp;&emsp; 🎯 Делает любые трансформации в функции    
&emsp;&emsp; 🎯 Помещает трансформированный элемент, в новый независимый массив    
&emsp;&emsp; 🎯 Возвращает новый независимый массив, трансформированных элементов      

```javascript
[1, 2, 3, 4, 5].map(item => item+1) // => [2, 3, 4, 5, 6]
```

<br>

## 🚩 Сортировка массива

💠 **myArray.sort`(fn)`**   
👆🏽 Метод сортировки массива

&emsp;&emsp; 🔹 Изменяет оригинал массива, а не возвращает новый  

&emsp;&emsp; 🛑 По умолчанию приводит значения к строке, что вызывает не правильную сортировку  
&emsp;&emsp;&emsp;&emsp; 👆 Для вызова правильной сортировки, нужно передать функцию внутри метода     
```javascript
// от меньшего к большему
let fromLessToLargest = (a, b) => {
      return a - b;
}

// от большему к меньшему
let fromLargestToLess = (a, b) => {
      return b - a;
}

const myArray1 = [1, 2, 13, 4, 3],
      myArray2 = [1, 2, 13, 4, 3]
      
myArray1.sort(fromLessToLargest)
myArray2.sort(fromLargestToLess)

console.log(myArray1) // => [1, 2, 3, 4, 13]
console.log(myArray2) // => [13, 4, 3, 2, 1]
```

📗 Функция начинает перебирать элементы массива попарно    
&emsp;&emsp; 🎯 `a`: Последний элемент в паре 
  
&emsp;&emsp; 🎯 `b`: Первый элемент в паре   

&emsp;&emsp; 🎯 Цикл будет проходить до тех пор пока все итерации одного цикла не вернут `true`

<br>

## 🚩 Разворот массива

💠 **myArray.reverse`()`**   
👆🏽 Метод разворота массива

let myArray = [1, 2, 3, 4, 5];

&emsp;&emsp; 🔹 Развернет сам массив, а не копию      

&emsp;&emsp; 🔹 Функция возвращает развернутый оригинал массива  
&emsp;&emsp;&emsp;&emsp; 👆 Удобно для создания цепи          

```javascript
// от меньшего к большему
let fromLessToLargest = (a, b) => {
  return a - b;
}

// от большему к меньшему
let fromLargestToLess = (a, b) => {
  return b - a;
}

const myArray1 = [1, 2, 13, 4, 3],
  myArray2 = [1, 2, 13, 4, 3]
  
myArray1.sort(fromLessToLargest)
myArray2.sort(fromLargestToLess)

console.log(myArray1) // => [1, 2, 3, 4, 13]
console.log(myArray2) // => [13, 4, 3, 2, 1]

//chain
console.log(myArray1.sort(fromLessToLargest).map(item => ++item)) // => [2, 3, 4, 5, 14] 
```


<br>

## 🚩 Разбить строку, на элементы массива, по разделителю

💠 **myString.split`(delimiter)`**   
👆🏽 Разобьет строку на массив, элементами массива, будут строки между `delimiter`

<br>

&emsp;&emsp; 🔹 Если `delimiter` отсутствует в строке, вернется вся строка в массиве `['myStr']`  

&emsp;&emsp; 🔹 Возвращает новый массив   
&emsp;&emsp;&emsp;&emsp; 👆 Удобно для создания цепи          
```javascript
console.log('Ben, Jon, Den'.split(',')) // => ["Ben", " Jon", " Den"]
```

<br>

## 🚩 Склеить строку из элементов массива, используя разделитель    

💠 **myString.join`(delimiter = ',')`**   
👆🏽 Склеит элементы массива в строку, разделив их `delimiter`

<br>

&emsp;&emsp; 🔹 Возвращает новую строку

&emsp;&emsp; 🔹 Оставляет пробел в конце

&emsp;&emsp; 🔹 Если не указывать `delimiter`, склеит все через запятую, без пробелов

```javascript
console.log(["Ben", "Jon", "Den"].join("")); // => 'BenJonDen '
console.log(["Ben", "Jon", "Den"].join(" ")); // => 'Ben Jon Den '
console.log(["Ben", "Jon", "Den"].join()); // => 'Ben,Jon,Den '
console.log(["Ben", "Jon", "Den"].join(', ')); // => 'Ben, Jon, Den ' 
```

<br>

## 🚩 Итерации c переменной внутри    

💠 **myArray.reduce`((prevFunctionResult, item, key) => {…}, initValue)`**  
👆🏽 Проходится по массиву, записывая то что она вернет в `prevFunctionResult`  
&emsp;&emsp; 👆 При первой итерации в `prevFunctionResult` попадет `initValue`   

<br>

&emsp;&emsp; 🔹 Возвращает результат работы функции, последней итерации

```javascript
const res = ["Ben", "Jon", "Den"].reduce((prevResult, item) => {
	return prevResult + `<h1>${item}</h1>`
}, '')

console.log(res) // => <h1>Ben</h1><h1>Jon</h1><h1>Den</h1> 
```

<br>

## 🚩 Проверка на массив

💠 **Array.isArray`(value)`**   
👆🏽 Проверит является ли `value` массивом, вернет `true/false`

```javascript
Array.isArray(["Ben", "Jon", "Den"]) // => true
Array.isArray("Ben, Jon, Den") // => false
```

<br>

## 🚩 Передача контекста в методы массива
👆🏽 Методы `[find, filter, map]` могут принимать параметр, который попадет в `this` функции обработчика

```javascript
["Ben", "Jon", "Den"].map(function(item) {
  console.log(this) // myContext 
  return item
}, 'myContext') //myContext переданная строка в контекст колбека
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**