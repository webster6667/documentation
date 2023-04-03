# Service-worker
> Своего рода прокси, через который проходят все запросы на сайт

<details>
<summary> 🔥 <code>Shortcut</code></summary>

___

🔹 На событии запроса данных(fetch), выбрать одну из стратегий
&emsp;&emsp; 🎯 Cache first  
&emsp;&emsp;&emsp;&emsp; 👆 Всегда берет данные из кеша, при обновлении данных, оповещает юзера об обновлении

&emsp;&emsp; 🎯 Network first  
&emsp;&emsp;&emsp;&emsp; 👆 Берет данные с сервера, пишет в кеш, при отсутствии соединения берет последние актуальные данные из кеша

___

</details>

💠 Основные предназначение `serwice-worker`

&emsp;&emsp; 🎯 Оптимизация

&emsp;&emsp; 🎯 Кеширование

&emsp;&emsp; 🎯 Работа приложения вне браузера

&emsp;&emsp; 🎯 Работа приложения офлайн

<br>

💠 Этапы инициализации

&emsp;&emsp; 🎯 Дождаться загрузки приложения

&emsp;&emsp; 🎯 Проверить поддержку сервис воркеров

&emsp;&emsp; 🎯 Зарегистрировать файл воркеров

🔹 `/src/sw-registration.ts`      
```typescript jsx
export function register() {
    if ('serviceWorker' in navigator) {

        window.addEventListener('load', async () => {
            try {
                const reg = await navigator.serviceWorker.register('/sw.js')
                console.log('Service worker register success', reg)
            } catch (e) {
                console.log('Service worker register fail')
            }
        });
    }
}

export function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready
            .then((registration) => {
                registration.unregister();
            })
            .catch((error) => {
                console.error(error.message);
            });
    }
}
```

🔹 `/src/index.tsx`
```typescript jsx
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from "@store"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {App} from "@app"
import * as swRegistration from "./sw-registration";

const store = createStore()

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'))

swRegistration.register()
```

<br>

💠 Основные события

&emsp;&emsp; 🔹 `install`    
&emsp;&emsp;&emsp;&emsp; 👆 Срабатывает когда воркер готов к работе  

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 Подходит для кеширования статики       

```typescript jsx
const staticCacheName = 's-app-v3'

const assetUrls = [
  'main.css',
  'main.js',
  'index.html',
  'icons/favicon.ico?v=1'
]

self.addEventListener('install',  async event => {
  const cache = await caches.open(staticCacheName) 
  await cache.addAll(assetUrls)
})
```

&emsp;&emsp; 🔹 `activate`   
&emsp;&emsp;&emsp;&emsp; 👆 Срабатывает когда воркер выбирает версию кеша

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 Подходит для чистки кеша при изменении его версии

```typescript jsx
self.addEventListener('activate', async event => {
  const cacheNames = await caches.keys() // 👉🏼 Получить список всех версия кеша
  await Promise.all( // 👉🏼 Дождаться пока отчистятся все лишние версии
      cacheNames
          .filter(name => name !== staticCacheName) // 👉🏼 Взять все версии кроме самой новой
          .map(name => caches.delete(name)) // 👉🏼 Удалить их
  )
})
```

&emsp;&emsp; 🔹 `fetch`  
&emsp;&emsp;&emsp;&emsp; 👆 Срабатывает при любых запросах браузера(`за статикой или данными в базу`)

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 Место где воркер выбирает откуда брать данные, из кеша или с сервера

```typescript jsx
self.addEventListener('fetch', async ({request}) => {
   const cached = await caches.match(request) // 👉🏼 Ищу запрос в кеше
   return cached ?? await fetch(request) // 👉🏼 Если есть отдам из кеша, если нет пошлю запрос на сервер
})
```

<br>

💠 Основные стратегии

&emsp;&emsp; 🔹 `cacheFirst`  

&emsp;&emsp;&emsp;&emsp; 🎯 Сначала смотрит в кеше  
&emsp;&emsp;&emsp;&emsp; 🎯 Если в кеше пусто, идет на сервер  
&emsp;&emsp;&emsp;&emsp; 🎯 Чаще всего используеться для получения статики

```typescript jsx
async function cacheFirst(request) {
  const cached = await caches.match(request)
  return cached ?? await fetch(request)
}
```

&emsp;&emsp; 🔹 `networkFirst`

&emsp;&emsp;&emsp;&emsp; 🎯 Берет данные актуальные данные с сервера  
&emsp;&emsp;&emsp;&emsp; 🎯 Пишет в кеш  
&emsp;&emsp;&emsp;&emsp; 🎯 Если нет соединения, берет последние актуальные данные из кеша  
&emsp;&emsp;&emsp;&emsp; 🎯 Если в кеше еще нет данных, отдает страничку `offline`  
&emsp;&emsp;&emsp;&emsp; 🎯 Чаще всего используеться для получения данных с `api`

```typescript jsx
async function networkFirst(request) {
  const cache = await caches.open(dynamicCacheName)
  try {
    const response = await fetch(request)
    await cache.put(request, response.clone())
    return response
  } catch (e) {
    const cached = await cache.match(request)
    return cached ?? await caches.match('/offline.html')
  }
}
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**
