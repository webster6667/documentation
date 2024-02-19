# Итератор
> Дает возможность последовательно обходить элементы составным объектов, не раскрывая их внутреннее представление

```javascript
class ArrayIterator {
	constructor(el) {
		this.index = 0;
		this.elements = el;
	}

	next() {
		return this.elements[this.index++];
	}

	hasNext() {
		return this.index < this.elements.length;
	}
};

class ObjectIterator {
	constructor(el) {
		this.index = 0;
		this.keys = Object.keys(el),
		this.elements = el;
	}

	next() {
		return this.elements[this.keys[this.index++]];
	}

	hasNext() {
		return this.index < this.keys.length;
	}
};

const users = {
    ben: {age: 22, city: 'Moscow'},
    jon: {age: 23, city: 'Rostov'},
    alex: {age: 25, city: 'Sochi'}
}

const collection = new ObjectIterator(users)

while (collection.hasNext()) {
    console.log(collection,next())
}
```

📗 Вот так реализован итератор под капотом у массивов массивов в `es6`, а `for(..of..)` просто ищет и дергает метод `next()`

```javascript
class MyIterator {
    constructor(data) {
        this.index = 0
        this.data = data
    }

    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.index < this.data.length) {
                    return {
                        value: this.data[this.index++],
                        done: false
                    }
                } else {
                    this.index = 0
                    return {
                        done: true,
                        value: undefined
                    }
                }
            }
        }
    }
}

const iterator = new MyIterator(['This', 'is', 'iterator'])

for (const val of iterator) {
  console.log('Value: ', val)
}
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**