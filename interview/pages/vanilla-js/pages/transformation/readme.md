# Преобразование данных

<details>
<summary> Как можно преобразовать данные к строке?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Сложить с строкой      
&emsp;&emsp; 👆 `1 + '1'` преобразует число к строке, и склеит их  
  
🎯 Обернуть в `String(1)`    

<details>
<summary> <sup>⭐</sup>❓ Чему равно <code>5 + '1'</code></summary>

---

`'51'` Число будет преобразованно к строке, а после склеит строки

---

</details>

<details>

<summary> <sup>⭐</sup>❓ Чему равно <code>'5' - 1</code></summary>

---

`4` Все остальные не строгие математические операции приводят строку к числу

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет список следующих типов <code>true, null, undefined, NaN, Symbol('1')</code> приобразованных к строке?</summary>

---

```javascript
console.log(String(true), String(null), String(undefined), String(NaN), String(Symbol('1'))) // Все примитивы вернут строку с значением  
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет объект преобразованный к строке?</summary>

---


```javascript
String({name: 'Alex'}) // 👉🏼 '[object Object]'
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет функция преобразованная к строке?</summary>

---

```javascript
String(() => 'fn') // 👉🏼 Вернет функцию в формате строки
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Чем может быть полезна функция в формате строки?</summary>

---

Ее можно перегнать обратно в формат функции и запустить где нужно при помощи:    
🎯 `Eval`      
🎯 `new Function()`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет массив преобразованный к строке <code>[1, 2, 3, [3, 4], () => 5, {}]</code> ?</summary>

---

Вернет строку преобразовав все данные внутри, убрав квадратные скобки и пробелы

```javascript
String([1, 2, 3, [3, 4], () => 5, {}]) // 👉🏼 '1,2,3,3,4,() => 5,[object Object]'
```

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как преобразовать к числу?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Обернуть в `Number`    
🎯 `+` в начало строки  
🎯 `parseInt(15px)`      

<details>
<summary> <sup>⭐</sup>❓ Каким будет результат при <code>Number('abcd')</code>?</summary>

---

`NaN`

---


</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>'100px' / 2</code>?</summary>

---

`NaN` Преобразует `100px` в `NaN`, а любые математические операции с `NaN` вернут `NaN` 

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>9 + '1'</code></summary>

---

`91` Сложение со строками преобразует к строке и склеивает

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>'9' / '3'</code> ?</summary>

---

`3`, математические операции кроме сложения преобразуют данные к числу и производят операции  

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>Number(true)</code></summary>

---

`1`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>Number(false)</code></summary>

---

`0`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>Number(undefined)</code></summary>

---

`NaN`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>Number(null)</code></summary>

---

`0`

---

</details>


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как преобразовать данные в <code>Boolean</code> значение?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `Boolean(1)`      
🎯 `!!5`

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>Boolean(1)</code></summary>

---

`true`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>Boolean(0)</code></summary>

---

`false`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>Boolean(-1)</code></summary>

---

`true`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>Boolean(-0)</code></summary>

---

`false`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>Boolean('0')</code></summary>

---

`true` не пустая строка

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>Boolean('')</code></summary>

---

`false`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>Boolean('test')</code></summary>

---

`true`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>Boolean(null)</code></summary>

---

`false`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>Boolean(undefined)</code></summary>

---

`false`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>Boolean(NaN)</code></summary>

---

`false`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>Boolean({})</code></summary>

---

`true` пустой объект

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>Boolean([])</code></summary>

---

`true` Это пустой объект

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как тогда проверять массив на пустоту?</summary>

---

Убедится что это массив, и проверить его длину

```javascript
const isArrayNotEmpty = (arr) => Array.isArray(arr) && arr.length
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как тогда проверять объект на пустоту?</summary>

---

Привести к массиву, и проверить длинну

```javascript
const isObjectNotEmpty = (object) => Object.keys({}).length
```

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>


<br>

### ⟵ **<a href="../../readme.md">Назад</a>**