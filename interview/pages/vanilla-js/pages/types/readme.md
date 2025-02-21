# Типы данных

<details>
<summary> Какие типы данных знаеш?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `bolean`  
🎯 `string`       
🎯 `number`    
🎯 `bigInt`    
🎯 `Symbol`    
🎯 `object`    
🎯 `null`   
🎯 `undefined`  

<details>
<summary> 🧠 Образ для заучивания</summary>

---

`8` тиПов

🎯 Три простых  
🎯 Три крутых  
🎯 Два мутных (непонятных)  

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что за тип <code>bigInt</code>?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Тип данных для работы с числами неограниченной длинны, вносящий некие особенности и ограничения при работе с числами
     
   

<details>
<summary> <sup>⭐</sup>❓ Как привести число к <code>bigInt</code>?</summary>

----

🎯 Добавить `n` конце    
🎯 Обернуть в `BigInt(1)`

<details>
<summary> 🧠 Образ для заучивания</summary>

---

🎯 `n`- Наташа у нас `bigInt`, и Наташа из конца запихивает число в `bigInt` в духовку   
🎯 Просто закинуть в духовку к `bitInt`, которая испечет из обычного `number | string`, `bigInt`  


---

</details>

----

</details>

<details>
<summary> <sup>⭐</sup>❓ Как сложить/вычесть <code>bigInt</code> с <code>number</code>?</summary>

----

> Преобразовать к одному типу bigInt 

👆 При этом важно помнить что при перегоне данных из одного типа в другой, теряется точность числа  

<details>
<summary> 🧠 Образ для заучивания</summary>

---

Что бы с играть в покер с `bigInt`, нужно дорасти по статусу, или хотя бы закосить внешне  

---

</details>

----

</details>

<details>
<summary> <sup>⭐</sup>❓ Что будет если выполнить математическую операци <code>int</code> и <code>bigInt</code>?</summary>

---

Вылетит ошибка

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как сравнивать <code>bigInt</code> с <code>number</code>?</summary>

----

Не строгим равенством

<details>
<summary> 🧠 Образ для заучивания</summary>

---

Если судить не строго, то сравнение идет по показателям, без упора на то кто простой, а кто крутой  

---

</details>

----

</details>

<details>
<summary> <sup>⭐</sup>❓ Как работают методы <code>Math</code> с <code>bigInt</code>?</summary>

----

Никак

<details>
<summary> 🧠 Образ для заучивания</summary>

---

`Math` послала матом `BigInt` и не хочет иметь ничего общего

---

</details>

----

</details>

<details>
<summary> <sup>⭐</sup>❓ Какие проблемы с <code>bigInt</code> при общении клиента с сервером </summary>

---

`bigInt` не сериализуется в `json`, но можно предаватительно преобразовывать на сервере `bigInt` к строке, а на клиенте положить обратно в `BigInt(str)`

<details>
<summary> 🧠 Образ для заучивания</summary>

---

Сервер не пропускает `bigInt`, так как он слишком `big` и не влазит. По этому `bigInt` нужно влезть в `String` троянского коня, и вылезти обратно после прохождения сервака

---

</details>

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что за символы <code>_</code> в цифрах? </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Визуальный разделитель для разработчиков, игнорируемый компилятором

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как определить тип данных?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
let data = ''
typeof data
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Массив это какой тип данных?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

В `JS` массив это итерируемый объект

<details>
<summary> <sup>⭐</sup>❓ а как тогда вычислить что это именно массив, а не объект, когда это будет нужно</summary>

---

1. Массив это итерируемый объект, с рядом методов. 
2. Для проверки объекта на принадлежность к массиву, есть метод `Array.isArray()`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ А что значит итерируемый объект?</summary>

---

1. Объект, который поддатся перебору, при помощи встроенного в него метода `Symbol.Iterator`
2. Который читают циклы
3. В нем описывается, с какого индекса начали перебор, на каком индексе сейчас и когда конец перебора

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что такое псевдо массив?</summary>

