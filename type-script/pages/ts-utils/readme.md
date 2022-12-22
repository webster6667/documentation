# Ts утилиты
> Готовые Ts конструкции для извлечение типов различными способами

* **<a href="#partial">Partial</a>**
* **<a href="#required">Required</a>**
* **<a href="#nonNullable">NonNullable</a>**
* **<a href="#record">Record</a>**
* **<a href="#readonly">Readonly</a>**
* **<a href="#pick">Pick</a>**
* **<a href="#extract">Extract</a>**
* **<a href="#exclude">Exclude</a>**
* **<a href="#omit">Omit</a>**
* **<a href="#parameters">Parameters</a>**
* **<a href="#constructor-parameters">ConstructorParameters</a>**
* **<a href="#return-type">ReturnType</a>**
* **<a href="#instance-type">InstanceType</a>**
* **<a href="#awaited">Awaited</a>**
  
<br>

💠 **<a name="partial">Partial</a>**   
👆🏽 Делает все обязательные поля, не обязательными
```typescript
interface Todo {
  title: string;
  description: string;
}

type Result = Partial<Todo> // 👉🏼 Result: {title?: string; description?: string;}
```

<br>
<br>
 
💠 **<a name="required">Required</a>**   
👆🏽 Делает все необязательные поля, обязательными
```typescript
interface Todo {
  title?: string;
  description?: string;
}

type Result = Required<Todo> // 👉🏼 Result: {title: string; description: string;}
```

<br>
<br>

💠 **<a name="nonNullable">NonNullable</a>**     
👆🏽 Исключает из union типа `null` и `undefined`
```typescript
type value = string | number | null | undefined

type Result = NonNullable<value> // 👉🏼 Result: string | number
```

<br>
<br>
 
💠 **<a name="record">Record</a>**     
👆🏽 Создает тип с несколькими свойствами, указанного типа 
```typescript
type Result = Record<'width' | 'height' | 'lenght', number> // 👉🏼 Result: {width: number, height: number, lenght: number}
```

<br>
<br>

💠 **<a name="readonly">Readonly</a>**     
👆🏽 Запрещает изменять значение объекта
```typescript
interface Todo {
    title: string;
    description: string;
}

type Result = Readonly<Todo> // 👉🏼 Result: {readonly title: string; readonly description: string;}
```

<br>
<br>

💠 **<a name="pick">Pick</a>**     
👆🏽 Создает экзкемплят указанного типа, только с указанными ключами
```typescript
interface Todo {
    title: string;
    description: string;
    date: string
}

type Result = Pick<Todo, 'title' | 'description'> // 👉🏼 Result: {title: string, description: string}
```

<br>
<br>

💠 **<a name="omit">Omit</a>**     
👆🏽 Создает экзкемплят указанного типа, только без указанных ключей
```typescript
interface Todo {
    title: string;
    description: string;
    date: string,
    author: string,
}

type Result = Omit<Todo, 'date' | 'author'> // 👉🏼 Result: {title: string, description: string}
```

<br>
<br>

💠 **<a name="extract">Extract</a>**     
👆🏽 Вернет значения которые присутствуют в обоих типах
```typescript
type GridSizes = 'sm' | 'md' | 'lg'
type TextSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type Result = Extract<GridSizes, TextSizes> // 👉🏼 Result: 'sm' | 'md' | 'lg'
```

<br>
<br>

💠 **<a name="exclude">Exclude</a>**     
👆🏽 Вернет значения которые присутствуют только в одном из типов
```typescript
type GridSizes = 'sm' | 'md' | 'lg'
type TextSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type Result = Exclude<GridSizes, TextSizes> // 👉🏼 Result: 'xs' | 'xl'
```

<br>
<br>

💠 **<a name="parameters">Parameters</a>**     
👆🏽 Принимает в себя тип функции, возвращает кортедж типизированных параметров функции
```typescript
type GetBarLineStyle = (
    fill: string,
    barSize: string | number
) => {
    fill: string,
    barSize: string | number
};

export const getBarLineStyle: GetBarLineStyle = (fill, barSize) => {
    return {
        fill,
        barSize
    };
};

type Result = Parameters<typeof getBarLineStyle> // 👉🏼 Result: [fill: string, barSize: string | number]
```

<br>
<br>

💠 **<a name="constructor-parameters">ConstructorParameters</a>**     
👆🏽 Принимает в себя тип консруктора, возвращает кортедж типизированных параметров консруктора
```typescript
class Todo {
    name: string;
    isCompleted: boolean;

    constructor(name: string, isCompleted: boolean) {
        this.name = name;
        this.isCompleted = isCompleted;
    }
}

type Result = ConstructorParameters<typeof Todo> // 👉🏼 Result: [name: string, isCompleted: boolean]
```

<br>
<br>

💠 **<a name="return-type">ReturnType</a>**     
👆🏽 Принимает в себя тип функции, возвращает тип возвращаемого ею результата
```typescript
type GetBarLineStyle = (
    fill: string,
    barSize: string | number
) => {
    fill: string;
    barSize: string | number;
};

export const getBarLineStyle: GetBarLineStyle = (fill, barSize) => {
    return {
        fill,
        barSize
    };
};

type Result = ReturnType<typeof getBarLineStyle>; // 👉🏼 Result: {fill: string, barSize: string | number}
```

<br>
<br>

💠 **<a name="instance-type">InstanceType</a>**     
👆🏽 Принимает в себя тип конструктора, возвращает тип который возвращает конструктор  
```typescript
class Todo {
    name: string;
    isCompleted: boolean;

    constructor(name: string, isCompleted: boolean) {
        this.name = name;
        this.isCompleted = isCompleted;
    }
}

type Result = InstanceType<typeof Todo> // 👉🏼 Result: Todo
```

<br>
<br>

💠 **<a name="awaited">Awaited</a>**     
👆🏽 Возвращает тип результата работы промиса
```typescript
type Result = Awaited<Promise<string>> // 👉🏼 Result: string
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**
