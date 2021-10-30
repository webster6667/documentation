# Map
> Коллекция ключ-значение, в которой ключ не приводиться к строке

🔹 Не приводит ключ значения к строке  
&emsp;&emsp; 👆 В качестве ключа можно использовать любой тип данных          
```javascript
const myMap = new Map(),
      keyObject = {name: 'Ben'}

myMap.set(keyObject, 123);

console.log(myMap.get(keyObject)) // => 123
```

<br>

🔹 Хоть в `map` храняться итерируемые объекты, получить данные напрямую по индексу нельзя
```javascript
const myMap = new Map([
  ['age', 22]
])

console.log(myMap[0]) // => undefined
```

<br>

🔹 Сравнение ключей происходит по алгоритму `SameValueZero`  
&emsp;&emsp; 👆 Это тоже самое что и `===`, с единственным отличием `NaN === NaN` вернет `true`     
```javascript
const myMap = new Map()

myMap.set(NaN, 123);

myMap.has(NaN) // => true
```      

<br>

🔹 Структура `Map` колекции
```javascript
const myMap = new Map([
  ['age', 22],
  ['name', 'Jon'],
  [{name: 'Ben'}, {age: 22}]
])
```              

## 🚩 Свойства и методы

💠 **new Map`()`**   
👆🏽 Создаёт коллекцию
```javascript
const map = new Map([
  ['name', 'Ben']
]);
```
 
<br>
<br>

💠 **map.set`(key, value)`**   
👆🏽 Запишет в `map` ключ `key` с значением `value`

&emsp;&emsp; 🔹 `set` возвращает объект `map`  
&emsp;&emsp;&emsp;&emsp; 👆 Это позовляет создавать цепочки           
 
```javascript
const map = new Map();

map.set("1", "str1")
   .set(1, "num1")
   .set(true, "bool1");
``` 
 
<br>
<br>

💠 **map.get`(key)`**   
👆🏽 Возвращает значение по ключу `key` или `undefined`(если ключ `key` отсутствует)
 
```javascript
const map = new Map([
  ['name', 'Ben']
]);

map.get('name') // => Ben
```
 
<br>
<br>

💠 **map.has`(key)`**   
👆🏽 Возвращает `true/false` при наличии ключа в коллекции

&emsp;&emsp; 🔹 Находит ключ, даже с значением `NaN`      

```javascript
const myMap = new Map([
    ['name', 'Ben']
])

myMap.has('name') // => true
```
 
<br>
<br>

💠 **map.delete`(key)`**   
👆🏽 Удаляет элемент по ключу `key`    
 
```javascript
const myMap = new Map([
  ['name', 'Ben'],
  ['age', 22]
])

myMap.delete('age')

console.log(myMap) // => new Map([['name', 'Ben']])
``` 
 
<br>
<br>


💠 **map.clear`()`**   
👆🏽 Очистит коллекцию от всех элементов

```javascript
const myMap = new Map([
  ['name', 'Ben'],
  ['age', 22]
])

myMap.clear()

console.log(myMap) // => new Map([])
```

<br>
<br>

💠 **map.size**   
👆🏽 Вернет кол-во ключей в коллекции

```javascript
const myMap = new Map([
  ['name', 'Ben'],
  ['age', 22]
])

console.log(myMap.size) // => 2
```

<br>
<br>

💠 **map.keys`()`**  
👆🏽 Вернет итерируемый объект ключей коллекции
```javascript
const myMap = new Map([
  ['name', 'Ben'],
  ['age', 22]
])

myMap.keys() // => {0: "name", 1: "age"}
```

<br>
<br>

💠 **map.values`()`**  
👆🏽 Вернет итерируемый объект значений коллекции   
```javascript
const myMap = new Map([
  ['name', 'Ben'],
  ['age', 22]
])

myMap.values() // => {0: "Ben", 1: 22}
```

<br>
<br>

