# Типы данных

* `string` - текст
* `number` - целое число или с плавающей точкой, но с ограниченной длинной
* `bigInt` - для чисел с неограниченной длинной
* `boolean` - true/false

___

* `object` - вложенные объекты, массивы или функции
    * {a: 1} не равен {a: 1} - нужно делать сравнивание по ключам и значениям, так как это две разные ссылки на объект
    * Либо хак объект `JSON.stringlify()`, объектов и сравнения 
    * Проблема хака в том, что одинаковые свойства но разные позиции выдадут `false`
    * `typeof () => true`  вернет `function`, но тип функции это объект(особенности typeof)

* `NaN` - результат ошибки математической операции
    * `NaN` не равна сама себе(баг языка)
    * Для определения `NaN` есть специальная функция `isNan(prop)`

* `undefined` - значение всех переменных, до тех пор как им не присвоят значение
    * `undefined == null` = `true`(баг языка)
    * `undefined` сравнение с undefined может вернуть true только в трех случаях
        * `undefined === undefined`
        * `undefined == undefined`
        * `undefined == null`
    * Преобразовании к `undefined` к числу, вернет `null`   

* `null` - тип данных для явного обозначения разработчиком что переменная пустая
    * `typeof null` - вернет `object`(баг языка) 

* `Symbol` - новый примитивный тип в ES6
    * Создается без new - `Symbol('mySymbol')`
    * Всегда вернет уникальное значение, `Symbol('mySymbol')` не равен `Symbol('mySymbol')`
    
<br>

---

<br>      
    
`Symbol` включает в себя метод `for`
```javascript
Symbol.for('mySymbol')
```    
* Метод for, создает `Symbol` с именем, и заносит его в глобальный реестр  
* Если в реестре уже есть `Symbol` с таким именем, то `for` возвращает ссылку на него  
* В таком случаи два `Symbol` созданные через `for`, будут равны друг другу    
```javascript
const symbol1 = Symbol('mySymbol'),
      symbol2 = Symbol('mySymbol')
      
console.log(symbol1 == symbol2) //false
      
const symbol3 = Symbol.for('mySymbol2'),
      symbol4 = Symbol.for('mySymbol2')

console.log(symbol3 == symbol4) //true
```
    
<br>

---

<br>     
    
В объектах появился метод, позволяющий увидеть все его symbol, `Object.getOwnPropertySymbols(user)` - вернет массив symbols объекта

<br>

---

<br> 

`typeof x` - вернет тип указанной переменной x 