# life-cycle

<details>
<summary>Есть два вида компонентов, которые ведут работу с жизненым циклом по разному, что это за виды комопнентов?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Классовые    
🎯 Функциональные

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Раскажи этапи жизненного цикла компонента которые знаешь(пока без методов)?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

<details>
<summary> 🔹 Инициализация</summary>

----

👆 Происходит при создании класса, в этот момент записываються пропсы и стейт

----

</details>

<br>

<details>
<summary> 🔹 Монтирование </summary>

----

👆 Помещение результата работы `render` в реальный `DOM`

----

</details>

<br>

<details>
<summary> 🔹 Обновление </summary>

----

👆 Происходит при изменении внешних пропсов, внутреннего стейта или вызове `forceUpdate` метода в классовом компоненте

----

</details>

<br>

<details>
<summary> 🔹 Размонтирование </summary>

----

👆 Удалением компонента из реального `DOM`

----

</details> 


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

--- 

<br>

<details>
<summary> Расскажи о методах жизненного цикла в классовых компонентах</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

<a href="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/">Интерактивная страница жизненного цикла классового компонента</a>

<details>
<summary> 🔹 constructor()</summary>

----

👆 Относиться к `API vanylla-js`, а не к `react`, но среди всех `init` методов, отработает первым

🎯 Используеться в основном для создание рефов    
🎯 Может быть использован для установки инит стейта


----

</details>

<br>

<details>
<summary> 🔹 static getDerivedStateFromProps( props, state )</summary>

----

🎯 Статический метод   
&emsp;&emsp; 👆 Методы не владеющий конкретными данными созданного экземпляра        

🎯 Запускается при каждой перерисовке, включая инициализацию

🎯 Может перехватить присваивание пропсов и стейтов   

----

</details>

<br>

<details>
<summary> 🔹 shouldComponentUpdate( nextProps, nextState ) </summary>

----

👆 Срабатывает на каждое изменения пропсов и стейта, кроме инициализирующих   

🎯 Если вернет `true`, компонент перерисуеться при изменении стейта или входных пропсов

🎯 Если вернет `false`, компонент не перерисуеться, даже при изменении пропсов или стейта 

----

</details>

<br>

<details>
<summary> 🔹 render() </summary>

----

👆 Чистая функция описывающая что должен отрисовать компонент исходя из стейта и пропсов   

🛑 Не должна вызывать `setState` во время выполнения, так как попадет в бесконечный цикл      
&emsp;&emsp; 👆 Изменения стейта должно происходить только в развешенных колбеках

----

</details>

<br>

<details>
<summary> 🔹 getSnapshotBeforeUpdate( prevProps, prevState ) </summary>

----

👆 Срабатывает на каждое изменения пропсов и стейта, кроме инициализирующих, перед методом `componentDidUpdate` 

🎯 Позволяет получить `snapshot` стейта и пропсов, которые полетят в `componentDidUpdate`            
🎯 Получить данные из `DOM`(например координаты)    
🎯 Вернуть данные, как результат работы 

----

</details>

<br>

<details>
<summary> 🔹 componentDidMount() </summary>

----

👆 Срабатывает в момент когда компонент вмонтирован в `DOM` 

----

</details>

<br>

<details>
<summary> 🔹 componentDidUpdate() </summary>

----

👆 Начинает срабатывать при  обновлении пропсов и стейта, кроме инициализирующих

----

</details>

<br>

<details>
<summary> 🔹 componentWillUnmount() </summary>

----

👆 Срабатывает перед размонтированием компонента

🎯 Используеться в основном для отчистки таймеров, отмены запросов или подписок на события

----

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>


<details>
<summary> Вопросы по методам жизненного цикла класса</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

<details>
<summary> Можешь проговорить что увидит пользователь при текущей работе componentDidMount </summary>

----

```javascript
class App extends Component {
  constructor(props) {
    super(props);
    this.titleRef = React.createRef();
  }

  state = {
    width: 10
  };

  componentDidMount() {
    const $title = this.titleRef.current;

    if ($title) {
      this.setState({ width: $title.offsetWidth });
    }
  }

  render() {
    return (
      <div className="App">
        <h1 ref={this.titleRef}>title</h1>
        <h2 style={{ width: `${this.state.width}px` }}>
          Start editing to see some magic happen!
        </h2>
      </div>
    );
  }
}
```

<details>
<summary> ✅ Ответ</summary>

---

