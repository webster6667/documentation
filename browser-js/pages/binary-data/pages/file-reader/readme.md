# FileReader
> FileReader объект, цель которого читать данные из Blob и File

#### Основные методы:

&emsp;&emsp; 💠 `readAsArrayBuffer(blob)`   
&emsp;&emsp;&emsp;&emsp; 👆 Считать данные как ArrayBuffer


&emsp;&emsp; 💠 `readAsText(blob, ?encoding)`  
&emsp;&emsp;&emsp;&emsp; 👆 Считать данные как строку (кодировка по умолчанию: utf-8)


&emsp;&emsp; 💠 `readAsDataURL(blob)`  
&emsp;&emsp;&emsp;&emsp; 👆 Считать данные как base64-кодированный URL  


&emsp;&emsp;&emsp;&emsp; ⚡️ Самый предпочтительный способ получить доступ к файлу  
&emsp;&emsp;&emsp;&emsp; если его никуда не нужно отправлять

&emsp;&emsp; 💠 `abort()`  
&emsp;&emsp;&emsp;&emsp; 👆 Отменить операцию

<br>

#### События процессов:

🎯 `loadstart`  
&emsp;&emsp; 👆 Чтение начато

🎯 `progress`  
&emsp;&emsp; 👆 Срабатывает во время чтения данных

🎯 `load`  
&emsp;&emsp; 👆 Нет ошибок, чтение окончено

🎯 `abort`  
&emsp;&emsp; 👆 Вызван `abort()`

🎯 `error`  
&emsp;&emsp; 👆 Произошла ошибка.

🎯 `loadend`   
&emsp;&emsp; 👆 чтение завершено (успешно или нет)

```html
<input type="file" onchange="readFile(this)">

<script>
function readFile(input) {
  let file = input.files[0];

  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function() {
    console.log(reader.result);
  };

  reader.onerror = function() {
    console.log(reader.error);
  };

}
</script>
```

📗 Альтернативным методом получение `URL`, `Blob` файла, являеться `URL.createObjectURL` 

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**