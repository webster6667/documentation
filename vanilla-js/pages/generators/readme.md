# Генераторы
> Вид функции которая выдает свои результаты, порционально. Отдавая каждую порцию при вызове метода next()

🔹 Символ `*` перед `()`, говорит движку от том что это генератор  
&emsp;&emsp; 👆 Работают оба синтаксиса `function* f(…) | function *f(…)`    

🔹 Не работает с стрелочными функциями       

🔹 По этапно вызывает результат при помощи метода `myGenerator.next()`  
&emsp;&emsp; 👆 Под капотом работаю итераторы                 
```javascript
// 🎯 Объявление генератора
function* myGeneratorFn() {
  yield 1;
  yield 2;
  return 3;
}

let myGenerator = myGeneratorFn(), // 🎯 Экземпляр генератора
    one = myGenerator.next();      // 🎯 Вызов первой порции генератора

console.log(one) // 🎯 => {value: 1, done: false} Первая порция итератора
```

<br>
<br>


🔹 Экземпляры генераторов, это независимые друг от друга объекты
```javascript
function* myGeneratorFn() {
  yield 1;
  yield 2;
  return 3;
}

let myGeneratorFirst = myGeneratorFn(), // 🎯 Первый независимый экземпляр
    myGeneratorSecond = myGeneratorFn() // 🎯 Второй независимый экземпляр
    

console.log(myGeneratorFirst.next()) // => {value: 1, done: false}
console.log(myGeneratorFirst.next()) // => {value: 2, done: false}

console.log(myGeneratorSecond.next()) // => {value: 1, done: false}
```       

🔹 Когда `myGenerator.next()` доходит до конструкции `return`:   
&emsp;&emsp; 🎯 Возвращает `{value: returnValue, done: true}`  
&emsp;&emsp; 🎯 Игнорирует все `yield` после `return`, возвращая `{value: undefined, done: true}` 

<br>
<br>


🔹 Генератор можно перебрать пр помощи цикла `for/of`  
&emsp;&emsp; 👆 Так как под капотом `for/of` работает с итератором, который есть у генератора  
&emsp;&emsp; 🛑 При переборе генератора, значения справа от `return`, не будет перебрано    
&emsp;&emsp;&emsp;&emsp; 👆 Для того что бы перебрать все значения, все должны быть справа от `yield`                
```javascript
function* generateSequenceFirst() { // 
  yield 1;
  yield 2;
  return 3
}

function* generateSequenceSecond() {
  yield 1;
  yield 2;
  yield 3;
}

let generatorFirst = generateSequenceFirst(),
    generatorSecond = generateSequenceSecond()

for(let value of generatorFirst) {
  console.log(value); // 1, 2
}

for(let value of generatorSecond) {
  console.log(value); // 1, 2, 3
}
```

<br>
<br>


🔹 Так как генераторы это перебираемые объекты, их можно использовать в связке с перебираемым функционалом
```javascript
function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

let sequence = [0, ...generateSequence()]; // При развороте вызывает все next(), возвращая все yield

console.log(sequence); // 0, 1, 2, 3
```    

<br>
<br>


🔹 При помощи генераторов, реализованы итераторы, внутри языка
```javascript
let range = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() { // генератор, вместо функции, возвращающей объект, с методом next()
    for(let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
};
```     

<br>
<br>


🔹 Конструкция `yield*`, используеться только внутри генератора  
&emsp;&emsp; 🎯 Объявляеться слева от дочернего генератора                
&emsp;&emsp; 🎯 Возвращает порцию генератора справа от `yield*`                  
&emsp;&emsp; 🎯 Игнорирует консрукцию если справа от `yield*`, не генератор
```javascript
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function notGenerator() {
  return 1
}

function* generateAlphaNum() {

  yield* notGenerator()             // 🎯 Пропустит

  
  yield* generateSequence(48, 57);  // 🎯 => 48..57

  
  yield* generateSequence(65, 90);  // 🎯 => 65..90

  
  yield* generateSequence(97, 122); // 🎯 => 97..122

}

const numberGenerator = generateAlphaNum()

numberGenerator.next() // 48
numberGenerator.next() // 49


for(let number of numberGenerator) {
  console.log(number) // => 50, 51, ..., 122
}
```         

<br>
<br>


🔹 При помощи `yield`, и `next(prop)` можно передавать значениея внутрь генератора  
&emsp;&emsp; 🎯 Первый вызов `next(prop)`, не может передать `prop`, внуть генератора    
&emsp;&emsp; 🎯 Все последующие вызовы, будут записывать в предыдущий `yield`, `prop`, который поместили в `next(prop)`
```javascript
function* gen() {
  let propFromNext = yield 'first ask'

  console.log(propFromNext) // Значение prop, из next, или undefined

  let secondYield = yield `second ask, prop: ${propFromNext}`

}

let generator = gen();

console.log(generator.next())
console.log(generator.next(2))
``` 
         
<br>   
<br>
      
            
🔹 При помощи метода `myGenerator.return()`, можо остановить генератор
&emsp;&emsp; 🎯 Сам метод ничего не вернет
&emsp;&emsp; 🎯 Все следующие вызовы экземпляра генератора будут возвращать `{value: undefined, done: true}`
```javascript
function* generate() {
  yield 1
  yield 2
  yield 3
}

let gen = generate();
gen.next(); // => { value: 1, done: false }
gen.return()
console.log(gen.next()) // => {value: undefined, done: true}
```                       

<br>
<br>


🔹 При помощи метода `myGenerator.throw()`, можно остановить генератор выросив ошибку    
&emsp;&emsp; 🎯 Сам метод ничего не вернет, но отработает блок `catch`, внутри генератора  
&emsp;&emsp;&emsp;&emsp; 👆 Если не повешать `try/catch`, ошибка вывалиться наружу   

&emsp;&emsp; 🎯 Все следующие вызовы экземпляра генератора будут возвращать `{value: undefined, done: true}`
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
gen.next();                       // 🎯 => { value: 1, done: false }
gen.throw(new Error('my error')); // 🎯 отработает блок catch
console.log(gen.next());          // 🎯 => {value: undefined, done: true}
```

<br>

## 🚩 Ассинхронный генератор 

🔹 Для использования ассинхронного генератора достаточно указать `async` перед генератором

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

### ⟵ **<a href="../../readme.md">Назад</a>**