💠 **map.entries`()`**  
👆🏽 Вернет итерируемый объект ключ-значение
```javascript
const myMap = new Map([
  ['name', 'Ben'],
  ['age', 22]
])

myMap.entries() // => {0: {0: 'name', 1: 'Ben'}, 1: {0: 'age', 1: 22}}
```

<br><br>
📗 Итерируемый объект    
👆🏽 Масиво образный объект, у которого есть индексы, но отсутствуют все остальные методы массива и свойство `length`


<br>

## 🚩 Перебор Map

💠 **По ключам**   
```javascript
const myMap = new Map([
  ['name', 'Ben'],
  ['age', 22]
])

for (let key of myMap.keys()) {
    // key => name   
}
``` 

<br>
<br>

💠 **По значениям**   
```javascript
const myMap = new Map([
  ['name', 'Ben'],
  ['age', 22]
])

for (let value of myMap.values()) {
    // value => Ben   
}
``` 

<br>
<br>

💠 **По парам ключ/значение**      
   
&emsp;&emsp; 🔹 `map` и `map.entries()`, отработают одинаковов в цикле `for/of`           
   
```javascript
const myMap = new Map([
  ['name', 'Ben'],
  ['age', 22]
])

for (let entry of myMap.entries()) {
    // entry => ['name', 'Ben']   
}

for (let entry of myMap) {
    // entry => ['name', 'Ben']   
}
``` 

<br><br>

💠 **map.forEach`((value, key, map) => {...})`**   
👆🏽 Метод для перебора коллекции
```javascript
const myMap = new Map([
  ['name', 'Ben'],
  ['age', 22]
])

myMap.forEach((value, key, map) => {
    console.log(key)   // => 'name'
    console.log(value) // => 'Ben'
});
```

<br>

## 🚩 Трансформация Map и Object

💠 **`Object` в `Map`**  
👆🏽 `Object.entries(myObject)` преобразует объект в массив пар `ключ/значение`, что являеться структурой `Map`      
```javascript
const myObject = {
  name: "Ben",
  age: 22
};

let myMap = new Map(// => Преобразует object в map
    Object.entries(myObject)
); 
```      

<br><br>

💠 **`Map` в `Object`**  
👆🏽 `Object.fromEntries(array)` преобразует массив пар `ключ/значение`, в объект      
```javascript
const myMap = new Map([
  ['name', 'Ben'],
  ['age', 22]
])

let myObject = Object.fromEntries(myMap); // => {name: "Ben", age: 22}
```
<br>

### 🚩 WeekMap

🔹 Принимает в качестве ключей только объекты
```javascript
const myWeekMap = new WeakMap() 

myWeekMap.set(['key', 'value']) // 🎯 => Будет про игнорирован

myWeekMap.set([{name: 'Jon'}, {age: 22}]) //🎯 => Будет добавлен
```       

🔹 Владеет урезанным функционалам обычного `Map`    
&emsp;&emsp; 🎯 **weakMap.get`(key)`**  
&emsp;&emsp; 🎯 **weakMap.set`(key, value)`**  
&emsp;&emsp; 🎯 **weakMap.delete`(key)`**  
&emsp;&emsp; 🎯 **weakMap.has`(key)`**          

🔹 `WeakMap` нельзя перебрать, можно только получить значение по ключу     

🔹 `WeakMap` удалит значение по ключу, как только ключ перестанет быть доступен где либо кроме `WeakMap`
```javascript
let myWeekMap = new WeakMap(),
    objectKey = {name: 'Jon'}

myWeekMap.set([objectKey, {age: 22}])

objectKey = null
```
`objectKey` больше нигде не доступен кроме как в `WeakMap`, сборщик мусора удалит этот объект из памяти

<br><br>

##### Применение

Обычно применяеться как дополнительное хранилище данных, для какого либо объекта  
Удаление которого должно автоматически удалить закрепленные за ним данные через `WeekMap`, для освобождения памяти

```javascript
let john = {name: 'John'},
    additionalData = new WeekMap() 

additionalData.set([john, {age: 22}])

john = null // => john вышел, закрепленные за ним данные удаленный из памяти
```   

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**