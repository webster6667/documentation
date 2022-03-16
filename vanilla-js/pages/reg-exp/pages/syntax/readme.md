## 🚩 Флаги
> Символы в конце регулярного выражения описывающие дополнительную логику поиска

💠 `i` - Поиск не зависимо от регистра

💠 `g` - Поиск всех совпадений, без него только первое

💠 `m` - Поиск якорей `^`, `$` по всем строкам, без него только по первой строке

💠 `y` - <a href="pages/flag-y/readme.md">Поиск в указанном месте</a>, без продолжения поиска по всей строке

<br>

## 🚩 Шаблоны
> Символы описывающие логику группы регулярных выражений в несколько символов 

💠 `.` - любой одиночный символ      


💠 `&` конец строки  
&emsp;&emsp; 🔹 Без флага `m`, поиск ведется только в первой строке    
```javascript
const regExp = /.+row$/m, // 👉🏼 Взять все строчки оканичивающиеся на 'row'
      str = `first row  
             second column`

str.match(regExp) // 👉🏼 ['first row']
```

<br>

💠 `^` начало строки  
&emsp;&emsp; 🔹 Без флага `m`, поиск ведется только в первой строке
```javascript
const regExp = /^start.+/m, // 👉🏼 Взять все строчки начинающиеся на 'start'
    str = `start row
           finish row`

str.match(regExp) // 👉🏼 ['start row']
```


<br>

💠 `\d\n` перевод строки

```javascript
const regExp = /\w+ row\n/gm, // 👉🏼 Взять все строки после которых идет перевод строки
      str = `first row
             second row
             third row`

str.match(regExp) // 👉🏼 ['first row', 'second row']
```

<br>

💠 \ - экранирование спец символов
```javascript
const regExp = /1\+1/gm, // 👉🏼 Экранировать символ + в регулярном выражении
    str = `1+1
           2+2`

str.match(regExp) // 👉🏼 ['1+1']
```

💠 `?` - описывает не обязательные символы или группы символов
```javascript
const regExp = /25(px)?/gm, // 👉🏼 Выделит 25 с px в конце, и без него 
    str = `25
           25px`

str.match(regExp) // 👉🏼 ['25', '25px']
```

<br>

💠 `\d` любая цифра

💠 `\D` любой символ, кроме цифры

💠 `\s` пробелы

💠 `\S` любой символ, кроме пробелов

💠 `\w` любая буква

💠 `\W` любой символ, кроме буквы

💠 `\b` конец слова
```javascript
const regExp = /hub\b/g, // 👉🏼 Взять все символы 'hub', находящийся в конце слова
    str = `telegram github resthub`

str.replace(regExp, '') // 👉🏼 'telegram git rest'
```


💠 `\B` не конец слова

```javascript
const regExp = /hub\B/g, // 👉🏼 Взять все символы 'hub', находящийся не в конце слова
    str = `hubspot telehubgram github resthub`

str.replace(regExp, '') // 👉🏼 'spot telegram github resthub'
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**