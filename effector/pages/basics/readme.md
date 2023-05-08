# Основы
👆🏽 В основе эффектора лежит три понятий

<br>

💠 **Хранилище**   
👆🏽 Эффектор использует мультихранилище
```typescript jsx
interface $storeProps {
    value: string
}

const $store = createStore<$storeProps>({value: ''});
```

<br>

💠 **Событие**   
👆🏽 Эффектор может вызывать события, и подписывать конкретные кусочки стора, на конкретные события

&emsp;&emsp; 🎯 Объявления события
```typescript jsx
interface setValueProps {
    value: string
}

const setValue = createEvent<setValueProps>();
```

&emsp;&emsp; 🎯 Подключение к стору
```typescript jsx
$store.on(setValue, (prevState, payload) => payload);
```

&emsp;&emsp; 🎯 Получение обновляемых данных из стора
```typescript jsx
export const storeData = () => useStore($store);
```

&emsp;&emsp; 🎯 Обновление стора
```typescript jsx
import {setValue, storeData} from './models'

const Component = () => {
    return (
        <input value={storeData.value} 
               onChange={(e) => setValue(e.target.value)} 
        />)
}

```

<br>

💠 **Эффект**   
👆🏽 Ассинхронные действия, на которые так же можно подписаться

```typescript jsx
interface $storeProps {
    data: object | null
}

const fetchDataEffect = createEffect(id => fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(req => req.json()))


const $store = createStore<$storeProps>({
        data: {}
    }).on(fetchDataEffect.doneData, (state, fetchResult) => fetchResult,
)

export const data = () => useStore($store);
export const isLoading = () => useStore(fetchDataEffect.pending)

const Component = () => {
    const fetchData = useEvent(fetchDataEffect)

    return (
        <button onClick={() => fetchData(1)} />)
}

```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**