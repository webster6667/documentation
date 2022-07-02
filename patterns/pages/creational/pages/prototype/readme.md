# Prototype
> Абстрактная модель, с базовыми свойствами и методами, от которой будут расширяться более конкретные сущности со своими свойствами и методами

```javascript
class Account { // 👉🏼 Прототип всех дочерних методов

    constructor({name, age}) {
        this.name = name
        this.age = age
    }

    getUserData() {
        return `${this.name}: ${this.age}`
    }

}

class FreeAccount extends Account {

    getAge() {
        return this.age
    }

}

class StandardAccount extends FreeAccount {

    getName() {
        return this.name
    }

}

class PremiumAccount extends FreeAccount {

    getUserData() {
        return `user ${this.name} ${this.age} years old`
    }

}
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**