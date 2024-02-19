# Состояние
> Разное поведение одних и тех же хендлеров, в зависимости от состояние инстанса(которое можно менять)

```javascript
class OrderStatus {
    constructor(name, nextStatus) {
        this.name = name;
        this.nextStatus = nextStatus;
    }

    next() {
        return new this.nextStatus();
    }
}

class WaitingForPayment extends OrderStatus {
    constructor() {
        super('waitingForPayment', Shipping);
    }
}

class Shipping extends OrderStatus {
    constructor() {
        super('shipping', Delivered);
    }
}

class Delivered extends OrderStatus {
    constructor() {
        super('delivered', Delivered);
    }
}

class Order {
    constructor() {
        this.state = new WaitingForPayment();
    }

    nextState() {
        this.state = this.state.next();
    };

    cancelOrder() {
        if (this.state.name === 'waitingForPayment') {
            console.log('order was canceled');
        } else {
            console.log('order can be canceled only for waitingForPayment state');
        }
    }
}

const firstOrder = new Order()
console.log(firstOrder.state.name);
firstOrder.cancelOrder() // 🎯 Работа метода cancelOrder меняеться, в зависимости от статуса заказа

const secondOrder = new Order()
secondOrder.nextState()
console.log(secondOrder.state.name);
secondOrder.cancelOrder()
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**