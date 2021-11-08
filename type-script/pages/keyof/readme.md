# keyof
> Возвращаеть объединение типов ключей объектного типа

🔹 Основной синтаксис
```typescript
const myObject = {
  name: 'Ben',
  age: 22
}

type A = keyof (typeof myObject) // => A: "name" | "age"
```       

🔹 Использование в `generic`
```typescript
function getData<ObjectTypes, ObjectKeys extends keyof ObjectTypes>(object: ObjectTypes, key: ObjectKeys) {
  return object[key]
} 

const result = getData({name: 'Ben', age: 22}, 'name')
```
&emsp;&emsp; 🎯 `ObjectTypes` содержит типизированый объект `{name: string, age: number}`              
&emsp;&emsp; 🎯 `ObjectKeys` при помощи `keyof` вынимает все ключи в виде строки из `ObjectTypes`  `'name' | 'age'`  
&emsp;&emsp; 🎯 Тем самым описывая что вторым аргументом функции может быть только ключ, который есть в объекте первого аргумента

🔹 Использование в цикле `key in`
```typescript
type FormProps = {
  name: string,
  age: number
}

type ValidationScheme<T> = {
  [K in keyof T]: {
      value: T[K],
      check: boolean,
      inputName: K
  }
}

type ValidationSchemeForm = ValidationScheme<FormProps>
```  
&emsp;&emsp; 🎯 `FormProps` содержит имена инпутов формы, и тип их значения    
&emsp;&emsp; 🎯 `ValidationScheme` служит как динамический генератор типов, параметров для каждого из инпута формы  
&emsp;&emsp; 🎯 `ValidationSchemeForm` соеденительное звено, которое прокидывает через `generic`, все инпуты в генератор  

<br>

👆 `[K in keyof T]` конструкция делает следующиее
&emsp;&emsp; 🎯 `keyof T` получает все ключи из полученного `generic`, `'name' | 'age'`  
&emsp;&emsp; 🎯 Все ключи перебираються в цикле, создавая новый типизированный объект с свойствами `{value: T[K], check: boolean}`   
&emsp;&emsp; 🎯 В переменную `K` по очередно попадают все ключи из `keyof T`: `'name', 'age'`   
&emsp;&emsp; 🎯 Имея ключ, можно получить и значение каждого ключа из `generic`, это происходит в переменной `value: T[K]`

```typescript
type ValidationSchemeForm = { // => результат работы K in keyof T 
     name: {
            value: string;
            check: boolean;
            inputName: "name";
     },
     age: {
         value: number;
         check: boolean;
         inputName: "age";
     }
}
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**