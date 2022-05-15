# Form Data
> Объект представляющий данные html формы

💠 Принимает в конструкто dom элемент `form`    
👆🏽 Читая все поля из него    

```html
<form id="my-form">
    <input type="text" name="name" value="John">
    <input type="text" name="surname" value="Smith">
    <input type="submit">
</form>

<script>
    const form = document.getElementById('my-form'),
          data = new FormData(form), // 👉🏼 Читает все поля из формы, и помещает в объект для оправки
          url = '/'      
    
    form.onsubmit = async (e) => {
        e.preventDefault();
        
        fetch(url, {
            method: 'POST',
            body: data 
        })
        .then((res) => res.json())
    };
</script>
```

<br>

## Методы Form Data 

💠 `formData.append(name, value, fileName?)`  
👆🏽 Добавляет к объекту поле с указанными данными

💠 `formData.set(name, value, fileName?)`    
👆🏽 Заменяет данные в объкте с указанным `name` на указанные данные

💠 `formData.get(name)`  
👆🏽 Читает значение из объекта формы по указанному имени

💠 `formData.delete(name)`  
👆🏽 Удаляет значение из объекта формы по указанному имени

💠 `formData.has(name)`  
👆🏽 Проверяет наличия значение в объекта формы по указанному имени

<br>

📗 **Пропсы**

🔹 `name`   
&emsp;&emsp; 👆 Значение `name` в `input`    

🔹 `value`   
&emsp;&emsp; 👆 Принимает форматы `String/Number/Buffer`

🔹 `fileName`   
&emsp;&emsp; 👆 Имя файла, если в `value` поместили `Buffer`


## Отправка формы с файлом

🎯 Для ассинхронной отправки файла загруженного из формы, нужно поместить его в `FormData`

🎯 Объекты `FormData` всегда отсылаются с заголовком `Content-Type: form/multipart`  
&emsp;&emsp; 👆 Таким образом, поля `<input type="file">` тоже отправляются, как это и происходит при синхронной отправке формы  

```html
<style>
        .upload-file-btn {
            position: relative;
            overflow: hidden;
        }

        .upload-file-btn input {
            position: absolute;
            opacity: 0;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            cursor: pointer;
        }
    </style>
    
    <form id="my-form">
        <input type="text" name="firstName" value="John">
    
        <br>
    
        <img id="preview-img" />
    
        <br>
        
        <button class="upload-file-btn">
            <input id="input-file" type="file" name="file" accept="image/*">
            Загрузить
        </button>
        
        <input type="submit">
    </form>
    
    <script>
        const form = document.getElementById('my-form'),
              inputFile = document.getElementById('input-file'),
              previewImg = document.getElementById('preview-img'),
              url = 'http://localhost:5001/api/upload-entirely'
        
        inputFile.onchange = ({target: uploadInput}) => {
            const file = uploadInput?.files && Array.from(uploadInput.files)[0],
                  reader = new FileReader();

            reader.readAsDataURL(file);

            reader.onloadend = () => {
                const {result: previewUrl} = reader
                previewImg.src = previewUrl;
            }
        }

        form.onsubmit = async (e) => {
            e.preventDefault();
            

            let response = await fetch(url, {
                method: 'POST',
                body: new FormData(form)
            });

            let result = await response.json();
        };


    </script>
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**