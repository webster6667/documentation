# Роутинг
> Роутер в next js прибит гвоздями к своей структуре 

```
-- pages   
---- page-name  
------ index.js
---- page-with-dynamic-ic  
------ [id].js
-- index.js
```

<br>

Данные из роутера можно получать через специальный хук

```typescript jsx
import {useRouter} from 'next/router'

function Page({ name }) {
    const {query} = useRouter()
}
```

### ⟵ **<a href="../../readme.md">Назад</a>**