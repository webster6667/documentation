# Циклы

* **whine** - тело цикла выполняется, пока `condition === true`
```
while (condition) {
  //тело цикла
}
```


* **do while** - сначала выполняется тело цикла, потом идет проверка, если `condition === true`, выполняется еще одна итерация
```
do {
 //тело цикла
} while (condition)
```


* **for** - тело цикла  выполняется, пока `condition === true`, после каждой итерации выполнятся i++
```
for (let i = 0; condition; i++) {

}
```

* **for in** - цикл для объектов, перебирает все вложенные свойства объекта любой глубины, без учета дескрипторов  
> Не желателен для массивов так как не гарантирует порядок элементов, и может затянуть лишние свойства из прототипа

```

const user = {
  name: ‘Alex’,
  surname: ‘Mirgorodsky’	
}

for (let key in user) {
  let value = user[key]

  if(user.hasOwnProperty(key)) {// проверяем что это не свойство прототипа
  	//action
  }
 
}

```

* **for of** - цикл для пошагового перебора массива, не принимает объект или псевдомассив так как они не итерируемые 
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
    console.log(user.name);
}
```


## Дополнительные директивы
Циклы имеют дополнительные директивы 
 
* **break** - остановить цикл
* **continue** - пропустить шаг
* **Метки** - название перед циклом `myCycle: for(;;)`, для обращения директивами, к более верхним уровням цикла(внешний цикл)
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

> Нельзя использовать директивы с логическими операторами
* `isTrue ? continue : i++` - не поддерживается
* `if (isTrue) continue` - поддерживается