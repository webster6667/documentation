# Классы

<details>
<summary> Что такое классы в JS</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Это разновидность функции, по сути синтаксический сахар, над прототипным наследованием, добавляющий ряд особенностей и ограничений  

🎯 Помечается специальным внутренним свойством `[[IsClassConstructor]]: true`  
&emsp;&emsp; 👆 Тем самым запреает вызвать класс без конструкции `new`

🎯 Методы класса, изначально создаются с `enumerable: false`, скрывая методы от перебора циклом    
🎯 Класы всегда работают внутри под `useStrict`   

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>    

<details>
<summary> На чем реализованы классы?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

На старом добром прототипном наследовании  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Можно ли объявлять класс, внутри переменной?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Да, по принципу `function exression`

```javascript
const User = class {
    constructor({name}) {
        this.name = name;
    }
}

const user1 = new User({name: 'Ben'})

console.log(user1);
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как работают гетеры и сетеры в классах</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Так же как и в объектах   

🎯 С префиксом `get/set` перед функцией с именем свойства      
🎯 Изменяемое свойство и имя аксцессора не должны пересекатся      

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как работает наследование в классах?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Через ключевое слово `extends`, которое записывает наследуемый класс в `[[Prototype]]`   

<details>
<summary> <sup>⭐</sup>❓ Что вернет данный код?</summary>

---

```javascript
class HTMLElement {
    
    constructor({tagName}) {
        this.tagName = tagName;    
    }
    
    getTagName() {
        return this.tagName;
    }
    
}

class HTMLInputElement extends HTMLElement {
    
    constructor({type}) {
        this.type = type;
    }

}

const HTMLTextInputElement = new HTMLInputElement({type: 'text'}) 

const tagName = HTMLTextInputElement.getTagName();
const type = HTMLTextInputElement.type
console.log(tagName, type);
```

<details>
<summary> ✅ Ответ</summary>

---

Ошибку, задача на внимательность   
👆 Для реализации зависимости, нужно вызвать функцию `super`, которая ссылается на наследуемый метод, что бы записать данные в свойства прототипа  и получить его методы     

```javascript
class HTMLInputElement extends HTMLElement {
    
    constructor({type, ...rest}) {
        super({tagName: 'input'});
        this.type = type;
    }

}
```  


---

</details>

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как можно расширить метод класса?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Создаем метод с таким же именем как у родителя     
🎯 Вызываем родительский метод через `super`  
🎯 Получаем результат, и делаем с ним что угодно в дочернем методе, по принципу декоратора      

```javascript
class HTMLElement {
    
    constructor({tagName}) {
        this.tagName = tagName;    
    }
    
    getTagName() {
        return this.tagName;
    }
    
}

class HTMLInputElement extends HTMLElement {
    
    constructor({type}) {
        super({tagName: 'input'});
        this.type = type;
    }

    getTagName() {
        const tagName = super.getTagName();
        return tagName.toUpperCase();
    }

}

const HTMLTextInputElement = new HTMLInputElement({type: 'text'}) 

const tagName = HTMLTextInputElement.getTagName();
const type = HTMLTextInputElement.type
console.log(tagName, type);
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Скрытые и защищенные свойства в классах</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Скрытые свойства, это больше соглашения чем правила, добавлять `_` перед ним  
🎯 Защищенные это новые возможности языка, которые поддерживаются не везде, обозначаются через `#`      
   
<details>
<summary> <sup>⭐</sup>❓ Особенности защищенного свойства?</summary>

---

🎯 Могут иметь одинаковые имена с обычными свойствами (`name` и `#name`)      
🎯 Защищиенные не доступны из вне или детям  

---

</details>  


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Статические свойства и методы классов</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Свойства которые принадлежа самому классу, а не его инстунсу.  
🎯 Не имеет никакой завязки с `this` экземпляра, но привязывается к абстрактной сущности      

```javascript
class DomElement {
    static radius = 10;
    static getRadius() {
        return DomElement.radius;
    }

    constructor(selector = "#root") {
        this.domElement = document.querySelector(selector);
    }
}

console.log(DomElement.getRadius()); // обращение к статическому методу
console.log(DomElement.radius); //обращение к статическому свойству
```

👆 Все экземпляры этого элемента будут создаватся с радиусом `10`, и данные этой модели можно получить из статических данных     

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Класс может наследоваться только от одного класса, а что делать если нужны методы из двух?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

В таких случаях выполняют примеси - просто копирования методов из одного класса в прототип другого

```javascript
class User {
    constructor(name) {
        this.name = name;
    }
    
    getName() {
        return this.name;
    }
}

class Admin extends User {
    constructor(name, soft) {
        super(name)
        this.soft = soft;
    }
    
    getSoft() {
        return this.soft;
    }
}

let userMixins = {
    getPrice(kind) {
        return kind * 5;
    }
};

Object.assign(Admin.prototype, userMixins)

const admin = new Admin({name: 'ben', soft: 'linux'})

console.log(admin.getPrice(5));
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**