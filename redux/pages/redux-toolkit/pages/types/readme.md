# Типизация redux-toolkit

💠 Типизация слайса
```javascript
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface InitialStateProps {
    age: number
}

const initialState: InitialStateProps = { // 🎯 Типизировать инит стейт
    age: 1
}

export const userSlice = createSlice({
    name: 'user', 
    initialState,
    reducers: {
        setAge(state, action: PayloadAction<number>) { // 🎯 Типизация payload екшена
            state.age = state.age + action.payload    
        }        
    }
})
```