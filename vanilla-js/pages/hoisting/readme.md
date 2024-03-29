# Hoisting (поднятие)

<details>
<summary> 🔥 <code>Shortcut</code></summary>

___

🔹 Поднимает `function declaration` и `var` наверх в их области видимости

___

</details>

Алгоритм работы движка, который перед выполнением скрипта, поднимает все функции и переменные в начало кода  
Но делает это по разному для разных типов переменных

&emsp;&emsp; 🔹 `function declaration` можно использовать еще до ее объявления      

&emsp;&emsp; 🔹 К объявленным `var`, можно обратится до объявления  
&emsp;&emsp;&emsp;&emsp; 👆 Но ее значение будет `undefined`       
  
&emsp;&emsp; 🔹 `let`, `const`, нельзя использовать до объявления  
&emsp;&emsp;&emsp;&emsp; 👆 js выдаст ошибку при `useStrict`


> 📗 Хоть let, const и нельзя использовать до их объявления, на них так же воздействует поднятие,         
Они попадают попадают в так называемую временно мертвую зону(в этот момент переменные нельзя использовать)        
Как только переменную объявляют в коде, она выходит из ВМЗ  

<br>

💠 Использование `function declaration` до объявления
```javascript
const text = myFunc('abcd') // 👉🏼 'my string is: abcd'

function myFunc(str = '') {
  return `my string is: ${str}`
}
```
> Как только движок откроет этот файл, он поднимет все `function declaration` в начало кода

<br>
<br>

💠 Использование `var` до объявления
```javascript
console.log(myVar) // 👉🏼 undefined

var myVar = 'string'
```
🎯 Как только движок откроет файл, он поднимет все `var` в начало файла,   
Но с значением `undefined`, и к ним можно будет обращатся

🎯 Как только движок будет доходить до строк объявления переменной,   
она приймет свое значение

<br><br>

💠 Использование `let, const` до объявления

```javascript
console.log(myVar) // 👉🏼 выбросит ошибку

let myVar = 'string'
```

🎯 Как только движок откроет этот файл, он поднимет все `let` в начало файла, с значением `undefined`

🎯 Но обращение к ним вызовет ошибку, так как они во `временной мертвой зоне`

<br><br>

💠 Использование `function expression` до объявления

&emsp;&emsp; 🔹 Если `function expression` обьявленна в `var`  
&emsp;&emsp;&emsp;&emsp; 👆 К ней можно обратится но она будет undefined           

&emsp;&emsp; 🔹 Если `function expression` обьявленна в `let` или `const`    
&emsp;&emsp;&emsp;&emsp; 👆 Js выдаст ошибку

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**


