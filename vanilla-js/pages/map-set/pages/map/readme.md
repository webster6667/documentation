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
  ['age', '22']
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
  ['age', '22']
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
  ['age', '22']
])

console.log(myMap.size) // => 2
```



<br>

### ⟵ **<a href="../../readme.md">Назад</a>**