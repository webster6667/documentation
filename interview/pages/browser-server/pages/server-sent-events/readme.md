# Server sent events
👆🏽 Постоянное однопоточное соединение между сервером и клиентом  

<details>
<summary> 💠 Преимущества</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Проще чем сокеты       
🎯 Работает по `http` соединению   
🎯 Работает с `кросс-доменными` запросами    
🎯 Переподключение зашито по умолчанию  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>  

<br>

<details>
<summary> 💠 Недостатки</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Передает только текстовые данные      
🎯 Имеет лимит 10 подключений  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>  


<br>

<details>
<summary> 💠 Формат обмена данными</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

👆🏽 `server-sent-events` может передавать только текст, используя особый формат передачи данных  


<details>
<summary>📜 <code>Формат отправки данных с бека</code></summary>

```javascript
app.get('/connect', (req, res) => {
    res.writeHead(200, {
        'Connection': 'keep-alive',
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
    })

    const messageHandler = ({message}) => {
        res.write(`data: ${JSON.stringify(message)} \n\n`) // 👉🏼 Формат отправки данных  
    }
    
    emitter.on('message', messageHandler)
})
```

</details>

<details>
<summary>📜 <code>Формат получения данных на клиенте</code></summary>

```javascript
const eventSource = new EventSource(`http://localhost:5080/connect`)

const messageHandler = (event) => {
    const data = JSON.parse(event.data); // 👉🏼 Формат полечения данных
    if (onMessage) onMessage(data, event)
}

eventSource.addEventListener('message', messageHandler)
```

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>  

<br>

<details>
<summary> 💠 Получение сообщений на клиенте</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

👆🏽 Для получения сообщений с сервера, необходимо:   
&emsp;&emsp; 🎯 Создать подключение   
&emsp;&emsp; 🎯 Подписаться на события получения сообщений с сервера        

<details>
<summary>📜 <code>Client code</code></summary>

```javascript
const url = `http://localhost:5080/connect?id=${userId}`

const eventSource = new EventSource(url)              // 1. 👉🏼 Подключение
eventSource.addEventListener('message', (event) => {  // 2. 👉🏼 Подписка
    const data = JSON.parse(event.data); // 3. 👉🏼 Данные пришедшие по дефолтному событию 
})     
```

</details>


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>  

<br>

<details>
<summary> 💠 Отправка сообщений с сервера</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

👆🏽 Для отправки сообщений с сервера, необходимо:  
&emsp;&emsp; 🎯 Создать экземпляр `EventEmitter`  
&emsp;&emsp; 🎯 Создать ручку на обработку постоянного подключения  
&emsp;&emsp; 🎯 Указать в запросе на постоянное подключение `keep-alive` заголовки    
&emsp;&emsp; 🎯 Добавить слушатели событий в постоянном подключении    
&emsp;&emsp; 🎯 Прописать очистку ивентов при закрытии соединения
<details>
<summary> &emsp;&emsp; 🎯 Дергать ручки событий в нужном месте проекта</summary>

----

👆 Что бы слушатели событий в постоянном подключении обрабатывали, и данные о событиях на клиент     

----

</details>

<br>
<br>

<details>
<summary>📜 <code>Server code</code></summary>

```javascript
const express = require('express');
const cors = require('cors');
const events = require('events')
const parse = require('url').parse;
const PORT = 5080;

const emitter = new events.EventEmitter(); // 👉🏼 1. Экземпляр эмитера

const app = express()

app.use(cors())
app.use(express.json())

let messagesList = []

app.get('/connect', (req, res) => { // 👉🏼 2. Ручка на постоянное подключение
    
    res.writeHead(200, {            // 👉🏼 3. keep-alive заголовки
        'Connection': 'keep-alive',
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
    })

    const messageHandler = ({message}) => {
        res.write(`data: ${JSON.stringify(message)} \n\n`)
    }

    emitter.on('message', messageHandler) // 👉🏼 4. Слушатель событий, отправляющий колбеки на клиент

    req.on('close', () => {
        emitter.removeListener('message', messageHandler); // 👉🏼 5. Очистка событий при дисконекте 
    })

}) 

app.post('/message', ((req, res) => {
    const messageData = req.body;
    messagesList.push(messageData)
    emitter.emit('message', messageData) // 👉🏼 6. Вызов события которое отправит данные на клиент  

    res.send(messageData);
}))


app.listen(PORT, () => console.log(`server started on port ${PORT}`))
```

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>  

<br>

<details>
<summary> 💠 Кросс доменные запросы</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Для того что бы послать данные для `CORS` авторизации на другой домен, нужно указать дополнительную опцию 

```javascript
let source = new EventSource("https://another-site.com/events", {
  withCredentials: true // 👉🏼 Пропс посылающий cors авторизационные данные 
});
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>
 
<details>
<summary> 💠 Переподключение</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

👆🏽 Переподключение при потере связи в `server-sent-events` реализовано по умолчанию    
&emsp;&emsp; 🎯 По умолчаний переподключение через несколько секунд  
&emsp;&emsp; 🎯 Сервер может указать рекомендованное время переподключения, при помощи флага `retry`         
&emsp;&emsp; 🎯 Сервер может остановить попытки переподключения, ответив со статусом `204`   

```javascript
res.write(`retry: 15000\ndata: ${JSON.stringify(data)} \n\n`)
```

<br>
<br>

<details>
<summary> 🛑 Переподключение с фронта не произойдёт, если в ответе указан неверный <code>Content-Type</code> или его статус отличается от <code>301, 307, 200 и 204</code>.</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Браузер создаст событие `error` и не будет восстанавливать соединение

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>


