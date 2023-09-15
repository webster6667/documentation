# long-polling
![illustration](img/illustration.jpeg)
👆🏽 Техника получения новых данных с сервера, путем создания безконечного потока длительных запросов

<details>
<summary> 💠 Алгоритм работы </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Клиент отправляет запрос на сервер

<details>
<summary> 🥏 На сервере стоит бесконечный цикл (PHP)</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

&emsp;&emsp; 🎯 Цикл раз в `n` секунд, делает запрос в базу, для пересчета колличества нужных данных

&emsp;&emsp; 🎯 Если через `n` секунд, данные никак не изменились, запрос ничего не вернет, и отвалиться по таймауту  
&emsp;&emsp;&emsp;&emsp; 👆 Длительность соединения `long polling` запроса, можно настраивать на сервере

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> 🥏 На сервере стоит слушатель событий</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

&emsp;&emsp; 🎯 Сервер вернет новые данные только после того как сработает слушатель обновления данных  

&emsp;&emsp; 🎯 Если через данные не изменяться, слушатель не сработает, и запрос отвалиться по таймауту

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>    
    

🎯 После ошибки по таймуту, в `catch` колбеке длинный запрос создаеться еще раз  
🎯 Если данные на сервере обновились, метод бекенда вернет обновленные данные  
🎯 После получение новых данных создается новый длинный запрос для получения новых данных   
🎯 Этот цикл можно держать до тех пор, пока есть необходимость получать новые данные с сервера  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary><img src="https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/ts.svg" height="20px" title="ts" >&emsp; Клиент</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```typescript

function App() {
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');


    // 👉🏼 Подписка на обновление при ините странички
    useEffect(() => {
        subscribe()
    }, [])

    // 👉🏼 Шлет long-polling запросы  
    const subscribe = async () => {
        try {
            const {data} = await axios.get(`${API_URL}/get-messages`)
            setMessages(prev => [data, ...prev])
            await subscribe()
        } catch (e) {
            setTimeout(() => {
                subscribe()
            }, 500)
        }
    }

    // 👉🏼 Шлет новые сообщения
    const sendMessage = async () => {
        await axios.post(`${API_URL}/new-messages`, {
            message: value,
            id: Date.now()
        })
    }

  return (
      <div className="center">
          <div>
              <div className="form">
                  <input value={value} onChange={e => setValue(e.target.value)} type="text"/>
                  <button onClick={sendMessage}>Отправить</button>
              </div>
              <div className="messages">
                  {messages.map(mess =>
                      <div className="message" key={mess.id}>
                          {mess.message}
                      </div>
                  )}
              </div>
          </div>
      </div>
  )
}

```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary><img src="https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/ts.svg" height="20px" title="ts" >&emsp; Сервер</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```typescript
const express = require('express');
const cors = require('cors');
const events = require('events')
const PORT = 5080;

const emitter = new events.EventEmitter();

const app = express()

app.use(cors())
app.use(express.json())

app.get('/get-messages', (req, res) => {
    emitter.once('newMessage', (message) => {
        res.json(message)
    })
})

app.post('/new-messages', ((req, res) => {
    const message = req.body;
    emitter.emit('newMessage', message)
    res.status(200)
}))


app.listen(PORT, () => console.log(`server started on port ${PORT}`))
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>


<br>

### ⟵ **<a href="../../readme.md">Назад</a>**