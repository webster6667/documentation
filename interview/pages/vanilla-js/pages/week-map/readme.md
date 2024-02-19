# WeekMap

<details>
<summary> Как закрепить данные за объектом, таким образом, что бы при удалении объекта, закрепленные за ним данные автоматически удалялсь?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Для этого есть конструкция `WeekMap`  

🎯 Принимает ключем только объекты      
🎯 Запрещает перебирать или очищать всю коллекцию       
🎯 При удалении ключа, автоматически чистит под него память      


```javascript
let user1 = {
    name: 'ben',
    age: '22'
}

const user2 = {
    name: 'Jon',
    age: '23'
}

const user1Cart = ['pizza', 'banana'];
const user2Cart = ['cheez', 'potato'];

const cartList = new WeakMap([[user1, user1Cart], [user2, user2Cart]]);

cartList.has(user1);

user1 = null;

console.log(cartList.get(user1), 'юзер 1 cart');
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**