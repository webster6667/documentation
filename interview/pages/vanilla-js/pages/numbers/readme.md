# Числа

<details>
<summary> Как преобразовать к числу?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `Number('1')`      
🎯 `'+1'`  
🎯 `parseInt('1')`  

<details>
<summary> <sup>⭐</sup>❓ Что вернет данный код?</summary>

---

```javascript
console.log(1 + '1');
```

<details>
<summary> ✅ Ответ</summary>

---

`11`, так как второй символ строка, а сложение со строками преобразует к строке и складывает   

---

</details>

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет данный код?</summary>

---

```javascript
let x = '25' / 5;
let y = 5 * '5';
let z = 25 - '5';
console.log(x, y, z); 
```

<details>
<summary> ✅ Ответ</summary>

---

`5, 25, 20`   
👆 Любая операция кроме сложения преобразует к числу   

---

</details>

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как преобразовать в отрицательное число?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Умножить число на `-1`    
🎯 `-(1)`  
🎯 `-Math.abs(1)`       

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как отрицательное преобразовать в положительное?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Умножить на `-1`  
🎯 Добавить перед ним минус `-(-1)`      
🎯 `Math.abs(-1)`   

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как оставить только числа <code>'15px'</code></summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
Number.parseInt('15px')
```

<details>
<summary> <sup>⭐</sup>❓ Что вернет функция если строка будет <code>'15.55px'</code></summary>

---

`15`  
👆 Метод чистит все до первого символа который не является числом     

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как оставить числа после точки?</summary>

---

````javascript
Number.parseFloat('15.55px');
````

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как округлить число?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

<details>
<summary> <sup>⭐</sup>❓ К ближайшему целому</summary>

---

```javascript
Math.round(5.5) // 👉🏼 6      

```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ К большему целому?</summary>

---

```javascript
Math.ceil(5.3) // 👉🏼 6
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ К меньшему целому?</summary>

---

```javascript
Math.floor(5.9) // 👉🏼 5
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как округлить к ближайшему целому, оставляя <code>n</code> цифр после точки?</summary>

---

```javascript
15.555.toFixed(1) // 👉🏼 15.6   
```

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как узнать четное число или нет?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Если остаток от деления на `2`, равен `0`, значит число четное

```javascript
function isEven(number) {
    return number % 2 === 0 
}
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что вернет деление на <code>0</code></summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Когда `0` делят на любое число - возвращается ноль    
```javascript
0 / 5 // 👉🏼 0
```

🎯 Когда число делят на `0`, получаем `Infinity`       
```javascript
5 / 0 // 👉🏼 Infinity
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> <code>NaN</code> какой тип данных?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

`NaN` это `number`, результат математической операции, когда не удалось вывести в результат число, из за разных типов данных  

```javascript
5 / {} // 👉🏼 NaN
```

<details>
<summary> <sup>⭐</sup>❓ Что вернет код?</summary>

---

```javascript
5 / {} === NaN //
5 / {} == NaN //
```

<details>
<summary> ✅ Ответ</summary>

---

`false`  
`false`  

---

</details>

---


</details>

<details>
<summary> <sup>⭐</sup>❓ Как проверить чило на <code>NaN</code></summary>

---

```javascript
isNaN(5 / {}) // 👉🏼 true
```

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

🎯 Префикс декремент    
🎯 Постфикс декремент    

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**