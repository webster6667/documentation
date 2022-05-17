# AbortController
> Специальный встроенный объект для прерывания ассинхронных задачь

```javascript
const controller = new AbortController(),
      signal = controller.signal;

console.log(signal.aborted); // 👉🏼 false

// 👉🏼 событие срабатывает при вызове controller.abort()
signal.addEventListener('abort', () => console.log("сработал abort"));

controller.abort(); // 👉🏼 Вызов отмены ассинхронной операции

console.log(signal.aborted); // 👉🏼 true
```

🔹 Все, кто хочет узнать о вызове `abort()`, ставят обработчики на `controller.signal`, чтобы отслеживать его.       

🔹 Метод `abort()`    
&emsp;&emsp; 👆 Генерируется событие с именем `abort` на объекте `controller.signal`   

🔹 Свойство `signal`  
&emsp;&emsp; 👆 `signal.aborted` становиться равным `true`, после вызова метода `controller.abort()`

🔹 Отменна ассинхронной задачи

```javascript
const controller = new AbortController()

// 👉🏼 наша ассинхронная задача
new Promise((resolve, reject) => { 
    controller.signal.addEventListener('abort', reject);
}).catch((err) => {
    if (err.name == 'AbortError') console.log('задача отменена')
})

controller.abort()
```

## Отмена запроса Fetch

```javascript
//👉🏼 прервать через 1 секунду
const controller = new AbortController();
setTimeout(() => controller.abort(), 1000);

try {
  const response = await fetch('/article/fetch-abort/demo/hang', {
    signal: controller.signal
  });
} catch(err) {
  if (err.name == 'AbortError') { //👉🏼 обработать ошибку от вызова abort()
    console("был вызван abort");
  } else {
    throw err;
  }
}
```  

🎯 Метод `fetch` умеет работать с `AbortController`     
🎯 Он слушает событие `abort` на `signal`  
🎯 Для отмены `fetch` запроса, достаточно передать `controller.signal` в опции запроса     
🎯 После этого, при вызове `controller.abort()`, все запросы в которых был передан `controller.signal` будут отменены

🛑 При отмене  `fetch`, его промис завершается с ошибкой `AbortError`  
&emsp;&emsp;&emsp;&emsp; 👆 Ее обязательно нужно обработать, через `try..catch` или `.catch` промиса

🔹 Один `AbortController`, можно использовать для отмены группы ассинхронных задачь
```javascript
const urls = ['https://www.google.com/'],
      controller = new AbortController();

// 👉🏼 Группа fetch запросов
const fetchJobs = urls.map(url => fetch(url, {
  signal: controller.signal
}));

// 👉🏼 Ожидать выполнения всех запросов
Promise.all([...fetchJobs]).then((res) => {
    console.log(res)
}).catch((err) => {
    if (err.name == 'AbortError') console.log('Запросы отменены')
})

// 👉🏼 Прервёт все вызовы fetch
controller.abort() 
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**