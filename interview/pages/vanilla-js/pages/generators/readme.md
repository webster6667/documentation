# Генераторы

<details>
<summary> Расскажи что такое генераторы, и как они работают</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)


👆 Функции способные выдавать результат своей работы порционно  
&emsp;&emsp; 🎯 Возврат отдельной порции описываеться конструкцией `yield`    
&emsp;&emsp; 🎯 Получение каждой порции происходит при вызове метода `next()`, у экземпляра генератора     
&emsp;&emsp; 🎯 Реализуют логику работы функции и тератора  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какой из форматов написания гератора валидный?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

`function* f(…) | function *f(…)`

<details>
<summary> ✅ Ответ</summary>

---

Обра варианта являються валидными

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какие есть особенности у работы генераторов со стрелочными функциями?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Генератор не работает со стрелочными функциями

<details>
<summary> Как думаешь почему? </summary>

----

Скорее всего под капотом идет работа с `this`, который отсутствует в стрелочных функциях 

----

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какой будет результат выполнения последнего лога? </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
function* myGeneratorFn() {
  yield 1;
  yield 2;
  return 3;
}

let myGeneratorFirst = myGeneratorFn(),
    myGeneratorSecond = myGeneratorFn() 
    

console.log(myGeneratorFirst.next()) 
console.log(myGeneratorFirst.next())

console.log(myGeneratorSecond.next())
```

<details>
<summary> ✅ Ответ</summary>

---
 
`{value: 1, done: false}`, так как состоние экземпляров не зависимы друг от друга, как и экземпляры класса

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как работает return внутри генератора?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Когда вызов `next()` доходит до строки с `return`, генератор возвращает значение из `return`, и `done: true`, заканчивая работу генератора  
🎯 Все последующие вызовы `next()` будут возвращать `{value: undefined, done: true}`, игнорируя все `yield` идущие после `return`

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)


</details>

<details>
<summary> Какой будет результат выполнение 3, 4 лога </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
// 👉🏼 Объявление генератора
function* myGeneratorFn() {
  yield 1;
  yield 2;
  return 3;
  yield 4;
  yield 4;
}

let myGenerator = myGeneratorFn()  

console.log(myGenerator.next())     // 1
console.log(myGenerator.next())     // 2
console.log(myGenerator.next())     // 3
console.log(myGenerator.next())     // 4  
```

<details>
<summary> ✅ Ответ</summary>

---

`3` 👉🏼 `{value: 3, done: true}`   
👆 Третья порция итератора заканчивающая итерирование генератора

`4` 👉🏼 `{value: undefined, done: true}`  
👆 Дальнейшие вызовы итераций ничего не вернут

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Чем отличаеться вызов последнего yield от вызова return внутри генератора?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🔹 Последний `yield` возвращает значение и `done: false`      
🔹 Порция с `return` возвращает значение и `done: true`   
🔹 Порция с `return` не возвращается при переборе итерируемым функционалом

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как работает конструкция yield* внутри генератора</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

`yield*` порционнно разворачивает генератор указанный справа от конструкции, при вызове `next` у родительского генератора

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какой будет результат выполнения логов?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function getNumber() {
    return 1
}

function* generateAlphaNum() {

    yield* getNumber()
    yield* generateSequence(48, 57);
}

const numberGenerator = generateAlphaNum()

console(numberGenerator.next()); // 1
console(numberGenerator.next()); // 2
```

<details>
<summary> ✅ Ответ</summary>

---

`1` 👉🏼 `48`  
`2` 👉🏼 `49`

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как бы ты пробросил пропсы внуть итераций генератора?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Пропсы можно пробрасывать при вызове всех методов `next()`, кроме первого    
🎯 Прокинутые пропсы можно получить в результате вызова `yield`, идущего перед тем, который вызывал метод `next()` с пропсами    

<details>
<summary> <sup>⭐</sup>❓ Где, как и когда мы можем получить проброшенные пропсы внутри генератора</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
function* gen() {
  console.log('first iteration', 'prop: ?');
  let firstYield = yield 'Первый yield'

  console.log('second iteration', 'prop: ?');
  let secondYield = yield `Второй yield`

  console.log('third iteration', 'prop: ?');
  let thirdsProps = yield `Третий yield`

  console.log('fourth iteration', 'prop: ?');
  let fourthProps = yield `Четвертый yield`
}

let generator = gen();

generator.next(1) // 1
generator.next(2) // 2
generator.next(3) // 3
generator.next(4) // 4
``` 

