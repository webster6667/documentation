# Factory
> Реализует единый интерфейс, для создания сущностей из похожих по структуре моделей

```javascript
class FreeAccount {

    constructor({name, age, city}) {
        this.name = name
        this.age = age
        this.city = city
    }

    getUserData() {
        return `${this.name}`
    }

}

class StandardAccount extends FreeAccount {

    getUserData() {
        return `user ${this.name} ${this.age} years old`
    }

}

class PremiumAccount extends FreeAccount {

    getUserData() {
        return `user ${this.name} ${this.age} years old, live in ${this.city}`
    }

}

class AccountFactory {
    static accountTypeList = {
        free: FreeAccount,
        standard: StandardAccount,
        premium: PremiumAccount
    }

    create({type = 'free', ...args}) {
        const AccountConstructor = AccountFactory.accountTypeList[type] || AccountFactory.accountTypeList.free,
              account = new AccountConstructor(args)
        
        return account
    }

}

const factory = new AccountFactory()

const accounts = [
    factory.create({type: 'free', name: 'Jon', age: 22, city: 'Moscow'}),
    factory.create({type: 'standard', name: 'Ben', age: 23, city: 'Rostov'}),
    factory.create({type: 'premium', name: 'Alex', age: 25, city: 'Sochi'}),
]

accounts.forEach((account) => {
    console.log(account.getUserData());
})
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**