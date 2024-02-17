# Объект 

<details>
<summary> Какими еще способами можно создать объект, кроме как просто скобки <code>{}</code></summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `new Object({name: 'object'})`       
🎯 `Object.create(proto, propsWithDescriptions)`    

<details>
<summary> <sup>⭐</sup>❓ Какое особенности дает создание через <code>Object.create</code>?</summary>

---

🎯 Возможность указать объект прототип, для создания системы наследования         
🎯 Указывать дескрипторы для создаваемых свойств

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что такое прототип?</summary>

---

Ссылка на родительский объект

---

</details>  

<details>
<summary> <sup>⭐</sup>❓ Что такое дескрипторы? </summary>

---

Конфигурация описывающая возможности воздействия на объект  

🎯 `writable`  
&emsp;&emsp; 👆 Можно ли редактировать    

🎯 `configurable`      
&emsp;&emsp; 👆 Можно ли удалять или изменять дескрипторы при помощи `Object.defineProperty/s`   

🎯 `enumerable`      
&emsp;&emsp; 👆 Доступно ли свойство для перебора в цикле `for in`, и в `Object.keys()`       

🛑 По умолчанию все равны `false`   

<br>

🎯 `get`   
&emsp;&emsp; 👆 Геттер

🎯 `set`       
&emsp;&emsp; 👆 Cеттер

🛑 `get/set` и `writable | configurable | enumerable` взаимосключающие    
&emsp;&emsp; 👆 Можно указать при создании либо `get/set` либо остальное     

🛑 Если `get`, обьявлен, а `set` нет. Попытка изменить свойство будет проигнорированна   
🛑 Если `set`, обьявлен, а `get` нет. При попытке получить значение свойства получим `undefined`  

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что выведет данный код?</summary>

---

```javascript
const obj = Object.create({}, {
    name: {
        value: 'user1'
    },
    age: {
        value: '22'
    },
    userData: {
        get() {
           return `${this.name} ${this.age}`  
        },
    }
})

console.log(obj.userData);

obj.userData = 'user 2 23'

console.log(obj.userData);
```

<details>
<summary> ✅ Ответ</summary>

---

`user1 22`, так как у `userData` не объявлен сеттер, из за чего присваивание новых данных будет проигнорированно  

---

</details>

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что выведет данный код?</summary>

---

```javascript
const obj = Object.create({}, {
    name: {
        value: 'user1'
    },
    age: {
        value: '22'
    },
    userData: {
        set(data) {
           return data;  
        },
    }
})

obj.userData = 'user 2 23'

console.log(obj.userData);
```

<details>
<summary> ✅ Ответ</summary>

---

`undefined` так как у свойства есть сетер но отсутсвует геттер  

---

</details>

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что выведет данный код?</summary>

---

```javascript
const obj = Object.create({}, {
    name: {
        value: 'Alex'
    },
    surname: {
        value: 'Mirgorodsky'
    },
    fullName: {
        writable: true,
        get() {
            return `${this.name} ${this.surname}`
        },
        set(data) {
            return data.trim()
        }
    }
})

obj.fullName = 'Jon Lenon '

console.log(obj.fullName);
```

<details>
<summary> ✅ Ответ</summary>

---

Выпадет ошибка, о взаимоисключающих `аксцесорах` и `writable` свойств  

---

</details>

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что выведет данный код?</summary>

---

```javascript
const obj = Object.create({}, {
        name: {
            value: 'user1'
        }
})

obj.name = 'user2'

console.log(obj);
```

<details>
<summary> ✅ Ответ</summary>

---

`user1`, так как по дефолту `writable`, `configurable`, `enumerable` равны `false`, вследствии чего, редактирование игнорируется  

---

</details>

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что выведет данный код?</summary>

---

```javascript
const user = {
    getFullName() {
        return `${this.name} ${this.surname}`
    }
}

const ben = Object.create(user, {
    name: {
        value: 'Ben'
    },
    surname: {
        value: 'Jordan'
    }
})

console.log(ben.getFullName());
```

