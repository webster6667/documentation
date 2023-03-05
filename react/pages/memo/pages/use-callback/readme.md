# useCallback()
👆🏽 `hook` Предотвращий пересоздание функции внутри компонента, если при ререндере небыли изменены `deeps`  
&emsp;&emsp; 👆 Не бесплатный хук, который может даже ухудшить перфоманс при недопонимании его работы   

&emsp;&emsp; 🔹 При кешировании функции и последующих перерендерах, происходит не мало операций, которые могу быть дороже пересоздания функции  

&emsp;&emsp; 🔹 В основном `useCallback` используют в том случаи, когда меморизированную функцию передают пропсом в список меморизированных компонентов    
&emsp;&emsp;&emsp;&emsp; 👆 Для того что-бы функция всегда имела одну и туже ссылку на область памяти, и не вызывала ререндер меморезированных компонентов  

```js
export default function App() {
    const [input, setInput] = useState("");
    const carClickHandler = useCallback((name) => {
        console.log(name);
    }, []);

    return (
        <div className="App">
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            {cars.map((name) => (
                <CarMemo name={name} onCarClick={carClickHandler} key={name} />
            ))}
        </div>
    );
}
```

**<a href="https://codesandbox.io/s/hungry-rosalind-hy38g3">Demo</a>**

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**