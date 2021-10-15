# Логические операторы

💠 `&&`    
👆🏽 Находит первое ложное значение и возвращает его, если все истины, возвращает последний

&emsp;&emsp; 🔹 Подходит для отображения комопнента, если значения перед ним `true`      

```javascript
const valueFalse = 1 && 2 && null && 3 // => null
const lastValueFromTruesList = 1 && 2 && 3 // => 3


const isTrue = true
{isTrue && '<h1>Result</h1>'} // => <h1>Result</h1>
```    
    
💠 `||`   
👆🏽 Находит и возвращает первое истинное значения, если все ложные, возвращает последнее

&emsp;&emsp; 🔹 Подходит для установки значния по умолчанию      

```javascript
const valueTrue = null || 0 || undefined || 1 // => 1
const lastValueFromFalseList = null || undefined || 0 || '' // => ''


const option = null
const {value = ''} = option || {} // => {}
```    

💠 `!`     
👆🏽 Приводит значение к логическому типу, после возвращает противоположное значение
```javascript
let valueFromOptions = true, //Прийдет из опций функции
    isDisabled = !valueFromOptions // => false    
```

&emsp;&emsp; 🔹 Подходит для различных `toggle` функций


💠 `??`   
👆🏽 Возвращает первое значение `не равное null или undefined`, либо последнее значение из списка
```javascript
const notNullOrUndefined = null ?? undefined ?? 2 ?? 3 ?? null // => 2
const notNullOrUndefinedLast = null ?? undefined ?? null // => null
```

### ⟵ **<a href="../../readme.md">Назад</a>**