<details>
<summary> ✅ Ответ</summary>

---

`Ben Jordan`, метод будет вытащен из прототипа, а свойства будут взяты из контекста  

---

</details>

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как задать дескрипторы обьекту, который создан не с помощью <code>Object.create</code>?</summary>

---

Для этого есть метод `Object.defineProperty(myObject, propName, propDescriptors)`  

```javascript
const user = {
    name: 'Ben',
    surname: 'Jordan'
}

Object.defineProperty(user, 'age', {
    value: '22',
    writable: false
})

console.log(user);
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как добавить несколько свойств с дескрипторами, обьекту который создан не с помощью <code>Object.create</code></summary>

---

Для этого есть метод `Object.defineProperties(object, valuesWithDesriptors)`   

```javascript
const user = {
    name: 'Ben'
}

Object.defineProperties(user, {
    surname: {
        value: 'Jordan',
        writable: true
    },
    age: {
        value: '22',
        writable: true
    },
})

console.log(user);
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как указать дескрипторы в конструкторе?</summary>

---

```javascript
class User {
    
    constructor({name}) {
        
        Object.defineProperties(this, {
            name: {
                value: name,
                writable: false,
                configurable: false,
                enumirable: true
            }
        })
        
    }
    
}

const den = new User({name: 'Den'});

den.name = 'Alex';

console.log(den.name);
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Для чего это может быть нужно?</summary>

---

Для реализации не изменяемых значений в экземплярах класса   

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как запретить добавление новых свойст в объект?</summary>

---

При помощи метода `Object.preventExtensions(object)`       
  
<details>
<summary> <sup>⭐</sup>❓ Что вернет данный код?</summary>

---

```javascript
const user = {
    name: 'user1',
    surname: 'Jordan',
    age: 22,
}

Object.preventExtensions(user);

user.role = 'admin';
delete user.surname;
user.age = 23;

console.log(user);
```

<details>
<summary> ✅ Ответ</summary>

---

`{name: 'user1', age: 23}`     
👆 Объект изменяемый, можно удалять элеменит, но в него нельзя добавлять новые свойства  

---

</details>

---

</details>

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как запретить добавлять и удалять элементы в объект?</summary>

---

Для этого есть метод `Object.seal()`    
&emsp;&emsp; 👆 Устанавливает всем свойствам объекта `{configurable: false}`   
  

---

</details>


<details>
<summary> <sup>⭐</sup>❓ Как запретить любые изменения объекта?</summary>

---

Для этого есть метод `Object.freez()`     
&emsp;&emsp; 👆 Устанавливает всем свойствам объекта `{configurable: false, writable: false}`   

---

</details>


<details>
<summary> <sup>⭐</sup>❓ Как проверить значение дескрипторов у объекта?</summary>

---

Для этого есть три метода:  

🎯 `Object.isExtensible`    
&emsp;&emsp; 👆 Проверяет на запрет добавления новых свойств  

🎯 `Object.isSeal`  
&emsp;&emsp; 👆 Проверяет установленны ли у всех свойст объекта `configurable: false`     

🎯 `Object.isFreez`   
&emsp;&emsp; 👆 Проверяет установленны ли у всех свойст объекта `{configurable: false, writable: false}`    

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что вернет <code>{a: 1} == {a: 1}</code>?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

`false`     
👆 Так как у каждого объекта есть свое место в памяти, что то из сюжета `id`, и во время сравнения объектов происходит сравнение именно этих `id`, которые разные      
  
<details>
<summary> <sup>⭐</sup>❓ Что тогда вернет этот код?</summary>

---

```javascript
const a = {a: 1}
const b = a