---

Объект, который по структуре как массив, но не имеет методов массива  

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как сделать из псевдо массива, массив?</summary>

---

`Array.from()`

---

</details>

<details>
<summary> 🧠 Образ для заучивания</summary>

---

1. Массив это обычный объект как и все, но владеет навыками жонглирования  
2. И только настоящий жонглер, может спросить и определить жонглера `Array.isArray(array)`  
3. Ты можешь выглядить как жонглер, но без скилов, тебе раскусят  
4. Только настоящий жонглер может сделать `from` его методов, из псевдо, настоящего  

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что вернет <code>typeof function fn(params) {}</code></summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

`function`

<details>
<summary> <sup>⭐</sup>❓ Функция это отдельный тип данных?</summary>

---

Нет, особенности конструкции `typeof`, функция это объект

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что вернет <code>typeof NaN</code>?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

`Number`

<details>
<summary> <sup>⭐</sup>❓ Тогда что такое NaN</summary>

---

`Not a Number` - реззультат преобразования к числу то что нельзя преобразовать
```javascript
Number('str') // 👉🏼 NaN
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что будет если сложить любое число с <code>NaN</code></summary>

---

Результатом будет `NaN`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>Number('str') === NaN</code></summary>

---

`false`, так как `NaN` не равна сама себе


---

</details>

<details>
<summary> <sup>⭐</sup>❓ Так как тогда проверить лежит ли в переменной <code>NaN</code>?</summary>

---

Для этого есть функция `isNaN(data)`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что будет если в <code>isNaN</code> положить любой тип данных кроме числа?</summary>

---

🎯 Функция преобразует его к числу      
🎯 Получит `NaN`    
🎯 И функция вернет `true`, даже если в переменной не лежала `NaN`      

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как проверить что в переменной лежит именно <code>NaN</code> значение?</summary>

--- 

`NaN` - это число, достаточно сделать проверку на число  
```javascript
const hasNaNInData = (data) => {
    return typeof data === 'number' && isNaN(data)
}

let isNan1 = hasNaNInData(1)   // 👉🏼 false    
let isNan2 = hasNaNInData('1') // 👉🏼 false
let isNan3 = hasNaNInData({})  // 👉🏼 false
let isNan4 = hasNaNInData(NaN) // 👉🏼 true
```

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что за тип данных <code>null</code>?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Явно указанная разработчиком пустая переменная

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>typeof null</code>?</summary>

---

`object` - баг языка

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>typeof null === 'null'</code>?</summary>

---

`false`, так как `typeof null === 'object'`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как тогда проверить переменную на <code>null</code>?</summary>

--- 

Сделать сравнение с `null`, без использования `typeof`

```javascript
const isNull = (data) => data === null

const isNull1 = isNull(1)    // 👉🏼 false
const isNull2 = isNull(0)    // 👉🏼 false
const isNull3 = isNull(null) // 👉🏼 true
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Какую еще проблему создает <code>typeof null === 'object'</code>?</summary>

---

При проверке данных на соответствие с объектом, можно нежданно напоротся на `null`, и долго потом это дебажить...   

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как тогда проверить данные на соответствие с объектом?</summary>

---

Добавить кастомную функцию с проверкой на `null`

```javascript
const isObject = (data) => data !== null && typeof data === 'object'
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Массив и функция это тоже объекты, как быть если хочешь исключить или включить их в провеку?</summary>

---

Добавил бы пропс `exclude: {array: false, function: false}`

```javascript
const isObject = (data, {exclude} = {exclude: {}}) => {
    const { arrays: shouldExcludeArrays = false, functions: shouldExcludeFunctions = true} = exclude
    const arraysControl =  shouldExcludeArrays ? !Array.isArray(data) : true
    const functionsControl = shouldExcludeFunctions ? typeof data === 'object' : typeof data === 'object' || typeof data === 'function'

    return data !== null && functionsControl && arraysControl 
}

