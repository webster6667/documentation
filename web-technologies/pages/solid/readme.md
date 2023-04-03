# SOLID
👆🏽 Принципы ООП, которые можно так же применять в других направлениях программирования  

<br>

___

💠 **S**<sup><sub>ingle responsibility</sub></sup>   
👆🏽 Единая ответственность  

&emsp;&emsp; 🔹 Каждый класс должен иметь единную зону ответвенности <sup><sub>( Auth, Product, Cart )</sub></sup>
   
&emsp;&emsp; 🔹 Не напихивать куча методов в один класс, а делить на разные зоны ответсвенности  
&emsp;&emsp;&emsp;&emsp; 👆 При изменении любого метода будет происходит работа над всем напичканом классом, что может сломать логику уже рабочих методов

<details>
<summary>📗 Single responsibility в архитектуре</summary>

___

🔹 За работу с `API`, по всему проекту должен быть ответственнен везде <ins>[один метод 💬](## "Например API")</ins>  
&emsp;&emsp; 👆 Такой подход позволяет под капотом общего метода использовать <ins>[любую библиотеку 💬](## "axios, fetch")</ins>, и в любой момент безболезненно поменять    
   

🔹 UI-kit должен отвечать только за визуальную составляющую, любая бизнес логика наращиваеться сверху  
&emsp;&emsp; 👆 Такой подход позволяет сохранить чистоту и прозрачность компонентов ответственных за визуализацию, и защитить от тяжело уловимых багов при смешивании разных операций

🔹 Логика валидации инпутов должна жить отдельно от UI компонентов, оборачивать их, и отвечать только за валидацию и отображение ошибок  
&emsp;&emsp; 👆 Такой подход позволяет сохранить однообразные модели валидации форм по всему сайту

🔹 Верстка сайта так же должна делиться на зоны единственной ответственности  
&emsp;&emsp; 👆 Такой подход позволяет сохранить однобразное поведение отрисовки, и избежать лишнего написания кода  
&emsp;&emsp;&emsp;&emsp; 🎯 Сетка   
&emsp;&emsp;&emsp;&emsp; 🎯 Типографика  
&emsp;&emsp;&emsp;&emsp; 🎯 Отступы по оси `y`  
&emsp;&emsp;&emsp;&emsp; 🎯 Миксины  
&emsp;&emsp;&emsp;&emsp; 🎯 Анимации  
&emsp;&emsp;&emsp;&emsp; 🎯 Цветовая палитра  

</details>

___


<br>  
<br>

___


💠 **O**<sup><sub>pen-closed</sub></sup>   
👆🏽 Открытость и закрытость

&emsp;&emsp; 🔹 Класс должен быть закрыт для изменения, но открыть для расширения  
&emsp;&emsp;&emsp;&emsp; 👆 Работа с <a href="https://github.com/webster6667/documentation/tree/master/web-technologies/pages/oop#abstraction">абстракциями</a> и <a href="https://github.com/webster6667/documentation/tree/master/web-technologies/pages/oop#polymorphism">полиморфизмом</a>  

<details>
<summary>📗 Open-closed в архитектуре</summary>

___

🔹 Например работа с `ui-kit`, компонентами  
&emsp;&emsp; 🎯 Компонент готов, и закрыт для изменения     
&emsp;&emsp; 🎯 Но открыт для расширения такими методами как `render`, `label` и прочими   


</details>  


___

<br>
<br>

___


💠 **L**<sup><sub>iskov substitution</sub></sup>   
👆🏽 Принцип подстановки, Барбары Лисков


&emsp;&emsp; 🔹 Под класс нужно реализовать так, что бы он мог имел все те же возможности что и супер класс, и мог спокойно заменить его     

___


<br>  
<br>

___

💠 **I**<sup><sub>nterface segregation</sub></sup>   
👆🏽 Принцип разделения интерфейсов

&emsp;&emsp; 🔹 Программные сущности, не должны зависеть от методов, которые они не используют  

<details>
<summary>📗 Interface segregation в архитектуре</summary>

___

🔹 Например работа с ролями  
&emsp;&emsp; 🎯 Вместо того что бы создать один класс `User` реализующий разные методы всех ролей  
&emsp;&emsp; 🎯 Создаем класс `User` только с общими методами для всех ролей, а от него уже создаем более конкретные классы, с уникальными свойствами и методами, например `Admin`, `User`, `Guest`   
&emsp;&emsp; 🎯 Таким образом класс `Guest`, не будет зависить от метода `ban`, которые необходим классу `Admin`   

🔹 Библиотека `i18Next`  
&emsp;&emsp; 🎯 Основная библиотека зависит только от ее базовых методов    
&emsp;&emsp; 🎯 Остальные методы подключаються отдельно  
&emsp;&emsp; 🎯 И в случаи поломках в них, методы основной логики не ломаються   



</details>  


___

<br>  
<br>

___


💠 **D**<sup><sub>ependency inversion</sub></sup>   
👆🏽 Инверсия зависимостей

&emsp;&emsp; 🔹 Верхняя уровненные сущности, не должны зависеть от нижнего уровневых  

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


___

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**