# URL
> Встроенный класс для удобного разбора и создания URL адресов

💠 **new URL`(url, base?)`**   

🔹 Конструктор создает относительные адреса 
```javascript
const adminUrl = new URL('/admin/', 'https://domain.ru'), // 👉🏼 https://domain.ru/admin/
      adminPostUrl = new URL('post', adminUrl) // 👉🏼 https://domain.ru/admin/post
```

&emsp;&emsp; 🛑 Если `url` начинаеться с `/`, то у `base` стираеться все что идет после доменного имени 
```javascript
new URL('/post', 'https://domain.ru/admin/api/') // 👉🏼 https://domain.ru/post
```

&emsp;&emsp; 🛑 У пути, попавшего в `base`, перед склейкой с `url`, стираеться все что идет после последнего `/` 
```javascript
new URL('post', 'https://domain.ru/admin/?params=1') // 👉🏼 https://domain.ru/admin/post
```

<br>

🔹 Валидно воспринимаеться в `fetch`, `XMLHttpRequest` и `axios`
```javascript
const url = new URL('post', 'https://domain.ru')

fetch(url)
```

🔹 Разбирает `url` на свойства 

![](/Users/www1/WebSter/doc/browser-js/pages/network-requests/pages/url/img/illustration.png)

🔹 Предоставляет удобные методы для работы с `GET` параметрами

```javascript
const url = new URL('https://google.com/search?query=JavaScript&user=Ben'),
      searchParams = url.searchParams

searchParams.append('age', '25')
searchParams.append('city', 'Moskow')

console.log(url.href) // 👉🏼 https://google.com/search?query=JavaScript&user=Ben&age=25&city=Moskow
```

&emsp;&emsp; 🎯 `append(name, value)`    
&emsp;&emsp;&emsp;&emsp; 👆 Добавить параметр по имени

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 📗 Автоматически кодирует параметры при записи через методы
```javascript
let url = new URL('https://google.com/search');
url.searchParams.append('q', 'test me!');

console.log(url.href) // 👉🏼 https://google.com/search?q=test+me%21
```

&emsp;&emsp; 🎯 `set(name, value)`  
&emsp;&emsp;&emsp;&emsp; 👆 Задать/заменить параметр

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 📗 Автоматически кодирует параметры при записи через методы
```javascript
let url = new URL('https://google.com/search');
url.searchParams.set('q', 'test me!');

console.log(url.href) // 👉🏼 https://google.com/search?q=test+me%21
```

&emsp;&emsp; 🎯 `delete(name)`  
&emsp;&emsp;&emsp;&emsp; 👆 Удалить параметр по имени

&emsp;&emsp; 🎯 `get(name)`  
&emsp;&emsp;&emsp;&emsp; 👆 Получить параметр по имени

&emsp;&emsp; 🎯 `getAll(name)`  
&emsp;&emsp;&emsp;&emsp; 👆 Получить все параметры с одинаковым именем name  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 📗 Такое возможно, например: `?user=John&user=Pete`    

&emsp;&emsp; 🎯 `has(name)`  
&emsp;&emsp;&emsp;&emsp; 👆 Проверить наличие параметра по имени

&emsp;&emsp;🎯 `sort()`  
&emsp;&emsp;&emsp;&emsp; 👆 Отсортировать параметры по имени в алфовитном порядке
```javascript
const url = new URL('https://learn.javascript.ru/?z=3&b=2&a=1')

      url.searchParams.sort()

console.log(url.href) // 👉🏼 https://learn.javascript.ru/?a=1&b=2&z=3
```

🔹 Позволяет перебрать все get параметры

```javascript
const url = new URL('https://google.com/search?query=JavaScript&user=Ben')

for(let [name, value] of url.searchParams) {
    console.log(`${name}=${value}`); // 👉🏼 q=JavaScript
}
```

🔹 Генерирует `url` для `blob` файлов 
```html
<form id="my-form">
    
    <img id="preview-img" />
    
    <br>
    
    <button class="upload-file-btn">
        <input id="input-file" type="file" name="file" accept="image/*">
        Загрузить
    </button>

</form>

<script>
    const inputFile = document.getElementById('input-file'),
          previewImg = document.getElementById('preview-img')
    
    inputFile.onchange = ({target: uploadInput}) => {
        const file = Array.from(uploadInput.files)[0],
                previewUrl = URL.createObjectURL(file) // 👉🏼 Генерирует url для blob
        
        previewImg.src = previewUrl
        
        previewImg.onload = function() {
            URL.revokeObjectURL(previewUrl); // 👉🏼 Отчищает память от сгенерированного url
        };
    
    }
</script>
```

&emsp;&emsp; 🛑 Важно очищать память от созданных `url`  
&emsp;&emsp;&emsp;&emsp; 👆 Так как в `SPA` они накапливаються

&emsp;&emsp; 📗 Альтернативным методом получение `URL`, `Blob` файла, являеться `FileReader()`

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**