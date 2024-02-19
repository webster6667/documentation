# Week Set  

<details>
<summary> Как реализовать хранилище, куда можно отмечать заходил ли пользователь, а если пользователя нет, все отметки о нем автоматически были бы обновленны?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Для этого есть `WeekSet`, работает как и `WeekMap`, но не позволяет перебирать или получать данные   
&emsp;&emsp; 👆 Просто закинуть отметку что пользователь авторизован, а после его удаления отметка автоматически обнулится     
  
```javascript
let john = {name: 'John'},
    ben = {name: 'Ben'},
    authUsers = new WeekSet()

authUsers.add(john)
authUsers.add(ben)

authUsers.has(john) // => true(Заходил ли джон?)

john = null // => jon вышел

console.log(authUsers.has(john));
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**