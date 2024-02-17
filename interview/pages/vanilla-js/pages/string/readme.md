# Работа со стоками

<details>
<summary> Как указать перенос строки?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

`\r\n`  
👆 Можно запомнить как`row new`

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как описать табуляцию?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

`\t`  
👆 tab  
  


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как указать неразрывный пробел?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

`&nbsp;`  
👆 no break space

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как можно получить отдельный символ строки?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Каждый символ в строке, включая пробелы, можно получить по индексу, как элемент массива      

```javascript
'abcd'[1] // 👉🏼 b  
```
  
----
  
🎯 Через метод `chartAt(index)`  

```javascript
'abcd'.charAt(1) // 👉🏼 b 
```


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как изменить регистр строки?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
'abc'.toUpperCase()  // 👉🏼 'ABC'
'ABC'.toLowerCase()  // 👉🏼 'abc'
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как проверить наличие подстроки в тексте?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
'test function includes'.includes('function') // 👉🏼 true
```

<details>
<summary> <sup>⭐</sup>❓ Как начать поиск с определенной позиции?</summary>

---

Указать вторым параметром индекс символа с которого начнется поиск наличия подстроки   

```javascript
'test function includes'.includes('function', 12) // 👉🏼 false
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как проверить наличие подстроки, по регулярному выражению?</summary>

---


```javascript
const str = 'test includes method'
const regForCheckIcludes = /method/

regForCheckIcludes.test(str) // 👉🏼 true
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как посчитать кол-во искомых подстрок в тексте?</summary>

---

Если в регулярном выражении указать флаг `g`, то метод `test` запоминает индекс найденного совпадения в свойство `lastIndex`, и начнет поиск с него, при повторном вызове `test`, на этом же выражении   
👆 Таким образом флаг `g` позволяет нам пройтись циклом по строке в поисках совпадений, итерируя кол-во совпадений пока `test` возвращает `true`    

```javascript
const countIncludes = (wordForCount, str) => {
    const reg = new RegExp(wordForCount, 'g');
    let count = 0;

    while (reg.test(str)) {a
        count++
    }    
    
    return count
}

const str = 'test includes method, and test count of includes';
const wordForCount = 'test';

const includesQuantity = countIncludes(wordForCount, str)

console.log(includesQuantity)
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как начать поиск по регулярному выражению с определенной позиции ?</summary>

---

🎯 Добавить регулярному выражению `g` флаг      
🎯 Указать в свойстве регулярного выражения `lastIndex` индекс стартовой позиции поиска      

```javascript
const str = 'test includes method, and test count of includes';
const regForSearch = /test/g
regForSearch.lastIndex = 10

regForSearch.test(str)
```

---

</details>


<details>
<summary> <sup>⭐</sup>❓ Как можно реализовать проверку совпадений, без методов <code>js</code>?</summary>

---

🎯 Пройтись циклом по искомой строке     
🎯 Начинаем сравнивать с первой буквы  
🎯 Переходим дальше       
    
```javascript
const str = 'test includes method, and test count of includes';
const searchWord = 'method'
let searchedWordWasFind = false

for(let i = 0; i < str.length; i++) {
    let isStrOnRageEqual = true
    
    for(let y = 0; y < searchWord.length; y++) {
        const strLetter = str[i + y]
        const wordLetter = searchWord[y]
        
        if (strLetter !== wordLetter) {
            isStrOnRageEqual = false
            break;
        }
        
    }
    
    if (isStrOnRageEqual) {
        searchedWordWasFind = true
        break;
    }
    
}

console.log(searchedWordWasFind);
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как оптимизировать данное решение, избегая лишних передвижений по массиву?</summary>

---

Применить алгоритм двух указателей:   
🎯 Начать поиск с двух сторон  
🎯 Сравнивать буквы с двух сторон    
🎯 При поялвении ошибки, перешагивать на кол-во шагов уже пройденных с стартового индекса  
  


```javascript

const str = 'test includes method, and test count of includes';
const searchWord = 'method'
let searchedWordWasFind = false

