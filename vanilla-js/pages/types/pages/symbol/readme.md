# Symbol 
> Новый примитивный тип в ES6

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

<br>

💠 **Symbol`('mySymbol').description`**  
👆🏽 Вернет имя метки символа
```javascript
const value1 = Symbol('mySymbol')

value1.description // => mySymbol


const value2 = Symbol()

value2.description // => undefined
```


<br><br>

💠 **Symbol.for`('mySymbol')`**  
👆🏽 Создает уникальный ключь, или возвращает существующий

<br>

🎯 Метод `for`, создает `Symbol` с именем, и заносит его в глобальный реестр  

🎯 Если в реестре уже есть `Symbol` с таким именем, то `for` возвращает ссылку на него

🎯 В таком случаи два `Symbol` созданные через `for`, будут равны друг другу
```javascript
const symbol1 = Symbol('mySymbol'),
      symbol2 = Symbol('mySymbol')
      
console.log(1, symbol1 == symbol2) // 👉🏼 1. false
      
const symbol3 = Symbol.for('mySymbol2'),
      symbol4 = Symbol.for('mySymbol2')

console.log(2, symbol3 == symbol4) // 👉🏼 2. true
```

### ⟵ **<a href="../../readme.md">Назад</a>**