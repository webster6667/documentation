# Map

<details>
<summary> Как в js хранить более сложную информацию, когда ключем может быть целый объект?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Для этого в `js` есть стукрута данных `map`         
&emsp;&emsp; 👆 Это коллекция позволяющая хранить данные в формате `ключ/значение`, где ключем может быть даже объект   

> Например ключем будет объект юзера, а значением объект с его корзиной

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что вернет данный код?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
const users = new Map([['name', 'den']]);

users[0];
```

<details>
<summary> ✅ Ответ</summary>

---

Ошибку, хоть данные и итерируемые, получить их по индексу нелья.   

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Трансформация <code>Map</code></summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

<details>
<summary> <sup>⭐</sup>❓ Проверить наличие элементов</summary>

---

```javascript
const user1 = {
    name: 'user1',
    age: '22'
}

const user1Cart = ['pizza', 'banana'];

const user2 = {
    name: 'user2',
    age: '23'
}

const user2Cart = ['cheez', 'potato'];

const users = new Map([[user1, user1Cart], [user2, user2Cart]])

console.log(users.has(user1));
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Получить элемент по ключу</summary>

---

```javascript
const user1 = {
    name: 'user1',
    age: '22'
}

const user1Cart = ['pizza', 'banana'];

const user2 = {
    name: 'user2',
    age: '23'
}

const user2Cart = ['cheez', 'potato'];

const users = new Map([[user1, user1Cart], [user2, user2Cart]])

const getUser1Cart = users.get(user1);
console.log(getUser1Cart);
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Записать данные по ключу</summary>

---

```javascript
const user1 = {
    name: 'user1',
    age: '22'
}

const user1Cart = ['pizza', 'banana'];

const user2 = {
    name: 'user2',
    age: '23'
}

const user2Cart = ['cheez', 'potato'];

const users = new Map([[user1, user1Cart], [user2, user2Cart]])

users.set(user1, ['meet']);

const getUser1Cart = users.get(user1);
console.log(getUser1Cart);
```

---


</details>

<details>
<summary> <sup>⭐</sup>❓ Удалить данные по ключу</summary>

---

```javascript
const user1 = {
    name: 'user1',
    age: '22'
}

const user1Cart = ['pizza', 'banana'];

const user2 = {
    name: 'user2',
    age: '23'
}

const user2Cart = ['cheez', 'potato'];

const users = new Map([[user1, user1Cart], [user2, user2Cart]])

users.delete(user1);

const getUser1Cart = users.get(user1);
console.log(getUser1Cart);
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Отчистить коллекцию</summary>

---

```javascript
const user1 = {
    name: 'user1',
    age: '22'
}

const user1Cart = ['pizza', 'banana'];

const user2 = {
    name: 'user2',
    age: '23'
}

const user2Cart = ['cheez', 'potato'];

const users = new Map([[user1, user1Cart], [user2, user2Cart]])

users.clear();

console.log(users);
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Получить размер коллекции?</summary>

---

Для этого есть свойство `size`

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Перебор <code>Map</code></summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `for of`    
```javascript
const users = new Map([['queryKey123', 'data1'], ['queryKey124', 'data2']])

for (let value of users.values()) {
    
}

for (let key of users.keys()) {

}

for (let [key, value] of users) {
    console.log(key, value);
}
``` 

🎯 `forEach`       
```javascript
const users = new Map([['queryKey123', 'data1'], ['queryKey124', 'data2']])

users.forEach((key, value) => {
    console.log(key, value);
})
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Преобразование <code>Map</code> в <code>Object</code> и наоборот</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
const user = {
    name: 'User1',
    age: 22
}

const map = new Map(Object.entries(user))

const obj = Object.fromEntries(map);

console.log(obj);
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**