// 'test includes method, and test count of includes'
//  ^    ^

// 'method'
//  ^    ^
```

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)


</details>

<details>
<summary> Как проверить, начинается ли строка с указанной подстроки?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Применить метод `'str'.startsWith()`  

```javascript
const str = 'test includes method, and test count of includes';
const searchingStartSubstring = 'test'

console.log(str.startsWith(searchingStartSubstring)) // 👉🏼 true      
```

<details>
<summary> <sup>⭐</sup>❓ Как проверить что строка начинается с фразы <code>Привет Дима|Саша|Сережа</code>, используя методы <code>startWidth</code>, при этом не дублирувать проверку фразы <code>Привет</code></summary>

---

🎯 Используем карирование для фиксации конфигов   
🎯 Используем `startsWith` с вторым параметром `startPosition`        
&emsp;&emsp; 👆 Указывает на индекс символа, с которого начнется поиск совпадения  

🎯 Можно так же ускорить обход массива, алгоритмом двух указателей  


```javascript
const str = 'Привет Дима';
const repeatWord = 'Привет ';
const userList = ['Саша', 'Дима', 'Сережа']
let hasStrOneOfStartSubstr = false
 
    
const carryCheckWordFn = (repeatWord) => {
    const isStartsWithRepeatWord = str.startsWith(repeatWord);
    const repeatWordLength = repeatWord.length;
    
    return (word) => {
        return isStartsWithRepeatWord && str.startsWith(word, repeatWordLength)
    }
}

const isNameAfterHellow = carryCheckWordFn(repeatWord) 

for(let i = 0; i < userList.length; i++) {
    const name = userList[i];
    
    if (isNameAfterHellow(name)) {
        hasStrOneOfStartSubstr = true;
        break;
    }
    
}

console.log(hasStrOneOfStartSubstr); 
```

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как проверить, заканчивается ли строка на подстроку?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Использовать метод `endsWith()`

```javascript
const str = 'best test';
const substr = 'test'

console.log(stt.endsWith(substr)) // 👉🏼 true
```

<details>
<summary> <sup>⭐</sup>❓ Как проверить заканчивается ли строка на подстроку, в ситуации когда в конце строки всегда есть три лишних цифры, которые нужно исключить с конца при проверке, но при этом оставить их в самой строке?</summary>

---

```javascript
const strList = [
    'working with string 324',
    'test string methods 743',
    'title for article 743'
]
```

<details>
<summary> ✅ Ответ</summary>

---

```javascript
const strList = [
    'working with string324',
    'test string methods743',
    'title for article562'
]
const searchFinishSubstrin = 'methods'

const isStrFinishOnSubstringExeptNSymbol = (exeptSymbolCount) => {
    return (str, endSubstring) => {
        const positionOfStrFinish = str.length - exeptSymbolCount
        return str.endsWith(endSubstring, positionOfStrFinish)
    }
}

const isStrFinishOnSubstringExept3Symbol = isStrFinishOnSubstringExeptNSymbol(3);

for (let str of strList) {
    console.log(str, isStrFinishOnSubstringExept3Symbol(str, searchFinishSubstrin))
}
```

---

</details>

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как получить индекс символа, где началось совпадаение строки?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
'my String'.indexOf('Str') // 3
```

<details>
<summary> <sup>⭐</sup>❓ Какая ошибка в данном коде?</summary>

---

```javascript
const str = 'my string'

if (str.indexOf('s')) {
    // action after find  
}
```

<details>
<summary> ✅ Ответ</summary>

---

🎯 Если буква `s` будет первая в строке, `indexOf` вернет `0`    
🎯 `if` не отработает, хотя символ был в строке   
🎯 Работу с `indexOf` нужно проверять следующим способом      

```javascript
if ('string'.indexOf('s') !== -1) {
    // action after find  
}
```

---

</details>

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как получить индексы начала всех совпадений, пользуясь только <code>indexOf</code> методом и циклами?</summary>

---

