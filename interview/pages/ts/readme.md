# Typescript

<details>
<summary> Что такое перегрузка функции</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Кейс когда указываешь несколько вероятных типо функции, и если хоть один попадает, типизация отрабатывает   

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что делает <code>typeof</code> в <code>ts</code>?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Возвращает тип данных у конкретных данных   

```typescript
typeof 'my name' // string   
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Разница между <code>any</code> и <code>unknown</code>?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `any`       
&emsp;&emsp; 👆 Что угодно    
  
🎯 `unknow`      
&emsp;&emsp; 👆 Тип который нужно проверить прежде чем использовать     
  
![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое <code>Generic</code>?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Динамические ссылки на передаваемые данные, которые попадут в типизацию   

<details>
<summary> <sup>⭐</sup>❓ Что такое <code>infer</code></summary>

---

Конструкция позволяющая достать содрежимое из тип переданного дженерика 

```typescript jsx
type Arr<T> = T extends (infer U)[] ? U : never;
```

```typescript
const myObject = {
  name: 'Ben',
  age: 22
}

type GenericInf<T> = T extends {
  [key: string]: infer U
} ? U : never

type A = GenericInf<typeof myObject> // 👉🏼 A: string | number
```

🔹 `infer` Используеться только в условных дженериках

🔹 Заданный алиас доступен только в `true` конструкции условия



---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое гуарды/пользовательские проверки</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Функция проверяющая переданный тип на его принадлежность к другому типу

```typescript jsx
// 🎯 Функция пользовательской проверки
function isAdmin(user: any): user is Admin {
    return user.isAdmin;
}
```

👆 Если функция вернет `true`, значит переданные данные будут считатся `admin`   


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какие utility types знаешь?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `Partial`      
&emsp;&emsp; 👆 Делат все поля обязательными   
  
🎯 `Required`      
&emsp;&emsp; 👆 Делает все поля не обязательными     
  
🎯 `Pick`      
&emsp;&emsp; 👆 Закидывает доп поля в тип    
  
🎯 `Omit`      
&emsp;&emsp; 👆 Исключает типы    
  
🎯 `Parametrs`      
&emsp;&emsp; 👆 Вытащит массив параметров функции     

🎯 `ReturnType`      
&emsp;&emsp; 👆 Вернет результат работы функции    

🎯 `Awaited`      
&emsp;&emsp; 👆 Вернет тип промисов      
  


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как полчуить конкретные значения, а не просто типы?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Используем `as const`

```typescript
const animals = ['cat', 'dog', 'mouse'] as const
type Animal = typeof animals[number]
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как получить все ключи объекта?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)



![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Перебор типов циклом</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

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

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**