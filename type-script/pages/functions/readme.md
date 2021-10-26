# Типизация функций

💠 **Сигнатура функции**   
👆🏽 Тип входящих и возращаемых данных

<br><br>

&emsp;&emsp; 🔹 Описание сигнатуры стрелочной функции      
```typescript
type MyArrowFunction = (name: string, age: number) => string;

const myArrowFunction: MyArrowFunction = (name, age) => {
  return `${name} ${age}`;
}
```

&emsp;&emsp; 🔹 Описание сигнатуры `functionExpression`
```typescript
let myFunctionExpression:(name: string, age: number) => string;

myFunctionExpression = function (name, age) {
  return `${name} ${age}`;
};
```

&emsp;&emsp; 🔹 Описание сигнатуры `functionDeclaration`
```typescript
function myFunctionDeclaration(name: string, age: number):string {
  return `${name} ${age}`;
};
```

<br><br>

💠 **Перегрузка функции**   
👆🏽 Описание нескольких сигнатур функции, которые применяться в зависимости от входных параметров

```typescript
function myFunctionDeclaration(age: number):number
function myFunctionDeclaration(age: any, name?: any):any {
  
  if (name) {
    return `${name} ${age}`;
  } else {
    return age
  }
  
};
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**