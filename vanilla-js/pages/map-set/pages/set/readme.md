#Set
> Коллекция уникальных значений, без ключей(называеться `множество`)

🔹 Может хранить в себе только один экземпляр значения  
&emsp;&emsp; 👆 Добавлении существующего экземпляра будет проигнорированно           
```javascript
const john = { name: 'John' },
      ben = { name: 'Ben' },
      den = { name: 'Den' }

const mySet = new Set([
  john,
  ben
])

mySet.add(den) // => 🎯 Будет добавлен
mySet.add(john) // => 🎯 Будет проигнорирован

console.log(mySet) // => // {0: {name: "John"}, 1: {name: "Ben"}, 2: {name: "Den"}}
```
👆 `john` будет проигнориован так как  это ссылка на тот объект который уже лежит в `mySet`

<br>

```javascript
const mySet = new Set([1, 2, 3])

mySet.add(3) //=> 🎯 Будет проигнорирован
```
👆 `3` уже есть в `mySet`

<br>

```javascript
const john = { name: 'John' },
      ben = { name: 'Ben' },
      den = { name: 'Den' }

const mySet = new Set([
  john,
  ben
])

mySet.add(den) // => 🎯 Будет добавлен
mySet.add(john) // => 🎯 Будет проигнорирован (ссылка на существующий объект)

console.log(mySet) // => // {0: {name: "John"}, 1: {name: "Ben"}, 2: {name: "Den"}}

mySet.add({name: 'John'})// => 🎯 Будет добавлен
```
❗ Хоть переданный объект имеет структуру идентичную объекту `john`, (`который уже есть в Set`)  
Он не являеться ссылкой на объект `john` (`вспоминаем особенности объекта`), и по этому будет добавлен

## 🚩 Методы

<br>

💠 **new Set`(iterableData)`**   
👆🏽 Создает новый `Set`

&emsp;&emsp; 🔹 Если в качестве `iterableData` передали массив, будет создан новый `Set` с удаленными не уникальными значениями`(не изменяя оригинальный массив)`  
&emsp;&emsp;&emsp;&emsp; ⚡ Можно использовать в качестве унификатора массива
```javascript
const notUniqArray = [1, 2, 2, 2, 3],
      mySet = new Set(notUniqArray),
      uniqArray = Array.from(mySet) 

console.log(uniqArray) // => [1, 2, 3]
console.log(notUniqArray) // => [1, 2, 2, 2, 3]
```       
 
<br>
<br>

💠 **set.add`(dataForAdd)`**   
👆🏽 Добавляет значение в `Set`

&emsp;&emsp; 🔹 Если `dataForAdd` уже содержиться в `Set`, добавление проигнорируеться  
&emsp;&emsp;&emsp;&emsp; ❗ Помнить о об особенности объекта    

&emsp;&emsp; 🔹 `set.add(dataForAdd)` возвращает тот же `set`  
&emsp;&emsp;&emsp;&emsp; 👆 Это позволяет создавать цепочки      
```javascript
const mySet = new Set([1, 2, 3])

mySet.add(4)
     .add(5)
     .add(6)
     
console.log(mySet) // [1, 2, 3, 4, 5, 6] (итерируемый объект, не массив)
```

<br>
<br>

💠 **set.delete`(value)`**   
👆🏽 Удалит значение из `set`

&emsp;&emsp; 🔹 Вернет `true/false` об успехе операции       

```javascript
const mySet = new Set(['a', 'b', 'c'])

mySet.delete('c') // => true
mySet.delete('z') // => false

console.log(mySet) // {0: 'a', 1: 'b'}
```

<br>
<br>

💠 **set.has`(value)`**   
👆🏽 Проверит наличие значение в `set`, вернет `true/false`

```javascript
const mySet = new Set([1, 2, 3])

mySet.has(3) // => true
```

<br>
<br>

💠 **set.clear`()`**   
👆🏽 Удалит все значения из `set`

