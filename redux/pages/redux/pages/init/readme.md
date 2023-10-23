# Инициализация  
Сага это middleware, по этому подключаеться при создании стора

```typescript
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducers/root-reducer"

import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "@saga-root-watcher";

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootWatcher)
```

## RootWatcher    
👆🏽 Своего рода combineReducer, который объединяет и запускает в себе все вотчеры приложения   

&emsp;&emsp; 🔹 Для того что бы сага начала следить за вызовом экшенов, в run нужно передать rootWatcher

```typescript
import {all} from "redux-saga/effects"
import {countWatcher} from "./count-saga";
import {userWatcher} from "./user-saga"

export function* rootWatcher() {
    yield all([countWatcher(), userWatcher()])
}
```

## Способы создания root саг

&emsp;&emsp; 🔹 Просто через массив  

&emsp;&emsp;&emsp;&emsp; 🎯 Саги запустяться паралельно  
&emsp;&emsp;&emsp;&emsp; 🎯 Если хоть одна зафейлиться, все упадут  
&emsp;&emsp;&emsp;&emsp; 🎯 Если одна из саг будет блокирующей, идущие после нее будут ее дожидаться  
```typescript
import {countWatcher} from "./count-saga";
import {userWatcher} from "./user-saga"

export function* rootWatcher() {
    yield [countWatcher(), userWatcher()]
}
``` 

&emsp;&emsp; 🔹 Через массив fork

&emsp;&emsp;&emsp;&emsp; 🎯 Саги запустяться паралельно  
&emsp;&emsp;&emsp;&emsp; 🎯 Если хоть одна зафейлиться, все упадут  
&emsp;&emsp;&emsp;&emsp; 🎯 Эти саги не будут дожидаться друг друга    
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 Так как fork не блокирует поток     

```typescript
import {fork} from "redux-saga/effects"
import {countWatcher} from "./count-saga";
import {userWatcher} from "./user-saga"

export function* rootWatcher() {
    yield [
        fork(countWatcher),
        fork(userWatcher)
    ]
}
``` 

Идентичный результат, но с другим синтаксисом

```typescript
export function* rootWatcher() {
    yield fork(countWatcher)
    yield fork(userWatcher)
}
```

&emsp;&emsp; 🔹 Через эффект all     

&emsp;&emsp;&emsp;&emsp; 🎯 Если хоть одна из саг будет блокирующей, `all` заблокирует поток, и начнет вызывать саги поочередно  
&emsp;&emsp;&emsp;&emsp; 🎯 Если в списке не будет блокирующих саг, `all` будет не блокирующим, и запустит все процессы параллельно  

```typescript
import {all} from "redux-saga/effects"
import {countWatcher} from "./count-saga";
import {userWatcher} from "./user-saga"

export function* rootWatcher() {
    yield all([countWatcher(), userWatcher()])
}
```

## Эррор хендлер root саги

```typescript
import {all, call, spawn} from "redux-saga/effects"
import {countWatcher} from "./count-saga";
import {userWatcher} from "./user-saga"

export function* rootWatcher() {
    const sagas = [countWatcher, userWatcher]

    const retrySagas = yield sagas.map(saga => {
        
        return spawn(function* () { // 🎯 - Запустит сагу в отдельном независимом потоке
            
            while (true) {
                
                try {
                    yield call(saga)
                    break;          // 🎯 - Выйдет из бесконечного цикла при успешной отработке
                } catch (e) {
                    console.log(e); // 🎯 - Выведет ошибку в консоли, и сага будет перезапущенна в бесконечном цикле
                }
                
            }

        })
        
    })

    yield all(retrySagas)
}
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**