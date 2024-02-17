# Hooks

<details>
<summary> Какие хуки знаешь? </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

<details>
<summary> 🔹 <code>useState</code></summary>

----

👆 Хук хранящий в себе состояние, которое можно изменить только при помощи `set` функции     
&emsp;&emsp; 👆🏽 Изменения состояния вызывает ререндер компонента

```typescript jsx
const [value, setvalue] = useState()
```

----

</details>

<details>
<summary> 🔹 <code>useReduce</code></summary>

----

👆 Хук реализующий патерн работы редюсера    

```typescript jsx
function reducer(state, action) {
    if (action.type === 'incremented_age') {
        return {
            age: state.age + 1,
        };
    }
    throw Error('Unknown action.');
}

export default function Counter() {
    const [state, dispatch] = useReducer(reducer, {
        age: 42,
    });

    return (
        <>
            <button
                onClick={() => {
                    dispatch({ type: 'incremented_age' });
                }}
            >
                Increment age
            </button>
            <p>Hello! You are {state.age}.</p>
        </>
    );
}
```


----

</details>

<details>
<summary> 🔹 <code>useEffect</code></summary>

----

🎯 Хук срабатывает при `mount` компонента, и при каждом изменении указанных `deps`-ов        
🎯 Хук возвращает функцию, которая сработает при `unmount` либо при изменении указаных `deps`-ов  

```typescript jsx
useEffect(() => {
    console.log('was mount')
    
    return () => {
        console.log('was unmount')
    }
}, [])
```  

```typescript jsx
const [clickCount, setclickCount] = useState(0)

useEffect(() => {
    const clickingStarted = clickCount > 0
    
    if (clickingStarted) {

        // Старт таймера после первого клика
        const timer = setTimeout(() => {
            alert('late 1s after last click')
        }, 1000)

        // 🎯 Функция срабатывает при новом клике, который изменяет clickCount
        // 🎯 Называется функция отчистки, потому что срабатывает при изменении зависимостей или unmount
        // 🎯 При этом хранит в замыкании данные записанные еще до изменения зависимостей или unmount 
        // 🎯 Тем самым позволяет подчищать листенеры и таймеры объявленные в предыдущем вызове useEffect    
        // 🎯 Перед тем как будут объявленны новые или произведен или unmount 
        return () => {
            // Отчистит предыдущий таймер, если след клик произошел раньше 1s 
            clearTimeout(timer)
        }
        
    }
    
    
}, [clickCount])
```

----

</details>

<details>
<summary> 🔹 <code>useRef</code></summary>

----

👆 Хук хранящий стейт или `DOM` элемент в замыкании      
&emsp;&emsp; 🎯 При изменении значений внутри `ref.current`, не происходит ререндера      
&emsp;&emsp; 🎯 Не переписывает данные внутри `ref.current` при ререндере    

```typescript jsx
const MyInput = () => {
    const inputRef = useRef();
    return <input ref={inputRef} />;
}
```
---
```typescript jsx
const MyForm = () => {
    const [value, setValue] = useState('')
    const clickCountRef = useRef(0)
    const clickCountHandler = () => {
        clickCountRef.current += 1
    }
    const submitHandler = () => {
        saveClickCoutToServer(clickCountRef.current)
    }

    return <form onSubmit={} >
        <input onclick={clickCountHandler} value={value} onChange={(e) => setValue(e.target.value)} />
        <button type='submit' >Submit</button>
    </form>;
}
```

🎯 Хранит технические данные(клики по инпуту), которые мутируются на ходу, не вызывая ререндера      

🎯 При вводе данных в `input` вызывается `setState`, вызывается ререндер, но кол-во кликов не обнуляется

----

</details>

<details>
<summary> 🔹 <code>useContext</code></summary>

----

👆 Хук который пробрасывает переданные данные всем дочерним компонентам, без `propsDrilling`  

```typescript jsx
const AlertContext = React.createContext()

export const useAlert = () => {
  return useContext(AlertContext)
}

export const AlertProvider = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false)
    const toggle = () => setIsVisible(prev => !prev)
    
    return (
        <AlertContext.Provider value={{
            visible: isVisible,
            toggle
        }}>
            { children }
        </AlertContext.Provider>
    )
}

const Alert = () => {
    const {visible} = useAlert()

    if (!visible) return null
    
    return (<div>
        Alert
    </div>)  
}

const Main = () => {
    const {toggle} = useAlert()

    return (<button onClick={() => toggle()} >
        show alert
    </button>)
}


export const App = () => {
    
    return (<div>
        <AlertProvider>
            <Aler />    
            <Main />
        </AlertProvider>
    </div>)
}

```

