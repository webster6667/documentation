# Преобразование типов
> Правила и методы преобразования одного типа в другой

## 🚩 Строковое

💠 **Методы преобразования к строке**

&emsp;&emsp; 🔹 `1 + ''` 👉🏼 `'1'`   
&emsp;&emsp; 🔹 `String(1)` 👉🏼 `'1'`        

<br> 

💠 **Правила**

&emsp;&emsp; 🔹 Преобразование любого типа данных кроме объекта и массива к строке, вернет такую-же строку

&emsp;&emsp; 🛑 Преобразование объекта к строке, вернет `'[object Object]'`

<br>

&emsp;&emsp; 🛑 Преобразование массива к строке, вернет строку с содержимым массива

&emsp;&emsp;&emsp;&emsp; 👆 Без квадратных скобок и пробелов между элементами массива

```
🎯 String(true) 👉🏼 'true'
🎯 String(null) 👉🏼 'null'
🎯 String(undefined) 👉🏼 'undefined'
🎯 String(NaN) 👉🏼 'NaN'
🎯 String(1) 👉🏼 '1'

🎯 String({a: 1}) 👉🏼 '[object Object]'
🎯 String([1, 2]) 👉🏼 '1,2'
🎯 String([1, 2, '3', {a: 1, b: 2}]) 👉🏼 '1,2,3,[object Object]'
```

## 🚩 Численное

💠 **Методы преобразования к числу**

&emsp;&emsp; 🔹 `+'1'` 👉🏼 `1`  
&emsp;&emsp; 🔹 `Number(‘1’)` 👉🏼 `1`  
&emsp;&emsp; 🔹 `parseInt('12px')` 👉🏼 `12`  

<br>

💠 **Правила**

   
&emsp;&emsp; 🔹 Интерпретатор попробует преобразовать строки к числам

&emsp;&emsp;&emsp;&emsp; 👆 Если не выйдет вернет `NaN`

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `'6' / '2'` 👉🏼 `6 / 2` 👉🏼 `3`  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `'6' / '2px'` 👉🏼 `6 / NaN` 👉🏼 `NaN` 

<br>
   
&emsp;&emsp; 🔹 Если при сложении среди операндов есть строка

&emsp;&emsp;&emsp;&emsp; 👆 Все операнды будут преобразованны к строке  
&emsp;&emsp;&emsp;&emsp; После чего строки склеются


&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `'6' + '2'` = `'62'`  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `'6' + Number(2)` 👉🏼 `'6' + '2'` 👉🏼 `'62'`      
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `'6' + true` 👉🏼 `'6' + 'true'` = `'6true'`


<br>

&emsp;&emsp; 🔹 `Number('01')` 👉🏼 `1`

&emsp;&emsp; 🔹 `Number('012')` 👉🏼 `12`

&emsp;&emsp; 🔹 `Number(01)` 👉🏼 `1`

&emsp;&emsp;&emsp;&emsp; 👆 Префикс 0 в js означает восмеричную систему

<br>

&emsp;&emsp; 🔹 `Number(012)` 👉🏼 `10`

&emsp;&emsp;&emsp;&emsp; 👆 `12` в восмеричной системе это `10`

<br>

&emsp;&emsp; 🔹 `Number(true)` 👉🏼 `1`

&emsp;&emsp; 🔹 `Number(false)` 👉🏼 `0`

&emsp;&emsp; 🔹 `Number('str')` 👉🏼 `NaN`

&emsp;&emsp; 🔹 `Number(undefined)` 👉🏼 `NaN`

&emsp;&emsp; 🔹 `Number(null)` 👉🏼 `0`

<br>

## 🚩 Логическое

💠 **Методы преобразования к boolean**

&emsp;&emsp; 🔹 `Boolean(1)` 👉🏼 `true`  
&emsp;&emsp; 🔹 `!!1` 👉🏼 `true`

<br>

💠 **Правила**

&emsp;&emsp; 🔹 `Boolean(1)` 👉🏼 `true`

&emsp;&emsp; 🔹 `Boolean(-1)` 👉🏼 `true`
  
&emsp;&emsp; 🔹 `Boolean('0')` 👉🏼 `true`
  
&emsp;&emsp; 🔹 `Boolean('string')` 👉🏼 `true`
  
&emsp;&emsp; 🔹 `Boolean(0)` 👉🏼 `false`

&emsp;&emsp; 🔹 `Boolean('')` 👉🏼 `false`  

&emsp;&emsp; 🔹 `Boolean({})` 👉🏼 `true`

&emsp;&emsp; 🛑 Не проверять объект на пустоту через `boolean`, пустой объект вернет `true`

<details>
<summary>&emsp;&emsp;&emsp;&emsp; ⚡ Привести объект к массиву и проверить длинну</summary>

___

```javascript
const data = {}

const isObjectNotEmpty = (object) => Object.keys({}).length


if (isObjectNotEmpty(data)) {
    // ...
} else {
    console.error('object is empty')
}
```

___

</details>



<br>

&emsp;&emsp; 🔹 `Boolean([])` 👉🏼 `true`

&emsp;&emsp; 🛑 Не проверять массив на пустоту через `boolean`, пустой массив вернет `true`

<details>
<summary>&emsp;&emsp;&emsp;&emsp; ⚡ Убедиться что что это массив и проверить его длинну</summary>

___

```javascript
const data = []

const isArrayNotEmpty = (arr) => Array.isArray(arr) && arr.length

if (isArrayNotEmpty(data)) {
    // ...
} else {
    console.error('array is empty')
}
```

___

</details>

<br>

&emsp;&emsp; 🔹 `Boolean(null)` 👉🏼 `false`
  
&emsp;&emsp; 🔹 `Boolean(undefined)` 👉🏼 `false`

&emsp;&emsp; 🔹 `Boolean(NaN)` 👉🏼 `false`

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**