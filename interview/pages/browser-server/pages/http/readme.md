# HTTP

<br>

<details>
<summary> ❓ Что такое <code>http</code>?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Протокол для передачи данных, без сохранения состояния  
&emsp;&emsp; 👆 Состояния хранятся в базе     
  


<details>
<summary> 🧠 Образ для заучивания</summary>

---

🎯 Задержали какую то ТП(`HTTP`)   
🎯 Долго не могли составить протокол    
🎯 Так как ее мозг способен передавать данные  
🎯 Но не способен сохранять состояния

---

</details>


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>


<br>

<details>
<summary> ❓ Что содержит запрос?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🔹 Версию протокола   
🔹 Заголовки   
🔹 Метод (**GET**, **POST**, **PUT**, **PATCH**, **DELETE**, **OPTIONS**)    
🔹 Путь к ресурсу    
&emsp;&emsp; 👆 Может содержать параметры запроса    
🔹 Тело запроса

<details>
<summary> 🧠 Образ для заучивания</summary>

---

Что говорит ТП-шка?

🎯 Привет, мне 18 (`Указывает версию протокола`)
🎯 Даш потрогать за головку? (`Передает заголовки`)      
🎯 Давай выберем метод общения? (`Метод GET/POST` (общения))       
🎯 Куда пойдем?(`Путь запроса`)    
&emsp;&emsp; 👆 Может передлагать свои варианты(`Параметры`)   
🎯 У меня красивое тело.


---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> ❓ Давай детальней по говорим про методы запроса? </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

<details>
<summary> <sup>⭐</sup>❓ Какие бывают?</summary>

---

🎯 `GET`       
🎯 `POST`  
🎯 `PUT`   
🎯 `PATCH`  
🎯 `DELETE`  
🎯 `OPTIONS` Предварительные запросы (`Preflight Requests`)

<details>
<summary> 🧠 Образ для заучивания</summary>

---

Тп-шка думает как общаться?

🎯 Взять за головку (`GET`)      
🎯 Дать сегодня ночью, на посту (`POST`)   
🎯 Приготовить ужин, сходить в ПУД(`PUT`), он полностью изменился как его попросили (`PUT` полностью переписывает сущность в переданную сущность)       
🎯 Поставить ему патчь на игру (`PATCH` не стирает игру, а дописывает только то что передали, не цепляя остальное)       
🎯 Удалить ему игру       
🎯 Прокинуть предварительные опции, что бы пробить по безопасности, стоит ли вообще общатся с этим человеком(`OPTION`)    


---

</details>


---

</details>

<details>
<summary> <sup>⭐</sup>❓ Чем <code>PUT</code> отличается от <code>PATCH</code>?</summary>

---

🎯 `PUT`  
&emsp;&emsp; 👆 Изменяет полностью сущность в то состояние которое передали  

🎯 `PATCH`   
&emsp;&emsp; 👆 Изменяет только те поля которе передали  

<details>
<summary> 🧠 Образ для заучивания</summary>

---

ТПШКА размышляя между видами общения `PUT|PATCH` думала как лучше поступить:

🎯 Приготовить ужин, сходить в ПУД(`PUT`), он полностью изменился как его попросили (`PUT` полностью переписывает сущность в переданную сущность)          
🎯 Поставить ему патчь на игру (`PATCH` не стирает игру, а дописывает только то что передали, не цепляя остальное)

---

</details>


---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что за метод <code>OPTIONS</code>, зачем?</summary>

---

👆🏽 Предварительные запросы (`Preflight Requests`)

🔹 Обычно используют для каких-то технических предзапросов   
&emsp;&emsp; 👆 Например `JWT` или `CORS`

<details>
<summary> 🧠 Образ для заучивания</summary>

---

Тпшка  пробрасывает опциональные предварительные подмигивания, для проверки безопасности, стоит ли вообще общатся с этим человеком  

---

</details>

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> ❓ Какие бывают заголовки </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

<details>
<summary> 🔹 Общего назначения </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `Content-Type`: `image/gif`  
&emsp;&emsp; 👆 Тип передаваемого контента

🎯 `Content-Length`: `43`  
&emsp;&emsp; 👆 Длина передаваемого контента

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

&emsp;&emsp;&emsp;&emsp; 👆 Могут быть как в запросах, так и в ответах

<br>

<details>
<summary> 🔹 Заголовки запроса </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `Host`: `net.test.com`    
&emsp;&emsp; 👆 Имя хоста куда идет запрос

🎯 `User-Agent`: `Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.5) Gecko/20091102 Firefox/3.5.5 (.NET CLR 3.5.30729)`      
&emsp;&emsp; 👆 Данные о браузере

🎯 `Refer`: `https://net.test.com/`    
&emsp;&emsp; 👆 Отображает `URL` предыдущей странички, с которой прешел пользователь, прежде чем слать запрос с текущей странички

🎯 `Accept`: `*/*`  
&emsp;&emsp; 👆 Описывает какие типы данных может принять клиент

