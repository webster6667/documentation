# Object.create
> Создание объекта с дескрипторами и прототипами

* **Дескрипторы** - флаги свойства, это флаги описывающие поведения свойство, при удалении, изменении или переборе в циклах
    * `writable` - можно ли редактировать свойство
    * `enumerable` - перебирать ли это свойство в массиве
    * `configurable` - можно ли удалить свойство и изменить у него флаги дескриптора
> При создании через Object.create, по дефолту все равны `false`    

* <a href="./../prototype">**Прототип**</a> - звено для реализации наследование, описанно в другой главе

## Синтаксис
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
