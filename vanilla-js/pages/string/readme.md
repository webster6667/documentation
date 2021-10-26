# Работа с строками

* **<a href="#special-characters">Спец символы</a>**
* **<a href="#singl-symbol">Отдельный символ</a>**
* **<a href="#case">Изменение регистра</a>**
* **<a href="#search-string">Поиск подстроки</a>**
* **<a href="#get-string">Получение подстроки</a>**
* **<a href="#split">Разбить строку, на элементы массива, по разделителю</a>**
* **<a href="#join">Склеить строку из элементов массива, используя разделитель</a>**
* **<a href="#search-replace">Поиск с заменой</a>**
* **<a href="#symbol-code">Коды символов</a>**

 ## 🚩 <a name="special-characters">Спец символы</a> 

🔹 `\r\n` - перенос строки  
🔹 `\t` - табуляция

<br>

## 🚩 <a name="singl-symbol">Получить отдельный символ</a>

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
    
## 🚩 <a name="case">Изменение регистра</a>

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
    
## 🚩 <a name="search-string">Поиск подстроки</a>

<br>

💠 **myString.includes`(subStr)`**  
👆🏽 Ищет подстроку по всему тексту
```javascript
'abc'.includes('ab') // true
```
&emsp;&emsp; 📗 **'[`a, b`, c]'**   
&emsp;&emsp;&emsp;&emsp;  🎯 `ab`, есть в `abc`

<br><br>

💠 **regExp.test`(stringToSearch)`**   
👆🏽 Ищет совпадение в `stringToSearch`, по регулярному выражению

<br>

&emsp;&emsp; 🔹 Вызывается на самом регулярном выражении  
&emsp;&emsp;&emsp;&emsp; 👆 А не на строке, так как это метод регулярки

&emsp;&emsp; 🔹 С флагом `g`, может начинать поиск с указанного индекса  
&emsp;&emsp;&emsp;&emsp; 👆 Так как `regExp` хранит в себе свойство `lastIndex`, указывающие индекс начала поиска       
```javascript
const regExp = /best/g
regExp.lastIndex = 6

const result = regExp.test('best of the last') // => false
```


&emsp;&emsp; 🔹 Без флага `g`, возвращает `true/false`         

&emsp;&emsp; 🔹 С флагом `g`, работает следующим образом  
&emsp;&emsp;&emsp;&emsp; 🎯 Возвращает найденное совпадени              

&emsp;&emsp;&emsp;&emsp; 🎯 Записывает в `regExp` свойство `lastIndex`, индекс символа совпадения

&emsp;&emsp;&emsp;&emsp; 🎯 При повторном вызове `exec` у этого `regExp`, поиск начнется с `lastIndex`  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 Это позволяет посчитать все совпадения в строке

&emsp;&emsp;&emsp;&emsp; 🎯 Когда `exec` вернет `null`, `lastIndex` будет установлен `0` 

&emsp;&emsp;&emsp;&emsp; 🛑  При переиспользовании `regExp` для разных строк, лучше устанавливать `regExp.lastIndex = 0`  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 Так как это может привести, к сложно уловимому багу

```javascript
const regExp = /(best)/g,
      searchString = 'best of the best'

let result,
    count = 0

while (result = regExp.test(searchString)) { // 🎯 Будет идти по совпадениям, пока result не вернет false
  count++
}

console.log(count) // => 2
```

<br><br>

💠 **myString.startsWith`(subStr, startIndex = 0)`**  
👆🏽 Проверяет начинается ли текст искомыми символами(`subStr`)

<br>

&emsp;&emsp; 🔹 `startIndex`: индекс символа с которого начнется сравнение  
&emsp;&emsp;&emsp;&emsp; 👆 Включая символ с индексом `startIndex`         
 
```javascript
'abcd'.startsWith('abc') // true


'abcd'.startsWith('bc', 1) // => true
```

