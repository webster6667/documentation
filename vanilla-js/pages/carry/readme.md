# Каррирование и его частично применение

> Обертка вокруг функции, позволяющая делать последовательное определение аргументов

```javascript
const myFn = (a, b, c) => {
    return a + b + c
}

const carry = (fn) => (a) => (b) => (c) => fn(a, b, c)

const carryFn = carry(myFn)

console.log(carryFn(1)(2)(3)) // 👉🏼 6
```

https://www.youtube.com/watch?v=pzV5rJ19qsI&ab_channel=S0ER

https://www.youtube.com/watch?v=6E4tNlr5NLg&ab_channel=WebDev%D1%81%D0%BD%D1%83%D0%BB%D1%8F.%D0%9A%D0%B0%D0%BD%D0%B0%D0%BB%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%9B%D1%83%D1%89%D0%B5%D0%BD%D0%BA%D0%BE

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**