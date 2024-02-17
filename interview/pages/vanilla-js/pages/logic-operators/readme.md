# Логические операторы

<details>
<summary> Есть список условий <code>isLoaded, wasClicked, isDev, hasData</code>, нужно вернуть <code>jsx</code> разметку, только в том случаи если все условия верны, какой оператор поможет?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

`&&` оператор `И`, вернет первый попавшийся элемент которые в `boolean` формате равен `false`, если таких нет, вернет последний элемент из списка   

```jsx
return (isLoaded && wasClicked && isDev && hasData && <button>pay</button>)
```


<details>
<summary> <sup>⭐</sup>❓ Давай добавим небольшой подвох, описав переменные</summary>

---

> В чем тут проблема?

```jsx
const wasClicked = true; 
const isDev = true;
const [isLoaded, data] = [true, []]
const hasData = data.length

return (isLoaded && wasClicked && isDev && hasData && <button>pay</button>)
```

<details>
<summary> ✅ Ответ</summary>

---

В данном случаи во вьюшку выпадет `0`, так как `data.length` не обернут в `boolean`

🎯 Хоть оператор `И` проверяет данные на `boolean`   
🎯 Он не преобразует их в `boolean`  
🎯 На выходе мы получаем те данные которые будут равны `false`    
🎯 В данном случаи это `0`, который вывалится в разметку  


---

</details>

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> Напиши переменную так, что бы среди данных она записала только <code>true</code>, значение</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
const globalOffset = 0
const parentOffset = 0
const currentOffset = 3

const finalOffset;
```

<details>
<summary> ✅ Ответ</summary>

---

```javascript
const globalOffset = 0
const parentOffset = 0
const currentOffset = 3

const finalOffset = globalOffset || parentOffset || currentOffset;
```

---

</details>


<br>

<details>
<summary> <sup>⭐</sup>❓ Что делать если <code>true</code> значение может быть и в <code>globalOffset</code> и в <code>parentOffset</code>, а мне нужно что бы в таком случаи в переменную попало значение из <code>parentOffset</code></summary>

---

Оператор `ИЛИ` вернет первый трушный элемент, нужно просто выставить `parentOffset` в начало

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что делать если в <code>currentOffset</code> будет <code>0</code>, а мне нужно значение по умолчанию <code>5</code></summary>

---

Создаем переменную `const defaultValue = 5`, и помещаем в конец списка      
&emsp;&emsp; 👆 Оператор `ИЛИ` вернет последний элемент из списка, если все `false` 
  


---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> У какого из операторов больше приоритета?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

У оператора `И - &&`

<details>
<summary> <sup>⭐</sup>❓ Что вернет данный код? <code>null || 2 && 3 || 1</code></summary>

---

`3`

🎯 Первым срабатывает `&&` оператор с более сильным приоритетом      
🎯 В своей конструкции возвращает последнее `true` значения, так как `false` нет      
🎯 Это `3`  
🎯 Далее в конструкции `null || 3 || 1`, оператор `ИЛИ` возвращает первое `true` значение      
🎯 Это `3`      

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> <code>||</code> оператор вернет первое <code>true</code> значение, пройдя мимо таких значений как <code>null | undefined | false | ''</code>, а что если нам нужно исключить только не определенные данные <code>null | undefined</code>?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

`??` - возвращает первую переменную, не равную `null | undefined`

<details>
<summary> <sup>⭐</sup>❓ Когда это может быть полезно? </summary>

---

Когда нам нужно получить `0` в координатах, если он нам нужен, вместо того, что бы писать `0` в дефолтном значении 

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> Что такое операторы логического присваивания?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Новые операторы, требующие полифилы, позволяющие присваивать переменным данные справой стороны, если переменная `true/false`, в зависимости от оператора  

🎯 `&&=` - Требует `true` значеня слева, что бы записать данные справа    
&emsp;&emsp; 👆 `&&` Ищет первое `false` значение, если не находит, срабатывает присваивание    
  

    
🎯 `||=` Требует `false` значеня слева, что бы записать данные справа  
&emsp;&emsp; 👆 `&&` Ищет первое `true` значение, если не находит, срабатывает присваивание

🎯 `??=` Требует `null | undefined` слева, что бы записать данные справа      
&emsp;&emsp; 👆 `??` Ищет первое `!null && !undefined` значение, если не находит, срабатывает присваивание

<details>
<summary> <sup>⭐</sup>❓ Что вернет данных код?</summary>

---

```javascript
let value = NaN;

value &&= 10;
value ||= 20;
value &&= 30;
value ||= 40;
```

<details>
<summary> ✅ Ответ</summary>

---

```javascript
let value = NaN;

value &&= 10;
// value = NaN, присваивание не произойдет, так как value = false
value ||= 20;
// value = 20, произойдет присваивание, так как value = false
value &&= 30;
// value = 30, произойдет присваивание, так как value = true
value ||= 40;
// value = 30,  не произойдет присваивание, так как value = true

value // value = 30 
```

---

</details>

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет данный код?</summary>

---

```javascript
let offset = 0;
let userName = '';
let hasBonus = false;
let data = undefined;

offset ??= 5;
userName ??= `guest`;
hasBonus ??= false;
data ??= [];

console.log(offset, userName, hasBonus, data)
```

<details>
<summary> ✅ Ответ</summary>

---

```javascript
let offset = 0;
let userName = '';
let hasBonus = false;
let data;

offset ??= 5;
// 👉🏼 offset = 0, оператор нашел данные кроме undefined/null, присвоение дефолтного значения не произошло

userName ??= `guest`;
// 👉🏼 userName = '', оператор нашел данные кроме undefined/null, присвоение дефолтного значения не произошло

hasBonus ??= false;
// 👉🏼 hasBonus = false, оператор нашел данные кроме undefined/null, присвоение дефолтного значения не произошло, но если бы переменную не назначили, присвоилось бы дефолтное false   

data ??= [];
// 👉🏼 data = 👉🏼 [], оператор не нашел данные кроме undefined/null так как переменная равна undefined, присвоение дефолтного значения произошло
```

---

</details>

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**