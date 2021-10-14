# Примеры

## создание приватных переменых и методов
```javascript
const counter = () => {
  // приватная переменная _counter
  let _counter = 0;
  // приватная функция _changeBy (изменяет значение переменой _counter на переданное ей значение в качестве аргумента)
  const _changeBy = (value) => {
    _counter += value;
  };
  // возвращаемое значение функции (объект, состоящий из 3 методов)
  return {
    // публичный метод (функция) increment (для увеличения счетчика на 1)
    increment() {
      _changeBy(1);
    },
    // публичный метод (функция) decrement (для уменьшения счетчика на 1)
    decrement() {
      _changeBy(-1);
    },
    // публичный метод (функция) value (для получения текущего значения _counter)
    value() {
      return _counter;
    },
  };
};

// создадим счетчик 1
const counter1 = counter();
// создадим счетчик 2
const counter2 = counter();

counter1.increment();
counter1.increment();
console.log(counter1.value()); // 2
counter1.decrement();
console.log(counter1.value()); // 1

counter2.decrement();
counter2.decrement();
console.log(counter2.value()); // -2
```