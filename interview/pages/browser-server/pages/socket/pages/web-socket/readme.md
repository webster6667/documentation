# WebSocket
👆🏽 Класс реализующий работу с сокетами в `js`

```javascript
let socket = new WebSocket("ws://my-host.ru");
```

<details>
<summary>📗 Доп информация</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)
🎯 https://wanago.io/2021/12/20/redux-middleware-websockets/    
🎯 https://www.taniarascia.com/websockets-in-redux/    
🎯 https://www.youtube.com/watch?v=o43iiH4kGqg&t=1284s

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>


   
<br>



<details>
<summary>💠 Протоколы</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🔹 `ws`  
&emsp;&emsp; 👆 Открытый

🔹 `wss`  
&emsp;&emsp; 👆 Зашифрованный

> 📗 Старые прокси сервера которые не знают о технологии сокетов, закроют соединение, получив незнакомые для них заголовки

> По этому всегда предпочтительней использовать `wss` шифрования, закрывая содержимое запроса от прокси серверов


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> 💠 События </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

💠 `open`   
👆🏽 Соединение установлено, можно начинать передавать данные по сокетам

<br>

💠 `message`  
<details>
<summary> 👆🏽 Пришли данные</summary>

----

🎯 Передавать можно как строки так и `ArrayBuffer` данные      
🎯 Чаще всего передают `json` объекты

----

</details>

<br>

💠 `error`  
👆🏽 Произошла ошибка

<br>

💠 `close`
<details>
<summary> 👆🏽 Соединение закрыто</summary>

----

👆 Может приходить с разными кодами

 🎯 `1000`   
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 По умолчанию, нормальное закрытие

 🎯 `1006`   
&emsp;&emsp; 👆 Соединение было потеряно (нет фрейма закрытия)

 🎯 `1001`   
&emsp;&emsp; 👆 Сторона отключилась, например сервер выключен или пользователь покинул страницу

 🎯 `1009`  
&emsp;&emsp; 👆 Сообщение слишком большое для обработки

----

</details>

<br>

> 📗 На этих дефолтных событиях обычно строят свою архитектуру своих событий, прокидывая в json объектах название своих событий

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> 💠 Инициализация</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

<details>
<summary> 🔹 Клиент</summary>

----

```typescript jsx
useEffect(() => {
    const socket = new WebSocket('ws://localhost:3005/chat')

    socket.onopen = () => { // 👉🏼 Устанавливаем соединение с сокетом, давая уникальный id соединения
        const id = String(Date.now()),
              name = 'ben'

        const connectData = {
            id,
            name,
            event: 'connecting',
        }
        socket.send(JSON.stringify(connectData))
    }

    socket.onmessage = ({data}) => { // 👉🏼 Получаем с бека данные и обрабатываем событие которое указал бек
        const resData = JSON.parse(data)
        const {event, id, name} = resData

        switch (event) {
            case 'connected':
                console.log(`user ${name} was connected to socket`)
                break;
        }
        
    }
    
}, [])
```

----

</details>

<details>
<summary> 🔹 Сервер</summary>

----

```typescript jsx
app.ws('/chat', (ws, res) => {
    ws.send('socket is worck') // 👉🏼 Соединение установленно

    ws.onmessage = ({data}) => { // 👉🏼 Пришли данные от фронта 
        const {event, id, name, ...reqData} = JSON.parse(data)

        switch (event) {
            case 'connecting': // 👉🏼 Отправить событие об успешном подключени
                ws.id = id
                
                ws.send(JSON.stringify({
                    event: 'connected',
                    id, 
                    name
                }))
            break
        }
        
    }
    
})
```

----

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>  

<br>

<details>
<summary> 💠 Broadcast</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 В примере выше, соединение происходит только между одним клиентом и сервером

🎯 Для оповещения всех подключенных юзеров о любом событии с сокетом, нужно произвести определенные настройки на сервере

🎯 Написать функцию `broadcast`  
&emsp;&emsp; 👆 Она отправляет данные всем подключенным юзерам, кроме юзера который передал эти данные на сервер

<br>

<details>
<summary> 🔹 Сервер</summary>

----

```typescript jsx
import express from "express";
import expressWs from 'express-ws';

const app = express(),
      WSServer = expressWs(app),
      aWSS = WSServer.getWss()

app.ws('/chat', (ws, res) => {
    ws.send('socket is worck') // 👉🏼 Соединение установленно

    const connectedClientList = aWSS.clients, 
          broadcastSend = ({event, ws, ...resData}) => { // 👉🏼 Функция рассылки всем подключенным юзерам
            connectedClientList.forEach((client) => {

            if (+client.id !== +ws.id) {
                client.send(JSON.stringify({
                    event,
                    ...resData
                }))
            }

        })
    }
    
    ws.onmessage = ({data}) => { // 👉🏼 Пришли данные от фронта 
        const {event, id, name, ...reqData} = JSON.parse(data)

        switch (event) {
            case 'connecting': // 👉🏼 Отправить событие об успешном подключени
                ws.id = id
                
                ws.send(JSON.stringify({
                    event: 'connected',
                    id, 
                    name
                }))
                broadcastSend({event: 'joined', ws, id, name}) // 👉🏼 Отправить всем пользователям что подключился ище один
            break
        }
        
    }
    
})
```