Произойдет ререндер, но промежуточный вариант с `width: 10` пользователь не увидит  

---

</details>

----

</details>

<br>

<details>
<summary> Проговори что увидит пользователь при работе componentDidUpdate</summary>

----

```javascript
const EMPTY = "Empty";
const NOT_EMPTY = "Not empty";

class App extends Component {
  state = {
    title: EMPTY
  };

  componentDidUpdate() {
    if (this.state.title === NOT_EMPTY) {
      this.setState({ title: "New Title" });
    }
  }

  clickHandler = () => {
    this.setState({ title: NOT_EMPTY });
  };

  render() {
    return (
      <div className="App">
        <h1>Title: {this.state.title}</h1>
        <button onClick={this.clickHandler}>test</button>
      </div>
    );
  }
}
```

<details>
<summary> ✅ Ответ</summary>

---

Произойдет ререндер, но промежуточный вариант с `Not empty` пользователь не увидит

---

</details>

----

</details>

<br>

<details>
<summary> Какие общие проблемы в этих кусках кода</summary>

----

```javascript
const EMPTY = "Empty";
const NOT_EMPTY = "Not empty";

class App extends Component {
  state = {
    title: EMPTY
  };

  render() {
      
    this.setState({title: NOT_EMPTY})  
      
    return (
      <div className="App">
        <h1>Title: {this.state.title}</h1>
      </div>
    );
  }
}

```

--- 

```javascript

const EMPTY = "Empty";
const NOT_EMPTY = "Not empty";

class App extends Component {
    state = {
        title: EMPTY,
        wasClick: false
    };

    componentDidUpdate() {
        this.setState({ title: NOT_EMPTY });
    }

    clickHandler = () => {
        this.setState({ wasClick: true });
    };

    render() {
        return (
            <div className="App">
                <h1>Title: {this.state.title}</h1>
                <button onClick={this.clickHandler}>test</button>
            </div>
        );
    }
}


```

<details>
<summary> ✅ Ответ</summary>

---

Вызываються бесконечные циклы

---

</details>

----

</details>

<br>

<details>
<summary> В каких случаях можно использовать getDerivedProps?</summary>

----

В случаях когда нужно изменить стейт компонента, в зависимости от входящих пропсов, избегая лишнего ререндера

----

</details>

<br>

<details>
<summary> Для чего нужен getSnapshotBeforeUpdate, ведь prevProps и prevState можно получить в componentDidUpdate?</summary>

----

🔹 `getSnapshotBeforeUpdate`  
&emsp;&emsp; 👆 Владеет новыми пропсами, старыми, а так же состоянием `DOM` до его перерисовки новыми пропсами    

🔹 `componentDidUpdate`  
&emsp;&emsp; 👆 Владеет новыми пропсами, старыми, но вызываеться в момент когда пропсы уже отрисованы, и `DOM` изменен

✅ Для анализа измененных пропсов и снимка `DOM` еще до отрисовки новых пропсов

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

---

<br>

<details>
<summary> Расскажи как реализован метод жизненного цикла на хуках</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

<details>
<summary> 🔹 Инициализация </summary>

----

```javascript
const [values, setValues] = setState('value')

const calculation = useMemo(() => expensiveCalculation(count), [count]);

const addTodo = useCallback(() => {
    setValues((t) => [...t, "New Value"]);
}, [todos]);
```

----

</details>

<br>

<details>
<summary> 🔹 Монтирование </summary>

----

```javascript
useEffect(() => {

}, [])

useLayoutEffect(() => {

}, [])
```

----

</details>

<br>
   
<details>
<summary> 🔹 Обновление </summary>

----

```javascript
useEffect(() => {

}, [deps])

useLayoutEffect(() => {

}, [deps])
```

----

</details>

<br>

<details>
<summary> 🔹 Размонтирование </summary>

----

```javascript
useEffect(() => {
    return () => {
        // call when component unmount
    }
}, [])

useLayoutEffect(() => {
    return () => {
        // call when component unmount
    }
}, [])
```

----

</details>


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> Вопросы по жизненному циклу реакта </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

<details>
<summary> В каких случаях сработает return внутри useEffect</summary>

----

```javascript
const [values, setValues] = setState('value')

useEffect(() => {
    
    return () => {
        console.log('unmount')
    }
    
}, [values])
```

----

</details>


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

---



<br>

### ⟵ **<a href="../../readme.md">Назад</a>**
