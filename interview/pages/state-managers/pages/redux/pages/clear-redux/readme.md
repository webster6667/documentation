# Clear redux

<details>
<summary> Что такое редакс?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Стейт менеджер  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Зачем нужен стейт менеджер / в каких случаях?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🔹 Для хранения глобальных данных, которые отображаеются на уровне всего приложения  
&emsp;&emsp; 🎯 `isAuth`      
&emsp;&emsp; 🎯 `role`   
&emsp;&emsp; 🎯 `cartData`    

🔹 Для выноса бизнес модели, отдельно от вью компонентов  

🔹 Хранить единый источник истины  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Зачем отделять бизнес логику от вью, если логика работы с вью и так разбита по слоям и от части зашита от комопнента странички?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

<details>
<summary> 🔹 Переиспользование бизнес логики в других оболочках</summary>

----

&emsp;&emsp; 🎯 `SSR`     
&emsp;&emsp; 🎯 `ReactNative`

🛑 Звучит красиво  лиш в теории  
&emsp;&emsp; 🎯 Так как у каждой оболочки есть свои особенности, и точечные решения этих проблем  
&emsp;&emsp; 🎯 Делать всю логику приложения в редаксе, это как забивать гвозди тапком  
&emsp;&emsp;&emsp;&emsp; 👆 Так или иначе прийдеться что-то переносить копировать и подкручивать, почему бы не подкрутить это под специализированные инструменты той или иной оболочки

----

</details>

<details>
<summary> 🔹 Разделение ответственности, упрощение цельных ui компонетов приложения, бизнес модели и тестирование</summary>

----

Каждый из разделов становиться максимально простым, и отвечает за свою область действий  

🎯 `Модель` запрашивает/отправляет данные, преобразовывая их в требуемый на выходе и входе формат  
🎯 `UI` просто ожидает данные для отрисовки, и экшены для изменения стора     
🎯 `Тесты` становяться максимально простыми для каждой из области    

🛑 Звучит красиво  лиш в теории  
&emsp;&emsp; 🎯 В реальных проектах с большим кол-вом действий становиться сложно читать и отслеживать логику действий в куче `boilerplate` коде    
&emsp;&emsp; 🎯 Хоть тесты по отдельности и пролетают быстро, но при появлении багов в конечном результате обьединения `UI` и `Model`, приходиться проходить довольно длинную цепочку для поиска проблемы    
&emsp;&emsp; 🎯 `Redux` не призывает, но развязывает руки для создания не явных связей между компонентами реализующие разные кейсы     


----

</details>          
      

<br>

  



