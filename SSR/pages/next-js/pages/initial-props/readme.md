# Инициализация данных на беке

🔹 Обычная страничка
```typescript jsx
function Page({ data }) {
    return <div>My page</div>
}

Page.getInitialProps = async (ctx) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await res.json()
    return { data }
}

export default Page
```

<br>

🔹 Страничка с динамическим `id`
```typescript jsx
import {useRouter} from 'next/router'

function Page({ name }) {
    const {query} = useRouter()

    console.log(query.id) // 👉🏼 Динамический id с роутера
    console.log(name) // 👉🏼 Данные с ssr
    
    return <div>My page</div>
}

export default Page

export async function getServerSideProps({params}) {
    const { id } = params, // 👉🏼 Динамический id с роутера
          {data: userData} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

    return {
        props: {
            ...userData
        }
    }
}
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**