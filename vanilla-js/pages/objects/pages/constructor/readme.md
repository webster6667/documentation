# Конструктор

Обычная функция, которая принимает параметры, и на основе своей архитектуры создает новый объект, со всеми методами, подставляя переданные параметры

* Пишется с большой буквы
* Вызывается при помощи оператора `new`
```javascript
function User(name) {
  this.name = name
}

const user1 = new User('Ben'),
      user2 = new User('Jon')
```
##### Оператор `new`, не явно выполняет след действия:
 * Создает this в начале кода
 * В самом конце(после любых операций программиста), возвращает этот `this` 
 * Если в коде вернуть объект, вместо `this`, вернется этот объект, если любой другой тип данных, вернется `this`
```javascript
function User(name) {
  this.name = name
  
  return {name: 'userName'}
}

function User2(name) {
  this.name = name
  
  return 'userName'
}

const user1 = new User('Ben'), //=> {name: 'userName'}, конструктор, вернул объект, перетер this
      user2 = new User('Jon')  //=> {name: 'Jon'}, конструктор вернул this, примитив откинул
```