```javascript
const getAllMatchesIndex = (str, searchString) => {
    const allMatchesIndex = [];
    
    if (str, searchString) {
        let pointerPosition = 0;

        while (pointerPosition !== -1) {
            const searchIterationIndex = str.indexOf(searchString, pointerPosition);
            pointerPosition = searchIterationIndex;

            if (searchIterationIndex !== -1) {
                const searchStringLength = searchString.length;
                allMatchesIndex.push(searchIterationIndex);
                const nextIterationPointerPosiotion = searchIterationIndex + searchStringLength
                pointerPosition = nextIterationPointerPosiotion
            } 

        }
    }
    
    return allMatchesIndex;
}

const allMatchesIndex = getAllMatchesIndex('has letter "s" on short string', 's');
console.log(allMatchesIndex);
```

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как получить индекс последнего совпадения, если их может быть несколько?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Для этого есть метод `lastIndexOf`  

<details>
<summary> <sup>⭐</sup>❓ Этот метод требует полифил, напиши его</summary>

---

```javascript
const customLastIndexOf = (str, searchSubstr) => {
    const searchSubstrlength = searchSubstr.length;
    const searchStrlength = str.length;
    let foundIndex = -1;
    
    if (searchStrlength >= searchSubstrlength) {
        
        for (let i = searchStrlength - 1; i >= 0; i--) {
            const searchSubstrinStartIndex = i - (searchSubstrlength - 1);
            
            if (searchSubstrinStartIndex < 0) {
                break;
            } else {
                const searchSubStrIteration = str.slice(searchSubstrinStartIndex, i + 1);    
                
                if (searchSubStrIteration === searchSubstr) {
                    foundIndex = searchSubstrinStartIndex;
                    break;
                } 
                
            }
            
        }    
        
    }
    
    return foundIndex;
}

console.log(customLastIndexOf('test', 'st'));
```

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как получить индекс символа, где началось первое совпадаение строки по регулярному выражению?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Берем метод `search`  
🎯 У него такая же логика, только по мимо искомой строки можно забрасывать регулярное выражение    
🎯 Нет второго параметра `startIndex`       


<details>
<summary> <sup>⭐</sup>❓ Как найти все совпадения, имея на вооружении только метод <code>search</code> и циклы?</summary>

---

```javascript
const getAllMatchesIndex = (str, searchReg) => {
    const allMatchesIndex = [];
    let pointerPosition = 0;
    let sliceSymbolCount = 0;
    let slicingString = str;
    
    while (pointerPosition != -1) {
        const searhingStrIndex = slicingString.search(searchReg);
        pointerPosition = searhingStrIndex;
        
        if (searhingStrIndex != -1) {
            const foundStrIndexFromGlobalString = searhingStrIndex + sliceSymbolCount
            slicingString = slicingString.slice(searhingStrIndex + 1);
            sliceSymbolCount += searhingStrIndex+1;
            allMatchesIndex.push(foundStrIndexFromGlobalString);
        }
        
    }
    
    return allMatchesIndex;
}

const allMatchesIndex = getAllMatchesIndex('has letter "s" on short string', new RegExp(/[s]/g));
console.log(allMatchesIndex);
```

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как получить нужное кол-во символов после указанного символа?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Для этого есть метод `substr(i, n)`, он берен `n` сиволов, начав с `i` символа  

<details>
<summary> <sup>⭐</sup>❓ Как получить все совпадения, при помощи методов <code>indexOf</code> и <code>substr</code> </summary>

---

```javascript
const getAllMatches = (str, searchString) => {
    const allMatches = [];
    
    if (str, searchString) {
        let pointerPosition = 0;

        while (pointerPosition !== -1) {
            const searchIterationIndex = str.indexOf(searchString, pointerPosition);
            pointerPosition = searchIterationIndex;

            if (searchIterationIndex !== -1) {
                const searchStringLength = searchString.length;
                allMatches.push(str.substr(searchIterationIndex, searchStringLength));
                const nextIterationPointerPosiotion = searchIterationIndex + searchStringLength
                pointerPosition = nextIterationPointerPosiotion
            } 

        }
    }
    
    return allMatches;
}

const allMatches = getAllMatches('has letter "s" on short string', 's');
console.log(allMatches);
```

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какие есть особенности у <code>substr(i, n)</code></summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Принимает отрицательный `i`   

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>'test'.substr(1, -1)</code></summary>

