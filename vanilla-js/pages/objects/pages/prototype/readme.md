# Прототип
> Скрытое свойство, сслыающиеся на другой объект

## 🚩 Алгоритм работы прототипа


🔹 Если свойства или метода нет в объекте, движок ищет его в цепочке прототипов(сверху в глубь)      

🔹 Свойства или методы берутся из прототипа только во время чтения или вызова       
&emsp;&emsp; 🎯 Если при записи свойство в объекте отсутствует   
&emsp;&emsp; 🎯 Движок не пойдет искать его в прототип, а запишет в сам объект     

&emsp;&emsp; 🛑 Исключением являются сеттеры  
&emsp;&emsp;&emsp;&emsp; 🎯 Если при записи свойства, его нет в объекте   
&emsp;&emsp;&emsp;&emsp; 🎯 Но в прототипе есть сетер этого свойства, то сработает сеттер 
```javascript
let user = {
        name: "John",
        surname: "Smith",

        set fullName(value) {
            [this.name, this.surname] = value.split(" ");
        },

        get fullName() {
            return `${this.name} ${this.surname}`;
        }
    };

    let admin = {
        isAdmin: true,
        __proto__: user,
    };
    
    
    console.log(admin.fullName); // John Smith

    admin.fullName = "Alice Cooper"; // срабатывает сеттер!
    console.log(admin.name); // Alice
    console.log(admin.surname); // Cooper
```  
🔹 Прототипы не влияют на `this`   
&emsp;&emsp;&emsp;&emsp; 🎯 Если вызвать метод `obj.method()`
&emsp;&emsp;&emsp;&emsp; 🎯 Который будет взят из прототипа
&emsp;&emsp;&emsp;&emsp; 🎯 `this` всё равно ссылается на объект до точки

🔹 Методы дожны быть объявленные не через функцию стрелку  
&emsp;&emsp; 👆  Так как у них нет контекста 

```javascript
function User(name) {
  this.name = name;
}

User.prototype.getName = function() {
  return `${this.name}`;
};

// User.prototype.getName = () => {} 
// ❗ Обьявление метода в prototype через функцию стрелку вызовет ошибку  

const user1 = new User("Ben");
console.log(user1.getName())//Ben
```

🔹 `for in` проходится по свойствам и методам прототипа

🔹 Значение определяемое в `[[Prototype]]` должно быть либо объектом, либо `null`    
&emsp;&emsp; 👆 Запись других типов данных будет про игнорированна

<br>

## 🚩 Методы определения прототипа

<br>

💠 **Object.setPrototypeOf`(myObject, proto)`**   
👆🏽 Задаст прототип существующему объекту

<br>
<br>

💠 **Object.create`(proto, descriptors)`**   
👆🏽 Метод создания объекта, указав прототип, и список дескрипторов
  

<br>
<br>

💠 **myObject.prototype = `value`**   
👆🏽 Обычное свойство, которое будет помещенно в `[[Prototype]]`

&emsp;&emsp; 🔹 Записывает из `prototype` в `[[Prototype]]`, только при вызове функции через `new`
&emsp;&emsp;&emsp;&emsp; 👆 То есть определить прототип через `prototype`, можно только до создания объекта   

&emsp;&emsp; 🔹 По дефолту в `prototype`, хранится `constructor` объекта  
&emsp;&emsp;&emsp;&emsp; 👆 По этому лучше не перезаписывать `prototype`, а расширять новыми методами       
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 Что бы не стереть конструктор объекта

<br><br>

💠 **myObject.__proto__ = `value`**   
👆🏽 Аксцессор свойства `[[Prototype]]`

&emsp;&emsp; 🔹 Читает и записывает протоипы, в любое время        
&emsp;&emsp;&emsp;&emsp; 🛑 Перезаписывать `__proto__`, после создания объекта возможно  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 Но очень ресурсозатратно

<br>

&emsp;&emsp; 🔸 Считается устаревшим  
&emsp;&emsp;&emsp;&emsp; 👆 По стандарту оно должно поддерживаться только браузерами  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 Но работает везде    

<br>

&emsp;&emsp; 🔸 Не надежно         
&emsp;&emsp;&emsp;&emsp; 🎯 Когда свойство объекта записывается через динамический ключь `myObject[key] = 'needValue'`
     
&emsp;&emsp;&emsp;&emsp; 🎯 В `key`, может попасть строка `__proto__`

&emsp;&emsp;&emsp;&emsp; 🎯 В итоге мы получим `myObject.__proto__ = 'needValue'`

&emsp;&emsp;&emsp;&emsp; 🎯 В случаи с `'needValue'`, значение просто не запишется

&emsp;&emsp;&emsp;&emsp; 🎯 Если вместо `needValue`, туда попадет объект с вредоносным кодом

&emsp;&emsp;&emsp;&emsp; 🎯 Не известно как он отработает

&emsp;&emsp;&emsp;&emsp; 🎯 Так как `__proto__` это <a href="../akscessor/readme.md">аксцессор</a>


<br>

## 🛡 Методы защиты от уязвимости `__proto__`

<br>

🔹 При записи в объект динамического ключа из вне, проверить ключь
```javascript
let dynamicKey = '__proto__',
    user = {
        name: 'Ben'
    }

if (dynamicKey !== '__proto__') {
   user[dynamicKey] = 'needValue' 
}
```       

<br><br>

🔸 Обнулить прототип объекта     
&emsp;&emsp; 🎯 `__proto__` это аксцессор `[[Prototype]]`, но не сам `[[Prototype]]`
   
&emsp;&emsp; 🎯 Если обнулить прототип, `__proto__` перестанет работать       

&emsp;&emsp; 🎯 Многие методы из прототипа перестанут работать так же

&emsp;&emsp; 🎯 `Object.methods`, будут работать, так как это методы самого объекта, а не прототипа

&emsp;&emsp; 🎯 Такие объекты без прототипа, называются простейшими       
```javascript
const simpleObj = Object.create(null)
simpleObj.name = 'Ben'

simpleObj.__proto__ = 'txt' // => 'txt'
// __proto__ теперь обычное свойство объекта
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**