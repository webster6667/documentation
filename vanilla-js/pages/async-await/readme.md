# async await
> Современный, более удобный синтаксис для работы с промисами

💠 **async**   
👆🏽 Конструкция, преобразующая результат вызова функции в промис


<br>

&emsp;&emsp; 🔹 Позволяет использовать await в теле функции  

&emsp;&emsp; 🔹 Устанавливается только перед функцией  

&emsp;&emsp; 🔹 Можно использовать в методах класса      

&emsp;&emsp; 🔹 `async` функции возвращают промисы
&emsp;&emsp;&emsp;&emsp; 👆 Результат таких функций можно обрабатывать ключевыми конструкциями промисов `then, catch, finally`   

```javascript
const myAsync = async (url) => {
  let response = await fetch(url);
};
```

```javascript
class UserData {

  constructor(url) {
    this.url = url
  }

  async init() {
    let result = await fetch(this.url).then((response) => response.json());

    return result
  }
}

new UserData("https://jsonplaceholder.typicode.com/posts/1")
  .init()
  .then(userData => console.log(userData));
```

<br>
<br>      

💠 **await**   
👆🏽 Конструкция останавливающая выполнение кода, пока промис с права не будет завершен

<br>

&emsp;&emsp; 🔹 Работает только внутри `async` функций  

&emsp;&emsp; 🔹 Дожидается выполнение `thenable` объектов

&emsp;&emsp; 🔹 Дожидается выполнение статических методов промиса `Promise.all, ..., Promise.race`

&emsp;&emsp; 🔹 Обрабатывает ошибки при помощи `try/catch`
&emsp;&emsp;&emsp;&emsp; 👆 Золотое правило - оборачивать тело `async` функции, хотя бы в один `try/catch`         

```javascript
const myAsync = async (url) => {

  try {
    let response = await fetch(url).then(result => result.json());

    return response
  } catch { // => 🎯 поймает ошибку если запрос упадет
    console.log('was error')
  }

  
};
```

<br>


### ⟵ **<a href="../../readme.md">Назад</a>**