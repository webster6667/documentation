# Constructor

🔹 Описывает модель с свойствами и методами      

🔹 Принимает входящие параметры

🔹 Создает конкретную сущность из входящих данных

```javascript
class User {

    constructor({name, age}) {
        this.name = name
        this.age = age
    }

    getUserData() {
        return `user ${this.name} ${this.age} years old`
    }

}

const user1 = new User({name: 'Jon', age: 22}),
      user2 = new User({name: 'Ben', age: 25})

console.log(user1.getUserData(), user2.getUserData());
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**