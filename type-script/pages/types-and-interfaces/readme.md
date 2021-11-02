# Типы и интерфейсы

💠 **Интерфейсы**   
👆🏽 Объект описывающий типизацию, но не реализацию

<br>

&emsp;&emsp; 🔹 Могут наследоваться друг от друга, при помощи `extends`    
&emsp;&emsp;&emsp;&emsp; 👆 Поддерживают множественное наследование          
```typescript
interface User {
  name: string
}

interface Developer {
  direction: string
}

interface Student extends User, Developer {
  // => name: string будет унаследованно  
  // => direction: string будет унаследованно  
  age: number
}
```

<br>

&emsp;&emsp; 🔹 Интерфейсы с одинаковым названием дополняют друг друга
```typescript
interface User {
  name: string
}

interface User {
  age: number
}

const user:User = {
  name: 'Jon',
  age: 22
}
```

<br>

&emsp;&emsp; 🔹 Синтаксис типизации `function Expression`     
```typescript
interface GetData {
  (name: string, age: number): string;
}

// 🎯 => arrow expression
let getData: GetData = (name, age) => {
  return `${name} ${age}`
}

// 🎯 => function expression
let getData: GetData = function(name, age) {
  return `${name} ${age}`
}

// 🎯 => expression after typing 
let getData: GetData

getData = function(name, age) {
            return `${name} ${age}`
}
``` 

<br>

&emsp;&emsp; 🔹 у `function Declaration`, может типизировать только аргументы по одному    
```typescript
interface Data {
  name: string,
  age: number
}

function getData(props:Data, count: number) {
  const {age, name} = props

  return `${name} ${age}`;
}
```

<br><br>

💠 **Тип**   
👆🏽 Переменная описывающий типизацию, но не реализацию

<br>

&emsp;&emsp; 🔹 Могут наследоваться друг от друга, при помощи `пересечения типов`  
&emsp;&emsp;&emsp;&emsp; 👆 Поддерживают множественное наследование            
```typescript
type User = {
  name: string
}

type Developer = {
  direction: string
}

type Student = User & Developer & {age: number} // => {name: string, direction: string, age:number}
```

<br>

&emsp;&emsp; 🔹 Одинаковые название вызывают ошибку      

&emsp;&emsp; 🔹 синтаксис типизации `function Expression`
```typescript
type GetDataLikeInterface = {
  (name: string, age: number): string;
};

type GetData = (name: string, age: number) => string;

let getData: GetData = function (name, age) {
  return `${name} ${age}`;
};
```      

<br>

&emsp;&emsp; 🔹 у `function Declaration`, может типизировать только аргументы по одному    
```typescript
interface Data {
  name: string,
  age: number
}

function getData(props:Data, count: number) {
  const {age, name} = props

  return `${name} ${age}`;
}
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**