```javascript
const mySet = new Set([1, 2, 3])

mySet.clear()

console.log(mySet) // => {}
```

<br><br>

💠 **set.size**   
👆🏽 Вернет кол-во значения в `set`
```javascript
const mySet = new Set([1, 2, 3])

console.log(mySet.size) // => 3 
```

<br><br>

💠 **set.values`()`**   
👆🏽 Вернет итерируемый объект для перебора значени(`не массив`), нужен больше для обратной совместимости с `Map`

```javascript
const mySet = new Set(['a', 'b', 'c'])

console.log(mySet.values()) // => {0: 'a', 1: 'b', 2: 'c'}
```

<br><br>

💠 **set.keys`()`**   
👆🏽 Вернет итерируемый объект для перебора значени(`не массив`), идентичен `set.values`, нужен больше для обратной совместимости с `Map`

```javascript
const mySet = new Set(['a', 'b', 'c'])

console.log(mySet.values()) // => {0: 'a', 1: 'b', 2: 'c'}
```

<br><br>

💠 **set.entries`()`**   
👆🏽 Вернет итерируемый объект для перебора значени(`не массив`), нужен больше для обратной совместимости с `Map`

```javascript
const mySet = new Set(['a', 'b', 'c'])

console.log(mySet.entries()) // => {0: ['a', 'a'], 1: ['b', 'b'], 2: ['c', 'c']}
```

## 🚩 Перебор Set

💠 **for/off**   
👆🏽 Переберет все значения `set`

```javascript
const mySet = new Set(['a', 'b', 'c'])

for (let value of mySet) { // => 🎯 Основной, остальные для обратной совместимости с Map
  console.log(value) // => 'a'
}

for (let value of mySet.entries()) {
  console.log(value) // => ['a','a']
}

for (let value of mySet.keys()) {
  console.log(value) // => 'a'
}

for (let value of mySet.values()) {
  console.log(value) // => 'a'
}
```

<br><br>

💠 **set.forEach`((value, valueAgain, set) => {...})`**   
👆🏽 Переберет все значения `set`

&emsp;&emsp; 🔹 `valueAgain` - идентичен `value`, нужен для обратной совместимостью с `Map` 

```javascript
const mySet = new Set(['a', 'b', 'c'])

mySet.forEach((value, valueAgain, set) => {
    console.log(value) // => 'a'
})
```

## 🚩 WeekSet

🔹 Принимает в качестве ключей только объекты
```javascript
const myWeekMap = new WeakSet() 

myWeekMap.add('key') // 🎯 => Будет про игнорирован

myWeekMap.add({name: 'Jon'}) // 🎯 => Будет добавлен
myWeekMap.add([1]) // 🎯 => Будет добавлен
```       

🔹 Владеет урезанным функционалам обычного `Set`    
&emsp;&emsp; 🎯 **WeakSet.add`(key, value)`**  
&emsp;&emsp; 🎯 **WeakSet.delete`(key)`**  
&emsp;&emsp; 🎯 **WeakSet.has`(key)`**

🔹 `WeakSet` нельзя перебрать

🔹 Нельзя взять данные из `WeakSet`, только знать есть ли они там

🔹 `WeakSet` удалит значение в себе, если их нет нигде кроме как в `WeakSet`
```javascript
let myWeekSet = new WeakSet(),
    objectKey = {name: 'Jon'}

myWeekSet.add(objectKey)

objectKey = null
```
`objectKey` больше нигде не доступен кроме как в `WeakSet`, сборщик мусора удалит этот объект из памяти

<br><br>

##### Применение

Обычно применяеться как дополнительное хранилище данных, отвечающее на вопрос существует ли еще объект  


```javascript
let john = {name: 'John'},
    ben = {name: 'Ben'},
    additionalData = new WeekSet() 

additionalData.add(john)
additionalData.add(ben)

additionalData.has(john) // => true(Заходил ли джон?)

john = null // => jon вышел
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**