# programming principles

<details>
<summary> Какие принципы програмирования знаеш?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

<details>
<summary> <sup>⭐</sup>❓ SOLID</summary>

---

<details>
<summary> 🔹 Single responsibility</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Каждый модуль отвечает только за одно действие

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> 🔹 Open-closed</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)
 
Используемый модуль должен быть закрыт для изменения, но открыт для расширения возможностей

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> 🔹 Liskov substitution</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Все дочерние модули должны иметь все возможности родительского  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> 🔹 Interface segregation</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Делить программные сущности так, что бы они не зависеть от методов, которые они не используют  
&emsp;&emsp; 👆 У пользователя `user` не должно быть метода `getSoft()`, в котором стоит проверка `if is admin`, нужно выводить отдельную сущность админа со своими методами  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> 🔹 Dependency inversion</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Делать обратную зависимость модулей, не все модули сайта зависят от одного общего модуля, а общий модуль подстраиваиться под каждый модуль сайта   
👆 Не сайт подстраиваится под библиотеку, а сайт пишет точки входа, под которые должна подстроится библиотека     

<details>
<summary>📗 Dependency inversion в архитектуре</summary>

___

🔹 Например работа с localStorage  
&emsp;&emsp; 🎯 Вместо того что бы прописывать напрямую зависимую логику от `storage`, верхнеуровневые модули описывают какие методы они ожидают от <ins>[нижнеуровнего модуля 💬](## "storage")</ins>   
&emsp;&emsp; 🎯 А `storage` в свою очередь обязан передать верхним модулям требуемые методы через `адаптер`    
&emsp;&emsp; 🎯 Таким образом при любом изменении `storage`, он должен быть подстроен в `адаптерах` под все используемые верхнеуровневые модули, что не ломает их логику  
&emsp;&emsp; 🎯 А при любых изменениях по работе с `storage` в верхних модулях, адаптеры `storage` должны быть подстроенны под требование верхних модулей  
&emsp;&emsp; 🎯 И теперь не верхние модули зависят от `storage`, а `storage` зависит, и должен подстраиваться под все верние модули

<details>
<summary>📜 <code>packages/storage/storage.js</code></summary>

```javascript
let storage

// 👉🏼 Указываем какую библиотеку для работа со стором используем в приложении
export const setStorage = (instance) => {
    storage = instance
}

async function setItem(name, value) {
    if (typeof storage.setItem !== "function") {
        throw "Storage should implement setItem method"
    }
    
    storage.setItem(name, value)
}

async function getItem(name, value) {
    if (typeof storage.getItem !== "function") {
        throw "Storage should implement getItem method"
    }

    storage.getItem(name, value)
}

export default {
    getItem,
    setItem
}

```
</details>

<br>

<details>
<summary>📜 <code>packages/storage/adapters/token.js</code></summary>

```javascript
import storage from 'packages/storage/storage.js'

async function setToken(token) {
    storage.setItem(token)
}

async function getToken() {
    storage.getItem('token')
}

export default {
    setToken,
    getToken
}
```

</details>

<br>

<details>
<summary>📜 <code>packages/api/index.js</code></summary>

```javascript
import storage from 'packages/storage/storage.js'

import axios from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";
import {store} from "../index";
import {IUser} from "../models/IUser";

export const API_URL = `http://localhost:5000/api`

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    // 👉🏼 Получаем токен
    config.headers.Authorization = `Bearer ${storage.getToken()}`
    return config;
})

$api.interceptors.response.use((config) => {
    return config;
},async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
            // 👉🏼 Устанавливаем токен
            storage.setToken()
            return $api.request(originalRequest);
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН')
        }
    }
    throw error;
})

export default $api;
```

</details>

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

---

</details>



<details>
<summary> <sup>⭐</sup>❓ KISS</summary>

----

👆 `Будь простым и понятным`

Декомпозируй сложную логику на мелкие простые модули взаимодействующие между собой

----

</details>

<details>
<summary>  <sup>⭐</sup>❓ YAGNI </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

👆 `Вам это не понадобится`

Не приводи компонент в `shared` формат, если он еще нигде не используется

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> <sup>⭐</sup>❓ DDD</summary>

----

👆 Набор терминов и свод правил, позволяющий общатся бизнесу и програмисту на одном языке

Разделение сущностей на раздельные слои, понятные и бизнесу и програмистам:

🥏 Чистые       
🥏 Бизнес сущности `entity`  
🥏 Фичи продукта  
🥏 Группа бизнес сущностей  


----

</details>

<details>
<summary> <sup>⭐</sup>❓ GRASP</summary>

----

👆 Подход програмирования уделяющий больше внимания на распределения ответсвенности и установкой связи между сущностями по принципам `ООП`

🥏 Абстракция    
🥏 Наследование  
🥏 Инкапсуляция
<details>
<summary> 🥏 Полиморфизм </summary>

----

👆 Реализация технически разных решений, при помощи одного метода



Например: абстрактный класс фигуры реализует метод `draw`, который работает по разному, у треугольника и круга

----

</details>



----

</details>

<details>
<summary> <sup>⭐</sup>❓ DRY</summary>

----

👆 `Don't repeat yourself (не повторяй себя)`

Не дублируй то, что можно вынести в `shared`

----

</details>



![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>


<br>



### ⟵ **<a href="../../readme.md">Назад</a>**