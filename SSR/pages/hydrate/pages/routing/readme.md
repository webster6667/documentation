# Роутинг
> Для настройки роутинга на чистом ssr нужно выполнить 5 пунктов

💠 Создать общий файл роутинга с компонентами - `src/shared/routes.ts`

```typescript jsx
import {Main} from "./pages/main";
import {Profile} from "./pages/profile";

export const routes = [
  {
    path: "/",
    exact: true,
    component: Main
    // 👉🏼 Сюда можно добавлять любые параметры которые можно получить при рендеринге роутов, например: isLockForGuest: true  
  },
  {
    path: "/profile",
    component: Profile,
    isLockForGuest: true
  },
];
```

💠 Получить инит данные из компонента активного роута
```typescript jsx
app.get("*", async (req, res, next) => {

  const context = {},
        path = req.url,
        activeRoute = routes.find((route) => matchPath(path, route)),
        promise = activeRoute?.component?.getInitialProps ? activeRoute.component?.getInitialProps() : Promise.resolve()
});
```

💠 Дождаться получение инит данных активного роута, на стороне сервере - `src/server/index.tsx`

&emsp;&emsp; 🔹 Обернуть тело приложения в провайдер на стороне сервера        
&emsp;&emsp;&emsp;&emsp; 👆  `StaticRouter` - Отрисует на сервере приложение по указаному пути   

&emsp;&emsp; 🔹 Прокинуть инит данные данные при отрисовке на сервере


```typescript jsx
    const context = {},
          path = req.url,
          activeRoute = routes.find((route) => matchPath(path, route)),
          promise = activeRoute?.component?.getInitialProps ? activeRoute.component?.getInitialProps() : Promise.resolve()

    promise.then((activeRouteInitialProps = {}) => {
        const activeRouteProps = {...activeRouteInitialProps, activeRoutePath: path}

        const markup = renderToString(
            <StaticRouter location={req.url} context={context} >
                <App activeRouteInitialProps={activeRouteProps} />
            </StaticRouter>
        );

        res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>SSR</title>          
            <link rel="shortcut icon" href="/favicon.ico">
            <script src="/${assets.vendors.js}" defer></script>
            <script src="/${assets.main.js}" defer></script>
            <script>window.__initialData__ = ${serialize(activeRouteProps)}</script>
          </head>
          <body>
            <div id="root" >${markup}</div>
          </body>
        </html>
      `);
    })
    .catch(() => {
        res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>SSR</title>
            <link rel="shortcut icon" href="/favicon.ico">
          </head>
          <body>
            <div id="root" >500</div>
          </body>
        </html>`)
    });
```

💠 Обернуть тело приложения в провайдер на стороне клиента - `src/client/index.tsx`

&emsp;&emsp; 🔹 Прокинуть инит данные      

```typescript jsx
import { BrowserRouter } from "react-router-dom";

const activeRouteInitialProps = window.__initialData__
delete window.__initialData__

hydrate(<BrowserRouter>
        <App activeRouteInitialProps={activeRouteInitialProps} />
</BrowserRouter>, document.getElementById('root'))
```

💠 Развернуть файл роутинга в теле приложения - `src/shared/app/index.tsx`

```typescript jsx
import {routes} from "./routes";

const App = ({activeRouteInitialProps}) => {

    const isAuth = activeRouteInitialProps?.isAuth || false,
          activeRoutePath = activeRouteInitialProps.activeRoutePath

    return <div>

        <Switch>
            {routes.map(({isLockForGuest = false, isLockForAuth = false, redirectUrl, component: Component, ...routeProps}, i) => {
                let activeRouteProps = {},
                    isActiveRoute = activeRoutePath === routeProps.path 

                if (isActiveRoute) { 
                    activeRouteProps = activeRouteInitialProps
                }

                if (isLockForGuest && !isAuth) {
                    return <Redirect key={i} to="/login" {...routeProps} />
                } else if(isLockForAuth && isAuth) {
                    return <Redirect key={i} to={redirectUrl || '/'} {...routeProps} />
                } else {
                    return <Route key={i} la={'ar1'} {...routeProps} render={(props) => (<Component {...props} {...activeRouteProps} />)} />
                }

            })}
        </Switch>
    </div>
}

export {App}
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**