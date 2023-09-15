# Генераторы
![illustration](img/illustration.png)  
👆🏽 Функция итератор выдающая свои результаты, порционально. Отдавая каждую порцию при вызове метода `next()`

<br>

🛑 Не работает с стрелочными функциями  

<details>
<summary> 💠 Синтаксис генератора</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)


Символ `*` перед `()`, говорит движку от том что это генератор  
&emsp;&emsp; 👆 Работают оба синтаксиса `function* f(…) | function *f(…)`


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>


<details>
<summary> 💠 Получение следующей порции генератора</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)
Происходит при вызове метода экземпляра `myGenerator.next()`
```javascript
// 👉🏼 Объявление генератора
function* myGeneratorFn() {
  yield 1;
  yield 2;
  return 3;
}

let myGenerator = myGeneratorFn(),    // 👉🏼 Экземпляр генератора
    firstResult = myGenerator.next(); // 👉🏼 Вызов первой порции генератора

console.log(firstResult)              // 👉🏼 {value: 1, done: false} Первая порция итератора
console.log(myGenerator.next())       // 👉🏼 {value: 2, done: false} Вторая порция итератора
```
👆 Под капотом работает логика итераторов

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>


<details>
<summary> 💠 Экземпляры генераторов</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Независимые друг от друга объекты, так же как экземпляры классов

```javascript
function* myGeneratorFn() {
  yield 1;
  yield 2;
  return 3;
}

let myGeneratorFirst = myGeneratorFn(), // 👉🏼 Первый независимый экземпляр
    myGeneratorSecond = myGeneratorFn() // 👉🏼 Второй независимый экземпляр
    

console.log(myGeneratorFirst.next()) // 👉🏼 {value: 1, done: false}
console.log(myGeneratorFirst.next()) // 👉🏼 {value: 2, done: false}

console.log(myGeneratorSecond.next()) // 👉🏼 {value: 1, done: false}
``` 

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> 💠 return внутри генератора</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Когда итерация доходит до конструкции `return` внутри генератора, он:   
&emsp;&emsp; 🎯 Возвращает `{value: returnValue, done: true}`   
&emsp;&emsp; 🎯 Заканчивая итерирование  
&emsp;&emsp; 🎯 Игнорирует все что идет после `return` при дальнейших вызовах   

&emsp;&emsp;&emsp;&emsp; 👆 Вызов `myGenerator.next()` после отработанного `return` вернет `{value: undefined, done: true}`  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Проигнорировав все `yield` идущие после `return`  

```javascript
// 👉🏼 Объявление генератора
function* myGeneratorFn() {
  yield 1;
  yield 2;
  return 3;
  yield 4;
  yield 4;
}

let myGenerator = myGeneratorFn()   // 👉🏼 Экземпляр генератора

console.log(myGenerator.next())     // 👉🏼   {value: 1, done: false} Первая порция итератора
console.log(myGenerator.next())     // 👉🏼   {value: 2, done: false} Вторая порция итератора
console.log(myGenerator.next())     // 👉🏼❗ {value: 3, done: true} Третья порция итератора заканчивающая итерирование генератора
console.log(myGenerator.next())     // 👉🏼   {value: undefined, done: true} Дальнейшие вызовы итераций ничего не вернут  
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> 💠 Перебор генераторов </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

<details>
<summary> Генераторы можно использовать в связке с перебираемым функционалом </summary>

----

&emsp;&emsp; 👆 Так как под капотом генераторы используют `итераторы`  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; ↳ Которые необходимы для работы перебирающих конструкций  

----

</details>

<br>

<details>
<summary> 🔹 for/of </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

for(let value of generateSequence()) {
  console.log(value); // 👉🏼 1, 2, 3
}
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

   
<details>
<summary> 🔹 spreed </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

let sequence = [0, ...generateSequence()]; // При развороте вызывает все next(), возвращая все yield

console.log(sequence); // 👉🏼 0, 1, 2, 3
```    

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> 🛑 return в перебираемых генераторах </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

👆 Вернет все порции, кроме той что отдает `return`, и все что идет после  

```javascript
function* generateSequenceFirst() { // 
  yield 1;
  yield 2;
  return 3
  yield 4;
  yield 5;
}

for(let value of generateSequence()) {
    console.log(value); // 👉🏼 1, 2
}

console.log([0, ...generateSequence()]) // 👉🏼 1, 2
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> 💠 Конструкция yield* </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

👆 Указывает родительскому генератору, что при вызове следующей порции, он должен извлечь порцию из дочернего генератора, указанного после `yield*`  

🔹 `yield*`  
&emsp;&emsp; 🛑 Используеться только внутри генераторов                  
&emsp;&emsp; 🛑 Игнорирует консрукцию если справа от `yield*`, не генератор  

```javascript
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function notGenerator() {
  return 1
}