----

</details>

<details>
<summary> 🔹 <code>useCallback</code></summary>

----

👆 Хук пересоздаст функцию при ререндере, только в том случаи если изменились зависимые свойства     
  
```typescript jsx
// 👉🏼 Обновляю функцию только при изменении зависимых свойств
    const logFn = useCallback(() => {
        console.log(value);
    }, [value]);
```

----

</details>

<details>
<summary> 🔹 <code>useMemo</code></summary>

----

👆 Делает перерасчет запрашиваемых данных, только если изменились зависимые свойства  
```typescript jsx
const calculation = useMemo(() => expensiveCalculation(count), [count]);
```

----

</details>

<details>
<summary> 🔹 <code>useLayoutEffect</code></summary>

----

👆 Работает аналогично `useEffect`, срабатывающий синхронно, до рендера компонента   

----

</details>

<details>
<summary> 🔹 <code>useSyncExternalStore</code></summary>

----

&emsp;&emsp; 👆 Подписывается на другие сторы

----

</details>

<details>
<summary> 🔹 <code>useInsertionEffect</code></summary>

----

👆 Используеться для вставки стилей перед любыми мутациями `DOM`

----

</details>

<details>
<summary> 🔹 <code>useDeferredValue</code></summary>

----

👆 Хук позволяющий понизить приоритет выбранных данных для перерисовки, изменив переданные `values`, только после того как прошел основной рендер

```typescript
const [itemList, setItemList] = useState('');
const deferredChangedItem = useDeferredValue(itemList);
```

----

</details>

<details>
<summary> 🔹 <code>useTransition</code></summary>

----

👆 Хук позволяющий обернуть изменения стейта в обертку `startTransition`, которая делает изменение мение приоритетным, и позволяет отловить рендера разбитого на чанки

```typescript
function TabContainer() {
    const [isPending, startTransition] = useTransition()
}
```


----

</details>

<details>
<summary> 🔹 <code>useImperativeHandle</code></summary>

----

👆 Хук принимающий в себя `ref`, который можно наполнять хендлерами в дочерних компонентах, которые потом можно дергать из родительских

```typescript jsx
 const FancyInput = forwardRef(() => {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        }
    }));
    return <input ref={inputRef} />;
})

export const MyForm = () => {
    const methodsRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault()
        methodsRef.focus()
    }
    
    return <form onSubmit={} >
        <FancyInput ref={methodsRef} type="text" name='name' />
        <input type="text" name='question' />
        <button>send question</button>
    </form>
}
```

----

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>


<details>
<summary>Что происходит при изменении стейта или пропса?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Происходит ререндер компонента       
🎯 Пересоздание не закешированные функции и объекты      
🎯 Срабатывают хуки `useEffect`, у которых в зависимостях были не закешированые обьекты и функции  
🎯 Содержимое `children` не перерисовыветься    

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> В каких случаях будет вызвана функция log</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

<a href="https://codesandbox.io/s/mutable-bush-ts6rgf"></a>  

