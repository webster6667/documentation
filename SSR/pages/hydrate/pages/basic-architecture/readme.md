# Базовая архитектура
> Базовая архитектура состоит из трех основных секций

💠 Shared - `src/shared/app/index.tsx`   
👆🏽 Папка в которой находиться все приложение

&emsp;&emsp; 🎯 Без провайдеров  
&emsp;&emsp; 🎯 Без рендеринга в DOM

> 📗 Клиент и сервер оборачивают приложение в провайдеры по разным алгоритмам, поэтому само тело приложения нужно хранить отдельно, что бы можно было переисполльзовать его, и оборачивать по своей логике как на фронте, так и на беке   

```typescript jsx
import React from 'react'

export const App = () => {

    return <div>
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
```

<br>

💠 Client - `src/client/index.tsx`
👆🏽 Папка в которой находиться все приложение, обернутое в **<a href="#hydrate">hydrate</a>** и клиентские провайдеры  

&emsp;&emsp; 🔹 Hydrate  
&emsp;&emsp;&emsp;&emsp; 👆 Более продвинутый вид рендеринга   

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 Сравнивает текущий `html` который вернул сервер, и то что пытаеться зарендерить клиент  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 Если контент совпадает, повторный рендеринг не происходит  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 Происходит просто подвешивание всех обработчиков клиентской части(`клики, хуки, линки и тд`)

```typescript jsx
import React from "react";
import { hydrate } from "react-dom";

import {App} from './../shared/app'

hydrate(<App />, document.getElementById('root'))
```

💠 Server - `src/server/index.tsx`  
👆🏽 Папка в которой лежит серверный код, выполняющий следующий функционал:

&emsp;&emsp; 🎯 Рендерит содержимое `shared`, в обычный `html`  
&emsp;&emsp; 🎯 Оборачивает приложение провайдеры по серверному алгоритму  
&emsp;&emsp; 🎯 Подключает скрипт(`client/index.tsx`), который запускает дальнейшую работу сайта без `ssr`  
&emsp;&emsp; 🎯 Сразу запихивает в стейт/стор, данные которые должны быть отрисованы при первой загрузке  
&emsp;&emsp; 🎯 Прокидывает эти данные на клиент  
&emsp;&emsp;&emsp;&emsp; 👆 Для того что бы данные с сервера, совпадали с клиентскими, и `hydrate`, не делал лишний рендер   

```typescript jsx
import fs from "fs";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";

import express from "express";
import cors from "cors";
import {App} from "./../shared/app";

const assets = JSON.parse( // 🎯 Получит список скриптов для подключения, из файла который генерит webpack при каждой сборке
    fs.readFileSync(path.join(__dirname, 'assets.json'), 'utf8')
);

app.get("*", (req, res, next) => {
    const markup = renderToString(
        <App />
    );

    res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>SSR</title>          
            <script src="/${assets.vendors.js}" defer></script>
            <script src="/${assets.main.js}" defer></script>        
          </head>
          <body>
            <div id="root" >${markup}</div>
          </body>
        </html>
    `);
    
});

const SERVER_PORT = process.env.PORT || 3008

app.listen(SERVER_PORT, () => {
    console.log(`Server is listening on: ${SERVER_PORT}`);
});
```

❗ Обязательно должна быть подключена favicon, если ее нет через ssr проходит лишний запрос

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**   