---

Пустую строку, так как `substr` не принимает отрицательный `n`   

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>'test'.substr(-2, 1)</code></summary>

---

`s`    
👆 Указывает что старт начнеться с второго символа с конца, и будет взять один символ  

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>'test'.substr(1, 0)</code></summary>

---

Пустую строку, так как указали что берем `0` символов  

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>'test'.substr(1)</code></summary>

---

`est`, без `n` берет весь остаток, начиная с символа под индексом 1  

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как получить подстроку в промежутке указанном индексами?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `slice(startIndex, indexBeforeFinish)`        
&emsp;&emsp; 👆 Вырезает любые слайсы из строки, даже с переди назад       

🎯 `substring(startIndex, indexBeforeFinish)`  
&emsp;&emsp; 👆 Просто вынимает подстроку по указанным индексам, без лишней гибкости        

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как получить остаток строки после указанного символа?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `'test'.slice(1)` 👉🏼 `'est'`

🎯 `'test'.substring(1)` 👉🏼 `'est'`  

🎯 `'test'.substr(1)` 👉🏼 `'est'`        
    


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какие особенности есть у <code>slice(startIndex, indexBeforeFinish)</code>?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)  

🎯 Принимает отрицательное число `indexBeforeFinish`      

🎯 Если `startIndex` больше `indexBeforeFinish`, вернется пустая строка            
&emsp;&emsp; 👆 Обязывает самостоятельно проверять правильность порядка `startIndex` и `indexBeforeFinish`      
  
<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>'test'.slice(1, 1)</code></summary>

---

Вернется пустая строка   

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>'test'.slice(2, 1)</code></summary>

---

Вернет пустую строку  

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>'test'.slice(1, 0)</code></summary>

---

Вернет пустую строку   
👆 Так как если `indexBeforeFinish` не отрицателен и меньше чем `startIndex`, метод вернет пустую строку   

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>'test'.slice(1)</code></summary>

---

`est`, по умолчанию режет от указанного символа до конца    

---

</details>


<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>'test'.slice(0)</code></summary>

---

Вернет всю строку, от нулевого символа, до последнего   

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>'test'.slice(1, 50)</code></summary>

---

`est`, если `indexBeforeFinish` больше чем остаток, метод вернет все доступные символы   

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>'test'.slice(1, 'test'.length)</code></summary>

---

`est`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>'test'.slice(1, 'test'.length - 1)</code></summary>

---

`es`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как откинуть один символ с конца</summary>

---

```javascript
'string&'.slice(0, -1)
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>'test'.slice(1, -1)</code></summary>

---

`es`  

🎯 Начинает брать с 1 символа с начала, и откинет один символ с конца

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>'test'.slice(1, -4)</code></summary>

---

Вернеться пустая строка.   
👆 Если второй указатель указывает за первый, вернется пустая строка

---

</details>



![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)


</details>

<details>
<summary> Какие особенности есть у <code>substring(startIndex, indexBeforeFinish)</code>?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Преобразует отрицательные индексы в `0`          
🎯 Успешно отработает если `startIndex` больше чем `indexBeforeFinish`, поменяв их местами      

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>'test'.substring(0, 0)</code></summary>

---

Вернет пустую строку  

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>'test'.substring(0, 1)</code></summary>

---

`t`   

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>'test'.substring(3, 2)</code></summary>

---

`s`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>'test'.substring(1)</code></summary>

---

`est`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>'test'.substring(1, 1000)</code></summary>

---

`est`  
👆 Если `indexBeforeFinish`, больше остатка, метод вернет все доступные символы    

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>'test'.substring(1, -2)</code></summary>

---

`t`

🎯 `-2` преобразуется `0`      
🎯 `indexBeforeFinish: 0` меньше чем `startIndex: 1`      
🎯 Меняются местами      
🎯 `'test'.substring(0, 1)`      
🎯 Возращает первый символ `t`      


---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как отрезать один символ с конца, используя <code>substring()</code></summary>

---

```javascript
const str = 'test' 
str.substring(0, str.length - 1)
```

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как найти совпадения по регулярному выражению?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Используя метод `'str'.match(regExp)`  

<details>
<summary> <sup>⭐</sup>❓ Что вернет данный код <code>"best of the best".match(/best/)</code>?</summary>

---

`{0: 'best', index: 0}`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как получить индекс начала совпадений?</summary>

---

Прилетает в поле `index`   

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как получить результат поиска из скобочных групп?</summary>

---

Все что идет после нулевого элемента массива это данные из скобочных групп в порядке очереди   

```javascript
let myString = "I love JavaScript";