&emsp;&emsp; 📗 **'a, [`b, c,` d]'**  
&emsp;&emsp;&emsp;&emsp; 🎯 Поиск начнется с символа с индексом `1` => `b`      
&emsp;&emsp;&emsp;&emsp; 🎯 `bcd` начинается на `bc`

<br><br>

💠 **myString.endsWith`(subStr, length = myString.length)`**  
👆🏽 Проверяет заканчивается ли строка искомыми символами(`subStr`)

<br>

&emsp;&emsp; 🔹 `length`: кол-во символов в которых будет вестить поиск  
&emsp;&emsp;&emsp;&emsp; 👆 Отсчет ведется с лева на право         

```javascript
'abcd'.endsWith('cd') // => true


'abcd'.endsWith('bc', 3) // => true
```

&emsp;&emsp; 📗 **'[a, `b, c,`] d'**  
&emsp;&emsp;&emsp;&emsp; 🎯 Поиск будет вестись в диапозоне трех символов, от начала      
&emsp;&emsp;&emsp;&emsp; 🎯 `abc` заканчивается на `bc`
   
<br><br>

💠 **myString.indexOf`(subStr)`**    
👆🏽 Возвращает индекс символа где началось совпадения, либо `-1`    

<br>

&emsp;&emsp; 🛑 Важно делать проверку именно на `!== -1`  
&emsp;&emsp;&emsp;&emsp; 👆 Если засунуть `indexOf` в `if` без проверки на `-1`     
&emsp;&emsp;&emsp;&emsp; Найденный первый символ в строке вернет `0`, и тело `if` не отработает
   
&emsp;&emsp; ⚡ `if(~myString.indexOf(searchStr))`     
&emsp;&emsp;&emsp;&emsp; 👆 Хак для избежание сравнениие с `-1`, работает для небольших строк  

```javascript
'abcd'.indexOf('bc') // => 1

'abcd'.indexOf('ab') // => 0

'abcd'.indexOf('top') // => -1
```
&emsp;&emsp; 📗 **'[a, `b, c`, d]'**  
&emsp;&emsp;&emsp;&emsp; 🎯 Совпадение с подстрокой `bc` началось на символе `b`  
&emsp;&emsp;&emsp;&emsp; 🎯 Вернется его индекс => `1`

<br><br>

💠 **myString.search`(regExp)`**    
👆🏽 Возвращает индекс символа где началось совпадения по `regExp`, либо `-1`    

<br>

&emsp;&emsp; 🔹 Находить только первое совпадение      

&emsp;&emsp; 🛑 Важно делать проверку именно на `!== -1`  
&emsp;&emsp;&emsp;&emsp; 👆 Если засунуть `search` в `if` без проверки на `-1`     
&emsp;&emsp;&emsp;&emsp; Найденный первый символ в строке вернет `0`, и тело `if` не отработает
   
&emsp;&emsp; ⚡ `if(~myString.search(regExp))`     
&emsp;&emsp;&emsp;&emsp; 👆 Хак для избежание сравнениие с `-1`, работает для небольших строк  

```javascript
'abcd'.search('bc') // => 1

'abcd'.search('ab') // => 0

'abcd'.search('top') // => -1
```
&emsp;&emsp; 📗 **'[a, `b, c`, d]'**  
&emsp;&emsp;&emsp;&emsp; 🎯 Совпадение с подстрокой `bc` началось на символе `b`  
&emsp;&emsp;&emsp;&emsp; 🎯 Вернется его индекс => `1`

<br>

## 🚩 <a name="get-string">Получение подстроки</a>

<br>

💠 **myString.slice`(startIndex, indexBeforeFinish = myString.length)`**    
👆🏽 Берет символы, начиная с индекса `startIndex`, заканчивая символом перед `indexBeforeFinish`

<br>

&emsp;&emsp; 🔹 Возвращает новую независимую строку      

&emsp;&emsp; 🔹 Если `startIndex`, больше `indexBeforeFinish` вернет пустую строку   

