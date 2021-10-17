# Методы проброса контекста

<br>

💠 **fn.bind`(context, arg1, ..., argN)`**   
👆🏽 Пробрасывает контекст вместе с аргументами в указанную функцию

&emsp;&emsp; 🔹 Возвращает новую функцию с контекстом, но не вызывает ее   

&emsp;&emsp; 🔹 Пропсы можно пробросить как во время `bind`, и через результат `bind`


```javascript
function myFn(phrase) {
  return `${phrase} ${this.name}`
}

const myObject = {
    name: 'Ben'
}

const fnWithContext = myFn.bind(myObject, 'Hi'),
      fnWithContext2 = myFn.bind(myObject)

fnWithContext()      //Hi Ben
fnWithContext2('By') //By Ben
```

<br><br>

💠 **fn.call`(context, arg1, ..., argN)`**   
👆🏽 Пробрасывает контекст вместе с аргументами в указанную функцию, и сразу вызывает ее
```javascript
function myFn(phrase) {
  return `${phrase} ${this.name}`
}

const myObject = {
    name: 'Ben'
}

myFn.call(myObject, 'Hi') // Hi Ben
```
<br><br>

💠 **fn.apply`(context, [propsArray])`**   
👆🏽 Пробрасывает контекст вместе с аргументами в указанную функцию, и сразу вызывает ее
```javascript
function myFn(phrase) {
  return `${phrase} ${this.name}`
}

const myObject = {
    name: 'Ben'
}

myFn.apply(myObject, ['Hi']) // Hi Ben
```
___

## 🚩 Собственная реализация метода `bind`

🎯 Взять контекст(объект) и первые переданные параметры, поместить в замыкние

🎯 При вызове результата `bind`, поместить желаемую функцию как метод, внутрь контекста

🎯 Вызвать функцию как метод внутри контектса, передав туда параметры

> Тогда в this попадут свойства пробрасываемого контекста

[![Edit custom-bind](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/custom-bind-22j7l?fontsize=14&hidenavigation=1&theme=dark)

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**