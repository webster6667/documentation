# Функции  

<details>
<summary> Что такое функция?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Объект, принимающий в себя аргументы, взаимодействует с ними и что-то возвращает          
🎯 Если не указать `return`, вернет `undefined`  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое чистая функция?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Функция которая при постоянном вызове с одними и теми же аргументами, будет давать один и тот же результат, без сайд эффектов    

<details>
<summary> <sup>⭐</sup>❓ Что такое сайд эффект?</summary>

---

Побочный эффект функции:    

&emsp;&emsp; 🎯 Это когда результат работы функции, зависит от сторонних внешних данных  
&emsp;&emsp;&emsp;&emsp;  👆 Например `localStorage`  

&emsp;&emsp; 🎯 Или когда функция внутри себя изменяет какие-то внешние данные, не явно меняя среду разработки    
&emsp;&emsp;&emsp;&emsp; 👆 Например мутируют объекты, с которыми дальше ведеться работа

---

</details>

<details>
<summary> 🧠 Образ для заучивания</summary>

---

Продавец

🎯 Чистый, когда даешь одну и ту же сумму, всегда дает один и тот же товар         
🎯 Мутный, которому даешь одну и ту же сумму, но в зависимости от его побочных эффектов (нужны деньги, плохие поставки), может возвращать товар разного качества       


---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое <code>function declaration</code></summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Функция обьявленная в основном потоке кода которая    
🎯 Обязательно должна иметь имя  

🎯 Доступна в своей области видимости, еще до выполнения кода      
&emsp;&emsp; 👆 Что позволяет обращатся к ним в основном потоке кода, еще до объявления     

&emsp;&emsp; 👆 Считаю что это особенность которую нужно знать, но не использовать, так как она не совсем явная  

```javascript
function myFunction() {
    console.log('function declaration')
}
```

<details>
<summary> <sup>⭐</sup>❓ Что вернет данная функция?</summary>

---

```javascript
const isDev = true

getEnv() // ?

if (isDev) {
    
    function getEnv() {
        console.log('is dev env')
    }
    
} else {

    function getEnv() {
        console.log('is prod env')
    }
    
}
```

<details>
<summary> ✅ Ответ</summary>

---

`getEnv is not a function`, к `function declarations` можно обратится до ее объявления, только если она не находится в блочной области видимости  

---

</details>

---

</details>

<details>
<summary> 🧠 Образ для заучивания</summary>

---

Что задекларированно пером, не перепишешь топором

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое <code>function expression</code></summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Функция объявленна как чать выражения    
&emsp;&emsp; 👆 На пример оператором присваивания переменной внутри другой функции      
  

🎯 Может быть обьявленна без имени    
&emsp;&emsp; 👆 Так как в случаи отсутсвия имени, берется название переменной в которой она была обьявленна     

🎯 Не доступна до ее объявления  

```javascript
const fnExpression = function () {
    console.log('function declaration')
}
```

<details>
<summary> <sup>⭐</sup>❓ Для чего нужны <code>function expression</code></summary>

---

Для использования условных функций  

```javascript
const isAuth = true

const authUsersHandler = function () {
    console.log('is auth user')
}

const guestHandler = function () {
    console.log('is guest')
}

const callback = isAuth ? authUsersHandler : guestHandler
```

---

</details>

<details>
<summary> 🧠 Образ для заучивания</summary>

---

Экспресс вариант, как черновой, который можно перезаписать   

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как сделать так, что бы по двум разным именам, отрабатывала одна и та же <code>function declaration</code>?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
function getClearNumber(number) {  
    return parseInt(number)
}

// ?

getClearNumber('10px') // 10
getClearInt('10px')    // 10
```

<details>
<summary> ✅ Ответ</summary>

---

Поместисть в переменную ссылку на `function declaration`  

```javascript
function getClearNumber(number) {  
    return parseInt(number)
}

const getClearInt = getClearNumber