let result = myString.match(/(Java|Gaba)(Script|Scripca)/);

console.log(result.slice(1)) // ['Java', 'Script']  
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как дать метку конкретной скобочной группе, и получить результат поиска метки?</summary>

---

Используем конструкцию `?<name>`

```javascript
let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
let str = "2019-04-30";

let groups = str.match(dateRegexp).groups;

console.log(groups.year); // 2019
console.log(groups.month); // 04
console.log(groups.day); // 30
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как получить строку в которой велся поиск, из переменной результата поиска?</summary>

---

Строка в которой поиск в случаи успешного нахождения попадает в свойство `input`

```javascript
let myString = "I love JavaScript";

let result = myString.match(/JavaScript/);

console.log(result.input) // "I love JavaScript"  
```

👆 Это может быть полезно, когда результат поиска уже улетел куда-то в другие функции, далеко от строки поиска, которая где-то нужна    

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как получить все совпадения из строки?</summary>

---

Нужно указать флаг `g` в регулярном выражении      
👆 В таком случаи теряются дополнительные данные о скобочных группах, индексе совпадения и строке поиска, просто возвращается массив совпадений        
  
```javascript
"best of the best".match(/best/g) // ['best', 'best'] 
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Какая ошибка тут допущена?</summary>

---

```javascript
let myString = "best of the best"

let result = myString.match(/rest/);

if (result.length > 0) {
    console.log(result[0])    
}
```

<details>
<summary> ✅ Ответ</summary>

---

🎯 Если подстрока не найденна, вне зависимости от флага, метод вернет `null`     
🎯 В таком случаи проверка на `length` у `null` вбыросит ошибку   

---

</details>

---


</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какой еще есть способ получить все совпадения по регулярному выражению?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

`string.matchAll(regExp)`

<details>
<summary> <sup>⭐</sup>❓ В чем его недостаток?</summary>

---

🎯 Требует полифил, не везде поддерживается  
🎯 Возвращает не массив, а псевдомассив(итерируемый объект)          
&emsp;&emsp; 👆 Может в тихую вылезти боком, и требовать лишних преобразований в массив  

🎯 В случаи отсутсвия совпадений возвращает не `null`, а пустой итерируемый объект   
&emsp;&emsp; 👆 Требует больше манипуляций для проверки на пустоту    

---

</details>

<details>
<summary> <sup>⭐</sup>❓ В чем его преимущества над обычным <code>match</code>?</summary>

---

🎯 При поиске группы совпадений, возвращает массив с совпадаениями и доп данными к каждому совпадению   

```javascript
let myString = "best of the best";

const result = Array.from(myString.matchAll(/(best)/g));

if (result.length) {
    
    // Первое совпадение  
    const firstMatch = result[0]
    
    console.log(firstMatch[0])        // 🎯 Все совпадение
    console.log(firstMatch[1])        // 🎯 Первые скобки
    console.log(firstMatch.length)    // 🎯 Длинна масива (совпадние + скобочные группы)

    // Дополнительная информация:  
    console.log( firstMatch.index );  // 🎯 Индекс начала совпадения: 7
    console.log( firstMatch.input );  // 🎯 Строку в которой велся поиск
}
```


---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как из регулярного выражения, сделать поиск по строке на совпадения?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

