# Store-settings

🔹 При создании стора, важно запустить в конструкторе `makeAutoObservable(this)` или `makeObservable()`

&emsp;&emsp; 🎯 `makeObservable(this)`  
&emsp;&emsp;&emsp;&emsp; 👆 Позволяет отписать какие свойства будут наблюдаемыми а какие экшенами  
```js
import { makeObservable, observable, computed, action, flow } from "mobx"

class Doubler {
    value

    constructor(value) {
        makeObservable(this, {
            value: observable,
            double: computed,
            increment: action,
            fetch: flow
        })
        this.value = value
    }

    get double() {
        return this.value * 2
    }

    increment() {
        this.value++
    }

    *fetch() {
        const response = yield fetch("/api/value")
        this.value = response.json()
    }
}
```

&emsp;&emsp; 🎯 `makeAutoObservable(this)`  
&emsp;&emsp;&emsp;&emsp; 👆 Автоматически определяет, какие свойства будут наблюдаемыми а какие экшенами, оставляя возможность донастройки
```js
import { makeAutoObservable } from "mobx"

class Profile {
    id = null
    username = ''
    isAuth = false

    constructor() {
        makeAutoObservable(
            this, 
            {logout: action}, // 👉🏼 Указал logout экшеном вручную
            {deep: true}) // 👉🏼 Делать ререндер даже при изменении вглубине наблюдаемых свойств 
    }

    auth({id, username}) {
        this.id = id
        this.username = username
        this.isAuth = true
    }

    logout() {
        this.id = null
        this.username = ''
        this.isAuth = false
        console.log('был клик');
    }

    get profileData() {
        return `${this.id} ${this.username}`
    }
}

export const profile = new Profile()
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**