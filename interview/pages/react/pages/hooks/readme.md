# Hooks

<details>
<summary> Какие хуки знаешь</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 useState      
🎯 useReduce  
🎯 useEffect  
🎯 useRef  
🎯 useContext  
🎯 useCallback  
🎯 useMemo  
🎯 useLayoutEffect    

🎯 useSyncExternalStore    
Подписывается на другие сторы

🎯 useInsertionEffect        
Вызывает useInsertionEffect для вставки стилей перед любыми мутациями DOM

🎯 useDeferredValue    
useDeferredValue - это хук React, который позволяет отложить обновление части пользовательского интерфейса.

🎯 useTransition  
useTransition - это хук React, который позволяет обновлять состояние без блокировки пользовательского интерфейса.


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

useRef

<br>
<br>
<br>


<details>
<summary> Зачем нужен useLayoutEffect</summary>

----



----

</details>

<details>
<summary> Как работает useReduce?</summary>

----



----

</details>

<details>
<summary> Как работает useContext</summary>

----



----

</details>

<details>
<summary> Что происходит при изменении контекста</summary>

----



----

</details>

<details>
<summary> Зачем нужен useContext</summary>

----



----

</details>

<details>
<summary> зачем нужен useMemo</summary>

----



----

</details>

<details>
<summary> зачем нужен useCallback</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)



![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> В каких случаях стоит юзать useCallback и useMemo</summary>

----



----

</details>

<details>
<summary> Как ищбежать лишней меморизации</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)



![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое useRef, как его юзать</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)



![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое ref колбеки</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)



![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое forwardref</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)



![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что происходит при изменении рефов?</summary>

----



----

</details>

<details>
<summary> бачинг</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)



![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Давай напишем кастомный хук</summary>

----



----

</details>

https://www.youtube.com/watch?v=qdCGwwSefX8

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**