## Поиск на заданной позиции с флагом 'y'

> Флаг позволяющий оптимизировать поиск с указанной позиции

### 🚩 Для поиска с указанного индекса есть два способа

🔹 Регулярное выражение с флагом `g`

&emsp;&emsp; 👆 Будет искать с указанного индекса до конца строки
```javascript
const regExp = /best/g
const searchString = 'my PC best of the best'

regExp.lastIndex = 2

const result = searchString.match(regExp) // 👉🏼 ['best', 'best']
```

<br>
<br>

🔹 Регулярное выражение с флагом `y`
&emsp;&emsp; 👆 Будет искать совпадения, начиная с указанного индекса, но до конца строки искать не будет

&emsp;&emsp;&emsp;&emsp; 🎯 Флаг `y` заставляет искать с указанного индекса  
&emsp;&emsp;&emsp;&emsp; 🎯 Ищет пока строка начиная с указанного индекса совпадает с указанным регулярным выражаением  
&emsp;&emsp;&emsp;&emsp; 🎯 Как только строка перестает совпадать, возвращаеться результат и поиск останавливаеться  
&emsp;&emsp;&emsp;&emsp; 🎯 Остановка дальнейшего сравнения как раз и обеспечивает оптимизацию, сокращая кол-во сравнений

```javascript
const regExp = /best/y
const searchString = 'my PC best of the best'

regExp.lastIndex = 6

const result = searchString.match(regExp) // 👉🏼 ['best', index: 6, input: 'my PC best of the best', groups: undefined]
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**