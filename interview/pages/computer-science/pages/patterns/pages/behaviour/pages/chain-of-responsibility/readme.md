# Chain of Responsibility
> Позволяет вызывать методы инстанса цепочкой из результата работы других методов

```javascript
class Operation {

    constructor(initValue) {
        this.sum = initValue
    }

    add(value)  {
        this.sum += value
        return this
    }

    getSum() {
        return this.sum
    }

}

const sum = new Operation(3)
    .add(1)
    .add(1)
    .add(1)
    .getSum()

console.log(sum); // 👉🏼 6
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**