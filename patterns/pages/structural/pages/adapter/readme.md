# Adapter
> Связыват две различные между собой сущности, определяя для них единый интерфейс

🔹 Области применения  
&emsp;&emsp; 🎯 Нормализация данных  
&emsp;&emsp; 🎯 Переход на новые версии, не ломая старый функционал

```javascript
class OldCalc {

    operation(t1, t2, operation) {

        switch (operation) {
            case 'add': return t1 + t2
            case 'sub': return t1 - t2
            default: return NaN
        }

    }
}

class NewCalc {

    add(t1, t2) {
        return t1 + t2
    }

    sub(t1, t2) {
        return t1 - t2
    }

}

class MyAdapter {
    constructor(Model) {
        this.calc = new Model()
    }

    operation(t1, t2, operation) {
        switch (operation) {
            case 'add': return this.calc.add(t1, t2)
            case 'sub': return this.calc.sub(t1, t2)
            default: return NaN
        }
    }
}

const oldCalc = new OldCalc()
console.log(oldCalc.operation(1, 2, 'add')); // 👉🏼 Старый интерфейс

const newCalc = new NewCalc()
console.log(newCalc.add(1, 2)); // 👉🏼 Новый интерфейс

const adapter = new MyAdapter(NewCalc) // 👉🏼 Использование новых методов, сохранив старый синтаксис
console.log(adapter.operation(1, 2 , 'add'))
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**