![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

---



<details>
<summary> Что такое <code>store</code>? </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Глобальный обьект хранящий в себе состояния всего проекта   

```javascript
const store = createStore(rootReducer)
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое <code>action</code>?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Обьект описывающий какое действие будет выполняться над стором, при необходимости передающая `payload`

```jsx
const clickHandler = () => {
    store.dispatch(
        { type: 'DOWNLOAD_BY_ID', payload: {id} } // action
    )
}

<button onClick={clickHandler} >Скачать по id</button>
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое <code>payload</code>?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Данные необходимые для выполнения экшена  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Каким образом лучше всего хранить <code>action.type</code></summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Лучше всего хранить в константах, так `action.type` используеться и в редюсере и при вызове экшена, есть риск поймать сложноуловимый рассинхрон 

<details>
<summary> 📜 <code>action-types.js</code> </summary>

```javascript
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
```

</details>
  


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое <code>actionCreator</code></summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Функция, генерирующая обьект экшена под капотом  

<details>
<summary>📜 <code>action-creators.js</code></summary>

```javascript
import { ADD_TODO } from './action-types'

export function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: { text }
  }
}
```

</details>

<details>
<summary>📜 <code>addTodo.js</code></summary>

```
import { addTodo } from './actionCreators'

dispatch(addTodo('Use Redux'))
```

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое <code>reducer</code></summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Функция которая хранит в себе все обработчики экшенов    
И вызывает нужный, как только он будет задиспатчен   

<details>
<summary>📜 <code>reducer.js</code></summary>

```javascript
import { ADD_TODO } from './action-types'

const initialState = []

export function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const { text } = action.payload
      return [...state, text]
    default:
      return state
  }
}
```

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Редакс иммутабильный, что это значит? Какие правила этот факт вносит в написание обработчиков экшенов?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Это значит, что на каждый вызов экшена, редакс возвращает новый обьект стора, а не мутирует старый  

В таком случаи, каждый обработчик экшена должен возвращать новый объект, дополнив его    

```javascript
case ADD_TODO:
      const { text } = action.payload
      return [...state, text]
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Расскажи как работает redux?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `redux` создает общий глобальный стейт на весь проект, состоящий из отдельных редюсеров  
🎯 Через `useSelector` или `connect` подписывает компоненты на обновление необходимых частей стора  
🎯 Через `Context/Provider` передает состояние стора при каждом изменении   
🎯 Через `Context/Provider` передает `dispatch` функцию в `useDispatch` или `mapDispatchToProps`  

---

🎯 `dispatch` функции дергают нужные экшены и изменяют стор  
🎯 Подписанные компоненты, через `context` получают новое состояние стора    
🎯 `useSelect` или `mapStateToProps` получают новое состояние стора, и проверяют, изменились ли в нем значения которые были запорошены из стора  
🎯 Если стор изменился, но запрашиваемые данные остались теми же, ререндера не происходит      

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>



<details>
<summary> Как думаешь как работают <code>useSelector</code> и <code>mapStateToProps</code>?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

> Как реализована  логика защиты от ререндера если запрашиваемые данные не изменились?

<details>
<summary>📜 <code>useSelector</code></summary>

```javascript
function useSelector(selector){

    const store = useStore();

    const [state, setState] = useState(selector(store.getState()));

    useEffect(() => {
        return store.subscribe(() => {
            const result = selector(store.getState());
            if (!shallowequal(state, result)) {
                setState(result);
            }
        });
    }, [state]);

    return state;
}
```

</details>

<details>
<summary> mapStateToProps</summary>

----

🎯 `HOC` оборачивающий компонент, записывающий запрашиваемые данные в стейт  
🎯 Возвращает в `shouldComponentUpdate` `false`, если запрашиваемые данные не изменились      

----

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>



<details>
<summary> Будет ли вызван <code>mapStateToProps</code> если запрашиваемые данные не изменились? / Задачка</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Есть три разных редюсера `user`, `cart`, `articles`.    
🎯 В проекте прописано всего три `mapStateToProps`  
🎯 Если в `articles.list` добавят новую запись, какое кол-во `mapStateToProps` будет вызвано

```javascript
function mapStateToProps(state) {
  const { user } = state
  return { userList: user.list }
}

export default connect(mapStateToProps)(UserList)


// ----------------------------------------------------


function mapStateToProps(state) {
    const { cart } = state
    return { productList: cart.productList }
}

export default connect(mapStateToProps)(ProductList)


// ----------------------------------------------------


function mapStateToProps(state) {
    const { articles } = state
    return { articleList: articles.list }
}

export default connect(mapStateToProps)(ArticleList)
```

<details>
<summary> ✅ Ответ</summary>

---

Будут вызваны все три `mapStateToProps`, так как `connect` определяет необходимость ререндера сравнивая прошлый и текущий результат этой функции  

---

</details>


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Каким образом лучше прописывать селекторы? </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```jsx
// 1
import React from 'react'
import { useSelector } from 'react-redux'

export const MyComponent = () => {
  const isAuth = useSelector((state) => state.user.isAuth)
  const [value, setValue] = useState('')
    
    
  return <form>
      <input onChange={(e) => setValue(e.target.value)} />
      <button disabled={!isAuth} type='submit' >Отправить</button>
  </form>
}
```

---

```jsx
// 2
import React from 'react'
import { useSelector } from 'react-redux'

const isAuthSelector = (state) => state.user.isAuth;


export const MyComponent = () => {
  const isAuth = useSelector(isAuthSelector)
  const [value, setValue] = useState('')
    
    
  return <form>
      <input onChange={(e) => setValue(e.target.value)} />
      <button disabled={!isAuth} type='submit' >Отправить</button>
  </form>
}
```

<details>
<summary> ✅ Ответ</summary>

---

1. Переиспользуемый селектор  
2. На каждый ререндер при изменении стейта создаеться новая функция   

---

</details>


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> useSelect принимает вторым параметром функцию, что это за функция? </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Функция проверяющая обновились ли запрашиваемые данные после обновления стора   

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Если ее не передать как проводиться сравнение? </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Идет сравнение по ссылке

```javascript
const isEqual = (a, b) => a === b
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>



<details>
<summary> <code>useSelector</code> сравнивает изменения по ссылкам, какая проблема в этом коде? </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```jsx
import React, { memo } from 'react'
import { useSelector } from 'react-redux'

const userListSelector = (state) => state.user.list.filter((user) => user.id > 0);

const UserList = memo(({userList}) => (<div>
    {userList.map((user) => (
        <span key={user.id} >
            {user.name}
        </span>
    ))}
</div>))

export const MyComponent = () => {
  const userList = useSelector(userListSelector)
  const [value, setValue] = useState('')
    
  return <form>
      <UserList userList={userList} />
      <input onChange={(e) => setValue(e.target.value)} />
  </form>
}
```

<details>
<summary> ✅ Ответ</summary>

---

🎯 Фильтр всегда возвращает новый обьект, даже если не произошло никаких изменений  
🎯 `useSelector` сравнивает обьекты по ссылкам, а не по значениям      
🎯 На каждый `setValue`, селектор будет возвращать новый обьект, даже если `user.list` небыл изменен   
🎯 Будет происходить безсмысленный ререндер `UserList` блока  

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какая проблема в этом селекторе?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)