<details>
<summary>🛑 После того как соединение окончательно закрыто <code>переоткрыть</code> его уже нельзя </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Если необходимо снова подключиться, просто создайте новый EventSource.

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> 💠 Закрытие соединения</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

<details>
<summary>📜 <code>Front</code></summary>

```javascript
let eventSource = new EventSource('http://localhost:5080/connect');

eventSource.close();
```

</details>  


<details>
<summary>📜 <code>Back</code></summary>

🎯 Бекенд может закрыть соединение, но клиент выполнить переподключение        
🎯 Что бы остановить переподключение, можно добавить фильтр запросов на старте подключения   

```javascript
const disableIps = []

app.get('/connect', (req, res) => {
    const reqIp = req.ip
    const isDisabledIp = disableIps.includes(reqIp)
    
    if (isDisabledIp) { // 👉🏼 не пропустит переподключение закрытого запроса  
        res.writeHead(403)
        res.end()
    } else {
        res.writeHead(200, {
            'Connection': 'keep-alive',
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
        })

        const messageHandler = ({message}) => {
            closedIps.push(reqIp)
            res.end(`data: ${JSON.stringify(message)} \n\n`) // 👉🏼 res.end закрывает соединение
        }

        emitter.on('message', messageHandler)
    }
    
    
})
```

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> 💠 ID Сообщений</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

👆🏽 Что бы правильно востановить подключение сохранив порядок, и получить сообщения отправленные сервером при отсутсвии связи, каждое сообщение должно иметь свой уникальный `id`   

```javascript
res.write(`data: ${JSON.stringify(message)}\nid:${Date.now()} \n\n`)
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> 💠 Статусы подключения</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 На клиенте можно узнать статус подключения `server-sent-events`, обратившись к свойству `eventSource.readyState`      
<details>
<summary> 🎯 Константы вероятных значений можно так же получить в <code>eventSource</code></summary>

----

```javascript
EventSource.CONNECTING = 0; // подключение или переподключение
EventSource.OPEN = 1;       // подключено
EventSource.CLOSED = 2;     // подключение закрыто
```

----

</details>  



```javascript
const eventSource = new EventSource('http://localhost:5080/connect');
const isEventSourceClosed = eventSource.readyState === eventSource.CLOSED

if (isEventSourceClosed) {
    // do smth...   
}
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>  

<br>  

<details>
<summary> 💠 События </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

👆🏽 По умолчанию объект EventSource генерирует 3 события:    

&emsp;&emsp; 🎯 `message`  
&emsp;&emsp;&emsp;&emsp; 👆 Получено сообщение, доступно как event.data  

&emsp;&emsp; 🎯 `open`  
&emsp;&emsp;&emsp;&emsp; 👆 Соединение открыто

&emsp;&emsp; 🎯 `error`  
&emsp;&emsp;&emsp;&emsp; 👆 Не удалось установить соединение, например, сервер вернул статус 500.

🔹 Сервер может указать другой тип события с помощью `event` в начале сообщения

<details>
<summary>📜 <code>Backend</code></summary>

```javascript
app.get('/connect', (req, res) => {
    res.writeHead(200, {
        'Connection': 'keep-alive',
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
    })
    const connectingUserId = parse(req.url, true).query.id;
    

    emitter.emit('joined', {joinedUserId: connectingUserId, joinedUserName: connectingUserName}) // 👉🏼 1. Дернуть событие оповещающее всех подключенных юзеров, о подключении нового юзера    

    const joinedHandler = ({joinedUserId, joinedUserName}) => {
        res.write(`event: joined\ndata: ${JSON.stringify(joinedUserId)} \n\n`) // 👉🏼 3. Отправка на клиент event: joined, события на которое можно подписаться  
    }
    
    emitter.on('joined', joinedHandler) // 👉🏼 2. При установке keep-alive соединения, вешаем слушатель на подключение новых юзеров
    
})

```

</details>

<details>
<summary>📜 <code>Frontend</code></summary>

```javascript
const url = `http://localhost:5080/connect?id=${userId}`

const eventSource = new EventSource(url)              
eventSource.addEventListener('message', (event) => {  
    const data = JSON.parse(event.data);  
})

eventSource.addEventListener('joined', (event) => { // 👉🏼 Подписка на кастомное серверное keep-alive событие 
    const data = JSON.parse(event.data);
    console.log('new user is connected, update user list!')
})
```

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> 💠 Выводы</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

`Server sent events`

🔹 Можно использовать:  
&emsp;&emsp; 🎯 Для реализации микро чатов на 2-3 человека  
&emsp;&emsp; 🎯 Обновление данных на клиенте при изменении данных на сервере   
&emsp;&emsp; 🎯 Отслеживать окончания процессов на сервере  
&emsp;&emsp; 🎯 Использовать для различных уведомлений  

🔹 Лучше использовать только для оповещении о событии, а за самими данными ходить отдельными `get` запросами     
&emsp;&emsp; 👆 Дабы не нагружать `keep-alive` соединение передачей данных        

🔹 Не поддерживаеться `IE`   

🔹 На бекенде есть <a href="https://www.npmjs.com/package/eventemitter3">более высокоуровневая библиотека для работы с event emitter</a>  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>  

<a href="https://github.com/webster-doc/event-source">Пример рабочего чата на server sent events</a>  

<a href="https://voskan.host/2023/04/01/a-complete-guide-to-the-node-js-event-emitter-pattern/">Guide of node js event-emitter</a>  

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**