console.log(getClearNumber('10px')) // 10
console.log(getClearInt('10px'))    // 10
```

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое рекурсия?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Вызов функции самой себя

<details>
<summary> <sup>⭐</sup>❓ Что такое выход из рекурсии?</summary>

---

Условие, при котором функция перестанет бесконечный вызов самой себя  

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что будет если не реализовать выход из рекурсии </summary>

---

Переполниться стек вызовов, и выпадет ошибка

---

</details>

<details>
<summary> <sup>⭐</sup>❓ По какой логике работает рекурсия?</summary>

---

🎯 В первом колстеке задается создается выход из рекурсии         
🎯 Далее мы заходим в рекурсию с какими-то даннымы   
🎯 Далее функция отрабатывает    
🎯 Записывает куда-то результат своей работы      
🎯 После чего опять вызывает саму себя           
🎯 Уже с новыми данными для выхода из рекурсии    
&emsp;&emsp; 👆 Дочерним объектом, массивом, индексом итерации       
🎯 В последней итерации, если условия выхода из рекурсии верны  
🎯 Функция возвращает сложенный результат последовательно отработавших вызовов стека

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Приведи примеры рекурсий</summary>

---

```javascript
// Умножение первого аргумента самого на себя n кол-во раз    
function pow(number, count) {
    let res = 0
    
    if (count > 0) {
        res += pow(number, count - 1)
    } else {
        return res
    }
     
}

console.log(pow(2, 2))
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Сократи написание этой функции в тернарник</summary>

---

```javascript
// Умножение первого аргумента самого на себя n кол-во раз    
function pow(x, n) {
    return (n == 1) ? x : (x * pow(x, n - 1));
}

pow(2, 3)
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Разложи стек вызовов</summary>

---

`???`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ В каком случаи рекурсии являются лучшим решением?</summary>

---

При работе с структурой данных, повтрояющиейся в глубину неизвестное кол-во раз  

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Приведи пример</summary>

---

<details>
<summary> ✅ Обход рекурсивных массивов</summary>

---

Например посчитать кол-во лайков у всех объектов

```typescript
interface Category {
    id: number,
    name: string,
    likes: number,
    children: A[] | string
}

const categoryList: Category[]  = [
    {
        id: 1,
        name: 'Browser',
        likes: 1,
        children: [
            {
                id: 1,
                name: 'HTML',
                likes: 1,
                children: [
                    {
                        id: 1,
                        name: 'DOM',
                        likes: 1,
                        children: [
                            {
                                id: 1,
                                name: 'dom-editing',
                                likes: 1,
                                children: 'Dom Element Editing',
                            },
                            {
                                id: 2,
                                likes: 1,
                                name: 'dom-element-attr',
                                children: 'Dom Element Attributes'
                            }
                        ],
                    },
                    {
                        id: 2,
                        name: 'Render',
                        likes: 1,
                        children: 'Browser Render'
                    }
                ],
            }
        ]
    },
    {
        id: 2,
        name: 'Backend',
        likes: 1,
        children: 'Backend content'
    }
]


function countCategorysLikes(category: Category[]) {
    let likesCount = 0;
    
    for (let i = 0; i < category.length; i++ ) {
        const itemCategory = category[i]
        
        likesCount += itemCategory.likes
        
        if (Array.isArray(itemCategory.children)) {
            const childLikesCount = countCategorysLikes(itemCategory.children)

            likesCount += childLikesCount
        }
    }
    
    return likesCount
    
}

countCategorysLikes(categoryList);
```

---


</details>

<details>
<summary> ✅ Поиск в <code>Linked List</code> структуре</summary>

---

```javascript
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0; 
    }
    
    append(data) {
        const newNode = new Node(data); 
        const isLinkedListEmpty = !this.head || !this.tail

        if (isLinkedListEmpty) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Записываем в next предыдущей последней ноды новую ноду
            this.tail.next = newNode
            
            // Делаем новую ноду хвостом списка, с next === null
            this.tail = newNode
        }

        this.size++;
        
        return this
    }
}


```

---

</details>

<details>
<summary> ✅ Сравнение объектов</summary>

---

```javascript
const obj1 = {
    name: 'first object',
    children: {
        name: 'child',
        children: 'content'
    },
}

const obj2 = {
    name: 'first object',
    children: {
        name: 'child',
        children: 'content'
    },
}

const isObject = (data) => {
    return data !== null && typeof data === 'object'
}

