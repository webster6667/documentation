# Workbox
> Фреймворк для работы с воркерами 

🔹 Дает следующие приемущества

&emsp;&emsp; 🎯 Автоматизацию при билде  
&emsp;&emsp; 🎯 Расширяемость  
&emsp;&emsp; 🎯 Умное кеширование  
&emsp;&emsp; 🎯 Дев режим  
&emsp;&emsp; 🎯 Набор готовых стратегий

💠 Инициализация

🔹 Webpack
```typescript jsx
if (isProd) {
	plugins.push(new InjectManifest({
		swSrc: './sw.js',
		swDest: 'sw.js'
	}))
}
```
👆 Плагин собирающий пути всех статических файлов, работает только в проде

<br>

_🔹 Регистрация воркера `/src/index.tsx`
```typescript jsx
import registerServiceWorker from "./sw-registration";

ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker();
```

🔹 Файл регистрации роутера - `src/sw-registration.js`
```typescript jsx
import { Workbox } from 'workbox-window';

export default function registerServiceWorker() {
    
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('sw.js');

    wb.addEventListener('installed', event => {
      
      if (event.isUpdate) { // 👉🏼 Событие срабатывающее когда кеш был изменен
        if (confirm(`New app update is available!. Click OK to refresh`)) {
          window.location.reload();
        }
      }
      
    });
    wb.register();
  }
}
```

💠 Методы `workbox`       
👆🏽 Обычно пишуться в одном файле - `src/sw.js`

🔹 `clientsClaim`    
&emsp;&emsp; 👆 Получить связь со всеми подключенными к воркер клиентам  
&emsp;&emsp;&emsp;&emsp; 📗 Для корретной работы всех открытых вкладок

```typescript jsx
import { clientsClaim } from 'workbox-core';

clientsClaim();
self.skipWaiting();
```

<br>

🔹 `precacheAndRoute(assetsArray)`  
&emsp;&emsp; 🎯 Закешировать список статических ресурсов  
&emsp;&emsp; 🎯 Отдать их из кеша, если это возможно    
&emsp;&emsp;&emsp;&emsp; 📗 Обычно вместо `assetsArray`, передают переменную `self.__WB_MANIFEST`, которую генерирует `webpack` плагин `InjectManifest`

<br>

🔹 `registerRoute({request})`   
&emsp;&emsp; 👆 Описать определенную стратегию для типа данных или хоста
```typescript jsx
registerRoute(
    ({url}) => url.origin === 'https://jsonplaceholder.typicode.com',
    new NetworkFirst({
        cacheName: 'js-placeholder',
    })
);
```

<br>
<br>

💠 Стратегии `workbox`       

🔹 `CacheFirst`  
&emsp;&emsp; 👆 Взять данные из кеша если есть, если нет, с сервера   
```typescript jsx
new CacheFirst({
    cacheName: 'images'
})
```

<br>

🔹 `NetworkFirst`  
&emsp;&emsp; 🎯 Взять данные из сети   
&emsp;&emsp; 🎯 Сразу кешировать  
&emsp;&emsp; 🎯 Если нет сети, брать из кеша  

```typescript jsx
new NetworkFirst({
    cacheName: 'js-placeholder',
})
```

🔹 `StaleWhileRevalidate`  
&emsp;&emsp; 🎯 Брать данные из кеша    
&emsp;&emsp; 🎯 Сразу же сделать запрос на сервер  
&emsp;&emsp; 🎯 Проверить отилчается ли кеш от серверных данных  
&emsp;&emsp; 🎯 Если отличаеться, положить их в кеш   
> 📗 Так же можно отправить пользователю уведомление, при помощи плагина `workbox-broadcast-update`, о том что на сервере есть свежие данные, и дать ему возможность их обновить
```typescript jsx
new StaleWhileRevalidate({
    cacheName: 'static-resources'
})
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**