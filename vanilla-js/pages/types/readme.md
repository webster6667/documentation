# Типы данных

💠 `string` - строка

💠 `number` - число, целое или с плавающей точкой, с ограниченной длинной  

💠 `bigInt` - число, целое или с плавающей точкой, неограниченно длинной  

💠 `boolean` - **true/false**  

___

💠 `object` - вложенные объекты, массивы или функции

&emsp;&emsp; 🔹 `{a: 1}` не равен `{a: 1}` - нужно делать сравнивание по ключам и значениям  
&emsp;&emsp; Так как это две разные ссылки на объект  

&emsp;&emsp;&emsp;&emsp; ⚡ Либо хак `JSON.stringify({a: 1}) === JSON.stringify({a: 1})`, вернет `true`      
&emsp;&emsp;&emsp;&emsp; 👆 Проблема хака в том, что одинаковые свойства но разные позиции выдадут `false`   
    
&emsp;&emsp; 🛑 `typeof () => true`  вернет `function`, но тип функции это объект(особенности typeof)

<br>

💠 `NaN` - результат ошибки математической операции

&emsp;&emsp; 🛑 `NaN` не равна сама себе(баг языка)

&emsp;&emsp; 🔹 Для определения `NaN` есть специальная функция `isNan(prop)`

<br>

💠 `undefined` - значение всех переменных, до тех пор как им не присвоят значение
    
&emsp;&emsp; 🛑 `undefined == null` = `true`(баг языка)
    
&emsp;&emsp; 🔹 `undefined` сравнение с undefined может вернуть `true` только в трех случаях  

&emsp;&emsp;&emsp;&emsp; 👆 `undefined === undefined`   
&emsp;&emsp;&emsp;&emsp; 👆 `undefined == undefined`   
&emsp;&emsp;&emsp;&emsp; 👆 `undefined == null`   

&emsp;&emsp; 🔹 Преобразовании `undefined` к числу, вернет `NaN`

<br>

💠 `null` - тип данных для явного обозначения что переменная пустая     

&emsp;&emsp; 🛑 `typeof null` - вернет `object`(баг языка)  

&emsp;&emsp; 🛑 `null` трансформируется в `0`, всегда, кроме не строгово равенства `==`  
&emsp;&emsp;&emsp;&emsp; 👆 `null == null`: **true**  
&emsp;&emsp;&emsp;&emsp; 👆 `null == 0`: **false**

<br>

💠 `Symbol` - новый примитивный тип в ES6

&emsp;&emsp; 🔹 Создается без new - `Symbol('mySymbol')`   
   
&emsp;&emsp; 🔹 Всегда вернет уникальное значение  
&emsp;&emsp;&emsp;&emsp; 👆 Если вызывается без метода `for`

&emsp;&emsp; 🔹 Не виден циклами 
  
&emsp;&emsp; 🔹 `Symbol('mySymbol')` не равен `Symbol('mySymbol')`

&emsp;&emsp; 🔹 `Symbol('mySymbol')` не преобразуется автоматически к строке  
&emsp;&emsp;&emsp;&emsp; 👆 Для этого есть методы:   
&emsp;&emsp;&emsp;&emsp; 👆 `String(Symbol('mySymbol'))` => `"Symbol('mySymbol')"`   
&emsp;&emsp;&emsp;&emsp; 👆 `Symbol('mySymbol').toString()` => `"Symbol('mySymbol')"`

##### 📗  **<a href="pages/symbol/readme.md">Подробней</a>**
     
<br>

💠 `typeof x` - вернет тип указанной переменной `x` 

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**