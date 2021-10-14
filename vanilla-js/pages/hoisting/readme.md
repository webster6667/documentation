# Hoisting (поднятие)

> Особенность работы движка js

Прежде чем выполнять код, движок сначала подними все `function declaration` и `var` наверх

Это значит что `function declaration` можно использовать еще до ее объявления  
Так же можно и использовать и `var`, до объявления, но ее значение будет `undefined`

`let`, `const` и `function expression` нельзя использовать до объявления, js выдаст ошибку
> Хоть let, const и нельзя использовать до их объявления, на них так же воздействует поднятие,   
Они попадают попадают в так называемую временно мертвую зону(в этот момент переменные нельзя использовать)  
Выходят из нее они как только переменная будет объявленна

<br>

---

<br>


* Использование `function declaration` до объявления
```javascript
const text = myFunc('abcd') // => 'my string is: abcd'

function myFunc(str = '') {
  return `my string is: ${str}`
}
```
Как только движок откроет этот файл, сначала он поднимет все `function declaration` в начало файла

<br>

---

<br>

* Использование `var` до объявления

```javascript
console.log(myVar) // => undefined

var myVar = 'string'
```
Как только движок откроет этот файл, он поднимет все `var` в начало файла, с значением `undefined`, и к ним можно будет обращатся

Как только движок будет доходить до строк объявления переменной, она приймет свое значение

<br>

---

<br>

* Использование `let, const` до объявления


```javascript
console.log(let) // => выбросит ошибку

let myVar = 'string'
```

Как только движок откроет этот файл, он поднимет все `let` в начало файла, с значением `undefined`

Но обращение к ним вызовет ошибку, так как они во временной мертвой зоне