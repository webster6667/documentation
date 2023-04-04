# use Reducer
👆🏽 Хук позволяющий пользоваться интерфейсом редакса более коротким способом  


```javascript
import React, { useReducer } from 'react';

// Define the initial state
const initialState = { count: 0 };

// Define the reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

// Create a component that uses the reducer
const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleIncrement = () => {
        dispatch({ type: 'INCREMENT' });
    };

    const handleDecrement = () => {
        dispatch({ type: 'DECREMENT' });
    };

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default Counter;
```


<br>

### ⟵ **<a href="../../readme.md">Назад</a>**