[![Edit custom-bind](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/mutable-bush-ts6rgf)

<details>
<summary>📜 Код</summary>

```javascript
export default function App() {
  const [value, setValue] = useState("");
  const [clickCount, setClickCount] = useState(0);
  const logFn = () => {
    console.log(value);
  };

  useEffect(() => {
    logFn();
  }, [logFn]);

  return (
    <div className="App">
      <input
        type="text"
        value={value}
        onClick={() => {
          setClickCount((prev) => ++prev);
        }}
        onChange={(e) => {
          const newValue = e.target.value;

          setValue(newValue);
        }}
      />
      <br />
      <span>input was clicked: {clickCount}</span>
    </div>
  );
}
```

</details>

<details>
<summary> ✅ Ответ</summary>

---

При изменении `value` или `clickCount` 

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Вызываеться лишний рендер, как бы ты это исправил?</summary>

---

1. Вынести лог функцию из компонента
```javascript
// 👉🏼 Вынес функцию из компонента, что бы избежать лишнего пересоздания
// 👉🏼 Логируемые данные принимаем через параметры    
const logFn = (logValue) => {
    console.log(logValue);
};

export default function App() {
    const [value, setValue] = useState("");
    const [clickCount, setClickCount] = useState(0);


    useEffect(() => {
        logFn(value);
        
    // 👉🏼 Вызываем лог функцию, только при изменении value значений
    }, [value]);
}
```

2. Закешировать функцию

```javascript
export default function App() {
    const [value, setValue] = useState("");
    const [clickCount, setClickCount] = useState(0);
    // 👉🏼 Обновляю функцию только при изменении зависимых свойств
    const logFn = useCallback(() => {
        console.log(value);
    }, [value]);


    useEffect(() => {
        logFn();
    }, [logFn]);
}
```

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> В каких случаях сработает return внутри useEffect </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
const [values, setValues] = setState('value')

useEffect(() => {
    
    return () => {
        console.log('unmount')
    }
    
}, [values])
```

<details>
<summary> ✅ Ответ</summary>

---

Перед тем, как в `useEffect` зависимости, попадет новый `value`

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как можно использовать возвращаемую функцию из useEffect с указанными зависимости</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Возвращаемая функция внутри `useEffect` с зависимостями, будет вызываться каждый раз перед обновления зависимостей  
🎯 Функция будет хранить в замыкании те переменные, которые были созданны до обновления зависимости  
🎯 Это позволит удалять старые таймауты или отменять запросы, до того как после изменения зависимостей, будут созданны новые  

[![Edit custom-bind](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/morning-wind-mn9s62)

```javascript
export default function App() {
    const [userId, setUserId] = useState(1);

    useEffect(() => {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => {
            console.log("request finised");
        }, 2000);

        axios
            .get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
                signal: controller.signal
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(() => {
                console.log("cansel");
            });

        return () => {
            clearTimeout(timeoutId);
            controller.abort();
        };
    }, [userId]);

    return (
        <div className="App">
            userId: {userId}
            <br />
            <button onClick={() => setUserId((prev) => ++prev)}>Increment id</button>
        </div>
    );
}
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что будет если ничего не передать в useEffect зависимости</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Хук будет срабатывать на каждый ререндер

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как бы ты реализовал ассинхронный вызов функции в useEffect</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
const myPromise = new Promise((res) => setTimeout(() => res(), 1000));

useEffect(() => {

    myPromise.then((data) => {
        console.log('promise was finished')
    })
    
}, [])
```

```javascript
const myPromise = new Promise((res) => setTimeout(() => res("my promise"), 1000));

useEffect(() => {
    (async () => {
        
        try {
            const data = await myPromise()
        } catch (e) {
            console.log(e)
        }
        
    })();
}, [])
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что увидит пользователь в данном случаи</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

