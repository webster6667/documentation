# Event Loop

<details>
<summary> Что такое event loop</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

👆🏽 Отдельный от `JS` механизм позволящий не блокировать поток при вызове ассинхронных задач

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как работает механизм event loop </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Для того что бы не блокировать основной поток асинхронными задачами и слушателями `event loop` распределяет код на три группу 

🎯 `Callstack`  
🎯 `WebApi`  
🎯 `Очередь`  

&emsp;&emsp; 🔹 Синхронные задачи сразу же выполняються в колстеке             
&emsp;&emsp; 🔹 Ассинхронные задачи и колбеки отправляються в `очередь` или в `webApi`      
&emsp;&emsp; 🔹 После выполнения всех синхронных задач в `колстеке`, запускаються команды из очереди    
&emsp;&emsp; 🔹 Сначала запускаються микро таски( промисы или явно заднанные очереди ), после запускаються макро таски (все что прилетает из `web api`)  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Раскажи про каждую структуру детальней</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🔹 `Callstack`    
&emsp;&emsp; 👆 Очередь реализован на структуре данных `стек`, т.е последний вошел, первый вышел, работает следующим образом

&emsp;&emsp;&emsp;&emsp; 🎯 Движок бежит по строкам кода, поочередно закидывая команды в колстек         
&emsp;&emsp;&emsp;&emsp; 🎯 Если команда синхронная, движок не переходит к следующей команде, пока не выполниться синхронная задача со всей ее вложенностью  
&emsp;&emsp;&emsp;&emsp; 🎯 Если команда ассинхронная или являеться слушателем, она попадает в стек, после чего будет отправленна в `WebApi` или же в `Очередь задач`

<br>

🔹 `WebApi`  
&emsp;&emsp; 🎯 Очередь задачь, в которую попадают браузерные колбеки, (Таймауты, Listeners, ImgUpload, Input/Output)      
&emsp;&emsp; 🎯 Работает на принципах структуры данных очередь(первый вошел первый вышел)  
&emsp;&emsp; 🎯 После срабатывание тригера, отправляеться в следующую структу данных `Очередь`  

<br>

🔹 `Очередь`  
&emsp;&emsp; 👆 Работает так же на принципах структуры данных очереди, но разделяет свои задачи на два типа    
&emsp;&emsp;&emsp;&emsp; 🎯 Микро таски (маленькая)    
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 Это промисы, очереди и mutationObserver     

&emsp;&emsp;&emsp;&emsp; 🎯 Макро таски (очень маленькая)   
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 Это таймауты, листенеры, imgUpload, Input/Output и тд

&emsp;&emsp; ❗ Порядок выполнения  
&emsp;&emsp;&emsp;&emsp; 🎯 1.Все микротаски    
&emsp;&emsp;&emsp;&emsp; 🎯 2.Одна макро таска  

🛑 Если Макро таска порождает микро таску, `eventLoop` сначала выполненнит новую `микро таску`, а только после приступит к следующей `макро таске`  

🛑 Если микротаска бесконечно зацикленна, то идущая за ней макро таска, никогда не выполниться  



![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какая разница между Web Api и очередью?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

в `WebApi`, попадают только браузерные команды. Очередь распределяет порядок выполнения команд из `WebApi`, микро и макро тасками, отдавая приоритет микро таскам  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое микро и макро таски </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🔹 `Микротаски`  
&emsp;&emsp; 👆 Промисы ,явно заданная очередь и mutationObserver  
  
🔹 `Макротаски`  
&emsp;&emsp; 👆 Браузерные операции (таймауты, листенеры, ImgUpload, Input/Output)
    

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какой приоритет выполнения у микро и макро тасок</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

❗ Порядок выполнения    
&emsp;&emsp; 🎯 1.Все микротаски      
&emsp;&emsp; 🎯 2.Одна макро таска  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Когда выполниться эта макра таска?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript

const createPromise = () => Promise.resolve().then(data => {
    console.log('micro task')
    createPromise()
});
createPromise();

setTimeout(() => {
    console.log('macro task')
}, 0)
```

<details>
<summary> ✅ Ответ</summary>

---

Никогда, так как сначала должны выполниться миро таски. В данном случаи они зацикленны и будут выполняться бесконечно

---

</details>

<details>
<summary> ✅ А если таймаут вызвать над промисом?</summary>

---

Не играет роли, так как сначала ассинхронные команды будут заброшены в очереди, а после выполняться в порядке:  
&emsp;&emsp; 🎯 1.Все микротаски      
&emsp;&emsp; 🎯 2.Одна макро таска

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Напиши порядок выполнения промисов, обьясни</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
let i = 0

const int = setInterval(() => {
    console.log(`interval ${i}`)
    
    if (i === 3) {
        Promise.resolve().then(() => {
            console.log('my promise')
        })
    }
    
    if (i === 5) {
        clearInterval(int)
    }
    
    i++
}, 0)
```

<details>
<summary> ✅ Ответ</summary>

---

```
interval 0
interval 1
interval 2
interval 3
my promise
interval 4
interval 5
```

👆 Если макро таска порождает микротаску, сначала выполниться микро таска, после продолжиться цикл макротасок  

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какой будет порядок вывода</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
console.log('first');

setTimeout(() => {
   console.log('inside timeout 1')
}, 0)

Promise.resolve().then(() => {
    console.log('second')
})

const a = new Promise((resolve, reject) => resolve(console.log('third')))

a.then(() => {
    console.log('fifth')
})

console.log('fourth')

setTimeout(() => {
    console.log('inside timeout 2')
    
    for(let i = 0; i < Infinity; i++) {
        Promise.resolve().then(() => console.log(`promise item ${i}`))    
    }
    
    setTimeout(() => {
        console.log('last timeout')
    }, 0)
    
}, 0)

```

<details>
<summary> ✅ Ответ</summary>

---

1. first
2. third
> Не смотря на то что `console.log('third')` лежит в промисе, лог резолвиться сразу, без then или await, и такой код будет считаться синхронным


3. fourth
4. second
> Промис и таймаут попадают в одну и ту же очередь, но несмотря на то что таймаут написан раньше, промис отработает первым, так как промис это микро таска


5. fifth
6. inside timeout 1
> Хоть **inside timeout 1** написан первым и таймаут стоит 0,   
Он все равно попадает в webApi, потом в очередь в макротаски, и отработает только после того как будет выпонен весь синхронный код и микро таски

7. inside timeout 2
8. promise item i
9. `last timeout` Никогда не будет вызван
> Последний таймаут никогда не будет вызван, так как выше обьявлен бесконечный вызов микро тасок

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**