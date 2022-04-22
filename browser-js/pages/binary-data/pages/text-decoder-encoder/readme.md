# TextDecoder/Encoder
> Встроенный объект TextDecoder позволяет декодировать данные из бинарного буфера в обычную строку (если в буфер была помещена строка)

💠 **TextDecoder`()`**   
👆🏽 Преобразует буффер в строку

```javascript
let uint8Array = new Uint8Array([72, 101, 108, 108, 111]); //Создаст буфер с указанными значениями 

console.log( new TextDecoder().decode(uint8Array) ); // 👉🏼 Hello
```

<br>

💠 **TextEncoder`()`**   
👆🏽 Преобразует строку в буффер

```javascript
let encoder = new TextEncoder();

let uint8Array = encoder.encode("Hello");
console.log(uint8Array); // 👉🏼 72,101,108,108,111
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**