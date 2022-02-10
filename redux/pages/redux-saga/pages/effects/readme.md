# Эффекты  
👆🏽 Функции указывающие саге, какие действия ей нужно выполнять(`ждать dispatch, выполнять ассинхронные методы, парралельно или поэтапно`)       

## Take эффекты

&emsp;&emsp; 🔹 Ожидает выполнения dispatch указанного экшена

&emsp;&emsp; 🔹 Запускает указанный воркер при вызове dispatch указанного экшена

&emsp;&emsp; 🔹 Чаще всего используеться в вотчерах

💠 **take**     
👆🏽 Метод подписки на выполнение экшена, выполняющий воркер один раз

<br>

&emsp;&emsp; 🔹 Отработает всего один раз          
&emsp;&emsp;&emsp;&emsp; 👆 Так как вотчер это генератор, вызов take это его промежуточный этап, который обработает всего один раз
```typescript
import {put, take} from "redux-saga/effects"
import {incrementCreator} from "@redux-actions/count"
import {ASYNC_INCREMENT} from "@redux-types"

function* incrementWorker() {
    yield put(incrementCreator())
}

//incrementWorker сработает только при первом диспатче incrementCreator
export function* incrementWatcher() {
    yield take(ASYNC_INCREMENT, incrementWorker)
}
```
👆 Для того что бы `incrementWorker` срабатывал при каждом диспатче `incrementCreator`,   
достаточно обернуть объявленный take в бесконенчый цикл
```typescript
export function* incrementWatcher() {
    
    while (true) {
        yield take(ASYNC_INCREMENT, incrementWorker)
    }
    
}
```


<br>
<br>


💠 **takeEvery**   
👆🏽 Метод подписки на выполнение экшена, выполняющий воркер при каждом диспатче

<br>


&emsp;&emsp; 🔹 Запускает воркер при каждом диспатче указанного экшена  
&emsp;&emsp;&emsp;&emsp; 👆 Под капотом просто загоняет эффект `take`, в бесконечный цикл    
```typescript
import {put, takeEvery} from "redux-saga/effects"
import {incrementCreator} from "@redux-actions/count"
import {ASYNC_INCREMENT} from "@redux-types"

function* incrementWorker() {
    yield put(incrementCreator())
}

//incrementWorker сработает при каждом диспатче incrementCreator
export function* incrementWatcher() {
    yield takeEvery(ASYNC_INCREMENT, incrementWorker)
}
```

<br>
<br>


<br>
<br>


💠 **takeLatest**   
👆🏽 Запускает воркер при последнем диспатче (`Аналог throttling`)

<br>


&emsp;&emsp; 🔹 При диспатче с маленьким промежутком, метод вызовет воркер только после последнего диспатча  
&emsp;&emsp;&emsp;&emsp; 👆 При вызове воркера, раньше чем отработал предыдущий, выполнение предыдущего будет отменено, и отработает последний вызванный воркер
```typescript
import {put, takeLatest} from "redux-saga/effects"
import {incrementCreator} from "@redux-actions/count"
import {ASYNC_INCREMENT} from "@redux-types"

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* incrementWorker() {
    yield delay(1000)
    yield put(incrementCreator())
}

//При 3-х диспатчах incrementCreator с частотой 500ms, отработает только последний 
export function* incrementWatcher() {
    yield takeLatest(ASYNC_INCREMENT, incrementWorker)
}
```
&emsp;&emsp; 🛑 Хотя takeLatest и игнорирует частые запросы, он не отменяет их вызовы(если это fetch), и отменять их нужно вручную


<br>
<br>

💠 **takeLeading**   
👆🏽 При частых диспатчах запускает воркер при первом диспатче, и игнорирует остальные, пока первый не до конца отработал

<br>


## Put эффекты

💠 **put**   
👆🏽 Метод позволяющий изменять стор из саги(`Аналог dispatch`)


<br>

&emsp;&emsp; 🔹 работает так же как `dispatch`  
&emsp;&emsp;&emsp;&emsp; 👆 Принимает actionType и payload    
 
```typescript
import {put, takeEvery} from "redux-saga/effects"
import {incrementCreator} from "@redux-actions/count"
import {ASYNC_INCREMENT, ASYNC_DECREMENT} from "@redux-types"

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* incrementWorker() {
    yield delay(1000)
    yield put(incrementCreator())
}

export function* countWatcher() {
    yield takeEvery(ASYNC_INCREMENT, incrementWorker)
}
```

<br>
<br>

## Эффекты ассинхронных задачь

💠 **call**   
👆🏽 Выполнение ассинхронной задачи, блокирующее поток


<br>

&emsp;&emsp; 🔹 Запросы выполняються пошагово, пока первая задача не выполниться, вторая выполняться не будет,  

&emsp;&emsp; 🔹 Обычно используеться для взаимозависимых запросов 

```typescript
import {put, takeEvery, call} from "redux-saga/effects"
import {setUsersData} from "@redux-actions/users"
import {FETCH_USERS_DATA} from "@redux-types"

const fetchUserFromApi = async () => {
    const request = await fetch('https://jsonplaceholder.typicode.com/users?_limit=10'),
        data = await request.json()

    return data[0]
}

const fetchUserPostsFromApi = async (userId) => {
    const request = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({title: 'foo', body: 'bar', userId}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }),
        data = await request.json()

    return data
}

function* usersDataFetchingWorker() {

    const user = yield call(fetchUserFromApi),
          userPosts = yield call(fetchUserPostsFromApi, user.id) // ❗ userPosts зависит от user, по этому выполнение последовательно

    yield put(setUsersData({...user, userPosts}))
}


export function* userWatcher() {
    yield takeEvery(FETCH_USERS_DATA, usersDataFetchingWorker)
}
```