console.log(a == b);
```

<details>
<summary> ✅ Ответ</summary>

---

Верне `true`, так как переменные ссылаюся на одну и ту же область памяти  

---

</details>

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)


</details>

<details>
<summary> Как сравнивать объекты?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Преобразовать к строке и сравнить  
🎯 Пробежатся по ключам и сравнить       

<details>
<summary> <sup>⭐</sup>❓ В чем фатальный минус сравнения через преобразования к строке?</summary>

---

🎯 Если объекты имеют разную последовательность, но одинаковые значения, такое сравнение вернет `false`     
🎯 `Json` принимает не все форматы, (`undefined`, функции, файлы и тд)       

---


</details>

<details>
<summary> <sup>⭐</sup>❓ Напиши функцию сравнения двух объектов</summary>

---

```javascript
const isObjectsEqual = (object1, object2) => {
    let isEqual = true;
    const isObjects = typeof object1 === 'object' && typeof object2 === 'object'
    
    if (isObjects) {
        const hasEqualLength = Object.keys(object1).length === Object.keys(object2).length   
        
        if (hasEqualLength) {
            
            for (let [key, object1Value] of Object.entries(object1)) {
                
                if (isEqual === false) {
                    break;
                }
                
                const hasComparableKey = object2.hasOwnProperty(key);
                
                if (hasComparableKey) {
                    const object2Value = object2[key]
                    const isValuesObjects = typeof object1Value === 'object' && typeof object2Value === 'object'
                    
                    if (isValuesObjects) {
                        isEqual = isObjectsEqual(object1Value, object2Value);
                    } else {
                        isEqual = object1Value === object2Value;
                    }
                    
                } else {
                    break
                }
                
            }
            
        } else {
            isEqual = false
        }
        
    } else {
        throw new Error('not valid params');
    }
    
    return isEqual;
}

const object1 = {
    name: 'object',
    parent: {
        childName: 'child'
    }
}

const object2 = {
    name: 'object',
    parent: {
        childName: 'child'
    }
}

console.log(isObjectsEqual(object1, object2));
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как сравнивать два объекта если в них есть дата?</summary>

---

В момент сравнения значений, проверять на `instance` от даты, и сравнивать исходя из особенностей типа данных    

```javascript
const isValuesObjects = typeof object1Value === 'object' && typeof object2Value === 'object';
const isDateValues = object1Value instanceof Date && object2Value instanceof Date

if (isDateValues) {
    isEqual = Number(object1Value) === Number(object1Value);
} else if (isValuesObjects) {
    // recursive
} else {
    isEqual = object1Value === object1Value;
}
```

<details>
<summary><img src="https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/ts.svg" height="20px" title="ts" >&emsp; Typescript</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```typescript
const isObjectsEqual = (object1, object2) => {
    let isEqual = true;
    const isObjects = typeof object1 === 'object' && typeof object2 === 'object'
    
    if (isObjects) {
        const hasEqualLength = Object.keys(object1).length === Object.keys(object2).length   
        
        if (hasEqualLength) {
            
            for (let [key, object1Value] of Object.entries(object1)) {
                
                if (isEqual === false) {
                    break;
                }
                
                const hasComparableKey = object2.hasOwnProperty(key);
                
                if (hasComparableKey) {
                    const object2Value = object2[key]
                    const isValuesObjects = typeof object1Value === 'object' && typeof object2Value === 'object'
                    const isDateValues = object1Value instanceof Date && object2Value instanceof Date
                    

                    if (isDateValues) {
                        isEqual = Number(object1Value) === Number(object2Value);
                    } else if (isValuesObjects) {
                        isEqual = isObjectsEqual(object1Value, object2Value);
                    } else {
                        isEqual = object1Value === object2Value;
                    }
                    
                } else {
                    break
                }
                
            }
            
        } else {
            isEqual = false
        }
        
    } else {
        throw new Error('not valid params');
    }
    
    return isEqual;
}

const object1 = {
    name: 'object',
    parent: {
        childName: new Date('1997')
    }
}

const object2 = {
    name: 'object',
    parent: {
        childName: new Date('1998')
    }
}

console.log(isObjectsEqual(object1, object2));
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как клонировать объекты?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `spread` - Не глубокое        

```javascript
const object1 = {
    name: 'object',
    parent: {
        childName: new Date('1997')
    }
}

