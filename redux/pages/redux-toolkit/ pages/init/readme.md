# Инициализация
> Гораздо короче чем классическая redux схема

💠 **Установка пакетов**
```
npm i @reduxjs/toolkit react-redux
```

<br>
<br>

💠 **Конфигурация стора**

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
import {combineReducers} from "@reduxjs/toolkit";
import {myReducer} from './reducers/my-reducer'

const rootReducer = combineReducers({ // 🎯 Комбаин редюсеров
    myReducer
})

export default rootReducer
```

<br>

&emsp;&emsp; 🔹 Оборачивание всего приложения `redux-ом` в файле `src/index.js` 
```jsx harmony
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'

import App from './app'

import {setupStore} from './store'

const store = setupStore()

ReactDOM.render(
    <Provider store={store}> // 🎯 HOC оборачивающий приложение редаксом
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
document.getElementById('root'))
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**