🎯 `Accept-Language`: `en-us,en;q=0.5`    
&emsp;&emsp; 👆 Желаемый перевод контента

🎯 `Accept-Encoding`: `gzip,deflate`  
&emsp;&emsp; 👆 Разрешает сжимать передаваемый контент

🎯 `Cookie`: `id=99;foo=bar`      
&emsp;&emsp; 👆 Клиентские куки

🎯 `Authorization`: `Basic bXl1c2VyOm15cGFzcw==`      
&emsp;&emsp; 👆 Может хранить в себе jwt ключь


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

&emsp;&emsp;&emsp;&emsp; 👆 Уточняют информацию запроса, или задают некие логические условия

<br>

<details>
<summary> 🔹 Заголовки ответа </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `Cache-Control`: `max-age=3600, public`     
&emsp;&emsp; 👆 Данные кеширования

🎯 `Content-Type`: `text/html; charset=UTF-8`  
&emsp;&emsp; 👆 Описывает возвращаемый контент

🎯 `Content-Disposition`: `attachment; filename="download.zip"`  
&emsp;&emsp; 👆 Указывает браузеру открыть окно скачивания указанного файла

🎯 `Location`: `https://test.com/`  
&emsp;&emsp; 👆 Указывает куда перенаправить запрос

🎯 `Set-Cookie`: `skin=noskin; path=/; domain=.amazon.com; expires=Sun`    
&emsp;&emsp; 👆 Куки устанавливаемые сервером


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

&emsp;&emsp;&emsp;&emsp; 👆 Возвращают дополнительные данные от сервера

<br>

<details>
<summary> 🧠 Образ для заучивания</summary>

---

За головку?
ТП-шка может сама захотеть взять
Ее могу попросить

Какие данные важны в любом случаи? 

<details>
<summary> Общие данные?</summary>

----

🎯 Что это за тип вообще(тип контента)?      
🎯 Какая у него длина у его контента(длинна контента)?    


----

</details>

<details>
<summary> Когда сама запрашивает(хочет)?</summary>

----

🎯 Спрашивает имя (`host куда идет запрос`)

🎯 Узнает что нравится, чем пользуется (`браузер, юзер агент`)

🎯 Говорит откуда приехала (`Refer, референс`)

🎯 Рассказывает какие типы данных может принять  (`Accept`)

🎯 Раскажет на каких языках говорит  (`Accept-Language`)

🎯 Спрашивает нужно ли сжать по сильнее  (`Accept-Encoding`)

🎯 Угощает печенькой  (`Cookie`)

🎯 Дает номер телефона для постоянной связи `(Authorization: jwt-token)`

----

</details>

<details>
<summary> Когда просят?</summary>

----

🎯 Спрашиет сколько дадут кеш (`Cache-Control`)

🎯 Тип возвращаемого контента (``)

🎯 Принимает чаевые печеньки (`set-cookie: куки установленные сервером`)

----

</details>

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> ❓ Какие бывают коды ответа? </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

 🔹 `1XX`  
&emsp;&emsp; 👆 Информационные

 🔹 `2XX`  
&emsp;&emsp; 👆 Успешно выполненные

 🔹 `3XX`  
&emsp;&emsp; 👆 Редиректы

 🔹 `4XX`  
&emsp;&emsp; 👆 Ошибка клиента

 🔹 `5XX`  
&emsp;&emsp; 👆 Ошибка сервера

<details>
<summary> 🧠 Образ для заучивания</summary>

---

🎯 Инфа `1XX` Процентов       
🎯 Нас ждет `2XX` процентов успеха   
🎯 Обратился к серваку, он ответил `3XX` и редиректнул тебя на тракториста       
🎯 В комнате трактористка, на меня смотрели `4` недовольных клиента из каждого угла, так как думали ошибка на клиенте, и виноват фронт     
🎯 Но после `5-х` бекендеров отправили работать на север, так как `500`-ка это вообще-то ошибка сервера    




---

</details>


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> <sup>⭐</sup>❓ Иногда можно встретить выгрузку картинок с разных субдоменов, для чего?</summary>

---

🎯 `http.1` не поддерживает более `6` паралелльных соединений от одного доменного имени     
&emsp;&emsp; 👆 Это ограничение можно хакнуть путем раскидывания запросов между поддоменами   
  


---

</details>

<br>

<details>
<summary> <sup>⭐</sup>❓ В чем отличие между http1 и http2?</summary>

---

🔹 В `http2` добавился такой процесс как мультиплексирование       
&emsp;&emsp; 👆 Если по простому то `http2` поддерживает возможность делать несколько запросов по одному соединению   

🔹 Передает данные используя бинарный формат, вместо текстового     
&emsp;&emsp; 👆 Тем самым снижая нагрузку на преобразование данных 

🔹 Позволяет указывать приоритеты запросам    

🔹 Сервер может отправлять клиенту потенциально нужные данные, еще до того как клиент их запросил  

---

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**