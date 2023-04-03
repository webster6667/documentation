# Socket IO
> Популярная библиотека для работы с сокетами

<details>
<summary> 🔥 <code>Shortcut</code></summary>

___

🎯 [`reconnect`, `room`, `id`, `broadcast`],  из под капота

🎯 Почти одинаковый синтаксис и на клиенте и на сервере

🎯 Работает даже если нет поддержки `ws`  
&emsp;&emsp; 👆 `Long-polling`

🎯 Под капотом производиться распределение нагрузки

🎯 Весит больше чем `react` и `redux` вместе взятые  
&emsp;&emsp; 👆 Годиться для `mvp`, или сильно завязанного на `ws` приложения

___

</details>

💠 С обеих сторон (`клиент/сервер`) может слать и слушать события

&emsp;&emsp; 🔹 Клиент
```typescript jsx
socket.emit('writeMessage', {username})

socket.on('messageWritten', ({messagesList}) => {
    // handle
})
```

&emsp;&emsp; 🔹 Сервер
```typescript jsx
socket.on('writeMessage', function ({message, username}) {
    socket.emit('messageWritten', {messagesList})
});
```

<br>

💠 Дефолтные события  

&emsp;&emsp; 🔹 Клиент

&emsp;&emsp;&emsp;&emsp; 🎯 `connect`  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 Работа с сервером по  `socket.io` возможна     

&emsp;&emsp; 🔹 Сервер

&emsp;&emsp;&emsp;&emsp; 🎯 `connection`  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 Клиент успешно присоединен, можно работать

&emsp;&emsp;&emsp;&emsp; 🎯 `disconnect`  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 Клиент был отключен

<br>

💠 Инициализация

&emsp;&emsp; 🔹 Клиент
```typescript jsx
useEffect(() => {

        const socketInitializer = async () => {
            await fetch('/api/socket') // 👉🏼 Инит запрос на экшен сокета
            const socket = io()
            setWs(io())

            socket.on('connect', () => { // 👉🏼 Дефолтное событие устанавливающее соединение
                socket.emit('connecting', {username}) // 👉🏼 Кастомное событие, записывающеее на сервер данны подключенного юзера 
            })
        }

        socketInitializer()

}, [])
```

&emsp;&emsp; 🔹 Сервер

```typescript jsx
const SocketHandler = (req, res) => {
    if (res.socket.server.io) {
        console.log('Socket is already running')
    } else {
        const io = new Server(res.socket.server)
        res.socket.server.io = io
        
        io.on('connection', socket => { // 👉🏼 Дефолтное событие устанавливающее соединение

            socket.on('connecting', ({username}) => { // 👉🏼 Кастомное событие, записывающеее данные подключенного юзера
                socket.username = username
            })
        })

    }
    res.end()
}
```

💠 Реконект  
&emsp;&emsp; 👆 Настроен в socket.io под капотом     

<br>

💠 Broadcast   
&emsp;&emsp; 👆 Рассылка со стороны сервера всем подключенным юзерам, кроме отправителя событий
```typescript jsx
let connectedUserList = []

const SocketHandler = (req, res) => {
    if (res.socket.server.io) {
        console.log('Socket is already running')
    } else {
        const io = new Server(res.socket.server)
        res.socket.server.io = io
        
        io.on('connection', socket => {

            socket.on('connecting', ({username}) => {
                socket.username = username
                const isSessionExist = Boolean(connectedUserList.find((item) => item.username === username))

                if (!isSessionExist) {
                    connectedUserList.push({username})
                }

                socket.broadcast.emit('joined', {connectedUserList}) // 👉🏼 Разослать всем подключенным юзерам кроме того который подклчился, актуальный список подключенных юзеров 
            })
        })

    }
    res.end()
}
```

<br>

💠 Плюсы

&emsp;&emsp; 🎯 [`reconnect`, `room`, `id`, `broadcast`],  из под капота      

&emsp;&emsp; 🎯 Почти одинаковый синтаксис и на клиенте и на сервере

&emsp;&emsp; 🎯 Работает даже если нет поддержки `ws`

&emsp;&emsp; 🎯 Под капотом производиться распределение нагрузки

&emsp;&emsp; 🎯 Сильное сообщество, документация

<br>

💠 Минусы

&emsp;&emsp; 🎯 Весит больше чем `react` и `redux` вместе взятые

&emsp;&emsp; 🎯 Как хамер на трассе  
&emsp;&emsp;&emsp;&emsp; 👆 Очень много разных фичь, в которых нет необходимости   

<br>

💠 Стандартный пример событий сокет соединения

&emsp;&emsp; 🔹 Клиент      
```typescript jsx
import {useState, useEffect} from 'react'
import io, { Socket } from "socket.io-client";



export const useSocket = ({username, onConnected, onJoined, onDisconnected, onMessageWritten}) => {
    const [ws, setWs] = useState<undefined | Socket>()

    useEffect(() => {

        const socketInitializer = async () => {
            await fetch('/api/socket')
            const socket = io()
            setWs(io())

            socket.on('connect', () => {
                socket.emit('connecting', {username})
            })

            socket.on('connected', ({connectedUserList, messagesList}) => {
                onConnected({connectedUserList, messagesList})
            })

            socket.on('joined', ({connectedUserList}) => {
                onJoined(connectedUserList)
            })

            socket.on('disconnected', ({connectedUserList}) => {
                onDisconnected(connectedUserList)
            })

            socket.on('messageWritten', ({messagesList}) => {
                onMessageWritten(messagesList)
            })

        }

        socketInitializer()

    }, [])

    const sendMessage = (data) => {
        ws.emit('writeMessage', {...data, username})
    }

    return {sendMessage}
}
```

&emsp;&emsp; 🔹 Сервер
```typescript jsx
import {Server} from 'socket.io'

let connectedUserList = [],
    messagesList = []

const SocketHandler = (req, res) => {
    if (res.socket.server.io) {
        console.log('Socket is already running')
    } else {
        const io = new Server(res.socket.server)
        res.socket.server.io = io
        
        io.on('connection', socket => {

            socket.on('connecting', ({username}) => {
                socket.username = username
                const isSessionExist = Boolean(connectedUserList.find((item) => item.username === username))

                if (!isSessionExist) {
                    connectedUserList.push({username})
                }

                socket.emit('connected', {connectedUserList, messagesList})
                socket.broadcast.emit('joined', {connectedUserList})
            })

            socket.on('disconnect', function () {
                connectedUserList = connectedUserList.filter((item) => item.username !== socket.username)
                
                socket.broadcast.emit('disconnected', {connectedUserList});
            });

            socket.on('writeMessage', function ({message, username}) {
                messagesList.push({username, message})

                socket.emit('messageWritten', {messagesList})
                socket.broadcast.emit('messageWritten', {messagesList})
            });



        })

    }
    res.end()
}

export default SocketHandler
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**