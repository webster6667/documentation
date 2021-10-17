# Работа с строками

* **<a href="#special-characters">Спец символы</a>**
* **<a href="#singl-symbol">Отдельный символ</a>**
* **<a href="#case">Изменение регистра</a>**
* **<a href="#search-string">Поиск подстроки</a>**
* **<a href="#get-string">Получение подстроки</a>**
* **<a href="#symbol-code">Коды символов</a>**

 ## 🚩 <a name="special-characters">Спец символы</a> 

🔹 `\r\n` - перенос строки  
🔹 `\t` - табуляция

<br>

## 🚩 **<a name="singl-symbol">Получить отдельный символ</a>**:

🔹 Счет символов от `0`, как в массиве  

🛑 Пробелы считаются

<br>

💠 **myString`[index]`**
```javascript
'abc'[1] // => 'b'
```  

<br><br>
   
💠 **myString.charAt`(index)`**  
```javascript
'abc'.charAt(1) // => 'b'
```

<br>
    
## 🚩 **<a name="case">Изменение регистра</a>**

<br>

💠 **myString.toUpperCase`()`**
```javascript
'abc'.toUpperCase() // => 'ABC'
```  

<br><br>

💠 **myString.toLowerCase`()`** ``  
```javascript
'ABC'.toLowerCase() // => 'abc'
```

<br>
    
## 🚩 **<a name="#search-string">Поиск подстроки</a>**

<br>

💠 **myString.includes`(subStr)`**  
👆🏽 Ищет подстроку по всему тексту
```javascript
'abc'.includes('ab') // true
```

<br><br>

💠 **myString.startsWith`(subStr, startIndex = 0)`**  
👆🏽 Проверяет начинается ли текст искомыми символами(`subStr`)

&emsp;&emsp; 🔹 `startIndex`: индекс символа с которого начнется сравнение  
&emsp;&emsp;&emsp;&emsp; 👆 Включая символ с индексом `startIndex`         
 
```javascript
'abcd'.startsWith('abc') // true


'abcd'.startsWith('bc', 1) // => true
//🎯 Поиск начнется с символа с индексом 1 => 'b'
//🎯 'bcd' начинается на 'bc'
```
<br><br>

💠 **myString.endsWith`(subStr, length = myString.length)`**  
👆🏽 Проверяет заканчивается ли строка искомыми символами(`subStr`)

&emsp;&emsp; 🔹 `length`: кол-во символов в которых будет вестить поиск  
&emsp;&emsp;&emsp;&emsp; 👆 Отсчет ведется с лева на право         

```javascript
'abcd'.endsWith('cd') // => true


'abcd'.endsWith('bc', 3) // => true
//🎯 Поиск будет вестить в 3-x символах => 'abc'
//🎯 'abc' заканчивается на 'bc'
```
   
<br><br>

💠 **myString.indexOf`(subStr)`**    
👆🏽 Возвращает индекс символа где началось совпадения, либо `-1`    
```javascript
'abcd'.indexOf('bc') // => 1

'abcd'.indexOf('ab') // => 0

'abcd'.indexOf('top') // => -1
```

&emsp;&emsp; 🛑 Важно делать проверку именно на `!== -1`  
&emsp;&emsp;&emsp;&emsp; 👆 Если засунуть `indexOf` в `if` без проверки на `-1`     
&emsp;&emsp;&emsp;&emsp; Найденный первый символ в строке вернет `0`, и тело `if` не отработает
   
&emsp;&emsp; ⚡ `if(~myString.indexOf(searchStr))`     
&emsp;&emsp;&emsp;&emsp; 👆 Хак для избежание сравнениие с `-1`, работает для небольших строк  

<br>

## 🚩 **<a name="#get-string">Получение подстроки</a>**

<br>

💠 **myString.slice`(startIndex, indexBeforeFinish)`**    
👆🏽 Берет символы, начиная с индекса `startIndex`, заканчивая символом перед `indexBeforeFinish`

```javascript
'abcd'.slice(1, 3) // => 'bc'
```

&emsp;&emsp; 🔹 Вернет символы с индексом от 1(`включая 1`) до 3(`не включая 3`)   
&emsp;&emsp;&emsp;&emsp; 👆 ['a', `'b', 'c',` 'd']   

