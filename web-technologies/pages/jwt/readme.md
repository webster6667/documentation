# jwt token
👆🏽 Токен для аутентификация пользователя  

🔹 При авторизации, сервер генерит два ключа  
&emsp;&emsp; 🎯 accessToken  
&emsp;&emsp;&emsp;&emsp; 👆 Краткоживущий ключ, подтверждающий подлинность пользователя

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🥏 Состоит из   

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `id`     
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 Уникальный ключ токена  

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `payload`     
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 Полезная информация вроде `username`

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `signature`     
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 Код сгенерированный на сервере на основе `id` и `paylod` позволяющий проверить подлинность ключа 

<br>

&emsp;&emsp; 🎯 refreshToken  
&emsp;&emsp;&emsp;&emsp; 👆 Долгоживущий ключ, позволяющий обновить `accessToken`, и `refreshToken` 

<br>

🔹 После авторизации с каждым запросом через интерцепторы летает `accessToken`   

🔹 Как только `accessToken` пропадает, оповещает об этом, и клинент делает запрос за новым `accessToken` и `refreshToken` 

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**