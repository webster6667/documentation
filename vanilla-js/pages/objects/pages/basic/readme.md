# Основы объекта

* **<a href="#create">Создание</a>**
* **<a href="#compare">Сравнение объекта</a>**
* **<a href="#clone">Клонирование объекта</a>**
* **<a href="#key-exist">Проверка наличия ключа</a>**
* **<a href="../../../cycles/readme.md#for-in-of">Перебор свойств</a>**

## 🚩 <a name="create">Создание объектов</a>

<br>

💠 **<a href="./../create-with-descriptors">Object.create`(objectPrototype, valuesWithDescriptors)`</a>**   
👆🏽 Сложный и более детальный, рассмотренн в <a href="./../create-with-descriptors">отдельной главе</a>
 

<br>
<br>

💠 **`{...}` или `new Object()`**   
👆🏽 Простой

<br>
<br>

🛑 Переменные, в которые помещают объекты, хранят в себе не сам объект, а ссылку на его место в памяти        

<br>

## <a name="compare">Сравнение объекта</a> 

🛑 Сравнение объектов с одинаковыми свойствами `{a: 1} == {a: 1}` вернет `false`  
&emsp;&emsp;&emsp;&emsp; 👆 Так как идет сравнение ссылок на область памяти объектов, а они разные   

<br>
<br>

##### Методы сравнения
 
 
 
💠 Сравнение перебором по ключам
 ```javascript
const isTwoObjectEqual = (firstObject, secondObject) => {

    let isTwoObjectEqualResult = true
    

      const firstObjectKeys = Object.keys(firstObject),   //Получем ключи объектов
            secondObjectKeys = Object.keys(secondObject), //Получем ключи объектов
            isObjectsPropsCountEqual = firstObjectKeys.length === secondObjectKeys.length //Если кол-во ключей одинаковое, начинаем сравнивать

        if (isObjectsPropsCountEqual) {

            for (let firstObjectKey of firstObjectKeys) {
                const firstObjectValue = firstObject[firstObjectKey], //Берем значение первого
                      hasSecondObjectEqualKey = secondObject.hasOwnProperty(firstObjectKey) //Проверяем что у второго есть такой же ключь(не в прототипе) 

                if (hasSecondObjectEqualKey) {
                    const secondObjectValue = secondObject[firstObjectKey], //Берем значение второго
                          isComparableObjectValueIsObject = typeof firstObjectValue === "object" && typeof secondObjectValue === "object"
                    
                    /**
                     * Если сравниваемые значения объекты, вызываем рекурсию
                     */
                    if (isComparableObjectValueIsObject) {
                        const isTwoDeeperObjectNotEqual = !isTwoObjectEqual(firstObjectValue, secondObjectValue)

                        if (isTwoDeeperObjectNotEqual) {
                            isTwoObjectEqualResult = false
                            break
                        }

                    } else {
                        const isComparableObjectValueNotEqual = secondObjectValue !== firstObjectValue

                        
                        if (isComparableObjectValueNotEqual) {
                            isTwoObjectEqualResult = false
                            break
                        }

                    }

                } else {
                    isTwoObjectEqualResult = false
                    break
                }

            }

        } else {
            isTwoObjectEqualResult = false
        }

    return isTwoObjectEqualResult
}
```
[![Edit objective-hawking-kg164](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/objective-hawking-kg164?fontsize=14&hidenavigation=1&theme=dark)

<br><br>

💠 Сравнение как строк, после приведения в `json`
```javascript
JSON.stringify({a: 1}) === JSON.stringify({a: 1}) // true
```
&emsp;&emsp; 🔸 Если объекты будут идентичны, но иметь разный порядок, метод вернет `false`      

<br>

## 🚩 <a name="clone">Клонирование объекта</a>
🎯 При необходимости создания клона объекта, обычным `const clone = needObject`, не обойтись

🎯 Так как в `clone` будет помещен не новый объект, а ссылка на `needObject`

🎯 Это означает что при изменении `clone`, изменения произойдут с `needObject`   

🎯 Так как в `clone` будет помещен не новый объект, а ссылка на `needObject`
  
<br>
<br>

##### Методы Клонирования


💠 **spread**  
👆🏽 Не глубокое копирование   
```javascript
const user = {
        name: 'Max',
        address: {
            country: 'Russia',
            city: 'Moscow'
        }
      },
      clone = {...user}
      
      clone.address.city = 'Peter'
      
console.log(user.address.city) // => 'Peter'
// Оригинал был изменен через клон
// Так как копирование идет только на первом уровне      
```

<br><br>

💠 **Object.assign`(objectWherePutData, data)`**  
👆🏽 Не глубокое копирование
```javascript
const user = {
        name: 'Max',
        address: {
            country: 'Russia',
            city: 'Moscow'
        }
      },
      clone = Object.assign({}, user)
      
      clone.address.city = 'Peter'
      
console.log(user.address.city) // => 'Peter'
// Оригинал был изменен через клон
// Так как копирование идет только на первом уровне      
```

<br><br>

💠 **JSON.parse`(JSON.stringify(object))`**  
👆🏽 Глубокое копирование
  
&emsp;&emsp; 🔹 Объект превращается в строку, из которой потом создается полностью новый объект        
  
```javascript
const user = {
        name: 'Max',
        address: {
            country: 'Russia',
            city: 'Moscow'
        }
      },
      clone = JSON.parse(JSON.stringify(user))
      
      clone.address.city = 'Peter'
      
console.log(user.address.city, clone.address.city) // => 'Moscow', 'Peter'
//Оригинал объекта не был изменен, так как произошол глубокое копирование  
```

## 🚩 <a name="key-exist">Проверка наличия ключа</a>

<br>

💠 **При помощи `if`**   

<br>

&emsp;&emsp; 🔹 Вернет `false` если ключа нет  

&emsp;&emsp; 🔹 вернет `false`, если ключь есть, но равен `undefined, null, NaN, false, 0, ''` 

<br>
<br>

💠 **При помощи `in`**   

<br>

&emsp;&emsp; 🔹 Вернет `true`, если ключь определен  
&emsp;&emsp;&emsp;&emsp; 👆 Вне зависимости какое у него значние   

```javascript
const user = {
    name: 'Ben',
    city: undefined
}

if (user.city) console.log('if return true')      // false
if ('city' in user) console.log('in return true') // true
```

<br>
    
## 🚩 <a href="../../../cycles/readme.md#for-in-of">Перебор свойств</a>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**