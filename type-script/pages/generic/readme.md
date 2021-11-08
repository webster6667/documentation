# Generic
> Тип который генерируеться самостоятельно, в тот тип данных котороый передали

🔹 Порядок объявления `generic` не имеет значения  
&emsp;&emsp; 👆 В любом порядке они имеют доступ друг к другу       

## 🚩 Основной синтаксис

💠 **Generic в type**   
👆🏽 В конструкцию `type`, дженерик требует указать тип, или данные, которые попадут в `T`

```typescript
type MyType<T> = T

type A = MyType<string>  // A: string
type B = MyType<'hello'> // A: 'hello'
```

<br>
<br>

💠 **Generic в интерфейсах**   
👆🏽 В конструкцию `interface`, дженерик требует указать тип, или данные, которые попадут в `T`

```typescript
interface MyType<T> {
    element: T
}

type A = MyType<string>  // A: {element: string}
type B = MyType<'hello'> // A: {element: 'hello'}
```

<br>
<br>

💠 **Generic в функциях**   
👆🏽 В функциях, дженерик могу преобразовывать переданные параметры функции, помещать их в `<T>`

```typescript
function myFn<T>(data: T, name: string):T {
  return data
}

const myFnResult = myFn(55, 'Den') // myFnResult: number
``` 
&emsp;&emsp; 🎯 При вызове `myFn`, `55` было преобразованно к типу `typeof 55`, получилось `number`  
&emsp;&emsp; 🎯 Вместо `T` везде будет установлен `number`

<br>

## 🚩 Ограничение дженериков
> Дженерик может принимать в себя любой тип, но есть методы с узить его диапазон

🔹 Конструкция `extends` описывает от какого типа должен быть унаследован дженерик

```typescript
function myFn<T extends {name: string}>(data: T, adress: string):T {
  return data
} // => 🎯 data должна обязательно сожержать в себе свойство name

interface MyType<T extends number | boolean> {
  element: T
} // => 🎯 T должен быть либо number либо boolean

type A = MyType<number>
```        

## 🚩 Условный дженерик
> Описывает разные 

```typescript
type A<T> = T extends Array<any> ? any[] : string | boolean | number

type B = A<[1]> // 🎯 =>  B: any[] 
// 👆 Так как переданный T расширяеться от массива

type C = A<5> // 🎯 => C: string | boolean | number
// 👆 Возвращаеться else тип, так как переданный T не расширяеться от массива
```

## 🚩 infer
> Конструкция позволяющая извлекать тип из переданного дженерика, задавая алиас извлеченному типу

🔹 `infer` Используеться только в условных дженериках       

🔹 Заданный алиас доступен только в `true` конструкции условия       

<br>

💠 **Массивы**     

```typescript
const myArray = [1, '2', true]

type GenericInf<T> = T extends (infer U)[] ? U : never 

type A = GenericInf<typeof myArray> // => A: number | string | boolean
```
🎯 Преобразуем массив в тип при помощи `typeof` -> `(number | string | boolean)`      
🎯 Полученный тип помещаем в `T`      
🎯 Если `T` массив, помещаем типы элементов массива в алиас `U`  
🎯 Теперь `U` содержит тип переданнного массива `number | string | boolean`  
🎯 Доступен нам только в конструкци `? ... `
🎯 Полученый тип можно обрабатывать как угодно `(например поместить в массив)`
       
<br>
<br>

💠 **Объекты**     
```typescript
const myObject = {
  name: 'Ben',
  age: 22
}

type GenericInf<T> = T extends {
  [key: string]: infer U
} ? U : never

type A = GenericInf<typeof myObject> // => A: string | number
```
🎯 Преобразуем объект в тип при помощи `typeof` -> `(string | number)`      
🎯 Полученный тип помещаем в `T`      
🎯 Если `T` объект, помещаем типы всех свойств объекта в алиас `U`  
🎯 Теперь `U` содержит тип переданнного массива `string | number`  
🎯 Доступен нам только в конструкци `? ... `
🎯 Полученый тип можно обрабатывать как угодно `(например поместить в массив)`

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**