&emsp;&emsp; 🔹 Возвращает новую независимую строку      

&emsp;&emsp; 🔹 Если `startIndex`, больше `indexBeforeFinish` вернет пустую строку   

&emsp;&emsp; 🔹 Если не указать `indexBeforeFinish`, выборка будет происходить от `startIndex` до конца строки   
&emsp;&emsp;&emsp;&emsp; 👆 `'abcd'.slice(1)` = `'bcd'`    

&emsp;&emsp; 🔹 Принимает `indexBeforeFinish` с отрицательным числом  
&emsp;&emsp;&emsp;&emsp; 👆 Тогда отсчет конечной точки выбора, начинается с конца строки
```javascript
let str = 'abcdeaуd'

str.slice(1, -1) === slice(1, str.length - 1)
```

<br><br>      

💠 **myString.substring`(startIndex, indexBeforeFinish)`**    
👆🏽 Берет символы, начиная с индекса `startIndex`, заканчивая символом перед `indexBeforeFinish`

```javascript
'abcd'.substring(1, 3) // => 'bc'
```

&emsp;&emsp; 🔹 Вернет символы с индексом от 1(`включая 1`) до 3(`не включая 3`)   
&emsp;&emsp;&emsp;&emsp; 👆 ['a', `'b', 'c',` 'd']       

&emsp;&emsp; 🔹 Отрицательные числа приводит к 0  
&emsp;&emsp;&emsp;&emsp; 👆 `'abcd'.substring(-1, 3)` --> `'abcd'.substring(0, 3)`         

&emsp;&emsp; 🔹 Если `startIndex` больше `indexBeforeFinish`, метод поменяет их местами и выборка произойдет верно  
&emsp;&emsp;&emsp;&emsp; 👆 `'abcd'.substring(1, 3) === 'abcd'.substring(3, 1)`    
      

<br><br>

💠 **myString.substr`(startIndex, quantity)`**  
👆🏽 Берет `quantity` символов, начиная с символа имеющий индекс `startIndex`

&emsp;&emsp; 🔹 `quantity`: Кол-во символов для выборки, начиная с `startIndex`      

&emsp;&emsp; 🔹 Если `quantity` больше количества символов доступных справа, возьмутся только те что доступны   
```javascript
'abcd'.substr(1, 8) // => 'bcd'
```   

&emsp;&emsp; 🔹 Принимает `startIndex` с отрицательным числом  
&emsp;&emsp;&emsp;&emsp; 👆 Тогда отсчет символа старта, начинается с конца строки
```javascript
let str = 'abcdeaуd'

str.substr(-3, 1) === slice(str.length - 3, 1)
```      

&emsp;&emsp; 🔹 Если `length` отрицателен, метод возвращает пустую строку      

<br>            
           
## 🚩 **<a name="#symbol-code">Коды символов</a>**
> Используются для более точного определения нажатой клавиши 

&emsp;&emsp; 🔹 Коды букв идут в порядке возрастания и в алфавитном порядке      
```javascript
 'A'.charCodeAt() // 65
 'B'.charCodeAt() // 66
```

<br><br>

💠 **myString.codePointAt`(symbolIndex = 0)`**   
👆🏽 Получить код символа с указанным индексом в строке
```javascript
'abc'.codePointAt(1) // => 98
// 98 код символа `b`
```

<br>
<br>

💠 **myString.charCodeAt`(symbolIndex = 0)`**   
👆🏽 Получить код символа с указанным индексом в строке
```javascript
'abc'.charCodeAt(1) // => 98
// 98 код символа `b`
```

<br>
<br>

💠 **String.fromCodePoint`(symbolCode1, ..., symbolCodeN)`**   
👆🏽 Получить код символа с указанным индексом в строке
```javascript
String.fromCodePoint(98, 99) // => 'bc'
// 98 код символа `b`
// 99 код символа `c`
```

<br>
<br>

💠 **String.fromCharCode`(symbolCode1, ..., symbolCodeN)`**   
👆🏽 Получить код символа с указанным индексом в строке
```javascript
String.fromCharCode(98, 99) // => 'bc'
// 98 код символа `b`
// 99 код символа `c`
```

<br>


### ⟵ **<a href="../../readme.md">Назад</a>** 