&emsp;&emsp; 🔹 Если не указать `indexBeforeFinish`, выборка будет происходить от `startIndex` до конца строки   
&emsp;&emsp;&emsp;&emsp; 👆 `'abcd'.slice(1)` = `'bcd'`    

&emsp;&emsp; 🔹 Принимает `indexBeforeFinish` с отрицательным числом  
&emsp;&emsp;&emsp;&emsp; 👆 Тогда отсчет конечной точки выбора, начинается с конца строки

##### С отрицательным indexBeforeFinish
```javascript
let str = 'abcde'

str.slice(1, -1) === slice(1, str.length - 1) // => true
```
   
&emsp;&emsp; 📗 **'[a, `b, c, d,` e]'**    
&emsp;&emsp;&emsp;&emsp; 🎯 `str.length` укажет на следующий индекс после последнего символа      
&emsp;&emsp;&emsp;&emsp; 🎯 Значит будут взяты все символы начиная с `startIndex` до конца строки(`включая последний`)


&emsp;&emsp;&emsp;&emsp; 🎯 `str.length - 1` укажет на индекс последнего символа в строке  
&emsp;&emsp;&emsp;&emsp; 🎯 Значит будут взяты все символы лежащие с `startIndex` до последнего(`не включая последний`)

<br>

##### С положительным indexBeforeFinish
```javascript
'abcd'.slice(1, 3) // => 'bc'
```
&emsp;&emsp; 📗 **'[a, `b, c`, d]'**    
&emsp;&emsp;&emsp;&emsp; 🎯 Будет взят символ с идексом `1` => `b`    
&emsp;&emsp;&emsp;&emsp; 🎯 И все символы справа, до символа с индексом `3` => `c`

<br><br>      

💠 **myString.substring`(startIndex, indexBeforeFinish)`**    
👆🏽 Берет символы, начиная с индекса `startIndex`, заканчивая символом перед `indexBeforeFinish`

<br>

&emsp;&emsp; 🔹 Вернет символы с индексом от 1(`включая 1`) до 3(`не включая 3`)   
&emsp;&emsp;&emsp;&emsp; 👆 ['a', `'b', 'c',` 'd']       

&emsp;&emsp; 🔹 Отрицательные числа приводит к 0  
&emsp;&emsp;&emsp;&emsp; 👆 `'abcd'.substring(-1, 3)` --> `'abcd'.substring(0, 3)`         

&emsp;&emsp; 🔹 Если `startIndex` больше `indexBeforeFinish`, метод поменяет их местами и выборка произойдет верно  
&emsp;&emsp;&emsp;&emsp; 👆 `'abcd'.substring(1, 3) === 'abcd'.substring(3, 1)`    

```javascript
'abcd'.substring(1, 3) // => 'bc'
```      
&emsp;&emsp; 📗 **'[a, `b, c`, d]'**    
&emsp;&emsp;&emsp;&emsp; 🎯 Будет взят символ с идексом `1` => `b`    
&emsp;&emsp;&emsp;&emsp; 🎯 И все символы справа, до символа с индексом `3` => `c`

<br><br>

💠 **myString.substr`(startIndex, quantity = 0)`**  
👆🏽 Берет `quantity` символов, начиная с символа имеющий `startIndex` индекс (`включая`)

<br>

&emsp;&emsp; 🔹 `quantity`: Кол-во символов для выборки, начиная с символа имеющий `startIndex` индекс (`включая`)    
&emsp;&emsp;&emsp;&emsp; 👆 Если указать `quantity` = `0`, то не будет взят даже `startIndex` символ   


&emsp;&emsp; 🔹 Если `length` отрицателен, метод возвращает пустую строку        

&emsp;&emsp; 🔹 Если `quantity` больше количества символов доступных справа, возьмутся только те что доступны   
```javascript
'abcd'.substr(1, 8) // => 'bcd'
```

