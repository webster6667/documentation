# HTTP
👆🏽 Протокол для передачи данных, без сохранения состояния.

<details>
<summary> 💠 Содержимое запроса</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🔹 Метод (**GET**, **POST**, **PUT**, **PATCH**, **DELETE**, **OPTIONS**)    
🔹 Путь к ресурсу    
🔹 Версию протокола  
🔹 Заголовки

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> 💠 Методы запроса</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

 🔹 **GET**   
&emsp;&emsp; 👆 Забирает существующие данные

 🔹 **POST**   
&emsp;&emsp; 👆 Передает данные для создания

 🔹 **PUT**  
&emsp;&emsp; 👆 Изменит все переданные поля указанной сущности, те что не были переданны  - отчистит

 🔹 **PATCH**  
&emsp;&emsp; 👆 Изменит только переданные поля указанной сущности, те что не были переданны - оставляет в прежнем виде

 🔹 **DELETE**  
&emsp;&emsp; 👆 Удаляет запись

 🔹 **OPTIONS**  
&emsp;&emsp; 👆 Позволяет делать предзапросы, для операций вроде jwt или cors

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary>💠 Заголовки </summary>

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


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> 💠 Коды </summary>

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

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**