const isObjectEqual = (object1, object2) => {
    let isEqual = true
    const firstObjectLength = Object.keys(object1).length
    const secondObjectLength = Object.keys(object2).length
    
    const isObjectsHasNotTheSameLength = firstObjectLength !== secondObjectLength
    
    if (isObjectsHasNotTheSameLength) {
        isEqual = false
    } else {
        
        for(let object1Key of Object.keys(object1)) {
            console.log(object1Key, 'comparable key');
            const object1Value = object1[object1Key]
            const object2Value = object2[object1Key]
            const hasObjectValues = isObject(object1Value) && isObject(object2Value)
            const hasTheSameTypes = typeof object1Value === typeof object2Value
            
            if (hasObjectValues) {
                isEqual = isObjectEqual(object1Value, object2Value);
            } else if (hasTheSameTypes) {
                isEqual = object1Value === object2Value
            } else {
                isEqual = false;
            }

            if (!isEqual) {break}
            
        }
        
    }
    
    return isEqual
}

console.log(isObjectEqual(obj1, obj2))
```

---

</details>

---

</details>



![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)


</details>

<details>
<summary> Какие свойства есть у всех функций?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `name`        
👆 Контекстное имя функции  
  

<details>
<summary> <sup>⭐</sup>❓ Что вернет свойство <code>name</code>, в данном случаи</summary>

---

```javascript
let sayHi = function() {
  alert("Hi");
};

alert(sayHi.name); // sayHi  
```

<details>
<summary> ✅ Ответ</summary>

---

`sayHi`, хоть функция и без имени, `js` пытается определить ее из контекста(`контекстное имя`)  

---

</details>

---


</details>

<br>

🎯 `length`  
👆 Кол-во объявленных аргументов в момент объявления  
  
<details>
<summary> <sup>⭐</sup>❓ Чему будет равно <code>length</code>, в следующих вызовах</summary>  

---

```javascript
function f1(a) {}
function f2(a, b) {}
function f3(a, b, ...more) {}

alert(f1.length); // 1
alert(f2.length); // 2
alert(f3.length); // 2
```

<details>
<summary> ✅ Ответ</summary>

---

`length` возвращает только кол-во аргументов описанных во время объявления  
👆 `...rest`, в данном случаи не идет в счет, так как это остаточные не объявленные параметры, и могут быть пустыми

---

</details>

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как получить полный список аргументов когда они уже все проброшены?</summary>

---

Только в момент выполнения функции, испольузуюя псевдомассив `argumants.length`  

---

</details>

<details>
<summary> 🧠 Образ для заучивания</summary>

---

Паспорт, в котором прописаны Имя и возрост  

В нашем случаи `name` и `length`  

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>


<details>
<summary> Что будет если описать функцию с одинаковым именем два раза</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Одна перезатрет другую  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary><code>Named Function Expression</code></summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

<details>
<summary> <sup>⭐</sup>❓ Как можно обеспечить вызов одной и той же функции, используя для этого разные имена?</summary>

---

```javascript
const myFn = function() {
    return myFn.name
}

// MyFn1
// MyFn2
// MyFn3
```

<details>
<summary> ✅ Ответ</summary>

---

Создаем `Function Expression`, и раскладываем ее по разным переменным

```javascript
const myFn = function getName() {
    return getName.name
}

let MyFn1 = myFn
let MyFn2 = myFn
let MyFn3 = myFn
```

---

</details>

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет данная функция</summary>

---

```javascript
let data = function() {
    return data.name
}

let fnInstance = data

data = []

console.log(fnInstance())
```

<details>
<summary> ✅ Ответ</summary>

---

`Cannot read propery of null`, так как `name` берется из конкретной переменной `fn`, которая удаляется  

---

</details>

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как избежать подобной проблеммы?</summary>

---

Использовать `Named Function Expression` 

```javascript
let data = function getName() {
    return getName.name
}

let fnInstance = data

data = []

console.log(fnInstance())
```

---


</details>

<details>
<summary> <sup>⭐</sup>❓ Что такое <code>Named Function Expression</code></summary>

---

Функция объявленная внутри переменной с фиксированным именем, вне зависимости от того в какой переменной она находится    

```javascript
const fn = function myFn() {
    // ...
}
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Зачем нужна <code>Named Function Expression</code></summary>

---

