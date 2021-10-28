# try/catch
> Конструкция позволяющая устанавливать ловушки ошибок, для корректной обработки, без падения скрипта

💠 **try`{...}`**   
👆🏽 Конструкция запускающая тело внутри себя, с отслеживанием падения скрипта 

<br>

&emsp;&emsp; 🔹 Выдает ошибку при отсутсвии `catch` или `finally`      

&emsp;&emsp; 🔹 Если тело отработало без ошибок, `catch` будет проигнорирован

&emsp;&emsp; 🔹 При возникновении ошибки, управление перейдет в `catch`    
&emsp;&emsp;&emsp;&emsp; 👆 Код после ошибки не выполниться         

&emsp;&emsp; 🔹 `try` увидит ошибку, при вызове `throw new Error()`   
```javascript
try {
  throw new Error('has error')   
} catch(e) {
  console.log(e) // => {name: Error, message: 'has error', stack: ...}
}
```

&emsp;&emsp; 🔹 `try` не увидит ошибку внутри `setTimeout()`, и не сможет ее пробросить    
&emsp;&emsp;&emsp;&emsp; 👆 `try` работает синхронно, на момент выполнения таймаута движок уже покинул конструкцию `try/catch`      
```javascript
try {
  setTimeout(() => {
      throw new Error('has error') 
  }, 0)
  
} catch(e) {
  console.log(e) // => не сработает, ошибка выпадет наружу
}
```

<br>


&emsp;&emsp; 🔹 `try` не увидит синтаксическую ошибку, и не сможет ее пробросить        
&emsp;&emsp;&emsp;&emsp; 👆 Он обрабатывает только синтаксически валидный код   

```javascript
try {
  {{{{{{{{{{{{
} catch(e) {
    console.log("Движок не может понять этот код, он некорректен")
}
```

<br>

##### Синтаксис

```javascript
try {
  'abcd'.toLocaleLowerCasere()
} catch(e) {
  console.log(e) // => Увидит ошибку и обработает без падения скрипта
}
```

<br>
<br>

💠 **catch`(err) {...}`**   
👆🏽 Конструкция ловящая ошибки выпадающие в теле `try`


<br>

&emsp;&emsp; 🔹 Ошибки возникшие внутри `catch`, будут проброшенны верхнему `catch` обработчику   

&emsp;&emsp; 🔹 Не обработанные ошибки можно поймать следующими инструментами  
&emsp;&emsp;&emsp;&emsp; 🎯 в node js: `process.on('uncaughtException', (err, origin) => {...}`        
&emsp;&emsp;&emsp;&emsp; 🎯 в browser js: `window.onerror = function(message, url, line, col, error) {...}`    

<br>
<br>

💠 **finally`{...}`**   
👆🏽 Конструкция, всегда выполняющая свое тело после `try/catch`, **вне зависимости была ошибка или нет**


<br>

&emsp;&emsp; 🔹 Сработает и без объявления `catch`

&emsp;&emsp; 🔹 На практике используеться:    
&emsp;&emsp;&emsp;&emsp; 🎯 Для отстуков вне зависимости от результата  
&emsp;&emsp;&emsp;&emsp; 🎯 Для обнуления переменных после работы `try/catch`
         

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**