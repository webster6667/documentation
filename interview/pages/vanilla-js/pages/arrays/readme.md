# Массивы

<details>
<summary> Что такое массив?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Это итерируемый объект   

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как узнать дину массива?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
[].length
```

<details>
<summary> <sup>⭐</sup>❓ Какая длина у этого массива? </summary>

---

```javascript
const arr = []
arr[1] = 'a'
arr[5] = 'b'

console.log(arr);
```

<details>
<summary> ✅ Ответ</summary>

---

Длинна массива `6`, не смотря на то что в массиве всего два элемента   
&emsp;&emsp; 👆 Так происходит из за того что свойство `length`, считаеться путем взятия последнего индекса массива + `1`   
  
🎯 Добавления элементов в массив таким образом образуют дыры         
🎯 Не стоит добавлять данные в массив просто по индексу        
🎯 Массив это определенная структура данных, имеющая свои методы для этого     

---

</details>

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Простые методы трансформации массива</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)



<details>
<summary> <sup>⭐</sup>❓ Как добавить элемент в конец массива?</summary>

---

```javascript
[].push(1)
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как добавить элемент в начало массива?</summary>

---

```javascript
['b', 'c'].unshift('a');
```

---


</details>

<details>
<summary> <sup>⭐</sup>❓ Как удалить элемент с конца массива?</summary>

---

👆 Удалит элемент с конца массива, и вернет удаляемое значение


```javascript
const deletedItem = [1, 2, 3].pop(); // 👉🏼 3
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как удалить элемент с начала массива?</summary>

---

👆 Удалит элемент с начала массива, и вернет удаляемое значение

```javascript
const deletedItem = [1, 2, 3].shift(); // 👉🏼 1
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Какая операция более ресурсозатратная? </summary>

---

🎯 `shift`      
🎯 `unshift`      

👆 Так как изменения первого элемента массива провоцирует переиндексации всех элементов     

> В то время как операции с конца просто добавляют/удаляют элемент с конца и обновляют `length` 


---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как удалить/получить элементы из массива по условию?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Используя метод `filter`, который проходится по всем элементом массива, создавая новый, только их тех элементов, которые вернули `true`, проходя через фильтрующую функцию   

```javascript
const users = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
]

const filtredArr = users.filter((user) => user.id > 3) // 👉🏼 // => [{id: 4}, {id: 5}]
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как удалять элементы массива по индексу?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

`splice(index, deleteCount, elForAdd1, ..., elForAddN)`

<details>
<summary> <sup>⭐</sup>❓ Как удалить один элемент по индексу?</summary>

---

```javascript
const arr = [1, 2, 3]
const deletedItems = arr.splice(1, 1) // 👉🏼 [2]
console.log(arr, deletedItems) // 👉🏼 [1, 3], [2]
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как удалить группу элементов по индексу?</summary>

---

```javascript
const arr = [1, 2, 3, 4, 5]
const deletedItems = arr.splice(1, 2) // 👉🏼 [2, 3]
console.log(arr, deletedItems) // 👉🏼 [1, 4, 5], [2, 3]
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как удалить по индексу с заменой удаляемых элементов?</summary>

---

```javascript
const arr = [1, 2, 3, 4, 5]
const itemsToReplace = ['a', 'b', 'c'];
const deletedItems = arr.splice(1, itemsToReplace.length, ...itemsToReplace) // 👉🏼 [2, 3, 4]
console.log(arr, deletedItems) // 👉🏼 [1, 'a', 'b', 'c', 5], [2, 3, 4]
```

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как добавить элемент по указанному индексу?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
const arr = [1, 2, 3];
const valueToAdd = 'added';
arr.splice(1, 0, valueToAdd);
console.log(arr) // 👉🏼 [1, 'added', 2, 3];
```

👆 Добавляет элемент в указанный индекс, переиндексируя все элементы что лежали от указанного индекса    

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какие особенности есть у <code>splice</code>?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Работает с отрицательными числами  
👆 Указывает на индекс `arr.length - n`, т.е `-1` укажит на последний элемент массива    
  


<details>
<summary> <sup>⭐</sup>❓ Как удалить последний элемент массива, с помощью <code>splice</code>?</summary>

---

🎯 Плохой метод  
```javascript
const arr = [1, 2, 3, 4];

arr.splice(arr.length - 1, 1);
console.log(arr);
```

---

🎯 Хороший метод    

```javascript
const arr = [1, 2, 3, 4];

arr.splice(-1, 1);
console.log(arr);
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как заменить последний элемент массива?</summary>

---

🎯 Плохой метод
```javascript
const arr = [1, 2, 3, 4];

arr.pop();
arr.push(5);

console.log(arr)
```

---

🎯 Хороший метод

```javascript
const arr = [1, 2, 3, 4];

arr.splice(-1, 1, 5);
console.log(arr);
```

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Способы перебора массива</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)
 
🎯 `for of`   

```javascript
const arr = [1, 2, 3];

for(let item of arr) {
    console.log(item);
}
```    

🎯 `forEach`      

```javascript
const arr = [1, 2, 3];

