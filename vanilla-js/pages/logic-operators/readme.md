# Логические операторы

💠 `&&`    
👆🏽 Находит первое ложное значение и возвращает его, если все истины, возвращает последний

&emsp;&emsp; 🔹 Подходит для отображения комопнента, если значения перед ним `true`      

```javascript
const valueFalse = 1 && 2 && null && 3 // 👉🏼 null
const lastValueFromTruesList = 1 && 2 && 3 // 👉🏼 3


const isTrue = true
{isTrue && '<h1>Result</h1>'} // => <h1>Result</h1>
```    

<br>
    
💠 `||`   
👆🏽 Находит и возвращает первое истинное значения, если все ложные, возвращает последнее

&emsp;&emsp; 🔹 Подходит для установки значния по умолчанию      

```javascript
const valueTrue = null || 0 || 1 || undefined // 👉🏼 1
const lastValueFromFalseList = null || undefined || 0 || '' // 👉🏼 ''


const option = null
const {value = ''} = option || {} // 👉🏼 {}
```    

<br>

💠 `!`     
👆🏽 Приводит значение к логическому типу, после возвращает противоположное значение

&emsp;&emsp; 🔹 Подходит для различных `toggle` функций

```javascript
let valueFromOptions = true, //Прийдет из опций функции
    isDisabled = !valueFromOptions // 👉🏼 false    
```

<br>

💠 `??`   
👆🏽 Возвращает первое значение `не равное null или undefined`, либо последнее значение из списка

&emsp;&emsp; 🔹 Обычно используют для получения даже отрицательных значений, отфильтрвав пустые переменные  

```javascript
const notNullOrUndefined = null ?? undefined ?? 2 ?? 3 ?? null // 👉🏼 2
const notNullOrUndefined = null ?? undefined ?? 0 ?? 2 ?? 3 ?? null // 👉🏼 0
const notNullOrUndefined = null ?? undefined ?? false ?? 2 ?? 3 ?? null // 👉🏼 false
const notNullOrUndefinedLast = null ?? undefined ?? null // 👉🏼 null
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**