----

</details>

<details>
<summary> 🔹 Клиент</summary>

----

```typescript jsx
socket.onmessage = ({data}) => { // 👉🏼 Получаем с бека данные и обрабатываем событие которое указал бек
    const resData = JSON.parse(data)
    const {event, id, name} = resData

    switch (event) {
        case 'connected':
            console.log(`you was connected to chat`)
        break;
        case 'joined': // 👉🏼 Получаем с broadcast бека событие подключения нового юзера
            console.log(`user ${name} was joined to chat`)
        break;    
    }
    
}
```

----

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> 💠 Реконект </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

> По дефолту при потери соединения переподключение к сокетам отсутствует, но сделать его достаточно просто  

🎯 Создать функцию создания сокета со всеми обработчиками

🎯 Вызвать ее

🎯 Внутри функции написать обработчик потери связи

🎯 В нем написать интервальный повторный вызов функции создания сокета, пока не сработает событие `connected`

🎯 В событии `connected` выключить функцию интервал

<details>
<summary> 🔹 Клиент </summary>

----

```typescript jsx
useEffect(() => {
        const createWs = () => {
            let reconnectIntervalId
            const socket = new WebSocket('ws://localhost:3005/chat')

            socket.onopen = () => {
                // ...
            }

            socket.onmessage = ({data}) => {
                const resData = JSON.parse(data)
                const {event} = resData

                switch (event) {
                    case 'connected':
                        clearInterval(reconnectIntervalId)
                        // ...
                    break;
                }
                
            }

            socket.onclose = (event) => {
                
                if (!event.wasClean) {
                    reconnectIntervalId = setTimeout(() => {
                        createWs()
                    }, 300)
                }
                
            }

        }
        createWs()
    }, [])
```

----

</details>



