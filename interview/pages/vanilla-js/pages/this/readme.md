# this

<details>
<summary> Что такое контекст?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Лексическое окружение, в котором выполняется функция

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое <code>правило точки</code> при работе с контекстом?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

В контекст вызываемого метода(если это не стрелочная функция) всегда попадет объект до точки     

```javascript
const user = {
    name: 'alex',
    age: 22,
    getFullData: function () {
        return `${this.name} ${this.age}`
    }
}

console.log(user.getFullData()) // `alex 22`
```

👆 Объект до точки `user`, именно данные из `user` попадут в `this`  

---

Ситуция когда в `this` попадают данные не из того объекта в котором был объявлен метод

```javascript
const user = {
    name: 'alex',
    age: 22,
    getFullData: function () {
        return `${this.name} ${this.age}`
    }
}

const ben = {
    userName: 'Ben',
    getFullData: user.getFullData
}

console.log(ben.getFullData()) // undefined undefined
```

👆 Это происходит из за того что метод был описан в лексическом окружении `user`, были нужные данные, а вызван в контексте другого объекта

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое потеря контекста?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Ситуация когда в `this` не попадают данные в котором был создан метод

<details>
<summary> <sup>⭐</sup>❓ В каких случаях это происходит?</summary>

---

🎯 При описании методов с помощью стрелочной функции      
```javascript
const user = {
    name: 'alex',
    age: 22,
    getFullData: () => {
        return `${this.name} ${this.age}`
    }
}

console.log(user.getFullData());
```

👆 Это происходит из за того, что у стрелочной функции нет своего контекста, и вместо того что бы создать свой контекст из объекта `user`, функция стрелка берет родительский контекст    

---  

🎯 При вызове обычной фунции, внутри метода       


```javascript
const user = {
    name: 'alex ',
    age: 22,
    getFullData() {
        
        const getName = function () {
            return this.name;
        }
        
        return `${getName()} ${this.age}`
    }
}

user.getFullData() // ' 22'
```

👆 Это происходит из за того что у обычной функции, создается свой контекст, и теряется доступ к `user`

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какая тут проблема, как избежать?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
const user = {
    name: 'alex ',
    age: 22,
    getFullData() {
        
        const getName = function () {
            return this.name;
        }
        
        return `${getName()} ${this.age}`
    }
}

user.getFullData() // ' 22'
```

<details>
<summary> ✅ Ответ</summary>

---

Теряется контекст, решается за счет использования стрелочной функции, или путем проброса контекста   

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как жестко задать контекст методу?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

При помощи методов: 

🎯 `bind`  
🎯 `call`      
🎯 `apply`    

<details>
<summary> <sup>⭐</sup>❓ Раскажи про <code>bind</code>?</summary>

---

Метод функции, позволяющий пробросить контекст, не вызываяя ее

```javascript
const getName = function (phrase) {
    return `${phrase} ${this.name}`
}

const user = {
    name: 'ben'
}

const getBenName = getName.bind(user, 'user:');

console.log(getBenName());
```

<details>
<summary> <sup>⭐</sup>❓ Что будет если после указания параметров через <code>bind</code>, указать их при вызове?</summary>

---

```javascript
const getName = function (phrase, secondPhrase) {
    return `${phrase} ${this.name} ${secondPhrase}`
}

const user = {
    name: 'ben'
}

const getBenName = getName.bind(user, 'user:');

console.log(getBenName('man:'));
```

<details>
<summary> ✅ Ответ</summary>

---

Полетят во второй параметр, или пролетят мимо, если его нет  

---

</details>

---

</details>

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Зачем нужен <code>call</code>?</summary>

---

Прокидывает контекст, параметры, и сразу вызывает функцию  

```javascript
const getName = function (phrase) {
    return `${phrase} ${this.name}`
}

const user = {
    name: 'ben'
}

const benName = getName.call(user, 'user:');

console.log(benName); // 👉🏼 user: ben
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Для чего нужен <code>apply</code>, он же выполняет ту же функцию?</summary>

---

🎯 Метод который можно вызвать у любой функции.   
🎯 До, появления `spred` операторов, их использовали что бы закинуть массив параметров   

```javascript
const values = [1, 2, 3, 4]
const maxVAlue = Math.max.apply(null, values);

console.log(maxVAlue);
```

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Напиши свой метод <code>bind</code></summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Учитывая что контекст, это объект до точки      
🎯 Мы должны создать метод, куда прокинем объект   
🎯 И вызовем метод из этого объекта       

```javascript
Function.prototype.myBind = function(context, ...args) {
    
    return (...argsChild) => {
        const id = Symbol();
        context[id] = this;
        const bindResult = context[id](...args.concat(argsChild))
        
        delete context[id];
        
        return bindResult;
    }
 
}

const myFn = function (phrase) {
    return `${phrase} ${this.name}`;
}

const user = {
    name: 'Ben'
}

const fnWithContext = myFn.myBind(user);
console.log(fnWithContext('Hi'));
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**