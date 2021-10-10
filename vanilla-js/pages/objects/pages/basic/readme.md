* **<a href="#create">Создание</a>**
* **<a href="#compare">Сравнение объекта</a>**
* **<a href="#clone">Клонирование объекта</a>**
* **<a href="#key-exist">Проверка наличия ключа</a>**

## <a name="create">Создание объектов</a>
* Сложный и более детальный, при помощи <a href="./../create-with-descriptors">`Object.create(objectPrototype, valuesWithDescriptrs)`</a> - рассмотренн в отдельной главе
* Простой, при помощи литералов `{...}` или `new Object()`


> Переменные, в которые помещают объекты, всегда хранят в себе не сам объект, а ссылку на его место в памяти  


## <a name="compare">Сравнение объекта</a> 
> При сравнении объектов с одинаковыми свойствами `{a: 1} == {a: 1}` вернет `false`  
  Так как идет сравнение двух ссылок на объект, а они разные

Для того что бы сравнить объект есть два способа 
 * Перебрать их полностью и сравнить по ключам
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

* Привести оба к json и сравнить
```javascript
JSON.stringify({a: 1}) === JSON.stringify({a: 1})
```
> У этого метода есть минус, если объекты будут идентичны, но иметь разный порядок, метод вернет false
## <a name="clone">Клонирование объекта</a>
> При необходимости создания клона объекта, обычным `const clone = needObject`, не обойтись  
Так как в clone будет помещен не новый объект, а ссылка на needObject, и при изменении clone, изменения произойдут и с `needObject`  
Для реализации клонирования объектов есть несколько способов
* **spread** - не глубокое копирование
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
      
console.log(user, clone) //user.address.city => Peter      
```
* `Object.assign` - не глубокое копирование
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
      
console.log(user, clone) //user.address.city => Peter      
```
* `JSON.parse(JSON.stringify(object))` - Глубокое копирование
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
      
console.log(user, clone) //user.address.city => Moscow, clone.address.city => Peter  
```

## <a name="key-exist">Проверка наличия ключа</a>
```javascript
const user = {
    name: 'Ben',
    city: undefined
}

if (user.city) console.log('if return true')
if ('city' in user) console.log('in return true')
```

* При помощи `if`
    * вернет `false` если ключа нет
    * вернет `false`, если ключь есть, но равен `undefined, null, NaN, false, 0, ''`
* При помощи `in`    
    *  всегда вернет true, если ключь определен