arr.forEach((item, index) => {
    console.log(`${index}: ${item}`);
})
```

🎯 `for`    

```javascript
const arr = [1, 2, 3];

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

<details>
<summary> <sup>⭐</sup>❓ Массив это объект, можно ли перебрать его с помощью <code>for in</code>?</summary>

---

Теориетически да, но это будет очень медленно, + есть риск потащить за собой непонятные свойства из прототипа  

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как вырезать из массива, часть по указанным индексам?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

`slice(startIndex, indexBeforeFinish)`

```javascript
const arr = [1, 2, 3, 4, 5];

const slicedChunk = arr.slice(1, 4);
console.log(slicedChunk);
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как склеить два массива?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
const arr = [1, 2, 3];

const concated = arr.concat([4, 5, 6]);
console.log(arr, concated);
```

<details>
<summary> <sup>⭐</sup>❓ Изменяет сам массив?</summary>

---

Нет, создает новый экземпляр  

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как сделать это без метода <code>concat</code>?</summary>

---

```javascript
let arr = [1, 2, 3];
const toConcate = [4, 5, 6];
const concated = [...arr, ...toConcate];
```

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как проверить наличие элемента в массиве?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
[1, 2, 3].includes(1) // true
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как разбить строку на массив элементов?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
const str = '1, 2, 3';
const arr = str.split(', ');
console.log(arr);
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как склеить элементы массива, в строку?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
const arr = [1, 2, 3];
const str = arr.join(', ');
console.log(str);
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как найти индекс искомого элемента в массиве?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

`indexOf(index, fromIndex)`

```javascript
const arr = ['my', 'test', 'string'];
const searchIndex = arr.indexOf('my');

if (searchIndex != -1) {
    const value = arr[searchIndex];
    console.log(value);
}
```

<details>
<summary> <sup>⭐</sup>❓ Что делать если в массиве объекты?</summary>

---

Искать через `findIndex`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как искать с указанного индекса?</summary>

---

```javascript
const arr = ['my', 'test', 'string'];
const searchIndex = arr.indexOf('test', 1);

if (searchIndex != -1) {
    const value = arr[searchIndex];
    console.log(value);
}
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как начать искать с конца? </summary>

---

```javascript
const arr = ['my', 'test', 'string', 'for', 'last', 'indexOf'];
const searchIndex = arr.lastIndexOf('last');

if (searchIndex != -1) {
    const value = arr[searchIndex];
    console.log(value);
}
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как работает <code>fromIndex</code> в <code>lastIndexOf</code></summary>

---

Указывает с какого индекса начать поиск, считая справа на лево.   

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как найти значения элемента массива по условию?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
const users = [{id: 1, name: 'a'}, {id: 2, name: 'b'}, {id: 3, name: 'c'}]

const searchUser = users.find((user) => user.id === 2);
console.log(searchUser);
```

<details>
<summary> <sup>⭐</sup>❓ Что возвращает <code>find</code>, если ничего не нашел?</summary>

---

`undefined`

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как найти индекс элемента, по условию?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
const users = [{id: 1, name: 'a'}, {id: 2, name: 'b'}, {id: 3, name: 'c'}];
const searchValue = {id: 2, name: 'b'};

const searchUserIndex = users.findIndex((user) => JSON.stringify(user) === JSON.stringify(searchValue));
console.log(searchUserIndex);
```

<details>
<summary> <sup>⭐</sup>❓ Что возвращает <code>findIndex</code>, если ничего не нашел?</summary>

---

`-1`

---

</details>


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как отфильтровать массив?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
const users = [{id: 1, name: 'a'}, {id: 2, name: 'b'}, {id: 3, name: 'c'}, {id: 4, name: 'd'}];

const filtredData = users.filter((item) => item.id < 3)  
console.log(filtredData); // 👉🏼 [{id: 1, name: 'a'}, {id: 2, name: 'b'}]   
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как можно преобразовать массив?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Используя метод `map`   

```javascript
const arr = [1, 2, 3]

const plusOne = arr.map((item) => item + 1);
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как отсортировать массив?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Для сортировки у массива есть метод `sort`, который сортирует пузырьком  
🎯 Для этого нужно закинуть функцию условие в параметр `sort`       

<details>
<summary> <sup>⭐</sup>❓ Как работает сортировка пузырьком?</summary>

---

```javascript
const arr = [125, 33, 76, 90]
```

🔹 Начинает проход по массиву, сравнивая первую пару    
&emsp;&emsp; 🎯 `125` больше `33`?   
&emsp;&emsp; 🎯 Да! значит большее число, как пузырек из под воды всплывает наверх массива, путем перестановки  
&emsp;&emsp; 🎯 Имеем следующую картину `[33, 125, 76, 90]`      
&emsp;&emsp; 🎯 Переходим к следующей паре, сейчас это `125` и `76`      
&emsp;&emsp; 🎯 Таким же образом 125 всплывает до самого верха      
&emsp;&emsp; 🎯 След проход будет идти уже на одину итерацию меньше, так как самый большой элемент уже наверху, и сравниватся с ним нет смысла     
&emsp;&emsp; 🎯 Цикл будет ходить по подобной логике, пока все условия не вернут `false`       
`const arr = [33, 76, 90, 125]`  

```javascript
const arr = [{id: 3}, {id:2}, {id: 5}, {id:4}, {id:1}]
let count = 0

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < (array.length - 1) - i; j++) {
            if (array[j + 1]?.id < array[j]?.id) {
                let tmp = array[j]
                array[j] = array[j+1]
                array[j+1] = tmp
            }
            count+=1
        }
    }
    return array
}

