# Object.create
> Создание объекта с дескрипторами и прототипом

## 🚩 Дескрипторы
Флаги свойства, описывающие поведения свойства, при:  
* Удалении, 
* Изменении 
* Переборе в циклах

<br>

💠 **writable**    
👆🏽 Можно ли редактировать свойство


<br><br>

💠 **enumerable**     
👆🏽 Доступно ли свойство для перебора в цикле

<br><br>

💠 **configurable**     
👆🏽 Можно ли удалить свойство и изменить у него флаги дескриптора

    
🛑 При создании объекта через `Object.create`, по дефолту все равны `false`    

<br>

## 🚩 Синтаксис

<br>


💠 **Object.create`(prototype, propsWithDescriptions)`**     

&emsp;&emsp; 🔹 <a href="./../prototype">**prototype**</a>   
&emsp;&emsp;&emsp;&emsp; 👆 Звено для реализации наследование, описанно в другой главе

```javascript
const myObject = Object.create(
    {
        getUserName() {
            return this.userName
        }
    },
    {
        userName: {
            value: 'Jon',
            writable: true,
            enumerable: true,
            configurable: true
        },
        _age: {
            value: '22',
            writable: true,            
        },
        age: {
            get() {
                return this._age
            },
            set(value) {
                this._age = value
            },
        }
    },
)

console.log(myObject.getUserName());
```
