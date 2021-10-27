# Промисы
> Объект, для выстраивания цеопчки ассинхронных событий

💠 **Состояния**   

<br>

&emsp;&emsp; 🔹 `pending` - В ожидании результата  

&emsp;&emsp; 🔹 `rejected` - Произошла ошибка или вызвали `reject` 

&emsp;&emsp; 🔹 `fullfill` - Вызвали `resolve` 

<br>
<br>

💠 **Колбеки**   

<br>

&emsp;&emsp; 🔹 `resolve`    
&emsp;&emsp;&emsp;&emsp; 🎯 Приводит промис в состояние `fullfill`
      
&emsp;&emsp;&emsp;&emsp; 🎯 Передает управление на `then` обработчик

&emsp;&emsp;&emsp;&emsp; 🎯 Отправляет в `then` обработчик результат работы промиса
```javascript
new Promise((resolve, reject) => {
  setTimeout(() => resolve("myPromiseResult"), 500);
})
  .then(promiseResult => console.log(promiseResult)) // 🎯 => через 0.5s вернет 'myPromiseResult'
  .catch(e => console.log(e)) // => не отработает
```

<br>

&emsp;&emsp; 🔹 `reject`   
&emsp;&emsp;&emsp;&emsp; 🎯 Приводит промис в состояние `rejected`
 
&emsp;&emsp;&emsp;&emsp; 🎯 Передает управление на ближайший `catch` обработчик

&emsp;&emsp;&emsp;&emsp; 🎯 Отправляет в `catch` обработчик результат работы промиса
```javascript
new Promise((resolve, reject) => {
  setTimeout(() => reject("myPromiseError"), 500);
})
  .then(promiseResult => console.log(promiseResult)) // не отработает
  .catch(e => console.log(`error: ${e}`)) // 🎯 => через 0.5s вернет 'error: myPromiseError'
```

## 🚩 Методы

💠 **then`(resolveProps)`**   
👆🏽 Колбек срабатывающий после успешной отработки промиса 


<br>

&emsp;&emsp; 🔹 Не дожидаеться выполнения таймаутов вне промиса      

&emsp;&emsp; 🔹 Без  вызова конструкции `return`, в следующий `resolveProps`, попадет `undefined` 

&emsp;&emsp; 🔹 Если предыдущая цепь возвращает промис, `then` отработает только после его выполнения   
&emsp;&emsp;&emsp;&emsp; 👆 Этот механизм позволяет выстраивать цепочки промисов   
```javascript
new Promise((resolve, reject) => {
  console.log('promise pending')
  setTimeout(() => resolve("myPromiseError"), 1000);
})
  .then((promiseResult) => {

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('two promise was resolve'), 1000)
    })

  })
  .then(prevPromiseResult => {
    console.log(prevPromiseResult) // 🎯 => через 2s вернет 'two promise was resolve'

    return 'finish'
  }).then((result) => {
    console.log(result) // => finish
  })
```

<br>
<br>

💠 **catch`(rejectProps)`**   
👆🏽 Колбек срабатывающий при не успешном выполнении промиса

<br>

&emsp;&emsp; 🔹 Срабатывает как при `reject`, так и при `throw new Error`  
&emsp;&emsp;&emsp;&emsp; 🛑 `throw new Error` не будет обработан если вызывается из `timeout`, `reject` будет    


&emsp;&emsp; 🔹 Не ловит синтаксические ошибки

&emsp;&emsp; 🔹 Сработывает в порядке очередности

&emsp;&emsp; 🔹 Сработывает только для тех промисов что стоят до `catch`

&emsp;&emsp; 🔹 Может возвращать промис и продолжать цепочку

&emsp;&emsp; 🛑 Если у промиса возвращающего ошибку не установлен `catch` обработчик - она выпадет наружу    
&emsp;&emsp;&emsp;&emsp; 👆 Золотое правило - всегда объявлять `catch` в конце промиса      

```javascript
new Promise((resolve, reject) => {
  console.log('promise pending')
  setTimeout(() => reject("myPromiseError"), 1000);
})
  .then((promiseResult) => {

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('prev promise resolve'), 1000)
    })

  })
  .catch(e => {
    
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('prev promise reject'), 1000)
    })

  })
  .then(prevPromiseResult => {
    console.log(prevPromiseResult) // => 'prev promise reject'
  })
```

<br><br>

💠 **finally`(resolveProps)`**  
👆🏽 Колбек срабатывающий после того как все методы перед ним отработали

&emsp;&emsp; 🔹 Срабатывает в не зависимости успешно отработали методы или нет      

&emsp;&emsp; 🔹 Срабатывает в порядке очереди      

&emsp;&emsp; 🔹 Сработывает только для тех промисов что стоят до `catch`

&emsp;&emsp; 🔹 Может быть полезен для логирования или отстуков  
&emsp;&emsp;&emsp;&emsp; 👆 Вне зависимости от результата отправить данные на сервер или в лог   

