# use-context
👆🏽 Хук позволяющий пробрасывать пропсы сквозь компоненты избегаю `props-drilling`  

🔹 Работает при помощи двух сущностей  
&emsp;&emsp; 🎯 `Provider`   
&emsp;&emsp;&emsp;&emsp; 👆 `HOC` куда мы прокидываем пропсы  

&emsp;&emsp; 🎯 `Consumer`   
&emsp;&emsp;&emsp;&emsp; 👆 Хранит в себе ссылку на значения провайдера  

🔹 Перерисовывает все комопненты сквозь коротые проходит  

🔹 Полезно для `npm` пакетов и `localization`

```javascript
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


<br>

### ⟵ **<a href="../../readme.md">Назад</a>**