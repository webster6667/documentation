# this - контекст

&emsp;&emsp; 🔹 Объект, в котором вызван метод      

&emsp;&emsp; 🔹 Динамическая ссылка, работающая по правилу точки  
&emsp;&emsp;&emsp;&emsp; 👆 Что перед точкой, то попадает в this         
```javascript
const user = {
    name: 'Ben',
    age: 22,
    getName() {
        return this.name
    }
}

user.getName() // => 'Ben'
// 🎯 Перед точкой стоит user
// 🎯 Он попадет в this
```    

&emsp;&emsp; 🛑 `this` Указывает на ближайший контекст    
&emsp;&emsp;&emsp;&emsp; 🎯 Если внутри метода объявить `function declaration`

&emsp;&emsp;&emsp;&emsp; 🎯 И из нее обратится к `this`

&emsp;&emsp;&emsp;&emsp; 🎯 В `this` попадает контекст `function declaration`

&emsp;&emsp;&emsp;&emsp; 🎯 Доступ к `this` метода(объекта до точки), будет потерян 
```javascript
const user = {
    name: 'Ben',
    age: 22,
    getName() {
       
        function showName() {
          return `${this.name}`
        }
        
        return showName()
    }
}

user.getName() // => undefined
// 🎯 showName обращается к своему контексту
// 🎯 В this showName нет поля name 
```

&emsp;&emsp; 🔹 Для избежания потери контекста, внутри метода лучше использовать функции стрелки  
&emsp;&emsp;&emsp;&emsp; 👆 Так как у них нет своего контекста, они получают доступ к `this` метода   
```javascript
const user = {
    name: 'Ben',
    age: 22,
    getName() {
       
        const showName = () => `${this.name}`

        return showName()
    }
}

console.log(user.getName()); // => Ben 
// 🎯 У стрелки нет своего контекста
// 🎯 Она возьмет родительский
```

&emsp;&emsp; 🔸 Если нет возможности использовать функцию стрелку, можно пробросить контекст в `function declaration`
```javascript
const user = {
    name: 'Ben',
    age: 22,
    getName() {
       
        function showName() {
          return `${this.name}`
        }
        
        return showName.call(this)
    }
}

user.getName() // => Ben
// 🎯 Метод call пробросил контекст getName внутрь showName
// 🎯 И сразу же вызвал showName
```