<a href="http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D">
  <p align="center" style="text-align:center">
      <img src="./img/illustration.png" alt="illustration" width="500"/>
  </p>
</a>

<details>
<summary> 🔥 <code>Shortcut</code></summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

💠 Event-loop  
👆🏽 Отдельный от `JS` механизм позволящий не блокировать поток при вызове ассинхронных задач


&emsp;&emsp; 🔹 Микро таски  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 Маленькие

&emsp;&emsp;&emsp;&emsp; 🎯 Promise  
&emsp;&emsp;&emsp;&emsp; 🎯 <ins>[queueMicrotask 💬](## "Искуственная созданная микротаска")</ins>  
&emsp;&emsp;&emsp;&emsp; 🎯 <a href="https://learn.javascript.ru/mutation-observer">mutationObserver</a>


<br>

&emsp;&emsp; 🔹 Макро таски  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 Очень маленькие

&emsp;&emsp;&emsp;&emsp; 🎯 Таймеры  
&emsp;&emsp;&emsp;&emsp; 🎯 <ins>[События 💬](## "Клик, input/output")</ins>    
&emsp;&emsp;&emsp;&emsp; 🎯 Загрузка изображений

<br>

&emsp;&emsp; ❗ Порядок выполнения  
&emsp;&emsp;&emsp;&emsp; 🎯 1.Стек  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🥏 Простые функции не берут следующую функцию в очередь стека, пока не выполняться  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🥏 Вложенные функции сначала по очереди добавляються в стек, пока не дойдут до самой глубокой  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🥏 После выполняються в обратном порядке   
  


&emsp;&emsp;&emsp;&emsp; 🎯 2.Все микротаски     
&emsp;&emsp;&emsp;&emsp; 🎯 3.Макро таска  
&emsp;&emsp;&emsp;&emsp; 🛑 4.Если Макро таска порождает <ins>[микро таску 💬](## "Например промис")</ins>, `eventLoop` сначала выполненнит новую микро таску, а только после приступит к следующей макро таске

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

# Event loop
👆🏽 Отдельный от `JS` механизм позволящий не блокировать поток при вызове ассинхронных задач  

<details>
<summary>📗 Потоки в JS</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

&emsp;&emsp; 🎯  JavaScript - однопоточный язык программирования  
&emsp;&emsp;&emsp;&emsp; 👆 Выполняет задачи одну за другой в порядке очереди 

&emsp;&emsp; 🎯 Если в коде попалась сложная операция, код после не выполнится, пока сложная операция не будет выполнена    

&emsp;&emsp; 🎯 Зная логику работы событийныного цикла, можно построить код так, что бы ресурсоемкие операции, не блокировали поток, и интерфейс пользователя    

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

💠 **Call stack**  
👆🏽 Хранилище, куда помещаються функции которые будут сейчас выполняться, или зарегистрироанны в очередь

&emsp;&emsp; 🔹 Порядок выполнения последний вошел, первый вышел  

<details>
<summary>📗 Порядок выполнения</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

&emsp;&emsp; 🎯 Функция попадает в стек  
&emsp;&emsp;&emsp;&emsp; 👆 Пока функция не отработает, следующие функции не читаються  


https://github.com/webster6667/documentation/assets/83826752/fa4d2be2-5a99-4ffd-a3e1-8eab93d241db


&emsp;&emsp; 🎯 Вложенные функции сначала добавляються поочередно наверх в стек  
&emsp;&emsp;&emsp;&emsp; 👆 Пока не дойдут до самой глубины   


https://github.com/webster6667/documentation/assets/83826752/2d68ae31-f957-4304-bec3-c10d80fa314b



&emsp;&emsp; 🎯 После этого функции в стеке начинают выполняться с конца   
&emsp;&emsp; 🛑 Ассинхронные функции, не блокируют поток выполнения остальных функций  
&emsp;&emsp;&emsp;&emsp; 👆 Они просто регистрируються, и перемещаються в `web api`


&emsp;&emsp; 🛑 Рекурсивные функции, будут также сначала по очередно закинуты в `call stack`



https://github.com/webster6667/documentation/assets/83826752/131ede4b-f26d-4468-bc3f-959077699849



![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>


&emsp;&emsp; 🛑 Стек ограничен количистве функций  
&emsp;&emsp;&emsp;&emsp; 👆 При переполнения стека - сайт крашиться  

<br>  
<br>


💠 <a name="web-api">**WebApi**</a>  
👆🏽 Хранилище, куда помещаються ассинхронные задачи относящиеся к `WebApi`, которые будут выполнены только после выполнения всех задач из `CallStack` 

&emsp;&emsp; 🔹 Порядок выполнения первый вошел, первый вышел

<details>
<summary>📗 Порядок выполнения</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

&emsp;&emsp; 🎯 Ассинхронная функция попадает в стек  
&emsp;&emsp; 🎯 Поток не блокируеться   
&emsp;&emsp;&emsp;&emsp; 👆 Мы не ждем пока она выполниться, а сразу переходим к след функции  

&emsp;&emsp; 🎯 Ассинхронная функция отправляеться в очередь `web api`

&emsp;&emsp; 🎯 После клика, или прошедшого таймаута, функции переходяд из `web api` в **<a href="#task-queve">очередь задач</a>**

&emsp;&emsp; 🎯 После того как все функции из `call stack` выполнены, `event-loop` начинает выполнять по одной задаче в порядке их объявления, отправляя их в `call stack`



https://github.com/webster6667/documentation/assets/83826752/452c9987-19c7-4070-8d00-94cda25e7ca1



![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>  
<br>


💠 **<a name="task-queve">Очередь задач</a>**  
👆🏽 Очередь ассинхронных функций, которые деляться на два вида

&emsp;&emsp; 🔹 Микро таски  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 Маленькие



&emsp;&emsp;&emsp;&emsp; 🎯 Promise  
&emsp;&emsp;&emsp;&emsp; 🎯 <ins>[queueMicrotask 💬](## "Искуственная созданная микротаска")</ins>  
&emsp;&emsp;&emsp;&emsp; 🎯 <a href="https://learn.javascript.ru/mutation-observer">mutationObserver</a>

<br>

&emsp;&emsp; 🔹 Макро таски  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 Очень маленькие

&emsp;&emsp;&emsp;&emsp; 🎯 Таймеры  
&emsp;&emsp;&emsp;&emsp; 🎯 <ins>[События 💬](## "Клик, input/output")</ins>  
&emsp;&emsp;&emsp;&emsp; 🎯 Загрузка изображений

<br>

&emsp;&emsp; ❗ Порядок выполнения  
&emsp;&emsp;&emsp;&emsp; 🎯 1.Все микротаски     
&emsp;&emsp;&emsp;&emsp; 🎯 2.Макро таска

&emsp;&emsp;&emsp;&emsp; 🛑 Если Макро таска порождает <ins>[микро таску 💬](## "Например промис")</ins>, `eventLoop` сначала выполненнит новую микро таску, а только после приступит к следующей макро таске  



https://github.com/webster6667/documentation/assets/83826752/5184884c-b58d-4bc9-b0b5-d84c1a423d5c



&emsp;&emsp;&emsp;&emsp; 🛑 Если микротаска бесконечно зацикленна, то идущая за ней макро таска, никогда не выполниться

<details>
<summary><img src="https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/ts.svg" height="20px" title="ts" >&emsp; Typescript</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```typescript
function recursivePromise(promise) {
    return promise.then(() => {
        console.log('1')
        recursivePromise(Promise.resolve())
    })
}

recursivePromise(Promise.resolve())

setTimeout(() => {console.log('2')}, 0)
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>


#### Задачка на понимание event Loop

Какой будет порядок вывода?

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

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

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


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary>📗 Доп детали</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🔹 Движок js работает с колстеком, и компилит js в машинный код, не предоставляет Event loop  
🔹 Event loop не является частью движка, это механизм который предоставляеться средой выполнения, браузером или нодой  

Для понимания:  
&emsp;&emsp; 🎯 Браузер v8   
&emsp;&emsp; 🎯 Нода v8  
Работа с event loop немного разняться, из за того что каждай среда разработки вносит свои детали
    


🔹 Как движок(колстек) общаеться со средой(браузером)?   
&emsp;&emsp; 👆 Через веб апи

🔹 Веб апи не спецификация js, это браузерные фишки

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

### ⟵ **<a href="../../readme.md">Назад</a>**
