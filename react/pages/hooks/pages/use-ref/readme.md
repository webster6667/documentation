# use ref
👆🏽 Хук при изменении значений которого не происходит ререндера странички

🔹 Использует под капотом замыкание  

🔹 Не происходит ререндера при изменении значения

🔹 Может помещать в себя `dom` элементы

🔹 Хранит все свои значения в `current`

```javascript
import React, { useRef } from 'react';

const InputField = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>Focus Input</button>
        </div>
    );
};
```


<br>

### ⟵ **<a href="../../readme.md">Назад</a>**