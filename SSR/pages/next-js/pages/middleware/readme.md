# middleware
> По пути pages _middleware.ts, лежит middleware, через которую проходят странички перед рендерингом

🔹 Там можно получать данные с сервера, и реализовывать разную логику, например авторизацию      

```typescript jsx
import {NextResponse} from "next/server";

export default function middleware(reg) {
        const {cookies, url} = reg,
              protectedRoutes = ['/profile'],
              routsForGuest = ['/login'],
              route = url.replace('http://localhost:4001', ''),
              isAuth = Boolean(cookies.username),
              isGuest = !isAuth
    
    if (isGuest && protectedRoutes.includes(route)) {
        return NextResponse.redirect('http://localhost:4001/login')
    } else if(isAuth && routsForGuest.includes(route)) {
        return NextResponse.redirect('http://localhost:4001/profile')
    }

    return NextResponse.next()
}
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**