# Events

<details>
<summary> Что такое всплытие?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

в `JS` События связанные с `DOM` элементами проходят сначала вниз к целевому элементу, после этого всплывает, и вызывает события у всех оборачивающих элементах, это и есть всплытие  

<details>
<summary> <sup>⭐</sup>❓ Для чего нужно всплытие?</summary>

---

🎯 Для того что бы события отработали логично.    
🎯 Если кликнули по `div`, внутри `body`, значит и по `body` , тоже кликнули.   
🎯 При помощи всплытия мы об этом узнаем   


```html
<script >
    const clickHandler = (e) => {
        console.log(e.target, 'was clicked');
    }
</script>

<body onclick="clickHandler()" >
    <div onclick="clickHandler()" >
        element
    </div>
</body>
```

<details>
<summary> <sup>⭐</sup>❓ Как отменить всплытие?</summary>

---

Для этого нужно указать `e.stopPropagation()`, после чего событие не всплывет, и клик на `body` не отработает   

---

</details>

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое погружение?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

У событий есть так же фаза погружения, 
идущая от верхнего события к нижнему, 
позволяющая поймать клик по `body` еще до того как он дошел до `div`,
Ее еще называют стадия перехвата  

Она обычно не отрабатывает явно   
Для того что бы ее включить  
Нужно включить параметр `true`, в последний параметр `addEventListener(event, handler, options)`   

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое делегирование событий?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Прием, когда вместо того что бы устанавливать каждому элементу свой обработчик, вешают слушатель на родительский элемент, а внутри него проверяют если событие произошло на одном из описанных элементов запускает нужный обработчик   
&emsp;&emsp; 👆 Такой подход ипользуется под капотом у реакта. Это позволяет избежать навешивания излишнего кол-ва слушателей      


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какая разница между <code>onClick</code> и <code>addEventListener</code>?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Обработчики наброшенные через `on` перезатирают друг друга, а `addEventListener` накидывают новые с каждым вызовом, и требуют удаления по безнадобности    

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как устанавливать пользовательские события?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 При помощи `const customEvent = (options) => new CustomEvent(eventName, options)` создаем новое событие
🎯 Через `addEventListener(eventName)` вешаем слушатель с названием пользовательского события         
🎯 Диспатчим события в нужном нам месте `elem.dispatchEvent(customEvent())`     

👆 Может быть удобно для поддержки связи в разных частях приложения, когда не удобно просто слать колбеки    
  


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**