&emsp;&emsp; 🔹 Принимает `startIndex` с отрицательным числом  
&emsp;&emsp;&emsp;&emsp; 👆 Тогда отсчет символа старта, начинается с конца строки
```javascript
let str = 'abcde'

str.substr(-3, 2) === substr(str.length - 3, 2) // => true
```
&emsp;&emsp; 📗 **'[a, b, `c, d`, e]'**    
&emsp;&emsp;&emsp;&emsp; 🎯 `str.length - 1` укажет на индекс последнего символа в строке    
&emsp;&emsp;&emsp;&emsp; 🎯 `str.length - 3` укажет на индекс третьего символа с конца    
&emsp;&emsp;&emsp;&emsp; 🎯 `quantity` укажет сколько символов взять (`включая startIndex`)

<br><br>

💠 **myString.match`(regexp)`**   
👆🏽 Ищет совпадение в `myString`, по регулярному выражению

<br>

&emsp;&emsp; 🔹 Без флага `g`    
&emsp;&emsp;&emsp;&emsp; 👆 Возвращает больше данных о совпадении
 
```javascript
let myString = "I love JavaScript";

let result = myString.match(/(Java)(Script)/);

console.log(result[0])        // 🎯 Все совпадение
console.log(result[1])        // 🎯 Первые скобки
console.log(result[2])        // 🎯 Вторые скобки
console.log(result.length)    // 🎯 Длинна масива (совпадние + скобочные группы)

// Дополнительная информация:
console.log( result.index );  // 🎯 Индекс начала совпадения: 7
console.log( result.input );  // 🎯 Строку в которой велся поиск
```


&emsp;&emsp; 🔹 С флагом `g`  
&emsp;&emsp;&emsp;&emsp; 👆 Возвращает меньше деталей(`только массив совпадений`)      
```javascript
let myString = "best of the best";

let result = myString.match(/(best)/g);

console.log(result[0] );     // 🎯 Первое совпадение
console.log(result[1] );     // 🎯 Второе совпадение
console.log(result.length ); // 🎯 Кол-во совпадений
```

&emsp;&emsp; 🔹 Вне зависимости от флага, возвращает null, при отсутствии совпадений   
&emsp;&emsp;&emsp;&emsp; 👆 Может прозойти ошибка типов, для избежания, лучше привести результат к одному типу   
```javascript
let myString = "best of the best";

let result = myString.match(/rest/);

console.log(result);        // 🎯 => null
console.log(result.length); // 🎯 Ошибка: у null нет свойства length

let result = myString.match(/rest/) || [];

console.log(result);        // 🎯 => []
console.log(result.length); // 🎯 length пустово массива равно 0
```  

<br>
<br>

💠 **myString.matchAll`(regexp)`**   
👆🏽 Ищет совпадение в `myString`, по регулярному выражению

<br>

&emsp;&emsp; ❗ Новый метод, может потребовать полифил      

&emsp;&emsp; 🔹 Выдает ошибку в `regExp` без флага `g`     

&emsp;&emsp; 🔹 Возвращает не массив, а итерируемый объект    
&emsp;&emsp;&emsp;&emsp; 🎯 Для приведения к массиву использовать `Array.from(resultObject)`     
&emsp;&emsp;&emsp;&emsp; 🎯 Работает с `for of`, без приведения к массиву  

<br>

&emsp;&emsp; 🔹 При отсутствии совпадений, возвращает пустой итерируемый объект, а не `null`      

&emsp;&emsp; 🔹 Каждое совпадение содержит в себе информацию как в результате `match`, без флага `g`
```javascript
let myString = "best of the best";

let result = Array.from(myString.matchAll(/(best)/g)),
    firstCoincidence = result[0] 

console.log(firstCoincidence[0])        // 🎯 Все совпадение
console.log(firstCoincidence[1])        // 🎯 Первые скобки
console.log(firstCoincidence.length)    // 🎯 Длинна масива (совпадние + скобочные группы)

// Дополнительная информация:
console.log( firstCoincidence.index );  // 🎯 Индекс начала совпадения: 7
console.log( firstCoincidence.input );  // 🎯 Строку в которой велся поиск    
```

