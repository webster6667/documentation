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

&emsp;&emsp; 🔹 Самая нижняя сигнатура должна содержать все возможные варианты  
&emsp;&emsp;&emsp;&emsp; 👆 Сигнатуры выше уже описывают более конкретную типизацию    

```typescript
function myFunctionDeclaration(age: number): number;
function myFunctionDeclaration(age: number, name: string): string;
function myFunctionDeclaration(age: number, name?: string): number | string {
    if (name) {
        return `${name} ${age}`;
    } else {
        return age;
    }
}

myFunctionDeclaration(25);
myFunctionDeclaration(25, 'alex');
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**