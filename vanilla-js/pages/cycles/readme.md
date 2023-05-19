# Циклы

<details>
<summary> 🔥 <code>Shortcut</code></summary>

___

🔹 `for in`  
&emsp;&emsp; 👆 Для обьектов, тянет прототипы   
```javascript
for (let key in user) {
  let value = user[key]
    
  if(user.hasOwnProperty(key)) {
      // ...
  }
 
}
```

🔹 `for of`  
&emsp;&emsp; 👆 Для массивов  
&emsp;&emsp;&emsp;&emsp; ⚡️ Перебирает объекты без прототипов 
```javascript
for (let key of Object.keys(user)) {
  let value = user[key] 

  console.log(key) // => name
  console.log(value)// => 'Alex'
}
```

___

</details>

💠 **whine**   
👆🏽 Тело цикла выполняется, пока `i < 3`
```javascript
let i = 0,
    users = ['Ben', 'Jon', 'Min']

while (i < 3) {
  //тело цикла
  console.log(users[i])
  i++
}
```

<br>

💠 **do while**   
👆🏽 В любом случаи выполнит первую итерацию, если `i < 3`, выполняет следующую итерацию
```javascript
let i = 0,
    users = ['Ben', 'Jon', 'Min']

do {
    //тело цикла
    console.log(users[i])
    i++
} while (i < 3)
```

<br>

💠 **for**   
👆🏽 Тело цикла  выполняется, пока `i < 3`   

&emsp;&emsp; 🔹 После каждой итерации выполнятся `i++`

&emsp;&emsp; 🔹 Создает блочную переменную `let i = 0`            


```javascript
let users = ['Ben', 'Jon', 'Min']

for (let i = 0; i < 3; i++) {
    //тело цикла
    console.log(users[i])
}
```

<br>

## 🚩 <a name="for-in-of">for in/off</a>

💠 **for in**   
👆🏽 Цикл для объектов, перебирает все свойства объекта любой глубины

&emsp;&emsp; 🔹 Читает свойства не только самого объекта, но и прототипа        
&emsp;&emsp;&emsp;&emsp; 👆 Метод `myObject.hasOwnProperty(key)` проверяет, кому принадлежит свойство, объекту или его прототипу прототипу   

🛑 Не желателен для массивов:  
&emsp;&emsp; 🎯 Не гарантирует порядок элементов      
&emsp;&emsp; 🎯 Может затянуть лишние свойства из прототипа
```javascript
const user = {
  name: 'Alex',
  surname: 'Mirgorodsky'	
}

for (let key in user) {
  let value = user[key]

  if(user.hasOwnProperty(key)) {// проверяем что это свойство объекта, а не прототипа
  	//action
  }
 
}
```

<br>

💠 **for of**   
👆🏽 Цикл для массивом, перебирает значения массива 

&emsp;&emsp; 🔹 Не принимает `объект` или `псевдомассив`      
&emsp;&emsp;&emsp;&emsp; 👆 Не итерируемые типы данных

&emsp;&emsp; 🔹 Нет доступа к индексу элементов      
&emsp;&emsp;&emsp;&emsp; ⚡ Для получения индекса, можно создать внешнюю переменную и увеличивать ее при каждом шаге


```javascript
const users = [
    {
        name: 'Alex'
    },
    {
        name: 'Ben'
    },
]

for (let user of users) {
    console.log(user); // => {name: 'Alex'}
}
```

<br>

⚡️ **for of: для объектов**

&emsp;&emsp; 🔹 Не берет свойства из `prototype`

```javascript
const user = {
  name: 'Alex',
  surname: 'Mirgorodsky'	
}

for (let [key, value] of Object.entries(user)) {
  console.log(key) // => name
  console.log(value)// => 'Alex'
}

for (let key of Object.keys(user)) {
  let value = user[key] 

  console.log(key) // => name
  console.log(value)// => 'Alex'
}
```

## 🚩 Дополнительные директивы 
 
💠 **break**   
👆🏽 Остановить цикл

<br>

💠 **continue**   
👆🏽 Пропустить шаг

<br>

💠 **Метки**   
👆🏽 Имя цикла `myCycle: for(;;)`, через которое можно воздействовать на цикл, из внутренних циклов
```javascript
const users = [
        {name: 'Ban', skills: ['react', 'js']},
        {name: 'Jon', skills: ['css', 'js']},
        {name: 'Ban', skills: ['react', 'redux']},
        {name: 'Jack', skills: ['php', 'css']}
      ],
      skillForSearch = 'react',
      needQuantity = 2,
      usersWithReact = []


userCycle: for (let userIndex = 0; userIndex <= users.length; userIndex++) {
    const user = users[userIndex],
          userSkills =  user.skills

  if (userSkills) {
      
      for (let skillIndex = 0; j < 3; skillIndex++) {
          const skill = userSkills[skillIndex]  
      
          if (skill === skillForSearch) usersWithReact.push(user)
          if (usersWithReact.length === needQuantity) break userCycle

          console.log(user)
        }
      
  }

  
}

console.log(usersWithReact)
```
[![Edit hopeful-pine-4hgg2](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/hopeful-pine-4hgg2?fontsize=14&hidenavigation=1&theme=dark)

##### ❗ Нельзя использовать директивы с логическими операторами

🔹 `if (isTrue) continue` - Работает     

🔹 `isTrue ? continue : i++` - Не работает


### ⟵ **<a href="../../readme.md">Назад</a>**