console.log(bubbleSort(arr))
console.log('count = ', count)
```

---

</details> 

<details>
<summary> <sup>⭐</sup>❓ Какой минус у сортировки пузырьком?</summary>

---

Сложность алгоритма `O(n^2)`, за счет цикла в цикле   

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как сортировать большие объемы данных?</summary>

---

Использовать алгоритм быстрой сортировки    

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как работает условная функция в <code>sort</code>?</summary>

---

🎯 Если ничего не передавать, то нумерованный массив отсортируется от меньшего к большему, а строки в алфавитном порядке        
🎯 Если внутри массива лежат объекты - нужно закидывать кастомную функцию, которая работает следующим образом      

🎯 Если `a - b` меньше `0`, сортировка поставит a по меньшему индексу, чем b, то есть, a идёт первым.   
🎯 Если `a - b` вернёт 0, сортировка оставит a и b неизменными по отношению друг к другу, но отсортирует их по отношению ко всем другим элементам.   
🎯 Если `a - b` больше 0, сортировка поставит b по меньшему индексу, чем a.   

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Напиши условную функцию для <code>sort</code> по возростанию и убыванию</summary>

---

```javascript
const arr = [125, 33, 76, 90]

const toLargest = (a, b) => {
    return a - b 
}

const toLess = (a, b) => {
    return b - a
}

const sortedToLarge =  [...arr].sort(toLargest);
const sortedToLess =  [...arr].sort(toLess);

console.log(arr, sortedToLarge, sortedToLess);
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Отсортируй массив в алфавитном порядке</summary>

---

```javascript
const arr = [{value: 'my'}, {value: 'apple'}, {value: 'was'}, {value: 'depricated'}];

const alphSort = (a, b) => {
    if (a.value.toLowerCase() < b.value.toLowerCase()) {
        return -1;
    }
    if (a.value.toLowerCase() > b.value.toLowerCase()) {
        return 1;
    }
    return 0;
}

const sorted = [...arr].sort(alphSort)

console.log(sorted);
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как можно оптимизировать колбек?</summary>

---

Можно использовать метод `localeCompare`    

```javascript
const alphSort = (a, b) => a.localeCompare(b)
```

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как пройтись по массиву, объединяя результат работы каждой итерации в одной переменной?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Класика      

```javascript
let res = 0;
const arr = [1, 2, 3, 4, 5];
let i = arr.length;

while (i--) {
    res += arr[i]
}

console.log(res);
```

🎯 Современный подход      

```javascript
const res = [1, 2, 3, 4, 5].reduce((acc, number) => {
    return acc + number
}, 0)

console.log(res);
```

<details>
<summary> <sup>⭐</sup>❓ Приведе еще пример использования <code>reduce</code></summary>

---

```javascript
const res = ["Ben", "Jon", "Den"].reduce((prevResult, item) => {
	return prevResult + `<h1>${item}</h1>`
}, '')

console.log(res) // => <h1>Ben</h1><h1>Jon</h1><h1>Den</h1> 
```

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как развернуть массив?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
[1, 2, 3].reverse() // 👉🏼 [3, 2, 1]
```

<details>
<summary> <sup>⭐</sup>❓ Как перевернуть массив самостоятельно</summary>

---

```javascript
const arr = [1, 2, 3]
let i = arr.length
let reverseArray = [] 

while (i--) {
    reverseArray.push(arr[i])
}

console.log(reverseArray);
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как сделать это мутирую массив?</summary>

---

```javascript
const arr = [1, 2, 3, 4, 5]

const lastElemetIndex = arr.length - 1

for (let i = 0; i < Math.ceil(arr.length / 2); i++) {
    const elementFromStart = arr[i];
    const indexElemntFromFinish = lastElemetIndex - i;
    const elemntFromFinish = arr[indexElemntFromFinish];
    
    arr[i] = elemntFromFinish;
    arr[indexElemntFromFinish] = elementFromStart
}

console.log(arr);
```

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как проверить что в переменной лежит массив?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
Array.isArray([])
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> В чем тут ошибка?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
const arr = [];

if (arr) {
    // action
}
```

<details>
<summary> ✅ Ответ</summary>

---

`arr` вернет `true`, даже с пустым массивом, проверка бесполезна  

👆 В данном случаи нужно проверить   
  
```javascript
const isArrayNotEmpty = (arr) => Array.isArray(arr) && arr.length
```

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Каким методам массива можно пробросить контекст?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `find`      
🎯 `map`  
🎯 `filter`  

```javascript
["Ben", "Jon", "Den"].map(function(item) {
  console.log(this) // myContext 
  return item
}, 'myContext') //myContext переданная строка в контекст колбека
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**