function* generateAlphaNum() {

  yield* notGenerator()             // 🎯 Пропустит

  
  yield* generateSequence(48, 57);  // 🎯 Будет выдавать порционно от 48 до 57

  
  yield* generateSequence(65, 90);  // 🎯 Будет выдавать порционно от 65 до 90

  
  yield* generateSequence(97, 122); // 🎯 Будет выдавать порционно от 97 до 122

}

const numberGenerator = generateAlphaNum()

numberGenerator.next() // 👉🏼 48
numberGenerator.next() // 👉🏼 49


for(let number of numberGenerator) { 
  console.log(number) // 👉🏼  50, 51, ..., 122
}
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> 💠 Пробропс пропсов в генератор </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

👆 При вызове метода `next(prop)` можно передавать значениея внутрь генератора  
&emsp;&emsp; 🛑 В первый `next` нельзя пробросить пропсы  
&emsp;&emsp; 🎯 Все остальные вызовы `next` будут пробрасывать свои пропсы в результат работы `yield`, который идет перед вызываемым             
 

```javascript
function* gen() {
  let secondProps = yield 'Первый yield'

  console.log(`Второй yield, пропсы второго next(2): ${secondProps}`)

  let thirdsProps = yield `Второй yield`

  console.log(`Третий yield, пропсы второго next(2): ${secondProps}, пропсы третьего next(3): ${thirdsProps}`)

  let forthProps = yield `Третий yield`

  console.log(`Четвертый yield, пропсы второго next(2): ${secondProps}, пропсы третьего next(3): ${thirdsProps}, пропсы четвертого next(4): ${forthProps}`)

  yield `Четвертый yield`
}

let generator = gen();

generator.next(1)
generator.next(2)
generator.next(3)
generator.next(4)
``` 

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> 💠 Метод myGenerator.return()</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

👆 Останавливает генератор   
&emsp;&emsp; 🎯 Сам метод ничего не вернет   
&emsp;&emsp; 🎯 Все следующие вызовы экземпляра генератора будут возвращать `{value: undefined, done: true}`

```javascript
function* generate() {
    yield 1
    yield 2
    yield 3
}

let gen = generate();
gen.next();              // 👉🏼 { value: 1, done: false }
gen.return()             // 👉🏼 undefined
console.log(gen.next())  // 👉🏼 {value: undefined, done: true}
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> 💠 Метод myGenerator.throw()</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

👆 Остановит генератор выбросив ошибку    
&emsp;&emsp; 🎯 Сам метод ничего не вернет, но отработает блок `catch` внутри генератора   
&emsp;&emsp;&emsp;&emsp; ↳ Если не повешать `try/catch`, ошибка вывалиться наружу      

```javascript
function* generate() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } catch (e) {
    console.log(e);
  }
}

let gen = generate();
console.log(gen.next());                        // 👉🏼 { value: 1, done: false }
console.log(gen.throw(new Error('my error')));  // 👉🏼 undefined, ❗ отработает блок catch внутри generate
console.log(gen.next());                        // 👉🏼 {value: undefined, done: true}
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> 💠 Ассинхронные генераторы</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🔹 Для использования ассинхронного генератора достаточно указать async перед генератором  
🔹 Для ассинхроного перебора генератора используют `for await(item of generator)`  

```javascript
async function* generateSequence(start, end) {

  for (let i = start; i <= end; i++) {

    // ура, можно использовать await!
    await new Promise(resolve => setTimeout(resolve, 1000));

    yield i;
  }

}

(async () => {

  let generator = generateSequence(1, 5);
  for await (let value of generator) {
    console.log(value); // 1, 2, 3, 4, 5 (с таймаутом в секунду)
  }

})();
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> 💠 Генераторы внутри языка </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🔹 Для работы итератора, необходим объек реализующий метод `next()`  
&emsp;&emsp; 👆 Который возвращает `{value, done: false}` последовательно возврвщая все свойства обьекта

🔹 Генератор реализует все необходимые требования  
&emsp;&emsp; 👆 По этому его решили использовать как функцию итератор, внутри языка

```javascript
let range = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() { // генератор, вместо функции, возвращающей объект, с методом next() который в точности описывает логику итератора
    for(let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
};
```  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> 💠 Бесконечный генератор</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
function* generate() {
    let index = 0
    while (true) {
        yield ++index
    }
}

const gen = generate()

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

### ⟵ **<a href="../../readme.md">Назад</a>**