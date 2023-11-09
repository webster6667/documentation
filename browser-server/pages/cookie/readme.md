# HTTP Cookie
![illustration](img/illustration.png)
👆🏽 Заголовок `HttpCookie` который хранится на клиенте, и отправляется с каждым `http` запросом  

🔹 В куках храняться примитивные данные в формате `json` или просто строки  
&emsp;&emsp; 👆 Обычно это данные об авторизации, или данных из корзины в формате `json`, либо разные данные аналитики  

🔹 В объект куки можно вносить изменения как на клиенте, так и на сервере  
&emsp;&emsp; 👆 Удобный способ синхронизации различных данных  
&emsp;&emsp; 🛑 Для защиты <ins>[изменения кук со стороны клиента 💬](## "(злоумышлениками)")</ins> , ставим флаг `http-only`  
&emsp;&emsp;&emsp;&emsp; 👆 После этого, эту куку может изменять только сервер

🔹 Максимальный вес одного значения куки, не более `4кб`

🔹 `max` кол-во кук на один домен +- 20 шт

<details>
<summary> 🔹 Пропсы кук </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `path`, указывает на каких страничках будет доступна кука

🎯 `domain`, указывает на каком домене доступна кука  
&emsp;&emsp; 👆 По умолчанию куки доступны только на том доменне, где были созданы, но для того что-бы дочерние поддомены могли получать доступ к кукам из родительского, нужно явно прописать его в domains  
&emsp;&emsp; 👆 Получить доступ к установленным кукам, можно только из поддоменов. куки установленные на другом доменном имени получить невозможно

🎯 `expires`, Указывает дату удаления кук в формате `date.toUTCString()`

🎯 `max-age`, Указывает через какое кол-во секунд с момента установки куки удалить ее

🎯 `сессионные куки`, куки в которых при установке не указали дату удаления(`expires|max-age`)    
&emsp;&emsp; 👆 Такие куки удаляться сразу после закрытия браузера

🎯 `Удаление кук`  
&emsp;&emsp; 👆 Достаточно указать `max-age` 0 или -1

🎯 `secure`  
&emsp;&emsp; 👆 Передавать куку только по `https` протоколу

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>
  
<details>
<summary>📗 На практике</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Это удобно для авторизации    
🎯 Клиент авторизовался, записал свой код авторизации на беке      
🎯 Бек с каждым запросом с клиента будет его читать и проверять      
🎯 Злоумышленник с клиента получить эту куку не сможет  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**