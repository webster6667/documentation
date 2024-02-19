# Mediator
> Жесткая связи между двумя разными инстансами класса

👆 Инстансы классов связываються медиатор паттерном(`сохраняя в одном инстансе, инстанс другого класса`), вызывая методы друг дружки внутри своих методов

```javascript
class User {
    constructor(name) {
        this.name = name
        this.room = null
    }

    send(message, to) { // 🎯 2. Вызывает метод инстанса комнаты, передавая в нее свои параметры, реализуя тесную связь данных двух классов и их методов
        this.room.send(message, this, to)
    }

    receive(message, from) {
        console.log(`${from.name} => ${this.name}: ${message}`)
    }
}

class ChatRoom {
    constructor() {
        this.users = {}
    }

    register(user) {
        this.users[user.name] = user
        user.room = this // 🎯 1.Регистрирует инстанс текущего класса со своими методами внутри user.room
    }

    send(message, from, to) {
        if (to) {
            to.receive(message, from)
        } else {
            Object.keys(this.users).forEach(key => {
                if (this.users[key] !== from) {
                    this.users[key].receive(message, from)
                }
            })
        }
    }
}

const jon = new User('Jon')
const ben = new User('Ben')
const alex = new User('Alex')

const room = new ChatRoom()

room.register(jon)
room.register(ben)
room.register(alex)

jon.send('Hello!', ben)
ben.send('Hi', jon)
alex.send('Hi everybody')
```