# Set

<details>
<summary> Как можно исключить повторяющийся данные в массиве?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Можно использовать алгоритм, либо структуру `Set`

🎯 Принимает в себя только массив  
🎯 Исключает повторяемые элементы      
🎯 Перебираемая      
🎯 Запрещает брать отдельные элементы из коллекции         
&emsp;&emsp; 👆 Для этого можно преобразовать `set` в массив, и извлечь данные по индексу  

```javascript
const mySet = new Set([1, 2, 3])

console.log(mySet[0]);
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Трансформация <code>Set</code></summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

<details>
<summary> <sup>⭐</sup>❓ Добавление</summary>

---

```javascript
const mySet = new Set([1, 2, 3])

mySet.add(4)
     .add(5)
     .add(6)
     
console.log(mySet) // [1, 2, 3, 4, 5, 6] (итерируемый объект, не массив)
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Удаление</summary>

---

```javascript
const mySet = new Set(['a', 'b', 'c'])

mySet.delete('c') // => true
mySet.delete('z') // => false

console.log(mySet) // {0: 'a', 1: 'b'}
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Проверит наличие</summary>

---

```javascript
const mySet = new Set([1, 2, 3])

mySet.has(3) // => true
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Очистить</summary>

---

```javascript
const mySet = new Set([1, 2, 3])

mySet.clear()

console.log(mySet) // => {}
```

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Перебор сетов</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
const mySet = new Set(['a', 'b', 'c'])

for (let value of mySet) { // 🎯 Основной, остальные для обратной совместимости с Map
  console.log(value) // => 'a'
}

for (let value of mySet.entries()) {
  console.log(value) // => ['a','a']
}

for (let value of mySet.keys()) {
  console.log(value) // => 'a'
}

for (let value of mySet.values()) {
  console.log(value) // => 'a'
}
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**