<br><br>

💠 **regExp.exec`(stringToSearch)`**   
👆🏽 Ищет совпадение в `stringToSearch`, по регулярному выражению

<br>

&emsp;&emsp; 🔹 Вызывается на самом регулярном выражении  
&emsp;&emsp;&emsp;&emsp; 👆 А не на строке, так как это метод регулярки

&emsp;&emsp; 🔹 С флагом `g,` может начинать поиск с указанного индекса  
&emsp;&emsp;&emsp;&emsp; 👆 Так как `regExp` хранит в себе свойство `lastIndex`, указывающие индекс начала поиска       
```javascript
const regExp = /best/g
regExp.lastIndex = 6

const result = regExp.exec('best of the last') // => null
```


&emsp;&emsp; 🔹 Без флага `g`, возвращает результат идентично `match`         

&emsp;&emsp; 🔹 С флагом `g`, работает следующим образом  
&emsp;&emsp;&emsp;&emsp; 🎯 Возвращает найденное совпадени              

&emsp;&emsp;&emsp;&emsp; 🎯 Записывает в `regExp` свойство `lastIndex`, индекс символа совпадения

&emsp;&emsp;&emsp;&emsp; 🎯 При повторном вызове `exec` у этого `regExp`, поиск начнется с `lastIndex`  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 Это позволяет нам найти все совпадения в строке

&emsp;&emsp;&emsp;&emsp; 🎯 Когда `exec` вернет `null`, `lastIndex` будет установлен `0`     
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 Этот алгоритм позволяет написать полифил `mathcAll`   

&emsp;&emsp;&emsp;&emsp; 🛑  При переиспользовании `regExp` для разных строк, лучше устанавливать `regExp.lastIndex = 0`  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 Так как это может привести, к сложно уловимому багу

```javascript
const regExp = /(best)/g,
      searchString = 'best of the best'

let result

while (result = regExp.exec(searchString)) { // 🎯 Будет идти по совпадениям, пока result не вернет null
 
  console.log(result[0])  // 🎯 Все совпадение
  console.log(result[1])  // 🎯 Первые скобки
  
  console.log(result.index) // 🎯 Индекс начала совпадения 
  console.log(result.input) // 🎯 Строка в которой велся поиск
  
}
```

<br>            

## 🚩 <a name="split">Разбить строку, на элементы массива, по разделителю</a>

💠 **myString.split`(delimiter)`**   
👆🏽 Разобьет строку на массив, элементами массива, будут строки между `delimiter`

<br>

&emsp;&emsp; 🔹 Если `delimiter` отсутствует в строке, вернется вся строка в массиве `['myStr']`  

&emsp;&emsp; 🔹 Возвращает новый массив   
&emsp;&emsp;&emsp;&emsp; 👆 Удобно для создания цепи

&emsp;&emsp; 🔹 Принимает регулярное выражение в `delimiter`                
```javascript
console.log('Ben, Jon, Den'.split(',')) // => ["Ben", " Jon", " Den"]
```

<br>

## 🚩 <a name="join">Склеить строку из элементов массива, используя разделитель</a>    

💠 **myString.join`(delimiter = ',')`**   
👆🏽 Склеит элементы массива в строку, разделив их `delimiter`

<br>

&emsp;&emsp; 🔹 Возвращает новую строку

&emsp;&emsp; 🔹 Оставляет пробел в конце

&emsp;&emsp; 🔹 Если не указывать `delimiter`, склеит все через запятую, без пробелов

```javascript
console.log(["Ben", "Jon", "Den"].join("")); // => 'BenJonDen '
console.log(["Ben", "Jon", "Den"].join(" ")); // => 'Ben Jon Den '
console.log(["Ben", "Jon", "Den"].join()); // => 'Ben,Jon,Den '
console.log(["Ben", "Jon", "Den"].join(', ')); // => 'Ben, Jon, Den ' 
```

<br>

## 🚩 <a name="search-replace">Поиск с заменой</a>

<br>

