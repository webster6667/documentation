# flyweight

🎯 Кеширует все созданные инстансы  
🎯 При попытке создать имеющийся в кеше инстанс, берет его из кеша  
&emsp;&emsp; 👆 Тем самым сохраняя оперативную память, от лишних дублируемых данных

```javascript
class FreeAccount {

    constructor() {
        this.price = 0
    }

}

class StandardAccount {

    constructor() {
        this.price = 5
    }

}

class PremiumAccount {

    constructor() {
        this.price = 10
    }

}

class AccountFactory {
    static accountTypeList = {
        free: FreeAccount,
        standard: StandardAccount,
        premium: PremiumAccount
    }

    constructor() {
        this.accountList = []
    }

    create({type = 'free'}) {
        const cachedAccountInstance = this.accountList[type]
        if (cachedAccountInstance) {
            console.log('get instance from cache');
            return cachedAccountInstance
        }
        console.log('create instance');

        const AccountConstructor = AccountFactory.accountTypeList[type],
            account = new AccountConstructor()

        this.accountList[type] = account

        return account
    }

}

const factory = new AccountFactory()

const accounts = [
    factory.create({type: 'free'}),
    factory.create({type: 'standard'}),
    factory.create({type: 'free'})
]

console.log(accounts);
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**