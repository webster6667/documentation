# this - контекст
* `this` **указывает на область видимости**, в которой создан объект
* `this` **динамическая ссылка**, внутри объекта рабоатет по правилу точки - `что перед точкой, то попадает в this`
```javascript
const user = {
    name: 'Ben',
    age: 22,
    getName() {
        return this.name
    }
}

user.getName() //перед точкой стоит user, он попадет в this
```    
* `this` **указывает ближайший контекст**,   
Если внутри метода объекта вызвать функцию, и в ней пытатся получить доступ к контексту  
Ничего не выйдет, так как у функции есть свой контекст, и this укажет на него
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

console.log(user.getName()); //вернет undefined, так как в контексте функции showName нет name
```
* **У стрелочных функций нет своего контекста**, по этому из низ можно получит доступ к контексту объекта
```javascript
const user = {
    name: 'Ben',
    age: 22,
    getName() {
       
        const showName = () => `${this.name}`

        return showName()
    }
}

console.log(user.getName()); //вернет Ben, у стрелки нет своего контекста, и она возьмет родительский
```