const clone = {
    ...object1
}
```    

🎯 `Object.asign` - Не глубокое

```javascript
const object1 = {
    name: 'object',
    parent: {
        childName: new Date('1997')
    }
}

const clone = Object.assign({}, object1)
console.log(clone);
```

🎯 `JSON.stringlify` - Глубокое, но с ограничениями  

```javascript
const object1 = {
    name: 'object',
    parent: {
        childName: new Date('1997')
    }
}

const clone = JSON.parse(JSON.stringify(object1));
console.log(clone);
```

<details>
<summary> <sup>⭐</sup>❓ Что вернет данный код?</summary>

---

```javascript
const object1 = {
    name: 'object',
    parent: {
        childName: 'child'
    }
}

const clone = {
    ...object1
}

object1.parent.childName = 'test1';

console.log(clone.parent.childName);

clone.parent.childName = 'test2';

console.log(object1.parent.childName);
```

<details>
<summary> ✅ Ответ</summary>

---

🎯 Первый лог `test1`   
🎯 Второй лог `test2`   

👆 Не смотря на попытку клонирования, вложенные элементы все так же указывают на одну область памяти, и изменение из любого объекта изменит данные в обоих        

---

</details>

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Напиши свою функцию глубокого копирования</summary>

---

```javascript
const cloneObject = (object) => {
    const clone = {}
    const isObject = typeof object === 'object'
    
    if (isObject) {
        
        for (let [key, value] of Object.entries(object)) {
            const isDate = value instanceof Date;
            const isObject = typeof value === 'object'   
                
            if (isDate) {
                clone[key] = value;
            } else if (isObject) {
                clone[key] = cloneObject(value);
            } else {
                clone[key] = value;
            }
            
        }
        
    } else {
        throw new Error('invalid data');
    }
    
    return clone;
    
}

const object1 = {
    name: 'object',
    parent: {
        child: new Date('1997')
    }
}

const clone = cloneObject(object1);
console.log(clone);

clone.parent.child = 'children';

console.log(object1.parent.child, clone.parent.child);
```

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как проверить наличие ключа?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Просто с помощью `if (object[key]) {...}`         
🎯 При помощи `key in object`      
🎯 `object.hasOwnProperty(key)`       

<details>
<summary> <sup>⭐</sup>❓ Какие подвохи есть у данных методов?</summary>

---

🎯 `if` не отработает если ключь есть, но равен `null | undefined | 0`       
🎯 `key in object` может хватануть совйство из прототипа      

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как перебирать объекты?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `for (let key in object)`        
&emsp;&emsp; 👆 Может хватать свойства из прототипов, нужно проверять `object.hasOwnProperty(key)`      
  
🎯 `for (let key of Object.keys(object))`          
&emsp;&emsp; 👆 Избавляет от свойств прототипа      

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое аксцессоры?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Это функции перехватчики получения и установки значения  

<details>
<summary> <sup>⭐</sup>❓ Как устанавливаются аксцессоры?</summary>

---

🎯 `Object.create(proto, valuesWithAcscesors)`
```javascript
const user = Object.create({}, {
    _name: {
      value: 'user1',
      writable: true
    },
    name: {
        get() {
            return this._name;
        },
        set(data) {
            this._name = data.trim();
        }
    }
}) 

user.name = 'user2    '

console.log(user.name);
```


🎯 `Object.defineProperty(object, 'valueName', acscessors})`    
```javascript
const user = {}
Object.defineProperty(user, 'name', {
    get() {
        return this._name;
    },
    set(data) {
        this._name = data.trim();
    }
})

user.name = 'user2    '

console.log(user.name);
```

🎯 Просто внутри скобок       
&emsp;&emsp; 👆 Функция с именем значения, с префиксом `get/set`     
  

```javascript
const user = {
    _name: '',
    get name() {
        return this._name;
    },
    set name(data) {
        this._name = data.trim();
    }
}