🎯 `Named Function Expression` гарантирует корректное обращение функции самой к себе   
&emsp;&emsp; 👆 Даже если функция будет перемещенна в переменную с другим именем

🎯 Может улучшить читабильность и ясность кода  

```javascript
// Числа фибоначи, каждое след число, равно сумму двух предыдущих     
// Функция должна получить какое число лежит с индексом n, в фибоначи массиве
// [0, 1, 1, 2]
// Рекурсия наполняет стек от искомого индекса до тех пор пока не дойдем до 1 + 1  
// После стек начинает отрабатывать пока не дойдет до получения двух пред чисел, и вернет их сумму  
const findFibonacciNumByIndex = function getFibonacciNumByIndex(n) {

    if (n <= 1) {
        return n;
    } else {
        return getFibonacciNumByIndex(n - 1) + getFibonacciNumByIndex(n - 2);
    }
    
}

const findFibonacci = findFibonacciNumByIndex

findFibonacci(8)
```

---


</details>

<details>
<summary> <sup>⭐</sup>❓ Почему бы не использовать <code>this</code> для получения данных из функции?</summary>

---

Контекст слишком динамичен, и обращение к данным функции из контекста, может привести к трудно уловимым багам  

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Напиши <code>NFE</code> используя функцию стрелку</summary>

---

Немогу, так как за функцией стрелкой нельзя строго закрепить имя, без привязке к переменной   

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как получить список всех аргументов функции?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Они лежат в псевдо массиве `arguments`      
🎯 Так же их можно получить в полноценном массиве, используя оператор `rest`

<details>
<summary> <sup>⭐</sup>❓ Почему <code>arguments</code>, называеться псевдо массивом </summary>

---

Имеет масиво образную структуру, но не являеться полноценным массивом, так не содержит всех методов массива   

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как сделать из <code>arguments</code> полноценный массив?</summary>

---

Закинуть в метод `Array.from(arguments)`, который преобразует псевдомассив в массив

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет данный код?</summary>

---

```javascript
const myFn = (a, b, c) => {
    console.log(arguments)
}
```

<details>
<summary> ✅ Ответ</summary>

---

Ошибку, так как у функции стрелки нет своего `arguments`

---

</details>

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как получить список всех аргументов у стрелки?  </summary>

---

Используя оператор `rest`

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое <code>стрелочная функция</code>?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Более лаконичный способ объявления `function expression`, с рядом особенностей  

🎯 Не имеет собственного `this`      
&emsp;&emsp; 👆 Берет `this` объекта, в котором объявлен  

🎯 Не имеют своего `arguments`       

🎯 Не могут быть конструктором     
&emsp;&emsp; 👆 Вызванны с `new`    
  
🎯 Не имеют своего `super`    
&emsp;&emsp; 👆 Обращаеться к `super` родительской функции  

<details>
<summary> <sup>⭐</sup>❓ Что вернет данный код?</summary>

---

```javascript
const user = {
    name: 'Ben ',
    age: 22,
    getFullInfo() {
       
        const getClearName = function () {
             return `${this.name}`.trim()
        }

        return `${getClearName()} ${this.age}`
    }
}

console.log(user.getFullInfo()); 
```

<details>
<summary> ✅ Ответ</summary>

---

`undefined 22`, т.к `getClearName` создает свой контекст, и не имеет доступа к контексту `user` 

---

</details>

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как это исправить?</summary>

---

Использовать функции стрелки, которые не создают свой контекст, вместо чего берут родительский      

---

</details>

<details>
<summary> <sup>⭐</sup>❓ В каких случая функции стрелки практичней всего?</summary>

---


🎯 При создании функций внутри метода, которым нужен доступ к контексту метода          
&emsp;&emsp; 👆 Позволяет избежать потери контекста, который может произойти при использовании обычной функции имеющей свой контекст

🎯 При объявление колбеков (например для таймаутов)  
&emsp;&emsp; 👆 Подхваченный родительски контекст во время объявления не будет потерян  

🎯 Во всех случаях когда нет необходимости в возможностях обычной функции      
&emsp;&emsp; 👆 Т.к стрелки легковесней и читабильней  
  

---

</details>

<br>

<details>
<summary> 🧠 Образ для заучивания</summary>

---

