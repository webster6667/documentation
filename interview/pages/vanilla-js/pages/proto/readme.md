# Прототипы  

<details>
<summary> Что такое прототипы?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Ссылка на родительский класс, позволяющая организовать прототипное наследование  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как работает прототипное наследование</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Создается абстрактный, родительский объект, с свойствами и методами      
🎯 Далее создается более конкретный объект, расширяющий абстрактный более конкретными свойствами и методами         
&emsp;&emsp; 👆 Например у абстрактного класса `HTMLElement` есть свойства и методы, от него создаем `HTMLInputElemnt`, у которого сразу же в конструкторе прописываем `tag: 'input'`, и расширяем его новыми свойствами `type` и `value`     

🎯 После помещаем `HTMLElement` в прототип объекта `HTMLInputElemnt`     
🎯 После при попытке получить методы или свойства которых нет в `HTMLInputElemnt`, они будут взяты из прототипа  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как указать прототип объекта?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `Object.create(proto)`  
```javascript
const HTMLElement = {
    tagName: '',
    getTagName: function () {
        return this.tagName;
    }
}

const HTMLInputElement = Object.create(HTMLElement, {
    tagName: {
        value: 'input',
        writable: true,
        enumerable: true,
        configurable: true
    }
})


const tagName = HTMLInputElement.getTagName();

console.log(tagName);
```

---

🎯 `__proto__` - Аксцессор свойства `[[Prototype]]`
```javascript
const HTMLElement = {
    tagName: '',
    getTagName: function () {
        return this.tagName;
    }
}

const HTMLInputElement = {
    __proto__: HTMLElement,
    tagName: 'input',
}

const tagName = HTMLInputElement.getTagName();
console.log(tagName);
```

<details>
<summary> <sup>⭐</sup>❓ Какие минусы есть у <code>__proto__</code></summary>

---

🎯 Позволяет сделать рессурсозатратную и опасную по последствиям операцию - смену прототипа, после создания объекта   
🎯 В свойство `__proto__`, можно записать либо `null` либо объект   

---

</details>

---

🎯 `prototype` - Обычное свойство, содержимое которого будет помещено в `[[Prototype]]`, после вызова функции через `new`         
```javascript
function User({name, role}) {
    this._name = name;
    this.role = role;
}

User.prototype.getName = function () {
    return this._name;
}

const Admin = new User({name: 'Ben', role: 'admin'});
const Devops = new User({name: 'Jon', role: 'devops'});

console.log(Admin.getName(), Devops.getName())
```

<details>
<summary> <sup>⭐</sup>❓ Зачем помещать <code>getName</code>, в прототип? Ведь его можно поместить просто в <code>user</code>, и оно так же будет доступно?</summary>

---

В таком случаи каждый экземпляр будет создавать свою собственную функцию, что займет лишнюю память  
&emsp;&emsp; 👆 Прототип же в свою очередь ссылается на одну область памяти   

---

</details>


<details>
<summary> <sup>⭐</sup>❓ Можно ли объявить прототип данным образом?</summary>

---

```javascript
function User({name, role}) {
    this._name = name;
    this.role = role;
}

User.prototype = {
    getName: function () {
        return this._name;
    },
    getRole: function () {
        return this.role;
    }
}

const Admin = new User({name: 'Ben', role: 'admin'});
const Devops = new User({name: 'Jon', role: 'devops'});

console.log(Admin.getName(), Admin.getRole());
```


<details>
<summary> ✅ Ответ</summary>

---

🎯 Можно, но таким образом мы перезаписываем все что есть в прототипе     
🎯 По дефолту там лежит еще и метод `constructor`, который создал конкрентый объект      

<details>
<summary> <sup>⭐</sup>❓ Зачем он нужен?</summary>

---

С его помощью можно создать подобный метод, если экземпляр пришел из вне, и нет доступа к конструктору

```javascript
function User({name, role}) {
    this._name = name;
    this.role = role;
}

User.prototype.getName = function () {
    return this._name;
}

const user1 = new User({name: 'Ben', role: 'admin'});

const createUserModelExample = (user1, {name, role}) => {
    const userExample = new user1.constructor({name, role});
    
    return userExample;
}

const userExample = createUserModelExample(user1, {name: 'Jon', role: 'Admin'})

console.log(userExample);
```

---

</details>

---

</details>

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как сделать вложенное прототипное наследование?</summary>

---

```javascript
function HTMLElement({tagName}) {
    this.tagName = tagName;
}

HTMLElement.prototype.getTagName = function () {
    return this.tagName;
}

function HTMLInputElement({type}) {
    HTMLElement.call(this, {tagName: 'Input'}) // Аналог super()
    this.type = type
}

HTMLInputElement.prototype = {
    ...HTMLElement.prototype,
    constructor: HTMLInputElement.constructor
};

const HTMLTextInputElement = new HTMLInputElement({type: 'text'}) 

const tagName = HTMLTextInputElement.getTagName();
const type = HTMLTextInputElement.type
console.log(tagName, type);
```

---

</details>

---

🎯 `Object.get/setPrototypeOf(myObject, proto)` - Ресурсозатратный метод указания/получения прототипа      

```javascript
const user = {
  name: 'Ben'
}

Object.setPrototypeOf(user, {
  getName: function() {
    return `${this.name}`
  }
})

console.log(user.getName()) // => 'Ben'
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как работает присваивание в прототипах?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Если свойство или метод не найденны в объекте, js запишет свойство в указанный объект, вместо того что бы лезть вверх по прототипам       
🎯 Исключением является сетер, если свойства нет в объекте, но есть его гетер и сетер в прототипе, они отработают из прототипа       

<details>
<summary> <sup>⭐</sup>❓ Как отработает данный код?</summary>

---

```javascript
const user = {
    name: 'Jon',
    surname: 'Jordan',
    set fullname(data) {
       const [name, surname] = data.split(' ');
       this.name = name;
       this.surname = surname;
    },
    get fullname() {
        return `${this.name} ${this.surname}`
    }
}

const admin = Object.setPrototypeOf({
    soft: 'Linux'
}, user)

admin.fullname = 'Ben Ladon'

console.log(admin.fullname);
```

<details>
<summary> ✅ Ответ</summary>

---

Отработают аксцессоры из прототипа   

---

</details>

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое простейший объект?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Объект без прототипа, и всяких вспомогательных методов     
```javascript
const simpleObject = Object.create(null);
```

<details>
<summary> <sup>⭐</sup>❓ Какие простые объекты знаешь?</summary>

---

`null`   

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Откуда у строк и чисел есть методы? это ведь простые типы данных</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Не явным образом, почти все типы данных в `js` это результаты работы конструкторов, таких как `String | Number` и тд     
🎯 Каждый из которых хранит в себе встроенные прототипы, своих вспомогательных свойст и методов   

Именно через встроенные протототипы, мы реализуем полифилы   

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как работает контекст в прототипах?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Прототипы не влияют на контекст, все те же правило точки.  
&emsp;&emsp; 👆 В `this` попадут данные именно того метода, который был вызван      

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как узнать что свойство или метод принадлежит самому объекту, а не прототипу?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

`hasOwnProperty`  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> <sup>⭐</sup>❓ Дописать</summary>

---

🎯 __proto__ иньекцию       


---

</details>    


### ⟵ **<a href="../../readme.md">Назад</a>**