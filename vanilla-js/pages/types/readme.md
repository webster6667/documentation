# Типы данных

💠 `string` - строка

💠 `number` - число, целое или с плавающей точкой, с ограниченной длинной

___
<br>


&emsp;&emsp; 🔹 `NaN` - результат ошибки математической операции

&emsp;&emsp;&emsp;&emsp; 🛑 `typeof NaN === 'number'`

&emsp;&emsp;&emsp;&emsp; 🛑 `NaN` не равна сама себе(`баг языка`)

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 Для определения `NaN` есть специальная функция `isNan(prop)`

<br>
<br>

&emsp;&emsp; 🔹 `Infinity` - бесконечность       

&emsp;&emsp;&emsp;&emsp; 👆 Тип числа больше любого числа, включая себя самого

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `Infinity > Infinity 👉🏼 false` 

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `Infinity == Infinity 👉🏼 true`

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `Infinity === Infinity 👉🏼 true`

<br>

&emsp;&emsp;&emsp;&emsp; 🛑 `isNaN(Infinity / Infinity) === true`

<br>
<br>

&emsp;&emsp;&emsp;&emsp; 👆 Может быть получено при:

🎯 Делении числа больше нуля на ноль
```javascript
1 / 0  // 👉🏼 Infinity
0 / 0  // 👉🏼 NaN
```

🎯 Просто объявленно
```javascript
const a = Infinity
```

🎯 При математических операциях с `Infinity`

<br>
<br>

&emsp;&emsp;&emsp;&emsp; 👆 Матеметические операции с `Infinity`

🎯 Сложение

```
 n + Infinity    👉🏼 Infinity
-n + Infinity    👉🏼 Infinity

Infinity + n     👉🏼 Infinity
Infinity + -n    👉🏼 Infinity

 
 n + -Infinity   👉🏼 -Infinity
-n + -Infinity   👉🏼 -Infinity

-Infinity + n    👉🏼 -Infinity
-Infinity + -n   👉🏼 -Infinity
```

🎯 Вычитание

```
 n - Infinity    👉🏼 -Infinity
-n - Infinity    👉🏼 -Infinity

Infinity - n     👉🏼 Infinity
Infinity - -n    👉🏼 Infinity

 
 n - -Infinity   👉🏼 Infinity
-n - -Infinity   👉🏼 Infinity

-Infinity - n    👉🏼 -Infinity
-Infinity - -n   👉🏼 -Infinity
```

🎯 Умножение

```
 0 * Infinity    👉🏼 NaN
 n * Infinity    👉🏼 Infinity
-n * Infinity    👉🏼 -Infinity

Infinity * 0     👉🏼 NaN
Infinity * n     👉🏼 Infinity
Infinity * -n    👉🏼 -Infinity

 0 * - Infinity  👉🏼 NaN
 n * -Infinity   👉🏼 -Infinity
-n * -Infinity   👉🏼 Infinity

-Infinity * 0    👉🏼 NaN
-Infinity * n    👉🏼 -Infinity
-Infinity * -n   👉🏼 Infinity
```

🎯 Деление

```
 0 / Infinity    👉🏼 0
 n * Infinity    👉🏼 0
-n * Infinity    👉🏼 -0

Infinity / 0     👉🏼 Infinity
Infinity / n     👉🏼 Infinity
Infinity / -n    👉🏼 -Infinity

 0 / -Infinity   👉🏼 -0
 n / -Infinity   👉🏼 -0
-n / -Infinity   👉🏼 0

-Infinity / 0    👉🏼 -Infinity
-Infinity / n    👉🏼 -Infinity
-Infinity / -n   👉🏼 Infinity
```

<br>

___

💠 `bigInt` - число, целое или с плавающей точкой, неограниченно длинной  

💠 `boolean` - **true/false**  

___

💠 `object` - вложенные объекты, массивы или функции

&emsp;&emsp; 🔹 `{a: 1}` не равен `{a: 1}`   
&emsp;&emsp;&emsp;&emsp; 👆 Нужно делать сравнивание по ключам и значениям , так как это ссылки на два разных объект  

&emsp;&emsp; ⚡ Хак `JSON.stringify({a: 1}) === JSON.stringify({a: 1})`, вернет `true`      
&emsp;&emsp;&emsp;&emsp; 🛑 Сравнение одинаковых объектов с разными позициями через `JSON.stringify` вернет `false`  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 Хоть объекты одинаковый, форматирование к строке вернет две разные строки  
```javascript
JSON.stringify({a: 1, b: 2}) === JSON.stringify({b: 2, a: 1}) // 👉🏼 false
```    

&emsp;&emsp; 🛑 `typeof () => true`  вернет `function`, но тип функции это объект(`особенности typeof`)

<br>

💠 `undefined` - значение всех переменных, до тех пор как им не присвоят значение
    
&emsp;&emsp; 🛑 `undefined == null 👉🏼 true`(баг языка)
    
&emsp;&emsp; 🔹 сравнение с `undefined` может вернуть `true` только в трех случаях  

&emsp;&emsp;&emsp;&emsp; 🎯 `undefined === undefined`   
&emsp;&emsp;&emsp;&emsp; 🎯 `undefined == undefined`   
&emsp;&emsp;&emsp;&emsp; 🎯 `undefined == null`   

&emsp;&emsp; 🔹 Преобразовании `undefined` к числу, вернет `NaN`

&emsp;&emsp; 🔹 `undefined` преобразуется к числу только при математическом сравнении  
&emsp;&emsp;&emsp;&emsp; 👆 При нестрогом сравнении, преобразование не происходит

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `undefined >= 2` 👉🏼 `NaN == 2`    
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `undefined == 2` 👉🏼 `undefined == 2`  


<br>

💠 `null` - тип данных для явного обозначения что переменная пустая     

&emsp;&emsp; 🛑 `typeof null` - вернет `object`(баг языка)  
&emsp;&emsp;&emsp;&emsp; ⚡ Для определение типа данных `null`, нужно выполнять сравнение с значением `null === null` 👉🏼 `true`


&emsp;&emsp; 🛑 `null` преобразуется к числу `(0)`, только при математическом сравнении    
&emsp;&emsp;&emsp;&emsp; 👆 При нестрогом сравнении, преобразование не происходит

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `null == null` 👉🏼 `null == null` 👉🏼 `true`     
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `null == 0` 👉🏼 `null == 0` 👉🏼 `true`  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `null >= 0` 👉🏼 `0 >= 0` 👉🏼 `true`  

<br>

💠 `Symbol` - новый примитивный тип в ES6

&emsp;&emsp; 🔹 Создается без `new`     
&emsp;&emsp;&emsp;&emsp; 👆`Symbol('mySymbol')`   
   
&emsp;&emsp; 🔹 Всегда вернет уникальное значение  
&emsp;&emsp;&emsp;&emsp; 👆 Если вызывается без метода `for`

&emsp;&emsp; 🔹 Не виден циклами 
  
&emsp;&emsp; 🔹 `Symbol('mySymbol')` не равен `Symbol('mySymbol')`

&emsp;&emsp; 🔹 `Symbol('mySymbol')` не преобразуется автоматически к строке  
&emsp;&emsp;&emsp;&emsp; 👆 Для этого есть методы:   

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `String(Symbol('mySymbol'))` 👉🏼 `"Symbol('mySymbol')"`     
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `Symbol('mySymbol').toString()` 👉🏼 `"Symbol('mySymbol')"`

##### 📗  **<a href="pages/symbol/readme.md">Подробней</a>**
     
<br>

💠 `typeof x` - вернет тип указанной переменной `x` 

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**