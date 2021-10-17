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
👆🏽 Проверяет начинается ли текст искомыми символами(`subStr`), начиная с (включая),

&emsp;&emsp; 🔹 `startIndex`: индекс символа с которого начнется сравнение  
&emsp;&emsp;&emsp;&emsp; 👆 Включая символ с индексом `startIndex`         
 
```javascript
'abcd'.startsWith('abc') // true


//🎯 Поиск начнется с символа с индексом 1 => 'b'
//🎯 'bcd' начинается на 'bc'
'abcd'.startsWith('bc', 1) // => true
```
<br><br>

💠 **myString.endsWith`(subStr, length = myString.length)`**  
👆🏽 Проверяет заканчивается ли строка искомыми символами(`subStr`)

&emsp;&emsp; 🔹 `length`: кол-во символов в которых будет вестить поиск  
&emsp;&emsp;&emsp;&emsp; 👆 Отсчет ведется с лева на право         

```javascript
'abcd'.endsWith('cd') // => true

//🎯 Поиск будет вестить в 3-x символах => 'abc'
//🎯 'abc' заканчивается на 'bc'
'abcd'.endsWith('bc', 3) // => true
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
&emsp;&emsp; 👆 Хак для избежание сравнениие с `-1`, работает для небольших строк  

<br>

## 🚩 **<a name="#get-string">Получение подстроки</a>**

<br>

💠 **myString.slice`(startIndex, indexBeforeFinish)`**    
👆🏽 Берет символы, начиная с индекса `startIndex`, заканчивая символом перед `indexBeforeFinish`

```javascript
'abcd'.slice(1, 3) // => 'bc'
```

&emsp;&emsp; 🔹 Вернет символы с индексом от 1(`включая`) до 3(`не включая 3`)   
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

      

* **2:** **`'abcd'.substring(1, 3)` = `'bc'`**
    
    * Работает как с массивом ['a', `'b', 'c',` 'd'], вернет символы с индексом от 1(включая) до 3(не включая 3)
    
    * Отрицательные числа приводит к 0 `'abcd'.substring(-1, 3) === 'abcd'.substring(0, 3)`
    
    * Если `startIndex` больше `finishIndex`, метод просто поменяет их местами и выборка произойдет верно `'abcd'.substring(1, 3) === 'abcd'.substring(3, 1)`

<br>    

---

<br>

* **3:** **`'abcde'.substr(1, 3)` = `'bcd'`** - 3 символа от буквы с индексом 1(включая саму букву с индексом 1)
    
    * Указывает сколько символов взять от `startIndex`
    
    * `startIndex` может быть отрицательным, тогда отсчет начала выбора начнется с конца строки   
    `"abcdeaуd".substr(-3, 1) === "abcdeaуd".substr("abcdeaуd".length - 3, 1)`
    
    * если `length` больше колличества символов доступных для выбора, возьмутся только те что доступны `'abcd'.substr(-3, 8)` = `'bcd'`
    
    * если `length` отрицателен, метод возвращает пустую строку
          
<br>    

---

<br>            
           
## **<a name="#symbol-code">Коды символов</a>**
> Используются для более точного определения нажатой клавиши 

Коды букв идут в порядке возрастания и в алфавитном порядке
```javascript
 'A'.charCodeAt() // 65
 'B'.charCodeAt() // 66
```

* **1:** Получить код символа с указанным индексом в строке `'abc'.codePointAt(1)` = `98` код символа `b`

* **2:** Получить код указанного символа `'b'.charCodeAt()` = `98` код символа `b`

* **3:** Получить символы из переданных кодов `String.formCodePoint(98, 99)` = `'bc'` символ этого кода 

* **4:** Получить символы из переданных кодов `String.fromCharCode(98, 99)` = `'bc'` символ этого кода 