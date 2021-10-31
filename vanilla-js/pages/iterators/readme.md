# Итератор
> Это объект, возвращающий метод next(), который позволяет возвращать свойства объекта последовательно

🔹 Будет работать если в объекте(`объявивший итератор`) есть свойства   
&emsp;&emsp; 🎯 `from`       
&emsp;&emsp; 🎯 `to`

🔹 Сама функция итератор, должна лежать в свойстве `[Symbol.iterator]`

🔹 Итератор должен хранить в замыкании шаг перебора
             
🔹 Итератор должен возвращать объект с методом `next()`    
&emsp;&emsp; 👆 Который работает с шагом объекта

🔹 Метод `next()`, должен возвращать объект с свойствами  
&emsp;&emsp; 🎯 `done`(`true/false`) - Все свойства были перебраные   
&emsp;&emsp; 🎯 `value` - Итерируемое свойство           
&emsp;&emsp;&emsp;&emsp; 👆 После того как все свойства перебранны, возвращает `{done: true, value: undefined}`

🔹 `[Symbol.iterator]() => {}` - метод, позволяющий сделать из объекта итератор                  

```javascript
let range = {
  from: 1,
  to: 5
}

// сделаем объект range итерируемым
range[Symbol.iterator] = function() {

  let current = this.from;
  let last = this.to;

  // метод должен вернуть объект с методом next()
  return {
    next() {
      if (current <= last) {
        return {
          done: false,
          value: current++
        };
      } else {
        return {
          done: true
        };
      }
    }

  }
};

for (let num of range) {
  console.log(num); // 1, затем 2, 3, 4, 5
}
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**    
