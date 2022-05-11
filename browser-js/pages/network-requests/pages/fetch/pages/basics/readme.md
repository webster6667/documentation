# Fetch - основы
> Современный метод для работы с сетевыми запросами

🛑 Поддерживается только современными браузерами   
&emsp;&emsp; 👆 Для старых браузеров есть <a href="https://www.npmjs.com/package/fetch-polyfill">Полифил</a>

<br>

💠 Выполняет запрос в два этапа

&emsp;&emsp; 🔹 Первый этап дает следующие возможности

&emsp;&emsp;&emsp;&emsp; 🎯 Получить статус ответа  
&emsp;&emsp;&emsp;&emsp; 🎯 Прочитать заголовки  
&emsp;&emsp;&emsp;&emsp; 🎯 Выбрать метод получения тела запроса

&emsp;&emsp; 🔹 Во втором этапе уже можно получить выбранный формат тела ответа

```javascript
const response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits'),
      commits = await response.json(); // 👉🏼 1.Этап

console.log(commits[0].author.login);  // 👉🏼 2.Этап
```
Или промисом
```javascript
fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
    .then(response => response.json())  // 👉🏼 1.Этап
    .then(commits => console.log(commits[0].author.login)); // 👉🏼 2.Этап
```

<br>

💠 Методы получения тела ответа

&emsp;&emsp; 🎯 `response.text()`  
&emsp;&emsp; 🎯 `response.json()`  
&emsp;&emsp; 🎯 `response.formData()`  
&emsp;&emsp; 🎯 `response.blob()`  
&emsp;&emsp; 🎯 `response.arrayBuffer()`    
&emsp;&emsp; 🎯 `response.body`  
&emsp;&emsp;&emsp;&emsp; 👆 `body` это объект `ReadableStream`, с помощью которого можно считывать тело запроса по частям   

<br>

💠 Заголовки ответа

&emsp;&emsp; 🔹 Храняться в `Map` подобном объекте `response.headers`

&emsp;&emsp; 🔹 Можно получить раньше чем тело ответа

```javascript
let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');

// 👉🏼 Получить один заголовок
alert(response.headers.get('Content-Type')); // application/json; charset=utf-8

// 👉🏼 Перебрать все заголовки
for (let [key, value] of response.headers) {
  console(`${key} = ${value}`);
}
```

<br>

💠 Заголовки запроса  
👆🏽 Устанавливаеться в параметрах запроса в свойстве `headers`

```javascript
let response = fetch(protectedUrl, {
  headers: {
    Authentication: 'secret'
  }
});
```

<br>

💠 Запросы на отправку данных  
👆🏽 Для отправки данных в запросе, нужно указать метод, заголовки и тело запроса

&emsp;&emsp; 🔹 Заголовки не обязательно  

&emsp;&emsp; 🔹 Тело запроса в любом из форматов  
&emsp;&emsp;&emsp;&emsp; 🎯 Строка/json    
&emsp;&emsp;&emsp;&emsp; 🎯 FormData  
&emsp;&emsp;&emsp;&emsp; 🎯 Blob/BufferSource

```javascript
let user = {
  name: 'John',
  surname: 'Smith'
};

let response = await fetch('/article/fetch/post/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(user)
});

let result = await response.json(); // 👉🏼 Ответ от сервера на Post запрос
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**