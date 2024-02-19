# cors

<details>
<summary> Для чего нужен <code>CORS</code></summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Если вдруг злоумышленик вывел пользователя на свой сайт, и спровоцировал его нажатие кнопки, он может выполнить запрос на сервер, руками авторизованного пользователя       
🎯 `CORS` Проверяет, разрешено ли принимать запросы с этого доменного имени, был ли отправлен валидный csrf токен, если нет, отбрасывает запрос   

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Алгоритм работы <code>CORS</code></summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 При рендере странички, на сервере генерится `csrf` токен  

🎯 С каждым отправленным запросом, сервер обновляет `csrf` токен   

🎯 Если браузер обнаруживает, что запрос к ресурсу происходит с другого источника, он отправляет предварительный запрос Предварительный запрос (`Preflight Request`) `OPTIONS` на сервер, чтобы узнать, разрешено ли выполнять этому домену запросы на сервер       
  
🎯 Сервер обрабатывает запрос от браузера и возвращает данные, если запрос прошел проверку `CORS` и разрешен. Если запрос запрещен, сервер может вернуть ошибку или игнорировать запрос.  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>


<br>

### ⟵ **<a href="../../readme.md">Назад</a>**