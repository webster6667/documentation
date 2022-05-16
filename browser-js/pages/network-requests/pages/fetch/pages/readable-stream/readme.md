# Readable stream
> У fetch есть возможность получать данные через readable stream кусочками, отоброжая прогресс получения данных

```javascript
// Шаг 1: начинаем загрузку fetch, получаем поток для чтения
const response = await fetch('http://localhost:5001/api/posts'),
      reader = response.body.getReader();

// Шаг 2: получаем длину содержимого ответа
const contentLength = +response.headers.get('Content-Length');

// Шаг 3: считываем данные:
let receivedLength = 0; // количество байт, полученных на данный момент
let chunks = []; // массив полученных двоичных фрагментов (составляющих тело ответа)

while(true) {
    const {done, value} = await reader.read();
            
    if (done) break;

    chunks.push(value);
    receivedLength += value.length;

    const progressPercent = (receivedLength * 100 / contentLength).toFixed(2)

    console.log(`Получено ${receivedLength} из ${contentLength}`)

    percentWrapper.innerHTML = progressPercent
}

// Шаг 4: соединим фрагменты в общий типизированный массив Uint8Array
let chunksAll = new Uint8Array(receivedLength); // (4.1)
let position = 0;
for(let chunk of chunks) {
    chunksAll.set(chunk, position); // (4.2)
    position += chunk.length;
}

// Шаг 5: декодируем Uint8Array обратно в строку
let result = new TextDecoder("utf-8").decode(chunksAll);
```

🛑 При запросах другой домен, заголовок `Content-Length`, может быть не читаемым

&emsp;&emsp; 🎯 Загрузка чанками все равно возможна  
&emsp;&emsp; 🎯 Отследить прогресс в процентах уже нельзя  
&emsp;&emsp; 🎯 Прийдеться обойтись прелоадером

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**