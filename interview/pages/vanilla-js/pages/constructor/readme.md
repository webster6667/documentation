# Конструкто

<details>
<summary> Что такое конструктор</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Функция, или класс, создающая экземпляр объекта с одинаковыми свойствами, но разными значениями     

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как создать конструктор в <code>js</code> с помощью функции?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Функции конструкторы пишутся с большой буквы       
🛑 Все записи в this произведутся только при вызове функции через `new`     
🎯 Пишут значения в `this`         

```javascript
function User({name}) {
    this.name = name;
}

const admin = new User({name: 'Jon'});
const devops = new User({name: 'Ben'});

console.log(admin.name, devops.name);
```

<details>
<summary> <sup>⭐</sup>❓ Как отработает конструктор если он вернет <code>this</code></summary>

---

Так же, так как он не явно его возвращает   

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет данный код?</summary>

---

```javascript
function User({name}) {
    this.name = name;
    
    return {name: 'my name'}
}

const admin = new User({name: 'Jon'});
const devops = new User({name: 'Ben'});

console.log(admin.name, devops.name);
```

<details>
<summary> ✅ Ответ</summary>

---

```javascript
'my name my name'
```

Если функция конструктор возвращает объект, то результатом этого конструктора будет этот объект   

---

</details>

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет данный код?</summary>

---

```javascript
function User({name}) {
    this.name = name;
    
    return name;
}

const admin = new User({name: 'Jon'});
const devops = new User({name: 'Ben'});

console.log(admin.name, devops.name);
```

<details>
<summary> ✅ Ответ</summary>

---

`Jon Ben`   
👆 Если конструктор вернул примитив, результатом работы конструктора автоматически становится `this`   

---

</details>

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как создать конструктор с помощью класса?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
class User {
    
    constructor({name}) {
        this.name = name;
    }
    
}

const admin = new User({name: 'Ben'})

console.log(admin.name);
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**