&emsp;&emsp; 🔹 метод call умеет передавать контекст в метод при указанном синтаксисе
```typescript
function* loadUsers() {
    const request = yield call(fetch, 'https://jsonplaceholder.typicode.com/users?_limit=10'),
          data = yield call([request, request.json]) // ❗ передает request контекст в метод json
}

console.log(data)
```

<br>
<br>

💠 **apply**   
👆🏽 Работает так же как call и метод apply в js, вызывает метод, передав туда контекст  

```typescript
function* loadUsers() {
    const request = yield call(fetch, 'https://jsonplaceholder.typicode.com/users?_limit=10'),
          data = yield apply(request, request.json) // ❗ передает request контекст в метод json
}

console.log(data)
```

<br>
<br>

💠 **fork**   
👆🏽 Выполнение ассинхронной задачи, не блокирующее поток


<br>

&emsp;&emsp; 🔹 Выполнение двух ассинхронных запросов происходит парралельно

&emsp;&emsp; 🔹 Не блокирет код, идущий после ассинхронного запроса

&emsp;&emsp; 🔹 Основной метод для реализации параллелизма


```typescript
import {put, takeEvery, call, fork} from "redux-saga/effects"
import {setUsersData, setPostData} from "@redux-actions/users"
import {FETCH_DATA} from "@redux-types"

const fetchDataFromApi = async (dataName) => {
    const request = await fetch(`https://jsonplaceholder.typicode.com/${dataName}`),
        data = await request.json()

    return data
}

function* loadUsers() {
    const users = yield call(fetchDataFromApi, 'users')

    yield put(setUsersData(users))
}

function* loadPosts() {
    const posts = yield call(fetchDataFromApi, 'posts')

    yield put(setPostData(posts))
}


function* dataFetchingWorker() {
    //❗ fork выполняться параллельно и не заблокирует поток 
    yield fork(loadUsers)
    yield fork(loadPosts)
    console.log('Этот код сразу отработает не дожидаясть результата fork')
}


export function* dataWatcher() {
    yield takeEvery(FETCH_DATA, dataFetchingWorker)
}
```

❗ Хотя fork не блокирует поток, его ошибки припкреплены к родирельской саге  
И если в саге хоть у одного fork выпадет не обработаный throw, то дальнейшее выполнения саги в которой был объявлен fork упадет
```typescript
function* loadUsers() {
    throw new Error()
    const users = yield call(fetchDataFromApi, 'users')
}

function* loadPosts() {
    const posts = yield call(fetchDataFromApi, 'posts')
}


function* dataFetchingWorker() {
    yield fork(loadUsers) //❗ Выпадет не обработаная ошибка, и весь dataFetchingWorker воркер упадет 
    yield fork(loadPosts)
    console.log('Этот код сразу отработает не дожидаясть результата fork')
}
```

<br>
<br>

💠 **spawn**   
👆🏽 Выполнение ассинхронной задачи, не блокирующее поток, тоже самое что и fork, но существует отдельно от родительской саги

<br>

&emsp;&emsp; 🔹 При выпавшей ошибке в spawn, дальнейшее выполнение родительского воркера продолжеться
```typescript
import {spawn, call, fork} from "redux-saga/effects"

function* loadUsers() {
    throw new Error()
    const users = yield call(fetchDataFromApi, 'users')
}

function* loadPosts() {
    const posts = yield call(fetchDataFromApi, 'posts')
}


function* dataFetchingWorker() {
    yield spawn(loadUsers) //❗ Эта сага упадет, но дальше все отработает 
    yield fork(loadPosts)
    console.log('Этот код сразу отработает не дожидаясть результата fork')
}
```

💠 **join**   
👆🏽 Метод позволяющий заблокировать поток, пока не выполнится не блокирующий запрос 


<br>

&emsp;&emsp; 🔹 Обычно используеться когда запрос должен быть не блокирующим, но в каком-то месте от его результата зависит другая операция

```typescript
import {call, fork, join} from "redux-saga/effects"

function* loadUsers() {
    const users = yield call(fetchDataFromApi, 'users')
    
    return users
}

function* loadPosts() {
    const posts = yield call(fetchDataFromApi, 'posts')
}


function* dataFetchingWorker() {
    const userTaskId = yield fork(loadUsers) // ❗ Записываем id неблокирующего таска 
    yield fork(loadPosts)
    console.log('Этот код сразу отработает не дожидаясть результата fork')
    
    const users = yield join(userTaskId) // ❗ Заблокирует дальнейшее выполнение кода, пока userTaskId не отработает
    console.log('Этот отработает только после того как отработает userTaskId', users)
}
```

<br>
<br>

## Эффекты стора

💠 **select**   
👆🏽 Метод, позволяющий получить состояние стора

🔸 Завязываться с стором в сагах считаеться не лучшая практика,   
лучше что-бы саги были автономны и не зависили от стора, получая данные только из экшенов

<br>
<br>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**