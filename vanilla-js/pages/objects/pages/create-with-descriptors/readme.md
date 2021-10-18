# Object.create
> Создание объекта с дескрипторами и прототипом

## 🚩 Дескрипторы
Флаги свойства, описывающие поведения свойства, при:  
* Удалении, 
* Изменении 
* Переборе в циклах

<br>

💠 **writable**    
👆🏽 Можно ли редактировать свойство


<br><br>

💠 **enumerable**     
👆🏽 Доступно ли свойство для перебора в цикле, и в `Object.keys()`

<br><br>

💠 **configurable**     
👆🏽 Можно ли удалить свойство и изменить у него флаги дескриптора

<br><br>
    
🛑 При создании объекта через `Object.create`, по дефолту все равны `false`    

<br>

## 🚩 Методы описания дескрипторов

<br>


💠 **Object.create`(prototype, propsWithDescriptions)`**     
👆🏽 Создать объект с указанным прототипом и дескриптораи

&emsp;&emsp; 🔹 <a href="./../prototype">**prototype**</a>   
&emsp;&emsp;&emsp;&emsp; 👆 Звено для реализации наследование, описанно в другой главе

```javascript
const myObject = Object.create(
    {
        getUserName() {
            return this.userName
        }
    },
    {
        userName: {
            value: 'Jon',
            writable: true,
            enumerable: true,
            configurable: true
        },
        _age: {
            value: '22',
            writable: true,            
        },
        age: {
            get() {
                return this._age
            },
            set(value) {
                this._age = value
            },
        }
    },
)

console.log(myObject.getUserName());
```

💠 **Object.defineProperty`(myObject, propName, propDescriptors)`**   
👆🏽 Задать объекту одно свойство с дескриптором

```javascript
const user = {
    name: 'Ben'
};

Object.defineProperty(user, 'password', {
  value: 111,
  writable: false
});

console.log(user.password) // => 111

user.password = 777; // ❗ Не изменит свойство, выбросит ошибку
```  

&emsp;&emsp; 🔹 Может задавать аксцесоры

&emsp;&emsp;&emsp;&emsp; 👆 Снаружи объекта         
```javascript
const user = {
  name: 'Ben',
  age: 22
};

Object.defineProperty(user, 'userData', {
 get: function() {
   return `name: ${this.name}, age: ${this.age}`
 }
});

console.log(user.userData) // => name: Ben, age: 22 
```

<br>

&emsp;&emsp;&emsp;&emsp; 👆 Изнутри, в конструкторе
```javascript
function User(name, age) {
  this.name = name
  this.age = age

  //🎯 Задать аксцессор внутри конструктора
  Object.defineProperty(this, "userData", {
    get: function() {
      return `name: ${this.name}, age: ${this.age}`
    }
  });
}

const user1 = new User("Ben", 22);

console.log(user1.userData) // => name: Ben, age: 22 
```

<br>
<br>

💠 **Object.defineProperties`(myObject, propDescriptors)`**   
👆🏽 Задать объекту несколько свойств с дескриптором

&emsp;&emsp; 🔹 Может задавать аксцесоры

&emsp;&emsp;&emsp;&emsp; 👆 Снаружи объекта
```javascript
const user = {};

Object.defineProperties(user, {
  name: {
    value: "Ben"
  },

  age: {
    value: 22
  },

  userData: {
    get: function () {
      return `name: ${this.name}, age: ${this.age}`;
    }
  }
});

console.log(user.userData); // => name: Ben, age: 22
```

<br>

&emsp;&emsp;&emsp;&emsp; 👆 Изнутри, в конструкторе
```javascript
function User(name, age) {
  Object.defineProperties(this, {
    name: {
      value: name
    },

    age: {
      value: age
    },

    userData: {
      get: function () {
        return `name: ${this.name}, age: ${this.age}`;
      }
    }
  });
}

const user1 = new User("Ben", 22);

console.log(user1.userData); // => name: Ben, age: 22
```

<br><br>

💠 **Object.preventExtensions`(myObject)`**   
👆🏽 Запрещает добавление свойств в объект

<br><br>

💠 **Object.seal`(myObject)`**   
👆🏽 Запрещает добавление и удаление свойств, все текущие свойства делает `configurable: false`    
&emsp;&emsp;&emsp;&emsp; 👆 Запрещенны для удаления, и запрещенно изменять дескрипторы   

<br><br>

💠 **Object.freeze`(myObject)`**   
👆🏽 Запрещает добавление и удаление свойств, все текущие свойства делает `configurable: false`, `writable: false`    
&emsp;&emsp;&emsp;&emsp; 👆 Объект становится закрыт для удаления и изменения, как свойств так и для дескрипторов

<br>

## 🚩 Методы проверки дескрипторов

<br>

💠 **Object.isExtensible`(myObject)`**  
👆🏽 Возвращает `false`, если добавление свойств объекта было запрещено вызовом метода `Object.preventExtensions`

<br><br>

💠 **Object.isSealed`(myObject)`**  
👆🏽 Возвращает `true`, если добавление и удаление свойств объекта запрещено, и все текущие свойства являются `configurable: false`

<br><br>

💠 **Object.isFrozen`(myObject)`**  
👆🏽 Возвращает `true`, если добавление, удаление и изменение свойств объекта запрещено, и все текущие свойства являются `configurable: false, writable: false`

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**