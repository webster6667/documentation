# Создание экшенов
> Происходет гораздо быстрее, и с меньшим количеством кода

💠 Конфигурация стора

&emsp;&emsp; 🔹 Происходит в файле `src/store/index.js` 

```javascript
import {configureStore} from "@reduxjs/toolkit";
import rootReducer from './reducers'

export const setupStore = () => {     // 🎯 Инициализация стора    
    return configureStore({
        reducer: rootReducer
    })
}
```

&emsp;&emsp;&emsp;&emsp; 👆 `Redux-thunk` и `devTools` подключены уже из коробки

<br>

&emsp;&emsp; 🔹 Инициализация `rootReducer` в файле `src/store/reducers/index.js`

```javascript
import {configureStore} from "@reduxjs/toolkit";
import {myReducer} from './reducers/my-reducer'

const rootReducer = combineReducers({ // 🎯 Комбаин редюсеров
    myReducer
})

export default rootReducer
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**