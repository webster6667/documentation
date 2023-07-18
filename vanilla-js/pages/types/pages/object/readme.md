# Object
> Вложенные объекты, массивы или функции

&emsp;&emsp; 🔹 `{a: 1}` не равен `{a: 1}`   
&emsp;&emsp;&emsp;&emsp; 👆 Нужно делать сравнивание по ключам и значениям , так как это ссылки на два разных объект

* Глубокое клонирование обьекта без json.stringlify


* Проверка на то что это объект объекта
```typescript
const isObject = (data, indentFunction = false) => {
    const isSimpleObject = typeof data === 'object' && data !== null
    const isFunction = indentFunction && typeof data === 'function'
    return indentFunction ? isSimpleObject || isFunction : isSimpleObject
}
```


* Проверка объекта на пустоту
* if (object) - нельзя
```typescript
const isObjectEmpty = (object: object) => {
    return Boolean(Object.keys(object).length)
}
```

* Сравнение обьектов + скинуть ссылку
```typescript
let object1 = {a: 1, b: 2},
    object2 = {b: 2, a: 1}

const isObjectListEqual = (...rest: object[]) => {
    
    rest.forEach((item, index) => {
        let nextObject = rest[index + 1]
        
        if (nextObject) {
            isTwoObjectEqual(item, nextObject)
        }
        
    })
    
    
}

```

<br>

&emsp;&emsp;&emsp;&emsp; ⚡ Быстрое сравнение
```javascript
JSON.stringify({a: 1}) === JSON.stringify({a: 1}) // 👉🏼 true
```

&emsp;&emsp;&emsp;&emsp; 🛑 Сравнение одинаковых объектов с разными позициями через `JSON.stringify` вернет `false`
<details>
<summary>&emsp;&emsp;&emsp;&emsp; 👆 Хоть объекты одинаковый, форматирование к строке вернет две разные строки</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
JSON.stringify({a: 1, b: 2}) === JSON.stringify({b: 2, a: 1}) // 👉🏼 false
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

&emsp;&emsp;&emsp;&emsp; 🛑 `JSON.stringify` удалит <ins>[сложные типы данных 💬](## "Map, Set, ...")</ins> из объекта

<details>
<summary></summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
JSON.stringify({name: 1, data: new Map([[1 , 10]])}) // 👉🏼 {"name":1,"data":{}}
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)
</details>

<a name="type-of-function"></a>
&emsp;&emsp; 🛑 `typeof () => true` вернет `function`, но тип функции это объект <ins>[💬](## "Особенности typeof")</ins>


<br>

### ⟵ **<a href="../../readme.md">Назад</a>**