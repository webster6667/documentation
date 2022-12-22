# Преобразование типов данных

💠 **Приведение данных к типу**   
👆🏽 Приведет не типизированные данные(`any, unknown`), к указанному типу

<br>

&emsp;&emsp; 🔹 Примитив      
```typescript
function myFn(a: any, b: any):void {

    const typedA: string = <string>a,  // 👉🏼 Укажет тип 'string'
          typedB: number = b as number // 👉🏼 Укажет тип 'number'

}
```

<br>

&emsp;&emsp; 🔹 Объект      
```typescript
type User = {name: string}
type UserData = {age: string}

function myFn(user: any, userData: any):void {

    const typedUser: User = <User>user,                  // 👉🏼 Укажет тип 'User'
          typedUserData: UserData = userData as UserData // 👉🏼 Укажет тип 'UserData'

}
```

<br>

&emsp;&emsp; 🔹 В цепочке      
```typescript
function myFn(a: any, b: any):void {

  (<string>a).toUpperCase(); // 👉🏼 Укажет тип 'string', подскажет методы
  (b as number).toFixed();   // 👉🏼 Укажет тип 'number', подскажет методы
  
}
```

&emsp;&emsp; 🛑 Приведение к типу уже типизированных данных, вызовет ошибку       

<br>

&emsp;&emsp; 🔹 Конструкция `as const`  
&emsp;&emsp;&emsp;&emsp; 👆 Приводит переменную к типу с конкретными значениями   

```typescript
const myObject1 = {name: 'Ben', age: 22}          // => {name: string, age: number}
const myObject2 = {name: 'Ben', age: 22} as const // => {readonly name: "Ben", readonly age: 22}
const myObject3 = <const>{name: 'Ben', age: 22}   // => {readonly name: "Ben", readonly age: 22}
```

<br><br>

💠 **Объединение типов**   
👆🏽 Объявление несколько вариантов возможных типов


<br>

```typescript
type Age = string | number

const age:Age = 1
```
👆 Переменная `age`, может быть строкой или числом    

<br><br>

💠 **Пересечение типов**  
👆🏽 Объявляет новый тип, в котором должны присутствовать свойства всех пересеченных типов

<br>

```typescript
type User = {name: string} & {age: number}

const user:User = {name: 'Ben'}
```
👆 Ts, выдает ошибку, свойство `age` обязательно, и должно быть числом

<br><br>

### ⟵ **<a href="../../readme.md">Назад</a>**