💠 **myString.replace`(searchSubStr || regExp, strToRepalce || replaceFn)`**   
👆🏽 Метод для поиска подстроки и замены


<br>

&emsp;&emsp; 🔹 Аргументом для поиска может быть `строка` или `regExp`
  
&emsp;&emsp; 🔹 Аргументом для замены может быть `строка` или `функция`

<br>  

&emsp;&emsp; 🔹 Аргументом для замены `строка`, работает со спец символами  
&emsp;&emsp;&emsp;&emsp; 🎯 **`$$`**	 - вставляет знак `$`  
```javascript
const myString = "string for replace"

myString.replace(/for/i, "$$") // => 'string $ replace'
```

&emsp;&emsp;&emsp;&emsp; 🎯 **`$&`**	 - вставляет найденное совпадение
```javascript
const myString = "1, 2, three, four"
myString.replace(/\d/g, "[$&]") // => '[1], [2], three, four'
```

&emsp;&emsp;&emsp;&emsp; 🎯 **``"$`"``**	 - вставляет всю строку до совпадения
```javascript
const myString = "string for replace"
myString.replace(/for/i, "[$`]") // => 'string [string ] replace'
```

&emsp;&emsp;&emsp;&emsp; 🎯 **`"$'"`**	 - вставляет всю строку после совпадения
```javascript
const myString = "string for replace"
myString.replace(/for/i, "[$']") // => 'string [ replace] replace'
```

&emsp;&emsp;&emsp;&emsp; 🎯 **`"$n"`**	 - вставляет содержимое `n-й` скобочной группы
```javascript
const myString = "John Smith"
myString.replace(/(\w+) (\w+)/i, '$2, $1') // => 'Smith, John'
```

&emsp;&emsp;&emsp;&emsp; 🎯 **`"$<name>"`** - вставляет содержимое, указанной именнованной скобки
```javascript
const myString = "John Smith"
console.log(myString.replace(/(?<name>\w+) (?<surname>\w+)/i, '$<surname>, $<name>')) // => 'Smith, John'
```

<br>

&emsp;&emsp; 🔹 Аргументом для замены `функция`: **fn`(match, p1, p2, ..., pn, offset, input, groups)`**	

&emsp;&emsp;&emsp;&emsp; 🎯 `match` - найденное совпадение

&emsp;&emsp;&emsp;&emsp; 🎯 `p1, p2, ..., pn` - скобочные группы(`включая именнованные`)      
&emsp;&emsp;&emsp;&emsp; Если в `regExp` нет скобочных групп, этих параметров не будет  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 После `match`, сразу пойдет `offset`   
```javascript
const myString = "user: John Smith"
console.log(myString.replace(/\w+ \w+/i, (match, offset, input, groups) => {
  
  console.log('mathch',match) // => 'John Smith'
  
  console.log('ofset', offset) // => 6 

  return match
}))
```


&emsp;&emsp;&emsp;&emsp; 🎯 `offset` - Индекс символа, на котором началось совпадение

&emsp;&emsp;&emsp;&emsp; 🎯 `input` - Вся строка для поиска

&emsp;&emsp;&emsp;&emsp; 🎯 `groups` - Объект только именнованных скобок

```javascript
const myString = "user: John Smith"
myString.replace(/(\w+) (?<surname>\w+)/i, (match, name, surname, offset, input, groups) => {
  
  console.log('mathch',match)                 // => 🎯 'John Smith'
  
  console.log('group first',name)             // => 🎯 'John'

  console.log('group second(named)', surname) // => 🎯 'Smith'

  console.log('ofset', offset)                // => 🎯 6 

  console.log('search string: ', input)       // => 🎯 'user: John Smith'

  console.log('only named group: ', groups)   // => 🎯 {surname: "Smith"}

  return `${name}`
}) // => 🎯 user: John 
```
   
<br>   
           
## 🚩 <a name="symbol-code">Коды символов</a>
> Используются для более точного определения нажатой клавиши 

<br>

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