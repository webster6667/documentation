# Циклы  

<details>
<summary> Какие циклы знаешь? Раскажи как работают</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `while`          
&emsp;&emsp; 👆 Выполняет действие, пока условие верно      

🎯 `do while`  
&emsp;&emsp; 👆 Сначала выполняет действие, потом проверяет условия, запускать ли цикл далее  

🎯 `for`  
&emsp;&emsp; - Создает постоянную переменную внутри цикла    
&emsp;&emsp; - Работает пока условие `true`    
&emsp;&emsp; - Инкрементирует переменную цикла  

     
  
  

🎯 `for in`    
&emsp;&emsp; 👆 Проходится по всем ключам объекта       
  


🎯 `for of`    
&emsp;&emsp; 👆 Проходит по всем элементам массива    
  
<details>
<summary> <sup>⭐</sup>❓ Что если запихать массив в <code>for in</code>, он ведь объект</summary>

---

🎯 Плохая производительность      
🎯 Не гарантирует порядок элементов      
🎯 Затянет куча хлама из прототипа

---

</details>  

<details>
<summary> <sup>⭐</sup>❓ Что если запихать в <code>for of</code> объект?</summary>

---

Не отработает, так как `for of` работает только с итерируемым типом данных  

---

</details>

<details>
<summary> <sup>⭐</sup>❓ А что если очень нужно?</summary>

---

🎯 Добавить метод `Symbol.iterator`, в псевдо массив      
🎯 Используем `Object.keys/Object.entries`, который вернет массив ключей и значений если нужно      

```javascript
let data = {
    name: 'alex',
    age: '22'
}

for (let key of Object.keys(data)) {
    let value = data[key]
}
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Какое золотое правило проверки есть при использовани <code>for in</code></summary>

---

```javascript

const user = {
    name: 'Alex',
    surname: 'Mirgorodsky'
}

for (let key in user) {
    let value = user[key]

    if (user.hasOwnProperty(key)) {// проверяем что это свойство объекта, а не прототипа
        //action
    }
    
}
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Какая может быть подстава от неизвестного объекта при юзании <code>hasOwnProperty</code>?</summary>

---

Кто то может перехватить его выше, переопределить, и всеравно запихать все в цикл  

```javascript
const foo = {
  hasOwnProperty() {
    return false;
  },
  bar: "Here be dragons",
};

foo.hasOwnProperty("bar");
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как обороняться?</summary>

---

🎯 Использовать `Object.hasOwn()` или брать метод у чистого объекта  

```javascript
Object.prototype.hasOwnProperty.call(foo, "bar"); // Отдолжить метод у чистого объекта
```

🎯 Использовать `Object.keys()` и `for of`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ В каких случаях использовать <code>Object.keys() и for of</code>?</summary>

---

При работе с биг датами

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как остановить цикл?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

`break`

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как перейти сразу к след итерации, не выполняя код ниже?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

`return | continue`

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как остановить внешний цикл из самого глубокого?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)


```parentCycle: for(;;)```

Используем метки и `break parentCycle`  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как пройтись по всему массиву?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
const arr = [1, 2, 3, 4, 5]

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i], 'el')
}
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как сделать бесконечный цикл?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `while(true)`    
🎯 `for(;true;)`

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как пройтись по массиву с обратной стороны</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
const arr = ['m', 'y', 'a', 'r', 'r', 'a', 'y'];

for(let i = arr.length - 1; i >= 0; i--) {
    const item = arr[i];
    console.log(item, 'item');
}
```


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как перебрать массив с начала, и запустить ему на встречу указатель с конца, используя всего один цикл?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
const arr = ['m', 'y', 'a', 'r', 'r', 'a', 'y'];
const arrLastIndex = arr.length - 1;

for(let i = 0; i < arr.length; i++) {
    const startPointer = arr[i];
    const finishPointer = arr[arrLastIndex - i];
    
    console.log(startPointer, 'start pos');
    console.log(finishPointer, 'finish pos');
}
```


<details>
<summary> <sup>⭐</sup>❓ Как узнать когда оба указателя оказались на середине?</summary>

---

```javascript
const arr = ['m', 'y', 'a', 'r', 'r', 'a', 'y'];
const arrLastIndex = arr.length - 1;

for(let i = 0; i < arr.length; i++) {
    const iterationCount = i + 1;
    const startPointer = arr[i];
    const finishPointer = arr[arrLastIndex - i];
    const readItemsCount = iterationCount + iterationCount;
    const isArrayLengthEven = arr.length % 2 === 0;
    const isPoitersInCenter = isArrayLengthEven ? readItemsCount === arr.length : arr.length - readItemsCount === -1;
    
    console.log(startPointer, 'start pos');
    console.log(finishPointer, 'finish pos');
    console.log(readItemsCount, 'cout');
    console.log(isPoitersInCenter);
}
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как исключить проход по центральному элементу массива?</summary>

---

```javascript
const arr = ['m', 'y', 'a', 'r', 'r', 'a', 'y'];
const arrLastIndex = arr.length - 1;

for(let i = 0; i < arr.length; i++) {
    const iterationCount = i + 1;
    const startPointer = arr[i];
    const finishPointer = arr[arrLastIndex - i];
    const readItemsCount = iterationCount + iterationCount;
    const isArrayLengthEven = arr.length % 2 === 0;
    const isPoitersComeToCenter = isArrayLengthEven ? readItemsCount === arr.length : arr.length - readItemsCount === 1;
    
    console.log(startPointer, 'start pos');
    console.log(finishPointer, 'finish pos');
    console.log(readItemsCount, 'cout');
    console.log(isPoitersComeToCenter);
    
    if (isPoitersComeToCenter) {
        break;
    }
    
}
```

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как заполнить массив цифрами от 1 до 10, используя цикл <code>while</code></summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
const maxValue = 10;
const resArray = []
let i = maxValue;

while (i--) {
    resArray.push(maxValue - i)
}

console.log(resArray);
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>


https://www.youtube.com/watch?v=o4pIgLe2bqc&t=407s  
https://www.youtube.com/watch?v=godJzsR1osM  


### ⟵ **<a href="../../readme.md">Назад</a>**