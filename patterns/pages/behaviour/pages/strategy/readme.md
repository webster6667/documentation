# Strategy
> Оболочка взаимодействующая с различными стратегиями, используя один и то же интерфейс

```javascript
class Vehicle {
    travelTime() {
        return this.timeTaken
    }
}

class Bus extends Vehicle {
    constructor() {
        super()
        this.timeTaken = 10
    }
}

class Taxi extends Vehicle {
    constructor() {
        super()
        this.timeTaken = 5
    }
}

class Car extends Vehicle {
    constructor() {
        super()
        this.timeTaken = 3
    }
}

class Commute {
    travel(transport) {
        return transport.travelTime()
    }
}

const commute = new Commute()

console.log(commute.travel(new Taxi()))
console.log(commute.travel(new Bus()))
console.log(commute.travel(new Car()))
```
🎯 У каждого транспорта может быть свой алгоритм подсчета времени передвижения  
🎯 Узнать это время, можно у любого класса при помощи одного и того же метода `commute.travel(className)`

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**