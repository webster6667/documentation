# WebSocket
> Класс реализующий работу с сокетами в js
 
<details>
<summary> 🔥 <code>Shortcut</code></summary>

___

🔹 Поддерживаеться без всяких библиотеке при помощи класса `WebSocket`  

🔹 Гоняет данные по двум каналам  
&emsp;&emsp; 🎯 `ws`  
&emsp;&emsp;&emsp;&emsp; 👆 Открытый, может не отработать на старых серверах  
  

&emsp;&emsp; 🎯 `wss`   
&emsp;&emsp;&emsp;&emsp; 👆 Зашифрованый, работает на всех серверах, + обеспечивает безопастность данных

🔹 Вся архитектура стоиться на костях событий

&emsp;&emsp; 🎯 `open`   
&emsp;&emsp;&emsp;&emsp; 👆 Соединение установлено   

&emsp;&emsp; 🎯 `message`   
&emsp;&emsp;&emsp;&emsp; 👆 Пришли данные с сервера, обычно в этом событии прокидывают имя события на проекте

&emsp;&emsp; 🎯 `error`   
&emsp;&emsp;&emsp;&emsp; 👆 Произошла ошибка

&emsp;&emsp; 🎯 `close`   
&emsp;&emsp;&emsp;&emsp; 👆 Обычно используют для рекконекта соединения, проверив статус код закрытия

🔹 `Broadcast`
&emsp;&emsp; 👆 Настройка на сервере, рассылающая оповещение всем подключенным клиентам по айдишнику, кроме отправляющего   

___

</details>

```javascript
let socket = new WebSocket("ws://my-host.ru");
```

## 🚩 Протоколы

🔹 `ws`  
&emsp;&emsp; 👆 Открытый    

🔹 `wss`  
&emsp;&emsp; 👆 Зашифрованный

📗 Старые прокси сервера которые не знают о технологии сокетов, закроют соединение, получив незнакомые для них заголовки

По этому всегда предпочтительней использовать `wss` шифрования, закрывая содержимое запроса от прокси серверов

<br>

## 🚩 События

💠 `open`   
👆🏽 Соединение установлено, можно начинать передавать данные по сокетам

<br>

💠 `message`  
👆🏽 Пришли данные  
&emsp;&emsp; 🔹 Передавать можно как строки так и `ArrayBuffer` данные

&emsp;&emsp; 📗 Чаще всего передают `json` объекты

<br>

💠 `error`  
👆🏽 Произошла ошибка

<br>

💠 `close`  
👆🏽 Соединение закрыто

&emsp;&emsp; 🔹 Может приходить с разными кодами

&emsp;&emsp;&emsp;&emsp; 🎯 `1000`   
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 По умолчанию, нормальное закрытие    

&emsp;&emsp;&emsp;&emsp; 🎯 `1006`   
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 Соединение было потеряно (нет фрейма закрытия)

&emsp;&emsp;&emsp;&emsp; 🎯 `1001`   
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 Сторона отключилась, например сервер выключен или пользователь покинул страницу

&emsp;&emsp;&emsp;&emsp; 🎯 `1009`  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 Сообщение слишком большое для обработки

> 📗 На этих дефолтных событиях обычно строят свою архитектуру своих событий, прокидывая в json объектах название своих событий

## 🚩 Инициализация

🔹 Клиент
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

&emsp;&emsp; 🔹 Сервер
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

## 🚩 Broadcast 

🎯 В примере выше, соединение происходит только между одним клиентом и сервером

🎯 Для оповещения всех подключенных юзеров о любом событии с сокетом, нужно произвести определенные настройки на сервере

🎯 Написать функцию `broadcast`  
&emsp;&emsp; 👆 Она отправляет данные всем подключенным юзерам, кроме юзера который передал эти данные на сервер  

<br>

&emsp;&emsp; 🔹 Сервер
```typescript jsx
import express from "express";
import expressWs from 'express-ws';

const app = express(),
      WSServer = expressWs(app),
      aWSS = WSServer.getWss()

app.ws('/chat', (ws, res) => {
    ws.send('socket is worck') // 👉🏼 Соединение установленно

    const connectedClientList = aWSS.clients,
          broadcastSend = ({event, ws, ...resData}) => {
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

&emsp;&emsp; 🔹 Клиент
```typescript jsx
socket.onmessage = ({data}) => { // 👉🏼 Получаем с бека данные и обрабатываем событие которое указал бек
    const resData = JSON.parse(data)
    const {event, id, name} = resData

    switch (event) {
        case 'connected':
            console.log(`you was connected to chat`)
        break;
        case 'joined':
            console.log(`user ${name} was joined to chat`)
        break;    
    }
    
}
```

## 🚩 Реконект
> По дефолту при потери соединения переподключение к сокетам отсутствует, но сделать его достаточно просто

🎯 Создать функцию создания сокета со всеми обработчиками

🎯 Вызвать ее

🎯 Внутри функции написать обработчик потери связи

🎯 В нем написать интервальный повторный вызов функции создания сокета, пока не сработает событие `connected`

🎯 В событии `connected` выключить функцию интервал

&emsp;&emsp; 🔹 Клиент
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

## 🚩 Примеры

&emsp;&emsp; 🔹 Клиентский хук для сокетов
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

<br>

&emsp;&emsp; 🔹 Серверный класс для сервера
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

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**