У регулярок есть метод `regExp.exec(str)`   

<details>
<summary> <sup>⭐</sup>❓ Что возвращает пустой поиск от<code>exec</code></summary>

---

`null`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как работает с флагом <code>g</code> и без него</summary>   

---

🎯 С флагом `g` работает идентично `test` - возвращает результат, меняет `lastIndex` и при след вызове начнет поиск с него    

🎯 Без флага `g` работает идентично `match` - `res[0]` совпадение, остальные элементы массива это скобочные группы, + свойства `input`, `length`, `group`    

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Найди первое совпадение при помощи <code>exec</code></summary>

---

```javascript
const reg = /test/    
const str = 'best test'    

const res = reg.exec(str);    

console.log(res[0]);    
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как найти все совпадения</summary>

---

```javascript
const getAllMatch = (inputReg, str) => {
    let isWhile = true;
    const searchReg = RegExp(inputReg, 'g');
    const allMatches = [];

    while (isWhile) {
        const res = searchReg.exec(str);
        isWhile = Boolean(res);
        
        if (res) {
            allMatches.push({value: res, index: searchReg.lastIndex});
        }
        
    }
        
    return allMatches
}

const reg = /best/g
const str = "best of the best";

const allMatch = getAllMatch(reg, str);
console.log(allMatch);
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Какая ошибка тут допущена?</summary>

---

```javascript

const reg = /best/g
const str1 = "best of the best";
const str2 = "best of the rest";

const res1 = reg.exec(str1);
const res2 = reg.exec(str2);

console.log(res1);
console.log(res2);
```

<details>
<summary> ✅ Ответ</summary>

---

Используеться одно и то же регулярное выражение для поиска в разных строках  

🎯 Первый поиск отрабатывает успешно, и меняет следующий индекс поиска        
🎯 Второй поиск не находит слово на старте, так как юзает то же регулярное выражение, где поиск идет не с начала   

---

</details>

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)


</details>

<details>
<summary> Как выполнить поиск с заменой?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

При помощи метода `str.replce(search, replaceData)`

<details>
<summary> <sup>⭐</sup>❓ Как удалить все запятые из строки?</summary>

---

```javascript
const clearAllComa = (str = '') => {
    
    return str.replace(',', '')
}

const res = clearAllComa('I love JavaScript, but i dont like alghoritms');  
console.log(res);
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как обернуть все найденные цифры в круглые скобки?</summary>

---

```javascript
const str = '12 test 153 replace 6 method';

const res = str.replace(/[1-9]+/g, `($&)`);
console.log(res);
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как вставить символ <code>$</code>, в заменяемо значение?</summary>

---

Используем конструкцию `$$` 

```javascript
const str = '12 test 153 replace 6 method';

const res = str.replace(/[1-9]+/g, `$$`);
console.log(res);
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как получит более мощный контроль над заменяемым значением?</summary>

---

Передать функцию в заменяемое значение.      
В функции можно получить доступ к:    
🎯 Найденному значению   
🎯 К индексу  
🎯 К скобочныи и именнованным группам      

👆 Таким образом можно написать какие слова как заменять, оборачивать, извлекать и тд

```javascript
const myString = "user: John Smith"
myString.replace(/(\w+) (?<surname>\w+)/i, (match, name, surname, offset, input, groups) => {
  
  console.log('mathch',match)                 // 👉🏼 'John Smith'
  
  console.log('group first',name)             // 👉🏼 'John'

  console.log('group second(named)', surname) // 👉🏼 'Smith'

  console.log('ofset', offset)                // 👉🏼 6 

  console.log('search string: ', input)       // 👉🏼 'user: John Smith'

  console.log('only named group: ', groups)   // 👉🏼 {surname: "Smith"}

  return `${name}`
}) // 👉🏼 user: John 
```

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как объединить элементы массива, используя разделитель?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
const data = ['my', 'test', 'string'];

const newString = data.join(', ') // 👉🏼 'my, test, string'
console.log(newString);
```

<details>
<summary> <sup>⭐</sup>❓ Что будет если ничего не прокидывать в <code>join()</code>?</summary>

