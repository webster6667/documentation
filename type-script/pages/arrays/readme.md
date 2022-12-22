# Массивы

💠 **Типизация массивов**   
👆🏽 Методы и синтаксис типизации массивов

<br>

&emsp;&emsp; 🔹 Основной синтаксис
```typescript
let a: number[] = [1, 2, 3],
    b: (number | string)[] = [1, '2', 3]
```  

<br>

&emsp;&emsp; 🔹 `Generic` синтаксис 

```typescript
let a: Array<number> = [1, 2, 3],
    b: Array<number | string> = [1, '2', 3]
```

&emsp;&emsp; 🔹 Кортежи    
&emsp;&emsp;&emsp;&emsp; 👆 Типизация каждого элемента массива и их кол-во   
```typescript
let a: [number, number, number] = [1, 2, 3],
    b: [number, string, number] = [1, '2', 3]
    
let d: [number, string, number?] = [1, '2'], // 👉🏼 Третий элемент не обязателен
    c: [number, string, number] = [1, '2']   // 👉🏼 Ошибка, ожидаеться три элемента
```

<br><br>

💠 **Enum**   
👆🏽 Вид массива, используеться только внутри `ts`

<br>

&emsp;&emsp; 🔹 Имеет формат ключ и не обязательное значение  
&emsp;&emsp;&emsp;&emsp; 👆 По умолчанию значение это индекс ключа       
```typescript
enum MyEnum {
  Js, // 👉🏼 значение 0
  Ts  // 👉🏼 значение 1
}
```

&emsp;&emsp; 🔹 Значениям можно задавать свои индексы        
&emsp;&emsp;&emsp;&emsp; 👆 Индекс равен предыдущий индекс +1   
```typescript
enum MyEnum {
  Webpack, // 👉🏼 значение 0
  Js,      // 👉🏼 значение 1
  Ts = 5,  // 👉🏼 значение 5
  React,   // 👉🏼 значение 6
}
```     

&emsp;&emsp; 🔹 `enum` поддерживают обратное сопоставление по именам
&emsp;&emsp;&emsp;&emsp; 👆 Т.е если обратиться к `enum` по индексу - получим свойство, если по свойству то индекс         
```typescript
enum MyEnum {
  Js, // 👉🏼 значение 0
  Ts  // 👉🏼 значение 1
}

console.log(MyEnum.Js) // 👉🏼 0
console.log(MyEnum[1]) // 👉🏼 Ts

console.log(MyEnum[MyEnum.Js]) // 👉🏼 Js
// 👉🏼 MyEnum.Js вернет 0
// 👉🏼 Обращение к myEnum по индексу вернет свойство Js
```

&emsp;&emsp; 🔹 К свойству нельзя обращаться через значение, если тип значения не число      
```typescript
enum MyEnum {
  Js = 'JavaScript', 
  Ts = 'TypeScript'
}

console.log(MyEnum.Js) // 👉🏼 JavaScript
console.log(MyEnum['JavaScript']) // 👉🏼 undefined
```
   
&emsp;&emsp; 🔹 Если указать `const` перед `enum`, то в скомпилированный код объявление не будет отображено       
&emsp;&emsp;&emsp;&emsp; 👆 Значения из `enum` просто будут проставленны в указаном месте    

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**