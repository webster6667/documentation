# Проброс пропсов
> Для отрисовки приложения на сервере с любыми инит пропсами нужно выполнить 5 пунктов  

🔹 Получить их на сервере из:  
&emsp;&emsp; 🎯 Метода компонента странички         
&emsp;&emsp; 🎯 Куки  
&emsp;&emsp; 🎯 Запроса на другой сервер  

```typescript jsx
app.get("*", async (req, res, next) => {

    const methodForRenderOnServer = App?.myFunc() || '',
        serverCookieList = getCookies(req.headers.cookie),
        {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/1'),
        props = {methodForRenderOnServer, serverCookieList, data}
});
```

🔹 Передать в тело приложения на момент рендеринга на сервере 
```typescript jsx
const props = {methodForRenderOnServer, serverCookieList, data}

const markup = renderToString(
      <App myProps={props} />
);
```

🔹 Пробросить в клиентский скрипт на сервере    
&emsp;&emsp; 👆 Для того что бы данные рендеринга клиента с сервером совпадали, и `hydrate`, не делал ререндер
```typescript jsx
import serialize from "serialize-javascript";
const props = {methodForRenderOnServer, serverCookieList, data}

const markup = renderToString(
    <App myProps={props} />
);

res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>SSR</title>          
            <link rel="shortcut icon" href="/favicon.ico">
            <script src="/${assets.vendors.js}" defer></script>
            <script src="/${assets.main.js}" defer></script>
            <script>
                window.__initialData__ = ${serialize(props)}
            </script>
          </head>
          <body>
            <div id="root" >${markup}</div>
          </body>
        </html>
      `);
```

🔹 Пробросить их в тело приложения в клиентской части `src/client/index.tsx`  
```typescript jsx
const myProps = window.__initialData__
delete window.__initialData__

hydrate(<App myProps={myProps} />, document.getElementById('root'))
```

🔹 Получить в компоненте `src/shared/app/index.tsx`
```typescript jsx
import React from 'react'

const App = ({myProps}) => {

    return <div>
        {myProps.data.title}
        <header>
            Хедр
        </header>
        <main>
            Контент
        </main>
        <footer>
            Хедр
        </footer>
    </div>
}

App.myFunc = () => {
    return 'any props than i need render on server'
}

export {App}
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**