<details>
<summary> ✅ Ответ</summary>

---

🎯 При вызове `generator.next(1)` 👉🏼 пропсы получить нельзя  
🎯 При вызове `generator.next(2)` 👉🏼 `firstYield: 2`       
🎯 При вызове `generator.next(3)` 👉🏼 `secondYield: 3`  
🎯 При вызове `generator.next(4)` 👉🏼 `thirdsProps: 4`  
🎯 `fourthProps` ничего не пишется

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какие методы кроме next еще знаешь у генератора?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🔹 `myGenerator.return()`  
&emsp;&emsp; 👆 Вызов метода возвращает `{value: undefined, done: true}`, и говорит что все последующие вызовы `next()`, должны возвращать `{value: undefined, done: true}`

🔹 `myGenerator.throw()`  
🎯 Если внутри генератора есть блок `catch`, генератор его отработает  
🎯 Если в блоке `catch` нет конструкций `yield`, метод `throw()` вернет `{value: undefined, done: true}`, и остановит генератор  
🎯 Если в блоке `catch` есть конструкций `yield`, метод `throw()` вернет результат первого `yield`   
&emsp;&emsp;&emsp;&emsp; 👆 Продолжив итерацию по `yield` внутри блока `catch`, при последующих выховах `next` 

<details>
<summary> <sup>⭐</sup>❓ Какой будет вывод логов для этих генераторов</summary>

----

1. Первый 
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
console.log(gen.next(), '1');                        
console.log(gen.throw(new Error('my error')), '2');  
console.log(gen.next()), '3';                        
```

<details>
<summary> ✅ Ответ</summary>

---

🎯 `1` 👉🏼 `{ value: 1, done: false }`      
🎯 `2` 👉🏼 `{value: undefined, done: true}`  
🎯 `3` 👉🏼 `{ value: undefined, done: true }`

---

</details>

<br><br>

2. Второй

```javascript
function* generate() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } catch (e) {
    console.log(e, 'log inside generator');
    yield 4;
    yield 5;
    yield 6;
  }
}

let gen = generate();
console.log(gen.next(), '1');                        // 👉🏼 { value: 1, done: false }
console.log(gen.throw(new Error('my error'), '2'), 'throw method');  // 👉🏼 {value: 4, done: false}, ❗ отработает блок catch внутри generate, и выведет лог ошибки
console.log(gen.next(), '3');                        // 👉🏼 {value: 5, done: false}
console.log(gen.next(), '4');                        // 👉🏼 {value: 6, done: false}
console.log(gen.next(), '5');                        // 👉🏼 {value: undefined, done: true}
```

<details>
<summary> ✅ Ответ</summary>

---

🎯 `1` 👉🏼 `{ value: 1, done: false }`      
🎯 `2` 👉🏼 `{value: 4, done: false}`  
🎯 `3` 👉🏼 `{value: 5, done: false}`  
🎯 `4` 👉🏼 `{value: 6, done: false}`    
🎯 `5` 👉🏼 `{value: undefined, done: true}`

---

</details>

----

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как работают ассинхронные генераторы?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

👆 Для работы ассинхронных генераторов достаточно написать `async` вначале генератора

<details>
<summary> <sup>⭐</sup>❓ Как перебрать ассинхронный генератор</summary>

----

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

----

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Напиши бесконечный генератор числ</summary>

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