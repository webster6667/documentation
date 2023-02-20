# Before you memo

🔹 Меморизация не бесплатная операция, и при неправильном использовании может даже ударить по производительности  

🔹 Зачастую есть несколько способой обойтись без нее, избегая лишних ререндеров   
   
&emsp;&emsp; 🎯 Если нужно что-бы переменная не пересоздавалась даже при ререндере компонента, можно положить ее значение в `useRef`  

&emsp;&emsp; 🎯 Компонент ререндериться при изменении стейта, и если в родителе лежат два компонента не объедененных одним стейтом, то самым дешевым решением будет просто инкапсулировать работу со стейтом друг от друга  
```js
const [input, setInput] = useState("");

  return (
    <div className="App">
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      {cars.map((name) => (
        <CarMemo name={name} key={name} />
      ))}
    </div>
  );
  
// to -------------------------------------

return (
    <div className="App">
        <Input /> {/* 👉🏼 Изменение стейта инпута происходит внутри, не заставляя перередндривать Car при каждом изменении в input */}
        {cars.map((name) => (
            <Car name={name} key={name} />
        ))}
    </div>
);
```

&emsp;&emsp; 🎯 Прокинуть соседа как children  
&emsp;&emsp;&emsp;&emsp; 👆 children не ререндериться при изменении стейта

```js
const [input, setInput] = useState("");

  return (
    <div className="App">
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      {cars.map((name) => (
        <CarMemo name={name} key={name} />
      ))}
    </div>
  );
  
// to -------------------------------------

const InputWrapper = ({children}) => {
    const [input, setInput] = useState("");

    return (
        <div className="App">
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            {children}
        </div>
    );
}


export default function App() {
    return (
        <div className="App">
            <InputWrapper>
                {/* 👉🏼 children, внутри InputWrapper, не будет ререндериться при изменении стейта InputWrapper */}
                {/* 👉🏼 Для ререндера children, нужно что-бы произошел ререндер того компонента где children обьявлен как компонент, т.е <App /> */}
                {cars.map((name) => (
                    <Car name={name} key={name}/>
                ))}
            </InputWrapper>
        </div>
    );
}
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**

    


