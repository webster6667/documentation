# cors

<details>
<summary> Для чего нужен <code>CORS</code></summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Это механизм, который регулирует, какие домены могут взаимодействовать с `API` через браузер   
🎯 Если вдруг злоумышленик вывел пользователя на свой сайт, и спровоцировал его нажатие кнопки, он может выполнить запрос на сервер, руками авторизованного пользователя     
&emsp;&emsp; 👆 Например пришлет ссылку на лендинг `вы выиграли приз`, с кнопкой получить, при нажатии на которую прозойдет запрос с переводом денег злоумышленнику на сервер банка, от имени уже авторизованой жертвы   
🎯 `CORS` Проверяет, разрешено ли принимать запросы с этого доменного имени     
🎯 Обычно на `API` ставится возможность выполнять запросы только с тех доменных имен, для которых оно писалось  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Алгоритм работы <code>CORS</code></summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Сервер устанавливает на своей стороне `CORS` защиту    
&emsp;&emsp; 👆 Которая обязывает клиент с другим доменным именеи прежде чем начать взаимодействовать с сервером, выполнить предварительный запрос (`Preflight Request`) `OPTIONS` на сервер, чтобы узнать, разрешено ли выполнять этому домену запросы на сервер

🎯 Сервер обрабатывает запрос от браузера и возвращает данные, если запрос прошел проверку `CORS` и разрешен. 

🎯 Если запрос запрещен, сервер может вернуть ошибку или игнорировать запрос.  

<details>
<summary> <sup>⭐</sup>❓ На все запросы будут установленны <code>Preflight request</code></summary>

---

нет, по дефолту только на `post` и `delete`  

---

</details>

<details>
<summary> <sup>⭐</sup>❓ А можно ли установить на все?</summary>

---

Да, можно сделать это на уровне сервера, добавив нестандартный заголовок в общении, который заставить браузер отправить `prefligth` запрос  

---

</details>


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>


<br>

### ⟵ **<a href="../../readme.md">Назад</a>**