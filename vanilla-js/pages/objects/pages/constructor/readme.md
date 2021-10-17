# Конструктор

> Функция создающая экземпляры с одинаковыми свойствами и методами, но разными значениями

🔹 Пишется с большой буквы      

<br><br>

🔹 Вызывается при помощи оператора `new`    
&emsp;&emsp; 🛑 Все записи в `this` произведутся только при вызове функции через `new`       
```javascript
function User(name) {
  this.name = name
  
  return this // this явно возвращать не нужно, тут это для примера
}

console.log(User('Ben')) // => window
console.log(new User('Jon')) // => {name: 'Jon'}
```

<br><br>

🔹 Если конструктор возвращает объект, результатом работы функции будет этот объект  
&emsp;&emsp; 👆 Если конструктор вернет любой другой тип данных, результатом работы функции `this`      
```javascript
function User(name) {
  this.name = name
  
  return {name: 'userName'}
}

function User2(name) {
  this.name = name
  
  return 'userName'
}

const user1 = new User('Ben') //=> {name: 'userName'} 
// Конструктор, вернул объект, перетер this

const  user2 = new User2('Jon')  //=> {name: 'Jon'} 
// Конструктор вернул this, примитив откинул
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**