```jsx
import React, { memo } from 'react'
import { useSelector } from 'react-redux'

const userDefaultState = {
    currentUser: {},
    isAuth: false,
    friendsList: [{id: 1, name: 'den'}],
    likes: 0
}

export const MyComponent = () => {
  const { friendsList } = useSelector((state) => state.user)
  const [value, setValue] = useState('')
    
  return <form>
      {userList.map((user) => (
          <span key={user.id} >
            {user.name}
        </span>
      ))}
  </form>
}
```

<details>
<summary> ✅ Ответ</summary>

---

🎯 Селектор подписываеться на весь обьект редюсера, достает только нужный  
🎯 Но сама функция селектора подписалась на весь объект      
🎯 Из за этого будет происходить ререндер при изменении `likes` и всех остальных пропсов  

---

</details>


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какая проблема в этом мапере? </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
function mapStateToProps(state) {
  const { user } = state
  return { user: {...user, name: camelCalse(user.name)} }
}
```

<details>
<summary> ✅ Ответ</summary>

---

Мапер каждый раз возвращает новый обьект, что будет вызывать лишний ререндер при каждом изменении стора, даже если обьект юзера не тронут

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как можно решить проблему сравнения по ссылке</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Своя функция глубокого сравнения `isEqual`      
🎯 `reselect`    

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как работает реселект?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Кеширует результат своей работы, и при следующем изменении стора выполняет сравнение по значению

```javascript
const userListSelector = (state) => state.user.list
const userListFilter = (state) => state.user.filter


const modifiedUserListSelector = createSelector(userListSelector, users => {
    return users.map(({id, name}) => ({id, name: name.toUpperCase()}))
})

const filtredUserListSelector = createSelector([userListSelector, userListFilter], (users, filter) => {
    return users.filter(({state}) => (state === filter))
})
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какие есть недостаки у реселекта?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Кеширование не бесплатно    

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Когда использовать реселект?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

1. Когда идет перебор массива ( map, filter )
2. Когда селектор возвращает новый объект  
3. Когда результат зависит от нескольких селекторов 

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Редакс в классовом todo компоненте</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 action      
🎯 actionCreator      
🎯 reducer      
🎯 component      


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Редакс в функциональном todo компоненте</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 action      
🎯 actionCreator      
🎯 reducer      
🎯 component

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое middleware?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)



![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

* Что такое санки
* Как работает
* Что такое мидлвейр  
* Что такое immer

https://www.youtube.com/watch?v=du6oECKM3MY  

* Давай напишем получить тудушки с сервака, отправить на сервак, провалидировать с бека ( тостер/модалка )
* Что умеет redux-toolkit, какие проблемы решает  
* Что такое RTK-query
* Зачем rtk, какие решает проблемы  
* query/mutation
* Что такое слайсы, как работаеют? 
* Шаблон на слайсах  
* persistRedux  


<br>

### ⟵ **<a href="../../readme.md">Назад</a>**