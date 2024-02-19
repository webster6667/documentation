# Методы получения initial props на сервере из компонентов
> Для получения на сервере данных описанных на клиенте нужно выполнить следующие этапы

💠 Написать метод компонента который будет вызван на сервере 

&emsp;&emsp; 🔹 Классовый       
```typescript jsx
export class Main extends Component {

    static async getInitialProps() { // 👉🏼 Сраборает на момент рендера на сервере, и прокинить результаты в props компонента 
        const {data} = await axios('https://jsonplaceholder.typicode.com/todos/1')

        return data
    }

    async componentDidMount() { // 👉🏼 Сраборает после рендера на клиенте, уже с получиными данными из getInitialProps в this.props 
        const data = await Main.getInitialProps() // 👉🏼 Переиспользуем статический метод запроса данных 
    }

    render() {
        console.log(this.props);

        return (<div>
            <h1>Main</h1>
        </div>)
    }
}
```

&emsp;&emsp; 🔹 Функциональный
```typescript jsx
const getInitialProps = async () => {
    const {data} = await axios('https://jsonplaceholder.typicode.com/todos/1')

    return data
}

const Profile = (props) => {
    
    useEffect(() => {
        (async function () {
            const data = await getInitialProps()

            console.log(data);
        }());
    }, [])
    
    console.log(props);
    
    return (<div>
        <h1>Profile</h1>
        <Link to={'/'} >Main</Link>
    </div>)
}

Profile.getInitialProps = getInitialProps

export {Profile}
```

💠 Вызвать их на сервере - `src/server/index.txs`
```typescript jsx
app.get("*", async (req, res, next) => {

  const context = {},
        path = req.url,
        activeRoute = routes.find((route) => matchPath(path, route)),
        promise = activeRoute?.component?.getInitialProps ? activeRoute.component?.getInitialProps() : Promise.resolve()
});
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**