const isObject1 = isObject({name: '1'}) // 👉🏼 true
const isObject2 = isObject(() => '')    // 👉🏼 false
const isObject3 = isObject([])          // 👉🏼 true
const isObject4 = isObject(() => '', {  // 👉🏼 false
    exclude: {functions: true}
})
const isObject5 = isObject(() => '', {  // 👉🏼 true
    exclude: {functions: false}
})
const isObject6 = isObject([], {        // 👉🏼 false
    exclude: {arrays: true}
})
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ В каких случаях <code>null</code> преобразуется в <code>0</code>?</summary>

---

При математичеком сравнении `>= | <= | > | <`

---


</details>

---


<details>
<summary> <sup>⭐</sup>❓ <code>null === null</code>?</summary>

---

`null === null 👉🏼 null === null 👉🏼 true`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ <code>null == null</code>?</summary>

---

`null == null 👉🏼 null == null 👉🏼 true`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ <code>null >= 0</code>?</summary>

---

`🎯 null >= 0 👉🏼 0 >= 0 👉🏼 true`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ <code>0 > null</code>?</summary>

---

`🎯 null > 0 👉🏼 0 > 0 👉🏼 false`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ <code>null == undefined</code>?</summary>

---

Да, баг языка

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)



</details>

<details>
<summary> Что за тип данных <code>undefined</code>?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Состояние переменной, до тех пор, пока в нее ничего не записанно 

<details>
<summary> <sup>⭐</sup>❓ Что произойдет с <code>undefined</code>, если оно попадет в математическое сравнение, или будет преобразованно к числу?</summary>

---

Преобрахование вернет `NaN`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ При не строгом сравнении с <code>undefined</code> преобразование к <code>NaN</code> происходит?</summary>

---

Нет

---

</details>

---

<details>
<summary> <sup>⭐</sup>❓ <code>undefined == null</code></summary>

---

Да

---

</details>

<details>
<summary> <sup>⭐</sup>❓ <code>undefined === undefined</code>?</summary>

---

Да

---

</details>

<details>
<summary> <sup>⭐</sup>❓ <code>undefined == undefined</code></summary>

---

Да

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что за тип <code>Symbol</code>?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Примитивный тип, позволяющий создать постоянно уникальное значение, даже при одинаковых именнах или при их отсутствии 

<details>
<summary> <sup>⭐</sup>❓ Зачем нужен <code>symbol</code>?</summary>

---

Для скрытия подкапотных данных, от обычных операций, а так же для защиты от сторонних воздействий.  
👆 Так как к символу нельзя обратится случайно, не имея ссылки на него  

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Какой синтаксис создания?</summary>

---

`Symbol('name')`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>Symbol('id') == Symbol('id')</code>?</summary>

---

`false`, так как символы уникальны даже при одинаковом имени

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>Symbol() == Symbol()</code>?</summary>

---

`false`, символ всегда возращает уникальное значение

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что выдаст консоль?</summary>

---

```javascript
const devId = Symbol()

const user = {
  'id': 1,
  'name': 'Alex',
  [devId]: '#1688'
}

for (const prop in user) {
  console.log(prop, user[prop])
}

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(user[devId])
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Приведи пример практического применения <code>Symbol</code></summary>

---

🎯 На старте есть объект `user`    

🎯 На его основе происходит множество других преобразований `while|map|reduce` во вьюшках

🎯 Нужно пропихнуть данные для аналитики внутрь объекта, которые доступны только на старте(например в колбеке успешно отработанного запроса)

🎯 Доступ к данным нужно иметь в любом месте, при этом исключить риск поломать вьюшки лишним пропсом

🎯 Создаем ссылку на `Symbol` в объекте, который хранит данные об авторизованном юзере

🎯 Далее имея ссылку на `Symbol` мы можем подвязывать и дергать любые технические и аналитические данные, исключая перезапись данных и лишние свойства        

<details>
<summary> Реализовать уникальный ключ элементов формы, не мешающие апи</summary>

----

```jsx
const formId = Symbol('formId')

