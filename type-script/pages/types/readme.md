# Типы данных
> В TS немного больше меток позволяющих типизировать данные чем в JS

💠 `string` - строка

💠 `number` - число  

💠 `bigInt` - большое число  

💠 `boolean` - **true/false**  

💠 `object` - вложенные объекты, массивы или функции

💠 `undefined` - не определенная переменная

💠 `null` - пустая переменная     

💠 `Symbol` - уникальный символ

## 🚩 TS типы 

💠 `any` - задает любой тип переменной  
&emsp;&emsp; 👆 Фактически отменяет типизацию, позволяя вызывать свойства или методы любого типа, без ошибки 
```typescript
const myArray: any = []

console.log(myArray.length) // Работает без ошибки
```


💠 `unknown` - задает любой тип переменной  
&emsp;&emsp; 👆 Требуя проверку на тип при использовании свойства или метода любого типа
```typescript
const myArray: unknown = []

console.log(myArray.length) // Ошибка, требует проверки типа

if (Array.isArray(myArray)) {
  console.log(myArray.length) // Работает без ошибки
}
```

💠 `void` - функция отрабатывающая без ключевого слово `return`

💠 `never` - функция никогда не вернет результат(`даже undefined`)  
&emsp;&emsp; 🔹 Безконечно зацикленна  
&emsp;&emsp; 🔹 Выбрасывает `throw new Error()`      

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**

 