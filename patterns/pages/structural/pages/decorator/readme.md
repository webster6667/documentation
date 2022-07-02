# Decorator
> Обертка сущности, которая расширяет ее функционал

```javascript
class Account {
    constructor({name, age}) {
        this.name = name
        this.age = age
    }
}

function premiumDecorator(model) {
    model.getData = function() {
        return `${this.name}: ${this.age}`
    }

    return model
}

const user = premiumDecorator(new Account({name: 'Jon', age: '22'}))

console.log(user.getData());
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**