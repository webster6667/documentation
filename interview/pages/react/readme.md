# React

* **<a href="./pages/life-cycle/readme.md">Жизненый цикл реакта</a>**
* **<a href="./pages/dom-update/readme.md">React Fiber</a>**    
* **<a href="./pages/hooks/readme.md">Хуки</a>**
* **<a href="./pages/hydrate/readme.md">SSR Hydrate</a>**  
* **<a href="./pages/memo/readme.md">memo</a>**  

<details>
<summary> Как обработать ошибки в реакте?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `componentDidCatch`       
&emsp;&emsp; 👆 Используется для логирования ошибок, отправки их на сервер  
  
🎯 `getDerivedStateFromError`       
&emsp;&emsp; 👆 Используется для обновления состояния компонента в ответ на возникшую ошибку, или возвращают `null`, если не нужен ререндер    
  


```javascript
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

const MyComponent = () => {
    useEffect(() => {
      setTimeout(() => {
          throw new Error('Oops!');
      }, 1000)  
    },[])
}

function App() {
    return (
        <ErrorBoundary>
            <MyComponent />
        </ErrorBoundary>
    );
}
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как сделать ленивую загрузку компонентов в реакт?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```typescript jsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./About'));
const Loading = () => <div>Loading...</div>;

function App() {
    return (
        <Router>
                <Switch>
                    <Route path="/home" >
                        <React.Suspense fallback={<Loading/>}>
                            <Home />
                        </React.Suspense>
                    </Route>
                    <Route path="/about" >
                        <React.Suspense fallback={<Loading/>}>
                            <About />
                        </React.Suspense>
                    </Route>
                </Switch>
        </Router>
    );
}
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Важная разница между <code>18/16</code> реактом</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Стикт мод делает лишний рендер, для того что бы проверять чистые функции        
&emsp;&emsp; 👆 Повторный заброс тех же пропсов возвращает тот же результат    
  
🎯 Батчинг      
&emsp;&emsp; 👆 `setState` идущие до ассинхронной операции обновляются в группе, без лишнего ререндера на каждое изменение стейта     
  
```typescript jsx
const [click, setClick] = useState(0)

useEffect(() => {

    (async () => {
        // Обновятся выполнив одну перерисовку   
        setClick(1);
        setClick(2);
        setClick(3);
        
        await fetch('/host')   

        // Выполнятся за след перерисовку  
        setClick(4);
        setClick(5);
        setClick(6);
    })()
    
}, [deps])
```
    

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> События в реакте?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Все обернуты в `synteticEvent`, для того что бы все одинаково работало во всех браузерах  

🎯 Отменить событие можно только при помощи `e.preventDefault()`, `return false` не прокатит   

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> TS в Реакте</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

<details>
<summary> <sup>⭐</sup>❓ useRef</summary>

---

```typescript jsx
const myRef = useRef<HTMLElement>(null);
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ <code>HTML</code> компоненты</summary>

---

```typescript jsx
interface MyCmpProps extends HTMLProps<HTMLElement> {
    
}

export const MyCmp: FC<MyCmpProps> = () => {
    return (<div>
        cmp
    </div>)
}
```

🎯 `HTMLAttributes`    
&emsp;&emsp; 👆 Дефолтные `html` пропсы без реактовских особенностей   

🎯 `HTMLProps`    
&emsp;&emsp; 👆 Это `HTMLAttributes` с чилдренами и key и прочим      



---

</details>

<details>
<summary> <sup>⭐</sup>❓ События</summary>

---

```typescript jsx
const clickHandler:React.ClickEventHandler<HTMLInputElement> = () => {
    
}

const clickHandlerClosure = (e: ClickEvent<HTMLInputElement>, num: number) => {

}

const MyCmp = () => {
    return <div onClick={(e) => clickHandlerClosure(e, 5)}>
        
    </div>
}
```

---

</details>

<details>
<summary> <code>Generic</code> для компонентов</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```typescript jsx
interface MyCmpProps<K> {
    value: K
}

const MyCmp = <K extends string>({value}: MyCmpProps<K>) => {
    return <div onClick={(e) => clickHandlerClosure(e, 5)}>
        
    </div>
}
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**