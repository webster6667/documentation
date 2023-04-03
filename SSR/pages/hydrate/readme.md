# Чистый SSR
> Самостоятельная смесь backand и frontend фреймворков 

<details>
<summary> 🔥 <code>Shortcut</code></summary>

___

🔹 Держим верстку приложения в отдельной папке `shared`    
&emsp;&emsp; 🛑 Без <ins>[различных провайдеров 💬](## "redux, router")</ins>  

🔹 Создаем две папки   
&emsp;&emsp; 🎯 client  
&emsp;&emsp;&emsp;&emsp; 🥏 Оборачиваем клиентскими провайдерами   
&emsp;&emsp;&emsp;&emsp; 🥏 Пробрасывает пропсы в `App`, которые были записаны на сервере в глобальную область   

&emsp;&emsp; 🎯 server  
&emsp;&emsp;&emsp;&emsp; 🥏 Парсит `shared` папку в `html`  
&emsp;&emsp;&emsp;&emsp; 🥏 Оборачиваем в провайдер  
&emsp;&emsp;&emsp;&emsp; 🥏 Заполняем стор  
&emsp;&emsp;&emsp;&emsp; 🥏 Вызываем серверные методы     
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 Которые описаны как свойства или статические функции роута  

🔹 В папке `client`, рендерим `<App>` из `shared` через `hydrate`    
&emsp;&emsp; 🎯 Сравнивает `html` с сервера, и тот который собирались рендерить  
&emsp;&emsp; 🎯 Если они совпадает, отклоняет повторную перерисовку, и просто развешивает клиентские обработчики событий

___

</details>

* **<a href="./pages/webpack">Webpack</a>**
* **<a href="./pages/basic-architecture">Базовая архитектура</a>**
* **<a href="./pages/props">Проброс пропсов</a>**
* **<a href="./pages/routing">Routing</a>**
* **<a href="./pages/initial-props-methods">Получение пропсов на стороне сервера из компонента</a>**
* **<a href="./pages/request">Requests</a>**
* **<a href="./pages/redux">Redux</a>**

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**