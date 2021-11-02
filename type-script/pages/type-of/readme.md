# typeof
> В Ts преобразует конкретные данные в тип

🔹 Примитив
```typescript
const userAge = 22

type User = {
  age: typeof userAge // => age: number
}
```      

🔹 Объект      
```typescript
const user = {
  name: 'myUser'
}

type User = typeof user // => type User = {name: string}
```

🔹 Массив      
```typescript
const arrayData = [1, 2, '3', true]

type TypedArray= typeof arrayData // type TypedArray = (string | number | boolean)[]
```

🔹 Классы ?       

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**