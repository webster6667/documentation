# Promise

<details>
<summary> Что такое промис?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Объект представляющий обработку ассинхронных операций

<details>
<summary> <sup>⭐</sup>❓ Как обрабатывали асинхронные операции до промисов?</summary>

---

Колбеками   

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какие состояния есть у промиса?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `Pending`      
🎯 `Fulfilled`   
🎯 `Rejected`    

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какие колбеки есть у промиса?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `resolve`   
&emsp;&emsp; 👆 Успешное выполнение промиса, отправляет данные в `then`, в первый аргумент `onResolved`        
  


🎯 `reject`    
&emsp;&emsp; 👆 Не успешное, отправляет ошибку в `then`, в `onRejected`, второй параметр `onRejected`   

```javascript
new Promise((resolve, reject) => {
    
    setTimeout(() => {
        resolve('after 100ms');
    }, 100)
    
}).then((resolvedRes) => {
    
}, (rejectedRes) => {
    
})
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Работа промиса</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

<details>
<summary> <sup>⭐</sup>❓ Как работает промис?</summary>

---

🎯 Через метод `then` собирает колбеки обработчики успешных и не успешных операций в массив          
🎯 В конструкторе принимает колбек с `resolve, reject` рычагами   
🎯 `resolved` вызывает обработчики всех успешных операций у всех колбеков  
🎯 Результат каждого успешного обработчика результатов пишется в `result`, и передается следующему хендлеру      


```javascript
class MyPromise {

    constructor(executor) {
        this.state = 'pending';
        this.result = null
        this.error = null
        this.handlers = []

        const resolve = (value) => {
            this.state = 'fullfilled';
            this.result = value;
            let resProps = value
            
            this.handlers.forEach((handler) => {
                resProps = handler.onFullfiled(resProps)
            });
        }

        const rejected = (value) => {
            this.result = value;
            let thenProps = value;

            this.handlers.forEach((handler) => handler.onRejected(thenProps))
        }

        executor(resolve, rejected)
    }

    then(onFullfiled, onRejected) {
        this.handlers.push({
            onFullfiled: onFullfiled,
            onRejected: onRejected,
        })
        
        return this;
    }
}

const data = new MyPromise((resolve, reject) => {
    setTimeout(function () {
        resolve('data')
    }, 1000)
}).then((data) => {
    console.log(data, 'first then')
    
    return '3'
}).then((data) => {
    console.log(data, 'second then');
})
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Когда отработает <code>Promise</code>, если не вызвать <code>resolve</code>?</summary>

---

Никогда

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как отработает промис, если просто сделать <code>return data</code> </summary>

---

```javascript
const data = new Promise((resolve, reject) => {
    return 'data'
}).then((res) => {
    console.log(res, 'promise result');
    return res.toUpperCase()
})

console.log(data, 'data');    
```

<details>
<summary> ✅ Ответ</summary>

---

Получим просто зависший промис, промис отрабатывает только при `resolve/reject`   

---

</details>

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Когда отработает промис, если вернуть вызванный <code>resolve</code>?</summary>

---

```javascript
const data = new Promise((resolve, reject) => {
    return resolve('my data')
}).then((res) => {
    console.log(res, 'promise result');
    return res.toUpperCase()
})

console.log(data, 'data');
```

<details>
<summary> ✅ Ответ</summary>

---

Успешно, сначала выполнится вызов функции, который переведет данные в <code>then</code>

---

</details>

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Цепочка промисов</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Для организации цепочки промисов, метод `then` должен возвращать промис   
🎯 Который в свою очередь должен вызвать `resolve`, который уже переведет на след `then`   

```javascript
const result = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('data');
    }, 100)
}).then((res) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(res + ' secon promise result');
        }, 100)
    });
}).then((res) => {
    return res;
})

console.log(result);
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> <code>catch</code> в промисах</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

<details>
<summary> <sup>⭐</sup>❓ Какие ошибки ловит?</summary>

---

🎯 Только те что идут выше     
🎯 `throw new Error` и `rejected`      
🎯 Не ловит синтаксические      
🎯 Не ловит ошибки из таймаута   

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Может ли <code>catch</code> продолжить цепочку?</summary>

---

Да, достаточно вернуть новый промис   

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какие статические методы есть у промисов</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `Promice.race`         
&emsp;&emsp; 👆 race - гоночки, первый отработавший летит в `then`     
  
🎯 `Promice.all`         
&emsp;&emsp; 👆 Дождаться всех, успешно выполненных промисов, ошибка в любом выкинет на `catch`     

🎯 `Promise.allSettled`      
&emsp;&emsp; 👆 Дождаться всех, не зависимо от результатов    
  
    
  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Напищи свой <code>Promise.all</code></summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
const PromiseAll = (promiseArr) => {
    const allRes = [];
    let completed = 0;
    
    
    for (let i = 0; i < promiseArr.length; i++) {
        const promise = promiseArr[i];
        
        promise.then((res) =>  {
            allRes.push(res);
            completed++;
        }, (rej) => {
            
            onRejected(rej);
            break;
        }).catch((err) => {
            onRejected(err);
            break;
        })
        
    }
    
    new Promise((resolve, reject) => {
        
        if (completed < promiseArr.length) {
            resolve(allRes);
        } else {
            reject(allRes);
        }
        
    })
}
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**