Летит быстро как стрела, за счет того, что не тянет за собой ничего своего, берет все родительское  

---

</details>



![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое <code>замыкание</code>?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Прием программирования, где одна функция оборачивает другую функцию, раскрывая нам следующие возможности: 

🎯 Сохранения состояние работы экземпляра         
🎯 Инкапсуляция и защита данных от внешнего воздействия  
🎯 Совершенствование обернутых функций декораторами

<details>
<summary> <sup>⭐</sup>❓ Почему замыкани хранит состояние?</summary>

---

🎯 В `JS`, после того как функция отработала, все переменные внутри нее очищаются сборщиком мусора    
&emsp;&emsp; 👆 Это происходит из за потери достижимости этих переменных

🎯 В случаи с замыканием, при инициализации функции обертки мы сразу же объявляем и возвращаем функцию, но не вызываем ее    
🎯 Хоть дочерняя функция не вызванна, она обращается к переменным созданным в функции обертки  
🎯 Таким образом переменные обьявленные в функции обертке, не теряют достижимость, и к ним всегда идет обращение      
🎯 По этому сборщик мусора не обнуляет состояние этих переменных      
🎯 А дочерние функции могут мутировать состояние этих переменных  

---

</details>

<br>

<details>
<summary> 🧠 Образ для заучивания</summary>

---

Замочек, который замыкает в себе состояние переменных  

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое <code>IIFE</code></summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Анонимная самовызывающейся функция

🎯 Синтаксис `(fn)()`      
&emsp;&emsp; 👆 Вместо fn, наша функция `() => {}`    

<details>
<summary> <sup>⭐</sup>❓ Для чего нужна <code>IIFE</code></summary>

---

🎯 Раньше использовалось для реализации модулей с инкапсулированной логикой        


<details>
<summary> 🎯 Сейчас можно использовать для получения функции хранящей состояние в замыкании, избегая лишнего вызова функции оберкти </summary>

----

```javascript
const a = (() => {
    let i = 1
   
   const fn = (a) => {
        return i += a 
   }
   
   return fn
})()

console.log(a(5))
console.log(a(5))
console.log(a(5))
```

----

</details>

<br>

<details>
<summary> 🎯 Реализовать работу с <code>async/await</code> внутри функции, не блокируя основной поток, и избежать лишних оберток и вызовов </summary>

----

```jsx
let successAnalitikSendedCount = 0;

const Component = () => {
    const [value, setValue] = useState('')
    
    const changeHandler = (e) => {
        
        const sendAnaliticData = async () => {
            
           try {
              await axios.post('/analitic')
              successAnalitikSendedCount++
           } catch(e) {
               console.log('error')
           }
           
        }
        
        sendAnaliticData();
        
        setValue(e.target.value)
    }

   // Более элегантный подход с IIFY
   const changeHandlerWithIIFE = (e) => {

      (async () => {
          
         try {
            await axios.post('/analitic')
            successAnalitikSendedCount++
         } catch(e) {
            console.log('error')
         }
         
      })()

      setValue(e.target.value)
   }
    
    
    return <input value={value} onChange={changeHandler} />
}
```

----

</details>

---

</details>

<br>

<details>
<summary> 🧠 Образ для заучивания</summary>

---

🎯 Синтаксис `(fn)()`
&emsp;&emsp; 👆 Левый сосок  

🎯 Название `()() IIFE`
&emsp;&emsp; 👆 Два соска `Function Expression`    
  


---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Можно ли записать какие-то свойства в функцию?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Да, функция это такой же объект, куда можно записывать свойства и методы

<details>
<summary><img src="https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/ts.svg" height="20px" title="ts" >&emsp; Методы</summary>

---

```typescript
const fn = (a) => {
  return a
}

fn.logger = (data) => {
  return `log: ${data}`
}

console.log(fn.logger('my-data')) // 👉🏼 'log: my-data'
console.log(fn('my-data')) // 👉🏼 'my-data'
```

---

</details>    

<details>
<summary> <sup>⭐</sup>❓ Что будет если переопределить свойство, после вызова функции?</summary>

---

```javascript
const getData = () => {
    getData.calledCount = getData.calledCount ? ++getData.calledCount : 1  
    return {}
}

getData() 
getData()
console.log(getData.calledCount) // 2
getData.calledCount = 0
console.log(getData.calledCount) // 0
```

Оно переопределится

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Чем это может быть опасно?</summary>

---

Любой внешний код может изменить эти данные

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как можно защитится от этого</summary>

---

🎯 Обернуть в `прокси`          
&emsp;&emsp; 👆 Это больше костыль, для тех случаев когда нет способа изменить подход

```javascript
const getData = () => {
    getData.calledCount = getData.calledCount ? ++getData.calledCount : 1  
    return {}
}

const proxedGetData = new Proxy(getData, { // (*)
    set(target, prop, val) {
        if (prop !== 'calledCount') {
            target[prop] = val
            return true;   
        } else {
            return false
        }
    }
});

proxedGetData()
proxedGetData()

proxedGetData.calledCount = 0

console.log(proxedGetData.calledCount, 'result')
```

🎯 Использовать `Object.freeze`, не вариант так как свойство должно быть изменяемым

🎯 Использовать замыкание

```javascript
const initGetData = () => {
    let calledCount = 0
    return () => {
        ++calledCount
        
        return {}
    }
}

const getData = initGetData()

getData()
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Замыкание обеспечивают сохранность данных, но не прокидывают их наружу, что делать если хочешь использовать замыкание для защиты перезаписи данных, но они так же нужны тебе снаружи</summary>

---

Выкинуть метод, на получение данных

```javascript
const initGetData = () => {
    let calledCount = 0  
    
    const instance = () => {
        ++calledCount

        return {}
    }

    instance.getCalledCount = () => calledCount
    
    return instance
}

const getData = initGetData()

getData()
getData()

console.log(getData.getCalledCount())
```


---

</details>

<details>
<summary> <sup>⭐</sup>❓ По копаемся в безопасности сохранения данных, при замыкании</summary>

---

🎯 Давай представим что пишем внешнюю библиотеку, для каких-то банков.   
🎯 В которых любое изменение данных может повлечь за собой милионные затраты  
🎯 Вернемся к функции `getData` и проверим ее на безопасность      
🎯 Какие опасности может нести эта функция  
🎯 Как их исправить

```javascript
const initGetData = () => {
    let processData = {
        operationCount: 0
    }

    const instance = () => {
        processData.operationCount = ++processData.operationCount

        return {}
    }
    
    instance.getProcessData = () => processData
    
    return instance
}

const getData = initGetData()

getData()
getData()

console.log(getData.getProcessData())
```

<details>
<summary> ✅ Ответ</summary>

---

🎯 Хакер высекает через какую функцию фронт высчитывает кол-во необходимых операций  
🎯 Не тривиальным образом подсовывает исполняемый скрипт    
&emsp;&emsp; 👆 Например через какое-то браузерное расширение пользователя

🎯 1.Может перезаписать метод, и вернуть нужное ему кол-во операций для выполнения

🎯 2.Даже если метод защищен проксями или `Object.freez`, он возвращает ссылку на объект, который можно изменить

---  

Есть разные способы защиты

1. Для метода   
   &emsp;&emsp; 🎯 Защитить перезапись через `Proxy`, как обычное свойство   
   &emsp;&emsp; 🎯 Добавить метод через `Object.defineProperty` установив `writable: false`

```javascript
const initGetData = () => {
    let processData = {
        operationCount: 0
    }

    const instance = () => {
        processData.operationCount = ++processData.operationCount

        return {}
    }
    
    Object.defineProperty(instance, 'getProcessData', {
        value: () => processData,
        writable: false,
    });    
    
    return instance
}

const getData = initGetData()

getData()
getData()

getData.getProcessData = () => {
    console.log('test')
}

console.log(getData.getProcessData()) // {operationCount: 2}
```

2. Для данных     
   🎯 Выделить под каждое свойства отдельный метод     
   🎯 Возвращать не ссылку на объект, а новый клонированный объект



---

</details>

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Сейчас мы получаем кол-во вызовов каждого инстанса, как получить общее кол-во вызовов всех инстансов?</summary>

---

```javascript
const initGetData; 

const getFirstData = initGetData()

getFirstData()
getFirstData()

const getSecondData = initGetData()

getSecondData()
getSecondData()

console(initGetData.getInstanceCalledCount())
console(getFirstData.getCalledCount())
console(getSecondData.getCalledCount())
```

<details>
<summary> ✅ Ответ</summary>

---

Необходим `IIFE`, который внутри создает обертку, в которую можно записать нужные методы, достающие данные из своего лексического окружения

```javascript
const initGetData = (() => {
    let allInstanceCalledCount = 0
    
    const initWrapper = () => {
        let instanceCalledCount = 0
        
        const instance = () => {
            ++allInstanceCalledCount;
            ++instanceCalledCount;
            return {}
        }
        
        instance.getCalledCount = () => {
            return instanceCalledCount
        }
        
        return instance
    }

    initWrapper.getAllInstanceCalledCount = () => {
        return allInstanceCalledCount
    }
    
    return initWrapper
})()

const getFirstData = initGetData()

getFirstData()
getFirstData()

const getSecondData = initGetData()

getSecondData()
getSecondData()

console.log(initGetData.getAllInstanceCalledCount())
console.log(getFirstData.getCalledCount())
console.log(getSecondData.getCalledCount())
```

---

</details>

---

</details>

<details>
<summary> <sup>⭐</sup>❓ В каких случаях юзать свойства, а в каких замыкания?</summary>

---

🔹 Используем замыкание    
&emsp;&emsp; 🎯 Для защиты данных от внешнего воздействия  
&emsp;&emsp; 🎯 Для отделения данных каждого инстанса друг от друга  
&emsp;&emsp; 🎯 Для данных используемых только в разработке  
&emsp;&emsp; 🎯 Для функций оберток    
&emsp;&emsp; 🎯 Для модулей в паре с `IIFE`

🔹 Используем свойства функции      
&emsp;&emsp; 🎯 Для данных не влияющих на результат работы инстанса функции (Аналитика, `dev`)  
&emsp;&emsp; 🎯 Для методов пробрасывающих данные из замыкани наружу  
&emsp;&emsp; 🎯 Для данных объединяющие все инстансы

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое функция высшего порядка?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Функция, принимающая в себя другую функцию аргументом или функции возвращающие другие функции    

```javascript
const fetchData = async (url, transformFn) => {
    const data = await axios(url);
    const res = transformFn(data);
   
    return res;
}

fetchData('/users', (users) => {
    return users.map(({name}) => (name));
})
```

<details>
<summary> <sup>⭐</sup>❓ Для чего нужны функции высшего порядка?</summary>

---

Для реализации абстракций, на основании которых потом можно создавать более конкретные экземпляры, закидывая туда разные функции и стартовые данные    

---

</details>

<details>
<summary> 🧠 Образ для заучивания</summary>

---

Как сотрудники с высокой должностью, которые руководят более точно специализированными сотрудниками  

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое каррирование?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Обертка вокруг функции, которая позволяет делать пошаговое определение аргументов, вместо определения всех аргументов за один вызов.   
&emsp;&emsp; 👆 Тем самым позволяет делать определенные конфигурации функции, которые уменьшат кол-во определения повторяющихся параметров, делая код более лаконичным и переиспользуемым        

```javascript
const translate = (lang, module, translate) => {
    const data = {
        ru: {
            mainPage: {
                title: 'Заголовок'
            },
            header: {
              logo: 'Лого'
            },
        },
        en: {
           mainPage: {
              title: 'Title'
           },
           header: {
              logo: 'Logo'
           },
        }    
    }
    
    return data[lang][module][translate]
}

const carry = (fn) => (lang) => (module) => (translate) => setLog(lang, module, translate)

const translateCarry = carry(myFn)

const translateRu = translateCarry('ru')
const translateEn = translateCarry('en')

const translateRuMainPage = translateRu('mainPage')

console.log(translateRuMainPage('title'))
```

<details>
<summary> <sup>⭐</sup>❓ Для чего нужно каррирование?</summary>

---

🎯 Для того что бы определять стартовые конфигурации   
&emsp;&emsp; 👆 Делая код более переиспользуемым и лаконичным  

---

</details>

<details>
<summary> 🧠 Образ для заучивания</summary>

---

Каррина по шагово пишет в чат бот чего она хочет, а он в зависимости от ответа, выдает список дальнейших вопросов, или уже ответ   

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**