const Form = () => {
    return (<Formik>
        {(form) => (
            <Form>
                <FieldArray name="vaccines">
                    {({ push, remove }) => (<div>
                        {form.values.vaccines?.map((vaccine, index) => (
                            <div key={vaccine.id || vaccine[formId]} >
                                <PrimaryTextField name={`vaccines.${index}.name`} />
                            </div>
                        ))}

                        <Button onClick={() => push({
                            [formId]: Date.now(),
                            name: ''
                        })} />
                    </div>)}
                </FieldArray>
            </Form>
        )}
    </Formik>)
}
```

----

</details>

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как получить название метки символа?</summary>

---

```javascript
let id = Symbol('formId')

console.log(id.description) // 👉🏼 formId

console.log(Symbol.keyFor(id))
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как сделать что бы символы с одинаковым именем указывали на одну и ту же ссылку?</summary>

---

Использовать глоабальные символы `Symbol.for('id')`  
🎯 При таком обращении будет создан символ с меткой `id` на глобальном уровне   
🎯 При повторном обращении под данному `id`, будет взята ранее созданная ссылка

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>Symbol.for('id') === Symbol.for('id')</code></summary>

---

`true`, Так как идет обращение в глобальную область видимости

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как получить ключь <code>Symbol.for('id')</code></summary>

---

```javascript
let id = Symbol.for('formId')

Symbol.description(id) // 👉🏼 undefined
Symbol.keyFor(id) // 👉🏼 formId
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что происходит при в <code>Symbol</code> при копировании объекта?</summary>

---

🎯 При копировании через `Object.assign({}, obj)` или `spread` оператор, `Symbol` сохранится    
🎯 При копировании перебирая циклами - нет    


```javascript
let id = Symbol("id");
let user = {
  name: 'alex',
  [id]: 123
};

let clone1 = Object.assign({}, user);
let clone2 = {...user}
let clone3 = {}

for(let key in user) {
    let value = user[key]
    clone3[key] = value
}

console.log( clone1[id] ); // 👉🏼 123
console.log( clone2[id] ); // 👉🏼 123
console.log( clone3[id] ); // 👉🏼 undefined
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Получается символы действительно технически защищенны и туда можно ложить важную информацию?</summary>

---

Нет, можно получить доступ ко всем символам объекта через метод `getOwnPropertySymbols`      
&emsp;&emsp; 👆 Добавление символа было добавленна больше для минимизации конфликтов, а не для безопасности     

```javascript
const id = Symbol('id');
const user = {
    [id]: {
      password: 'test'  
    },
    name: 'Alex'
}

const objectSymbols = Object.getOwnPropertySymbols(user);

objectSymbols.forEach((objectSymbol) => {
    console.log(user[objectSymbol]) // 👉🏼 {password: 'test'}
})
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Какие системные <code>Symbol</code> знаешь?</summary>

---

🎯 `[Symbol.split]`  
🎯 `[Symbol.replace]`  
🎯 `[Symbol.iterator]`    
🎯 `[Symbol.asyncIterator]`  
🎯 `[Symbol.hasInstance]`  
🎯 `[Symbol.toPrimitive]`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Чем может быть полезна работа с системными символами?</summary>

---

🎯 Сделать итерируемыми синхронные и асс инхронные масивоподобные объекты, запихав в них `Symbol.iterator`      
&emsp;&emsp; 👆 Которые используют циклы под капотом    

🎯 Дает возможность модифицировать поведение некоторых стандартных функций          

---

</details>

<a href="https://doka.guide/js/symbol/">Задача на символ</a>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>


### ⟵ **<a href="../../readme.md">Назад</a>**