[![Edit custom-bind](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/focused-maxwell-rc5vyr)

```javascript
export default function App() {
  const [width, setWidth] = useState(10);

  useEffect(() => {
    setWidth(100);
  }, []);

  return (
    <div className="App">
      <button style={{ width: `${width}px` }}>Кнопка</button>
    </div>
  );
}
```

<details>
<summary> ✅ Ответ</summary>

---

Мерцающую кнопку

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Почему</summary>

---

useEffect:    
🎯 Асинхронен  
🎯 Вызываеться после отрисовки  
🎯 Не блокирует отрисовку экрана, даже если в нем есть перерисовки   

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как пофиксить проблему с мерцающей кнопкой</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Использовать `useLayoutEffect`

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Чем useLayoutEffect отличается от useEffect</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

useLayoutEffect работает как `componentDidUpdate`:   
🎯 Вызываеться до рендера      
🎯 Если внутри происходит какая-то перерсовка, он гарантирует что пользователь не увидит промежуточное значение  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> В каком порядке отработают логи?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
useEffect(() => {
    console.log('1')
}, [])

useEffect(() => {
    console.log('2')
}, [])

useLayoutEffect(() => {
    console.log('3')
}, [])

useLayoutEffect(() => {
    console.log('4')
}, [])
```

<details>
<summary> ✅ Ответ</summary>

---

🎯 3      
🎯 4      
🎯 1      
🎯 2    


---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Раскажи как работает useReduce</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Соращенная версия `redux`, создающая стор из переданного редюсера и `initValues`

🎯 Не обкатанное решение, требующее доработак, и много времени  
🎯 Забирает devTools      

```javascript
import { useReducer } from 'react';

function reducer(state, action) {
  if (action.type === 'incremented_age') {
    return {
      age: state.age + 1
    };
  }
  throw Error('Unknown action.');
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });

  return (
    <>
      <button onClick={() => {
        dispatch({ type: 'incremented_age' })
      }}>
        Increment age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
}
```     


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Раскажи про useContext</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Хук позволяющий получить значения в самых нижних слоях, минуя пробрасывание пропсов    

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>


<details>
<summary> Где бы ты использовал useContext</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 В реализации самописных библиотек, которые общаються между собой обходя слои, по примеру Formik или Router        
🎯 Для самописной реализации перевода  
🎯 Для смены темы приложения

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Раскажи про useMemo</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 При каждом изменении стейта, все переменные и функции внутри компонента пересоздаются заново  
🎯 Иногда функция или обьект по факту не обновились, но из за вызова ререндера срабатывает пересоздание функций и объектов       
🎯 Хоть по факту обьект и не обновилсся, но в зависимостях useEffect видит новый обьект, и запускает лишнюю операцию  
🎯 Это может приводить к ошибкам и проблемам `perfomance`      

`useMemo` позволяет закешировать значения, и обновлять их только при изменеии действительно зависимых пропсов     
Это являеться не лучшей практикой так как useMemo не самая дешевая операция  


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Раскажи об useCallback</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Работает как useMemo, только для функций

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

[comment]: <> (useRef)

[comment]: <> (<br>)

[comment]: <> (<br>)

[comment]: <> (<br>)


[comment]: <> (<details>)

[comment]: <> (<summary> Зачем нужен useLayoutEffect</summary>)

[comment]: <> (----)



[comment]: <> (----)

[comment]: <> (</details>)

[comment]: <> (<details>)

[comment]: <> (<summary> Как работает useReduce?</summary>)

[comment]: <> (----)



[comment]: <> (----)

[comment]: <> (</details>)

[comment]: <> (<details>)

[comment]: <> (<summary> Как работает useContext</summary>)

[comment]: <> (----)



[comment]: <> (----)

[comment]: <> (</details>)

[comment]: <> (<details>)

[comment]: <> (<summary> Что происходит при изменении контекста</summary>)

[comment]: <> (----)



[comment]: <> (----)

[comment]: <> (</details>)

[comment]: <> (<details>)

[comment]: <> (<summary> Зачем нужен useContext</summary>)

[comment]: <> (----)



[comment]: <> (----)

[comment]: <> (</details>)

[comment]: <> (<details>)

[comment]: <> (<summary> зачем нужен useMemo</summary>)

[comment]: <> (----)



[comment]: <> (----)

[comment]: <> (</details>)

[comment]: <> (<details>)

[comment]: <> (<summary> зачем нужен useCallback</summary>)

[comment]: <> (![illustration]&#40;https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg&#41;)



[comment]: <> (![illustration]&#40;https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg&#41;)

[comment]: <> (</details>)

[comment]: <> (<details>)

[comment]: <> (<summary> В каких случаях стоит юзать useCallback и useMemo</summary>)

[comment]: <> (----)



[comment]: <> (----)

[comment]: <> (</details>)

[comment]: <> (<details>)

[comment]: <> (<summary> Как ищбежать лишней меморизации</summary>)

[comment]: <> (![illustration]&#40;https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg&#41;)



[comment]: <> (![illustration]&#40;https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg&#41;)

[comment]: <> (</details>)

[comment]: <> (<details>)

[comment]: <> (<summary> Что такое useRef, как его юзать</summary>)

[comment]: <> (![illustration]&#40;https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg&#41;)



[comment]: <> (![illustration]&#40;https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg&#41;)

[comment]: <> (</details>)

[comment]: <> (<details>)

[comment]: <> (<summary> Что такое ref колбеки</summary>)

[comment]: <> (![illustration]&#40;https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg&#41;)



[comment]: <> (![illustration]&#40;https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg&#41;)

[comment]: <> (</details>)

[comment]: <> (<details>)

[comment]: <> (<summary> Что такое forwardref</summary>)

[comment]: <> (![illustration]&#40;https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg&#41;)



[comment]: <> (![illustration]&#40;https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg&#41;)

[comment]: <> (</details>)

[comment]: <> (<details>)

[comment]: <> (<summary> Что происходит при изменении рефов?</summary>)

[comment]: <> (----)



[comment]: <> (----)

[comment]: <> (</details>)

[comment]: <> (<details>)

[comment]: <> (<summary> бачинг</summary>)

[comment]: <> (![illustration]&#40;https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg&#41;)



[comment]: <> (![illustration]&#40;https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg&#41;)

[comment]: <> (</details>)

[comment]: <> (<details>)

[comment]: <> (<summary> Давай напишем кастомный хук</summary>)

[comment]: <> (----)



[comment]: <> (----)

[comment]: <> (</details>)

[comment]: <> (https://www.youtube.com/watch?v=qdCGwwSefX8)

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**