user.name = 'user2    '

console.log(user.name);
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет данный код?</summary>

---

```javascript
const user = {
    get name() {
        return this.name;
    },
    set name(data) {
        this.name = data.trim();
    }
}

user.name = 'test'
```

<details>
<summary> ✅ Ответ</summary>

---

Переполнение стека, так как аксцессоры будут дергать сами себя, изменяя и читая свойства  

---

</details>

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Для чего нужны аксцессоры?</summary>

---

🎯 Контролировать `ввод/вывод`(валидировать)         
🎯 Трансформировать или оборачивать данные     
🎯 Делать отстуки в библиотеках при любых манипуляциях с данными  
🎯 Выводить более удобный свойства объединяя другие      

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что выведет данный код?</summary>

---

```javascript
const user = {
    _name: '',
    get name() {
        return this._name;
    },
    set name(data) {
        this._name = data.trim();
    }
}

user.name = 'user2    '

for (let key of Object.keys(user)) {
    console.log(key);
}
```

<details>
<summary> ✅ Ответ</summary>

---

`_name, name`     
👆 Свойства объявленные через аксцессор, так же отображаются, но свойство через которое ведеться работа `_name`, лучше добавить через  
```javascript
Object.defineProperty(user, '_name', {writable: true, configurable: true, enumirable: false})
```

---

</details>

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что выведет данный код?</summary>

---

```javascript
const user = {
    _name: 'test',
    get name() {
        return this._name;
    },
}
console.log(user.name);
```

<details>
<summary> ✅ Ответ</summary>

---

🎯 В стрикмоде - выкинет ошибку(get/set) идут в паре      
🎯 Без стрикт мода отработает    


---

</details>

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как можно использовать инструменты массивов для работы с объектами?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Для этого можно преобразовывать объекты в масивообразную структуру, и на оборот  

🎯 Получить массив ключей `Object.keys(object)`       

<details>
<summary> <sup>⭐</sup>❓ Перебери свойства объекта, исключая прототипы</summary>

---

```javascript
const user = {
    city: 'Moscow'
}

const descriptors = {
    writable: true,
    enumerable: true,
    configurable: true
}

const ben = Object.create(user, {
    name: {
        value: 'Den',
        ...descriptors
    },
    age: {
        value: 22,
        ...descriptors
    }
})

const res = {}

for (let key of Object.keys(ben)) {
    res[key] = ben[key];
}

console.log(res);
```
---

</details>

&emsp;&emsp; 👆 Позволяет получить массив всех ключей, пробежатся по ним любым циклом, получая значения через ключ    
&emsp;&emsp; 👆 Исключает значения идущие из прототипа   
  
🎯 Получить массив всех значений `Object.values(object)`  

🎯 Получить массив в формате `ключ-значение` `Object.entries(object)`  
&emsp;&emsp; 👆 Позволяет перебрать данные объекта через `for of` или `forEach`    
```javascript
const user = {
    name: 'alex',
    age: 22
}

for (let [key, value] of user) {
    
}
```

🎯 Собрать объект из формата `ключь-значение` `Object.fromEntries(keyValueArray);`   

<details>
<summary> <sup>⭐</sup>❓ Собери из массива <code>['name', 'age', 'city']</code>, объект в формате <code>{name: {error: ''}, ...}</code></summary>

---

```javascript
const inputs = ['name', 'age', 'city'];

const inputsKeyValueWithErrors = inputs.map((key) => ([key, {error: ''}])); // [['name', {error: ''}], ...]   

const inputsList = Object.fromEntries(inputsKeyValueWithErrors);

console.log(inputsList);   
```   

---


</details>

&emsp;&emsp; 👆 Позволяет перебрать массив, и собрать из него нужный объект      
&emsp;&emsp; 👆 Позволяет преобразовать `Map` данные  
  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>


<br>

### ⟵ **<a href="../../readme.md">Назад</a>**