&emsp;&emsp; 🔹 Может возвращать промис и продолжать цепочку
```javascript
new Promise((resolve, reject) => {
  console.log("promise pending");
  setTimeout(() => resolve("myPromiseError"), 1000);
})
  .then(() => {
    return new Promise((resolve) => {
      setTimeout(() => resolve("two promise was resolve"), 1000);
    });
  })
  .then((prevPromiseResult) => {
    console.log(prevPromiseResult); // => 'two promise was resolve'
  })
  .finally(() => {
    
    return new Promise((resolve) => {
      setTimeout(() => resolve("next chain"), 1000); // => 'next chain'
    });

  }).then(() => {
    console.log('start after finally')
  })
```

<br>

## 🚩 Статические методы промисов

💠 **Promise.all`([promise1, ..., promiseN])`**   
👆🏽 Метод передающий управление на `then`, только после того как все промисы внутри будут выполненны
  
  
&emsp;&emsp; 🔹 Может принимать в аргументы не только промисы

&emsp;&emsp; 🔹 Промисы отрабатывают не в порядке очереди, а по готовности              

```javascript
Promise.all([
  new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)), 
  new Promise((resolve) => setTimeout(() => resolve(3), 3000)),
  () => { // => Вернет функцию, а не результат
    return 4
  },
  5
])
  .then((result) => console.log(result)) // => через 3s вернет [1,2,3,fn,5]
  .catch((e) => {
    console.log(e);
  });

```

&emsp;&emsp; 🔹 Алгоритм обработки ошибки любого из промисов:  
&emsp;&emsp;&emsp;&emsp; 🎯 Вызов промисов после `rejected` промиса отменяеться

&emsp;&emsp;&emsp;&emsp; 🎯 Данные из первого `rejected` промиса летят в `catch`

&emsp;&emsp;&emsp;&emsp; 🎯 Данные выполненных промисов потеряны
```javascript
Promise.all([
  new Promise((resolve) => setTimeout(() => resolve(1), 500)),
  new Promise((resolve, reject) => setTimeout(() => reject(2), 1000)), //🎯 => отправит 2 в catch
  new Promise((resolve) => setTimeout(() => resolve(3), 8000)) // => не выполниться
])
  .then((result) => console.log(result))
  .catch((e) => {
    console.log(e); //🎯 => через 1s вернет 2
  });
```        

<br>
<br>

💠 **Promise.allSettled`([promise1, ..., promiseN])`**   
👆🏽 Метод передающий управление на `then`, только после того как все промисы внутри будут выполненны, не зависимо от результатов


<br>

&emsp;&emsp; 🔸 Новый метод, требующий полифил      

&emsp;&emsp; 🔹 Дожидаеться окончания всех промисов  

&emsp;&emsp; 🔹 При не успешном завершении любого из промисов, продолжает выполнение остальных

&emsp;&emsp; 🔹 Возвращает результаты выполнения всех промисов (`resolved/fullfill`)

```javascript
Promise.allSettled([
  new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(2), 2000)),
  new Promise((resolve) => setTimeout(() => resolve(3), 3000)),
  () => {
    // => Вернет функцию, а не результат
    return 4;
  },
  5
])
  .then((result) => {
    console.log(result); // => 🎯 вернет массив ниже
    /**
     * [
     *  {status: "fulfilled", value: 1},
     *  {status: "rejected", reason: 2},
     *  {status: "fulfilled", value: 3},
     *  {status: "fulfilled", value: ƒ () {}},
     *  {status: "fulfilled", value: 5}
     * ]
     */
  })
  .catch((e) => {
    console.log(e); // => 🎯 в catch не попадут ошибки промисов из Promise.allSettled
  });
```  

<br>
<br>

💠 **Promise.race`([promise1, ..., promiseN])`**   
👆🏽 Методы возвращающий результат промиса который отработал первым, не важно с ошибкой или без


<br>

&emsp;&emsp; 🔹 Если первый промис отработал с ошибкой, управление перейдет в `catch`   

&emsp;&emsp; 🔹 Если первый промис отработает успешно, управление перейдет в `then`

&emsp;&emsp; 🔹 Остальные промисы будут отменены      

```javascript
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject("error"), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then((firstPromiseResult) => {
  console.log(firstPromiseResult) // => 1
}).catch(e => {
  console.log(e)
})
```

<br>
<br>

💠 **Promise.resolve/reject`(dataForThen)`**   
👆🏽 Статический метод позволяющий преобразовать обычные данные в `thenable`  
&emsp;&emsp; 👆 Это может быть необходимо, когда следуюущая цепь ожидает что к ней будет возвращен промис  
&emsp;&emsp; для обработки через `then` метод, но не все возможные кейсы возвращают промис
> thenable - объект имеющий метод then, как в промисе 

```javascript
let cache = new Map();

function loadCached(url) {
  if (cache.has(url)) {
    return Promise.resolve(cache.get(url));
  }

  return fetch(url)
    .then((response) => response.text())
    .then((text) => {
      cache.set(url, text);
      return text;
    });
}

const needUrl = "https://jsonplaceholder.typicode.com/posts/1";

//Можем использовать then потому что возвращен fetch промис
loadCached(needUrl).then((res) => console.log(res));

//Возвращен обычный объект из кеша,
//Но можем использовать then
//Так как объект был преведен к thenable, при помощи Promise.resolve
loadCached(needUrl).then((res) => console.log(res));
```

<br>


### ⟵ **<a href="../../readme.md">Назад</a>**