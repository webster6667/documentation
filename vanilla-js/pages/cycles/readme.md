# Циклы

💠 **whine**   
👆🏽 Тело цикла выполняется, пока `condition === true`
```
while (condition) {
  //тело цикла
}
```

<br>

💠 **do while**   
👆🏽 Выполняется тело цикла, если `condition === true`, выполняет следующую итерацию
```
do {
 //тело цикла
} while (condition)
```

<br>

💠 **for**   
👆🏽 Тело цикла  выполняется, пока `condition === true`   

&emsp;&emsp; 🔹 После каждой итерации выполнятся `i++`

&emsp;&emsp; 🔹 Создает блочную переменную `let i = 0`            


```
for (let i = 0; condition; i++) {

}
```

<br>

## 🚩 for in/off

💠 **for in**   
👆🏽 Цикл для объектов, перебирает все свойства объекта любой глубины

🛑 Не желателен для массивов:  
* Не гарантирует порядок элементов   
* Может затянуть лишние свойства из прототипа
```
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
👆🏽 Цикл для массивом , перебирает значения массива 

&emsp;&emsp; 🔹 Не принимает `объект` или `псевдомассив`      
&emsp;&emsp;&emsp;&emsp; 👆 не итерируемые типы данных

&emsp;&emsp; 🔹 Нет доступа к ключам    

```
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

&emsp;&emsp; 🔹 Дает доступ к индексу и значению    

&emsp;&emsp; 🔹 Не берет свойства из `prototype`

```javascript
const user = {
  name: 'Alex',
  surname: 'Mirgorodsky'	
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
      skillForSearch = 'skillIndex',
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