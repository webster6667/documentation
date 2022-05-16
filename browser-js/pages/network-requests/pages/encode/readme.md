# Кодирование
> Формирование строки в валидный формат для GET запроса

💠 **encodeURI`(uri)`**   
👆🏽 Нужен для кодирования `uri` целиком, со всеми `GET` параметрами

```javascript
encodeURI('http://site.com/привет'); // 👉🏼 http://site.com/%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D1%82
```

💠 **decodeURI`(uri)`**   
👆🏽 Нужен для декодирования `uri` целиком, со всеми `GET` параметрами

💠 **encodeURIComponent`(componentString)`**   
👆🏽 Нужен для кодирования одного параметра `uri`  

&emsp;&emsp;&emsp;&emsp; 👆 Отличиаеться от `encodeURI`, тем, что кодирует в одном параметре, символы, которые не кодируються у группы  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👉🏼 Например `&`

```javascript
let music = encodeURIComponent('Rock&Roll'),
    url = `https://google.com/search?q=${music}`;

console.log(url) // 👉🏼 https://google.com/search?q=Rock%26Roll
```

💠 **decodeURIComponent`(componentString)`**   
👆🏽 Нужен для декодирования одного параметра `uri`

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**