![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> 💠 Redux</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

👆 Работа с сокетами в редаксе удобней всего реализовать через `middleware`  

<details>
<summary>📜 <code>socket help class</code></summary>

```javascript
class Socket {
  constructor() {
    this.socket = null
  }

  connect(url) {
    if (!this.socket) {
      this.socket = new WebSocket(url)
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.close()
      this.socket = null
    }
  }

  send(message) {
    if (this.socket) {
      this.socket.send(JSON.stringify(message))
    }
  }

  on(eventName, callback) {
    if (this.socket) {
      this.socket.addEventListener(eventName, callback)
    }
  }
}

export { Socket }
```

</details>
  

<details>
<summary>📜 <code>chatSlice</code></summary>

```javascript
const initialState: ChatState = {
    messages: [],
    isEstablishingConnection: false,
    isConnected: false,
    userList: []
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    startConnecting: (state => {
      state.isEstablishingConnection = true;
    }),
    connectionEstablished: (state => {
      state.isConnected = true;
      state.isEstablishingConnection = true;
    }),
    includeUserToChat: ((state, action) => {
      state.userList.push(action.payload)
    }),
    excludeUserFromChat: ((state, action) => {
      state.userList = state.userList.filter((item) => item.id !== action.payload.disconnectedId) 
    }),
    writeMesaageList: ((state, action) => {
      state.messages = action.payload
    }),
  },
});
 
export const chatActions = chatSlice.actions;
 
export default chatSlice;
```

</details>

<details>
<summary>📜 <code>middleware</code></summary>

----

```typescript jsx
import { chatActions } from './chatSlice';
import ChatEvent from './chatEvent';
import {SOCKET_CONNECT, SOCKET_DISCONNECT} from '@common-const';


export const chatMiddleware = (socket) => (params) => (next) => (action) => {
    const { dispatch, getState } = params
    const { type } = action
    let reconnectInterval

    switch (type) {
        case SOCKET_CONNECT:
            socket.connect('wss://example.com')
            
            socket.on('open', () => {
                dispatch(chatActions.startConnecting());
                const id = String(Date.now())

                const connectData = {
                    id,
                    username,
                    event: 'connecting',
                }
                socket.send(connectData)
            })
            
            socket.on('message', ({data}) => {
                const resData = JSON.parse(data)
                const {event, id, username, messagesList} = resData

                switch (event) {
                    case 'connected':
                        clearInterval(reconnectInterval)
                        dispatch(chatActions.connectionEstablished());
                        console.log(`you was connected to chat`)
                        break;
                    case 'joined': // 👉🏼 Получаем с broadcast бека событие подключения нового юзера
                        dispatch(chatActions.includeUserToChat({id, username}));
                        console.log(`user ${name} was joined to chat`)
                        break;
                    case 'disconnected': // 👉🏼 Получаем с broadcast бека событие отключенных юзеров
                        dispatch(chatActions.excludeUserFromChat({disconnectedId: id}));
                        console.log(`user with id ${id} was disconnected from chat`)
                        break;
                    case 'messageWritten': // 👉🏼 Перезаписываем пропс с сообщениями, актуальными данными с бека
                        dispatch(chatActions.writeMesaageList(messagesList));
                        console.log(`message list was updated`)
                        break;
                }
                
            })
            
            socket.on('close', () => {
                
                if (!event.wasClean) {

                    reconnectInterval = setTimeout(() => {
                        const creatChatWS = createAction(SOCKET_CONNECT)
                        dispatch(creatChatWS());
                    }, 300)

                }
            })
            
            break
        case SOCKET_DISCONNECT:
            socket.disconnect()
            break

        default:
            break
    }

    return next(action)
}
```

----

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> 💠 Хук для подключения сокета</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```typescript jsx
export const useSocket = ({username, onConnected, onJoined, onDisconnected, onMessageWritten}) => {
    const [ws, setWs] = useState<undefined | WebSocket>()
    const [myWsId, setMyWsId] = useState(getCookie('wsId'))

    useEffect(() => {
        const createWs = () => {
            let reconnectInterval
            const socket = new WebSocket('ws://localhost:3005/chat')

            setWs(socket)

            socket.onopen = () => {
                const id = myWsId || String(Date.now())

                if (!myWsId) {
                    setMyWsId(id)
                    setCookie('wsId', id)
                }

                const connectData = {
                    id,
                    username,
                    event: 'connecting',
                }
                socket.send(JSON.stringify(connectData))
            }

            socket.onmessage = ({data}) => {
                const resData = JSON.parse(data)
                const {event, id, username, messagesList, connectedUserList = []} = resData

                switch (event) {
                    case 'connected':
                        clearInterval(reconnectInterval)
                        onConnected({connectedUserList, messagesList})
                        break;
                    case 'joined':
                        onJoined({id, username})
                        break;
                    case 'disconnected':
                        onDisconnected({disconnectedId: id})
                        break;
                    case 'messageWritten':
                        onMessageWritten({messagesList})
                        break;
                }


            }

            socket.onclose = (event) => {
                if (!event.wasClean) {

                    reconnectInterval = setTimeout(() => {
                        createWs()
                    }, 300)

                }
            }

        }
        createWs()
    }, [])

    const sendMessage = (data) => {
        ws.send(JSON.stringify({event: 'writeMessage', ...data}))
    }

    return {sendMessage, myWsId}
}
```


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> 💠 Серверный класс сокета</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```typescript jsx
let disconnectFnList = {}

class Socket {
    socket: WebSocket
    clientList: any[]
    connectedUserList: any[]

    constructor({socket, clientList, onConnecting, onMessage}) {
        this.socket = socket
        this.clientList = clientList
        this.connectedUserList = []

        this.socket.onmessage = ({data}) => {
            const {event, ...reqData} = JSON.parse(data)

            switch (event) {
                case 'connecting':
                    const disconnectTimeoutFn = disconnectFnList[`disconnect${reqData.id}`]

                    if (disconnectTimeoutFn) {
                        clearTimeout(disconnectTimeoutFn)
                    }

                    this.connectionHandler(reqData)
                    this.getConnectedUserList()
                    if (onConnecting) onConnecting.call(this, {...reqData, wasPageReload: Boolean(disconnectTimeoutFn)})
                    break
                case 'writeMessage':
                    if (onMessage) onMessage.call(this, reqData)
                    break
            }

        }

        this.socket.onclose = ({target}) => {
            const {id, username} = target

            disconnectFnList[`disconnect${id}`] = setTimeout(() => {
                this.sendDisconnected({id, username})
                delete disconnectFnList[`disconnect${id}`]
            },1000);

        }

    }

    connectionHandler({id, username}) {
        this.socket.id = id
        this.socket.username = username
    }

    getConnectedUserList() {
        const connectedUserList = [],
            connectedIds = []

        this.clientList.forEach(({id, username}) => {
            if (id && !connectedIds.includes(id)) {
                connectedIds.push(id)
                connectedUserList.push({id, username})
            }
        })

        this.connectedUserList = connectedUserList
    }

    broadcastSend({event, withMe = false, ...resData}) {
        this.clientList.forEach((client) => {
            const sendData = () => client.send(JSON.stringify({
                event,
                ...resData
            }))

            if (withMe) {
                sendData()
            } else if (client.id !== this.socket.id) {
                sendData()
            }

        })
    }

    broadcastConnectedSend(resData) {
        this.broadcastSend({event: 'joined', ...resData})
    }

    sendSuccessConnected(resData) {
        this.socket.send(JSON.stringify({
            event: 'connected',
            ...resData
        }))
    }

    sendDisconnected(resData) {
        this.broadcastSend({event: 'disconnected', ...resData})
    }


}

app.ws('/chat', (ws, res) => {
  ws.send('success connected')

  new Socket({
    socket: ws,
    clientList: aWSS.clients,
    onConnecting({id, username, wasPageReload}) {
      this.sendSuccessConnected({connectedUserList: this.connectedUserList, messagesList})

      if (!wasPageReload) {
        this.broadcastConnectedSend({id, username})
      }

    },
    onMessage({username, message}) {
      messagesList.push({username, message})

      this.broadcastSend({event: 'messageWritten', withMe: true, messagesList})
    }
  })
})
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>  

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**