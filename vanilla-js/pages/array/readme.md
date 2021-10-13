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

💠 **myArray.unshift`(el1, el2, elN...)`**  
👆🏽 В начало массива
```javascript
[2,3].unshift(1, 2) // => [1, 2, 3, 4]
```
🔸 Размешение элемента в начале массива переиндексирует все элементы, это удар по производительности  

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
🔸 Удаление элемента из начале массива переиндексирует все элементы, это удар по производительности

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
👆🏽 Удалит указанное кол-во элементов массива, начиная с указанного индекса(включая)
    
    * Принимает отрицательный `startIndex`
    
    * Если `startIndex` отрицательный, поиск индекса для удалениея, начнется с конца   
    `[1, 2 ,3 , 4].splice(-2, 1).toString() === [1, 2 ,3 , 4].splice([1, 2 ,3 , 4].length - 2, 1).toString()`
    
    * Если `deleteCount` элементов оставшихся справа, удаление не пойдет в начало массива 

```javascript
[1, 2 ,3 , 4].splice(0, 1) // => [2,3,4]
```

<br> 

## ❗🚩 Длина массива
Длина массива хранится в свойстве length, но оно обманчиво, важно помнить об этом  
Так как в нем хранится не кол-во элементов, а индекс последнего элемента +1  
И если в массиве будет дырка, length не отобразит этого

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
👆🏽 Перебор значений массива(бек индексов)

<br>
<br>

🛑 `for (let item in myArray)`   
👆🏽 Никогда не использовать for in для перебора массива

Он был создан для перебора объекта, и по этому может вывести в итерации лишние свойства  
Которые не являются частью массива, + он гораздо медленней

<br> 


## 🚩 Армейский нож для массива
Один метод способный производить различные преобразования массива

💠 **myArray.splice`(startIndex, deleteQuantity, elForAdd1, ..., elForAddN)`**

🔹 Работает с отрицательным `startIndex`

🔹 Возвращает удаленные элементы массива

🔹 `startIndex` указывает с какого индекса начинать удаление

🔹 `startIndex` указывает до какого индекса добавить новые элементы

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

💠 **myArray.slice`(startIndex, finishIndex)`**

🔹 Работает с отрицательными значениями

🔹 Если start больше finish, вернет пустой массив

🔹 Если не указать finish, скопирует массив до конца

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
👆🏽 Проверит есть ли элемент в массиве - вернет true/false
```javascript
[1, 2, 3].includes(2) // => true
[1, 2, 3].includes(4) // => false
```

<br><br>

💠 **myArray.indexOf`(value, from)`**   
👆🏽 Проверит наличия элемента в массиве `с лева на право`

🔹 `from` - индекс элемента с которого начнется поиск, с лева на право(`включая сам элемент`)
    
🔹 При наличии значения вернет его ключ, при отсутствии `-1`
    
🔹 Если не указать `from` поиск будет с самого начала массива
```javascript
[1, 2, 3].indexOf(1) // => 0
[1, 2, 3, 4].indexOf(1, 2) // => -1
```    

<br><br>

💠 **myArray.lastIndexOf`(value, from)`**   
👆🏽  Проверит наличия элемента в массиве `с права на лево`

🔹 `from` - индекс элемента c которого будет вестить поиск, с права на лево(`включая сам элемент`)

🔹 При наличии значения вернет его ключ, при отсутствии `-1`
    
🔹 Если не указать `from` поиск будет с самого конца

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
🔹 Если функция не вернет `true`, to `find` вернет `undefined`  

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
🔹 Если функция не вернет `true`, to `find` вернет `undefined` 

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
🔹 Если функция не вернет `true`, to `filter` вернет `[]` 

<br>

## 🚩 Преобразование массива

* **myArray.map`((item, index, array))`**   
👆🏽 Трансформирует элементы массива

🎯 Проходится по каждому элементу указанного массива  
🎯 Делает любые трансформации в функции  
🎯 Помещает трансформированный элемент, в новый независимый массив  
🎯 Возвращает новый независимый массив, трансформированных элементов    

```javascript
[1, 2, 3, 4, 5].map(item => item+1) // => [2, 3, 4, 5, 6]
```
