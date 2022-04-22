# File
> Объект наслеющейся от Blob

🔹 Можно получить его из `<input type="file" >`

```html
<input type="file" onchange="showFile(this)">

<script>
function showFile(input) {
  let file = input.files[0];

  console.log(`File name: ${file.name}`);
  console.log(`Last modified: ${file.lastModified}`);
  console.log(`type: ${file.type}`);
  console.log(`size: ${file.size}`);
}
</script>
```

🔹 Можно создать самому `new File([fileParts], fileName, ?options)`

&emsp;&emsp; ⚪ `fileParts` - массив значений `Blob/BufferSource/String`  
&emsp;&emsp; ⚪ `fileName` - имя файла, строка    
&emsp;&emsp; ⚪ `options` - необязательный объект со свойством  
&emsp;&emsp;&emsp;&emsp; ⚪ `lastModified` - дата последнего изменения в формате `timestamp`

```javascript
// 👉🏼 Берём любое изображение
let img = document.querySelector('img');

// 👉🏼 Создаём <canvas> того же размера
let canvas = document.createElement('canvas');
canvas.width = img.clientWidth;
canvas.height = img.clientHeight;

let context = canvas.getContext('2d');

context.drawImage(img, 0, 0);


canvas.toBlob(function(blob) {
  // 👉🏼 создаем файл из Blob
  const file = new File([blob], 'my-file.jpg', {type: 'image/png'})
    
  console.log(file)
  
}, 'image/png');
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**