## 🚩 Приведение к типу данных
> Нужно в том случаи когда пришли не типизированные данные  
> Но нам точно известно что там за тип, и мы хотим его указать

💠 **<needType>**   
👆🏽 Приведет данные к типу указанному между угловых скобок

&emsp;&emsp; 🔹 Примитив      
```typescript
const notTypedString:unknown = 'myString',
      needData:string = <string>notTypedString
``` 

&emsp;&emsp; 🔹 Объект      
```typescript
type User = {name: string}

const notTypedString:unknown = {name: 'Ben'},
      needData:User = <User>notTypedString
```

<br>
<br>

💠 **data as type**   
👆🏽 Приведет данные к типу указанному между угловых скобок