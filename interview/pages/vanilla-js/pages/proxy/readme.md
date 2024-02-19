# Proxy

<details>
<summary> Как контролировать изменения объекта или массива?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Для этого можно использовать `Proxy`     
&emsp;&emsp; 👆 Класс, контролирующий операции над данными

```javascript
let proxy = new Proxy(target, handler);
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Напиши прокси на перехват записи и чтения</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
let obj = {name: 'Ben', age: 22}

obj = Proxy(obj, {
    get(target, getKey) {
        return target[getKey].toUpperCase()
    },
    set(target, setingKey, setingValue) {
        target[setingKey] = setingValue.toUpperCase();
    }
})
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Можно ли отменить прокси?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Для этого нужно создавать специальный, отменяемый прокси   

```javascript
let object = {
    data: "Важные данные"
};

let {proxy, revoke} = Proxy.revocable(object, {
    get(target, prop) {
        const value = target[prop]
        return typeof value === 'string' ? value.toUpperCase() : value
    }
});

console.log(proxy.data) // 👉🏼 'ВАЖНЫЕ ДАННЫЕ'

revoke()                // Выключит прокси

console.log(object.data) // 👉🏼 'Важные данные' 🛑 Доступ к оригинальному объекту остаеться 
console.log(proxy.data)  // 👉🏼 TypeError: Cannot perform 'get' on a proxy that has been revoked
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое <code>Reflect</code>?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Набор методов позволяющий работать с оригинальным объектом (получать, удалять, изменять данные, пробрасывать контекст), в методах ловушек   

```javascript
  get: function(target, property, receiver) {
    if (property in target) {
      // Используем Reflect.get() для получения свойства
      console.log(`Getting property "${property}"`);
      return Reflect.get(target, property, receiver);
    } else {
      console.log(`Property "${property}" does not exist`);
    }
  }
```

<details>
<summary> <sup>⭐</sup>❓ Когда не обойтись без <code>Reflect</code>?</summary>

---

Когда нужно пробросить контекст  

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**