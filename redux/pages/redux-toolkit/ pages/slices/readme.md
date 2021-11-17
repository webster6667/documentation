# Слайс
> Метод создающий редюсер и экшен в одном месте, без лишней декомпозиции

```javascript
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    age: 1
}

export const userSlice = createSlice({
    name: 'user', 
    initialState,
    reducers: {
        setAge(state, action) {
            state.age = state.age + action.payload    
        }        
    }
})

export default userSlice.reducer            // 🎯 Экспорт редюсера    
export const {getData} = userSlice.actions  // 🎯 Экспорт созданных к нему экшенов
```

🔹 **name** - Уникальное имя слайса

🔹 **reducers** - Объект хранящий методы, которые обрабатывают экшены

&emsp;&emsp; 🎯 Экшены создавать отдельно(как в базовой структуре редакса) ненужно

&emsp;&emsp; 🎯 Объявленная функция внутри `reducers`, и есть экшен

&emsp;&emsp; 🎯 Вызывать экшены в `dispatch` можно по имени функции объявленной в `reducers`
```jsx harmony
import {useDispatch} from 'react-redux'
import userReducer, {setAge} from './reducers/user'

const MyComponent = () => {
    const dispatch = useDispatch(),
          clickHandler = () => {
              dispatch(setAge(1))
          }

    return (<input onClick={clickHandler} />)
}
```