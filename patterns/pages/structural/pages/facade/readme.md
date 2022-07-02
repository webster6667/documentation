# Facade
> Сущность, скрывющая и объединяющая громоздкие реализации, в несколько кратких удобных методов

```javascript
class Account {

    setName(name) {
        this.name = name
    }

    setAge(age) {
        this.age = age
    }

    setCity(city) {
        this.city = city
    }

}

class AccountFacade {

    constructor(accountModel) {
        this.account = accountModel
    }

    setUserData({name, age, city}) {
        this.account.setName(name)
        this.account.setAge(age)
        this.account.setCity(city)

        return this.account
    }

}

const account = new AccountFacade(new Account())
console.log(account.setUserData({name: 'Jon', age: '22', city: 'Moscow'}));
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**