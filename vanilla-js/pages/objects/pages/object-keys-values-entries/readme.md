# Трансформация объекта в массив
```javascript
const myObject = {
    name: 'Ben',
    age: 22
}
```

<br>

💠 **Object.keys`(myObject)`**   
👆🏽 Вернет ключи объекта 
```javascript
Object.keys(myObject) // => ['name', 'age']
``` 

<br>
<br>

💠 **Object.values`(myObject)`**   
👆🏽 Вернет значения объекта 
```javascript
Object.values(myObject) // => ['Ben', 22]
``` 

<br>
<br>

💠 **Object.entries`(myObject)`**   
👆🏽 Вернет массивы `[ключ,значения]` объекта 
```javascript
Object.entries(myObject) // => [ ["name","Ben"], ["age",22] ]
``` 

<br>
<br>

💠 **Object.fromEntries`(objectEntries)`**     
👆🏽 Вернет результат работы `Object.entries(myObject)`, обратно в объект
```javascript
const objectEntries = Object.entries(myObject) // => [ ["name","Ben"], ["age",22] ]

Object.fromEntries(objectEntries) // {name: 'Ben',age: 22}
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>** 