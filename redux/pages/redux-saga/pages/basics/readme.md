# Основый

Сагу в основном используют для реализации сложных сайд эффектов и бизнес логики, отдельно от чистых функций редакса

## В основе саги лежит три понятия


💠 **Вотчеры**   
👆🏽 Функции которые вызывает воркер, когда отработал екшен на который был поставлен вотчер

<br>
<br>

💠 **Воркеры**   
👆🏽 Могут выполнять ассинхронные запросы, эфекты, диспатчить результаты своей работы в стор

<br>
<br>

💠 **Эффекты**  
👆🏽 Специальные методы саги, которые позволяют вызывать ассинхронные функции как последовательно так и парралельно(и не только)

<br>
<br>

```typescript
import {put, takeEvery} from "redux-saga/effects"
import {incrementCreator, decrementCreator} from "@redux-actions/count"
import {ASYNC_INCREMENT, ASYNC_DECREMENT} from "@redux-types"

function* incrementWorker() {
    yield delay(1000)
    yield put(incrementCreator())
}

function* decrementWorker() {
    yield delay(1000)
    yield put(decrementCreator())
}


export function* countWatcher() {
    yield takeEvery(ASYNC_INCREMENT, incrementWorker)
    yield takeEvery(ASYNC_DECREMENT, decrementWorker)
}
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**