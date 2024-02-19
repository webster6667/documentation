# Бинарный поиск

🔹 Работает в разы быстрее линейного поиска  

🔹 Требует что бы массив был отсортирован по порядку  

🔹 Действия алгоритма  
&emsp;&emsp; 🎯 Берет опорную точку(центральный элемент)  
&emsp;&emsp;&emsp;&emsp; 👆 обычно это центральный элемент массива, но может быть смещение на единицу в случаи четного кол-ва элементов

&emsp;&emsp; 🎯 Если центральный элемент искомое число, прекращаем поиск  
&emsp;&emsp; 🎯 Если нет, сравниваем число центрального элемента массива с искомым числом  
&emsp;&emsp; 🎯 Делим массив на две части  
&emsp;&emsp; 🎯 Если искомое число больше центрального, ищем в правой части  
&emsp;&emsp; 🎯 Если искомое число меньше центрального, ищем в левой части  
&emsp;&emsp; 🎯 Рекурсивно проводим те же действия с выбранной частью массива, пока не получим искомое число   

<br>

🔹 Бинарный поиск циклом       
```javascript
const array = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}]
let operationCount = 0

function binarySearch(array, searchingId) {
    let start = 0,                       // элемента от которого ведеться сравнение
        end = array.length,              // элемент до которого ведеться сравнение
        middle,                          // id центральный элемент искомой части массива
        searchedElement                  // Найденный элемент

    while (start <= end) {           // Поиск ведеться пока цикл находиться в указанных рамках поиска в массиве
        operationCount+=1
        middle = Math.floor((start + end) / 2); // Округляем значение опорной точки, на случай четного кол-во элемента в искомой части

        if (array[middle]?.id === searchingId) { // Возвращаем значение опорной точки, если это искомое значение
            searchedElement = array[middle]
            break;
        }

        if (searchingId < array[middle]?.id) { // Сокращаем искомую область массива в лево или в право
            end = middle - 1
        } else {
            start = middle + 1
        }

    }

    return searchedElement;
}

console.log(binarySearch(array, 5))
console.log(operationCount)
```

<br>

🔹 Бинарный поиск рекурсией
```javascript
const array = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}]
let operationCount = 0

function recursiveBinarySearch(array, searchingId, start, end) {
    let middle = Math.floor((start + end) / 2)
    operationCount += 1
    if (searchingId === array[middle]?.id) {
        return array[middle]
    }

    if (array[middle]?.id) {
        if (searchingId < array[middle].id) {
            return recursiveBinarySearch(array, searchingId, 0, middle - 1 )
        } else {
            return recursiveBinarySearch(array, searchingId, middle + 1, end )
        }
    }



}

console.log(recursiveBinarySearch(array, 4, 0, array.length));
console.log(operationCount);
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**