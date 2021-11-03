# Классы

<br>

🔹 При создания объекта из класса, необходимо указать класс как тип объекта
```typescript
class User {
  name: string
  age: number
 
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }  

}

const den:User = new User('Den', 22)
```

<br>

🔹 Ключевое слово `implements`, указывает какие свойства и методы должны быть реализованы  
&emsp;&emsp; 🎯 Поддерживает групповую имплементацию        
&emsp;&emsp; 🎯 Можно имплементировать как интерфейсы так и типы      
```typescript
interface HumanI {
  hiPhrase: string,
  sayHi():string
}

interface HumanT {
  byePhrase: string,
  sayBye():string
}

class User implements HumanI, HumanT {
  hiPhrase: string
  byePhrase: string
 
  constructor(hiPhrase: string, byePhrase: string) {
    this.hiPhrase = hiPhrase
    this.byePhrase = byePhrase
  }  

  sayHi() {
    return this.hiPhrase
  }

  sayBye() {
    return this.byePhrase
  }

}

const den:User = new User('hi', 'bye')
``` 

🔹 Для типизации конструктора класса, используеться ключевое слово `new`  
&emsp;&emsp; 👆 При этом свойства и метода класса, описываються  в отдлеьном интерфейсе    

```typescript
interface IClass {
  sayHi(phrase:string):string
}

type IConstructor<T> = new (name:string) => T

function createObject(cl: IConstructor<IClass>) {
  const user = new cl('Jon')

  user.sayHi('hi')
}
```                  

<br>

## 🚩 Абстрактные классы

<br>

🔹 Создаються при помощи конструкции `abstract`      

🔹 Запрещают создание инстанса, возможно только наследование
```typescript
abstract class User {
  name: string
  age: number
 
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  
  sayHi() {
    return 'hi'
  }

}

class Student extends User {
  group: number

  constructor(name: string, age: number, group: number) {
    super(name, age)
    this.group = group
  }

}

const den:Student = new Student('Den', 22, 5),
      jon = new User('Jon', 22) // => Ошибка, абстрактный клас запрещает инстанс
```     

<br>

🔹 Может содержать как реализацию методов, так и абстрактные методы    
&emsp;&emsp; 👆 `абстрактные методы`, методы без реализации, обязывающие потомков реализовать
```typescript
abstract class User {
  
  sayHi() {
    return 'hi'
  }

  abstract sayBi():string

}

class Student extends User {

  // 🎯 User.sayBi обязывает реализовывать
  sayBi() {
    return 'bye'
  }

}

const den:Student = new Student()
```

<br>
         
## 🚩 Модификаторы доступа

🔹 Описание модификаторов доступа в конструкторе, автоматически создает и присваивает данные инстансу класса
```typescript
class User {
  constructor(
    public name: string, 
    public age: number
  ) {}
}

const den:User = new User('Den', 22)

console.log(den.age) // => 22
```      

🔹 Можно указывать модификаторы не только в конструкторе       

🔹 `public` - свойство доступно везде                

🔹 `private`  
&emsp;&emsp; 🎯 Свойство доступно только внутри класса(`нельзя получить у инстанса`)  
&emsp;&emsp; 🎯 Не доступно наследникам

🔹 `protected`
&emsp;&emsp; 🎯 Свойство доступно внутри класса и наследникам  
&emsp;&emsp; 🎯 Не доступно для инстансов класса

🔹 `readonly` - Свойство доступно только для чтения  
&emsp;&emsp;&emsp;&emsp; 👆 Может идти дополнительно к любому из выше указанных
```typescript
class User {
  public readonly name: string
}
```          

❗ Эти модификаторы работают только для разработчиков, в скомпилированном `js` все будет доступно как всегда