---

Все склеится через запятую, без пробелов `'my,test,string'`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что будет если указать пустую строку в параметрах <code>join('')</code>?</summary>

---

Склеит все без пробелов `'myteststring'`  

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что будет если указать пробел в параметрах <code>join(' ')</code>?</summary>

---

Склеит все через пробел `'my test string'`, не оставляя пробела в конце   

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Напиши метод <code>join</code>, своими руками</summary>

---

```javascript
const join = (arr, joinSymbol) => {
    let res = arr[0]
    const arrLength = arr.length 
    
    if (arrLength > 1) {
        
        for(let i = 1; i < arrLength; i++) {
            
            res += joinSymbol+arr[i]
            
        }
        
    }
    
    return res;
}
const data = ['my', 'test', 'string'];
const res = join(data, ', ');
console.log(res);
```

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как разделить строку, на элементы массива?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Используем `split(splitter)`   

```javascript
const str = 'my, test, string';
console.log(str.split(', '));
```

<details>
<summary> <sup>⭐</sup>❓ Как отработает <code>split</code>, если <code>splitter</code>, будут находится в начале строки?</summary>

---

Положит в первый элемент массива, то что было до сплитера - `пустую строчку`

```javascript
const str = ', my, test, string';
console.log(str.split(', ')); // ['', 'my', 'test', 'string']
```

---

</details>


<details>
<summary> <sup>⭐</sup>❓ Как при помощи метода <code>split</code>, можно собрать все слова в массив, избавившись от html тегов?</summary>

---

🎯 `split` Так же принимает регулярные выражения   
🎯 Можно взять `html`, теги как разделители, которые нужно отключить       
🎯 А все остальное забросить в массив      


```javascript
const htmlString = 'Yes <h1>my title</h1>, is <b>bold</b>, but <i>italik</i> it is cool'

const clearArray = htmlString.split(/ ?<.+?>,? ?| /);
console.log(clearArray);
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Реализуй свой метод <code>split</code></summary>

---

```javascript
const split = (str, splitter) => {
    const regExp = RegExp(splitter, 'g')
    const splitedRes = []
    let hasDataForSearch = true
    let prevIterationIndex = 0;
    let prevIterationMatchLength = 0;
    
    while (hasDataForSearch) {
        const res = regExp.exec(str);
        hasDataForSearch = Boolean(res);
        
        if (hasDataForSearch) {
            const sliceStartIndex = prevIterationIndex + prevIterationMatchLength
            const sliceOfSplit = str.slice(sliceStartIndex, res.index);

            splitedRes.push(sliceOfSplit);
            
            prevIterationIndex = res.index
            prevIterationMatchLength = res[0].length
        }
        
    }
    
    const indexOfSymbolAfterLastMatch = prevIterationIndex + prevIterationMatchLength
    const hasSliceOnFinish = indexOfSymbolAfterLastMatch + 1 !== str.length
    
    if (hasSliceOnFinish) {
        const finishSlice = str.slice(indexOfSymbolAfterLastMatch);
        
        splitedRes.push(finishSlice)
    }
    
    return splitedRes;
    
}

const str1 = 'my, test, string';
const spliter1 = ', '

console.log(split(str1, spliter1));

const str2 = 'Yes <h1>my title</h1>, is <b>bold</b>, but <i>italik</i> it is cool';
const spliter2 = / ?<.+?>,? ?| /

console.log(split(str2, spliter2));
```

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как получить код символа и символ из кода?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
'a'.charCodeAt() // 97

String.fromCodePoint(97) // a
```

<details>
<summary> <sup>⭐</sup>❓ Где это может быть полезно?</summary>

---

🎯 Когда задача зависит от алфавитного порядка, например для реализации шифра цезаря      

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>


---

<details>
<summary> Задачки</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Получить расширение файла      
🎯 Посчитать слова      
🎯 Разобрать `url`      
🎯 Взять каждое слово, где есть совпадение       
🎯 Полиндром с пробелами и апер кейсом      

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**