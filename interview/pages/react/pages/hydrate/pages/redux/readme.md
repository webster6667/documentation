# Подключение Redux к ssr
> Для подключения `redux` к ssr выполняем следующие действия

💠 Создать стандартный файл инициализации стора - `src/shared/store/index.ts`

&emsp;&emsp; 🔹 Обязательно добавив переменную `preloadedState` в `createStore`        
&emsp;&emsp;&emsp;&emsp; 👆 в `preloadedState` будем помещать `init` данные на стороне сервера   

```typescript jsx
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {profileReducer, usersReducer} from "./reducers"

const rootReducer = combineReducers({
profileReducer,
usersReducer
})

export const createStore = (preloadedState?) => {
return configureStore({reducer: rootReducer, preloadedState})
}

export type RootState = ReturnType<typeof rootReducer>
```

💠 Создать объект стора на стороне сервера - `src/server/index.tsx`

&emsp;&emsp; 🔹 Во время инициализации стора можно прокинуть инит данные    
&emsp;&emsp;&emsp;&emsp; 👆 Например данные об авторизации   

&emsp;&emsp; 🔹 Далее нужно достать `dispatch`

&emsp;&emsp; 🔹 Прокинуть `dispatch` в `getInitialProps`

```typescript jsx
app.get("*", (req, res, next) => {

  const store = createStore({
          usersReducer: usersInitialState,
          profileReducer: {...profileInitialState, username: getCookie('username', req.headers.cookie)}
        }),
        dispatch = store.dispatch,
        promise = activeRoute?.component?.getInitialProps ? activeRoute.component?.getInitialProps(dispatch) : Promise.resolve()
});
```

💠 Обернуть тело приложения в `react-redux` провайдер на стороне сервера 

&emsp;&emsp; 🔹 Прокинуть на клиент сгенерированное на сервере состояние стора       
&emsp;&emsp;&emsp;&emsp; 👆 `const initialData = store.getState();`   

```typescript jsx
import { Provider } from "react-redux";

app.get("*", async (req, res, next) => {
    //...     
    promise.then(() => {

        const markup = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url} context={context} >
                    <App />
                </StaticRouter>
            </Provider>
        );
        const initialData = store.getState();

        res.send(`
            <!DOCTYPE html>
            <html>
              <head>
                <title>SSR</title>          
                <link rel="shortcut icon" href="/favicon.ico">
                <script src="/${assets.vendors.js}" defer></script>
                <script src="/${assets.main.js}" defer></script>
                <script>window.__initialData__ = ${serialize(initialData)}</script>
              </head>
              <body>
                <div id="root" >${markup}</div>
              </body>
            </html>
          `);
    })
    
});
```

💠 Обернуть на клиенте тело приложение в провайдер

&emsp;&emsp; 🔹 Поместить в клиентский стор, состояния стора сгенерированного на сервере      

```typescript jsx
import React from "react";
import { hydrate } from "react-dom";

import {App} from './../shared/app'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {createStore} from "./../shared/store"


const store = createStore(window.__initialData__)
delete window.__initialData__


hydrate(<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>, document.getElementById('root'))
```

💠 Дернуть `dispatch` в методах где это необходимо

```typescript jsx
import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import {fetchUsers} from './../../store/actions/users'

const getInitialProps = async (dispatch) => {
    await dispatch(fetchUsers())
}

const Profile = (props) => {
    
    useEffect(() => {
        (async function () {
            await getInitialProps()
        }());
    }, [])

    
    return (<div>
        <h1>Profile</h1>
        <Link to={'/'} >Main</Link>
    </div>)
}

Profile.getInitialProps = getInitialProps

export {Profile}
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**