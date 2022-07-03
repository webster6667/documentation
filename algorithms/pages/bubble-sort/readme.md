# Сортировка пузырьком
> В цикле сравнивает два элемента попарно, поднимая вверх самый большой, в итоге самое большое число всплывает наверх, а меньшие идут по порядку вниз

```javascript
const arr = [{id: 3}, {id:2}, {id: 5}, {id:4}, {id:1}]
let count = 0

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j + 1]?.id < array[j]?.id) {
                let tmp = array[j]
                array[j] = array[j+1]
                array[j+1] = tmp
            }
            count+=1
        }
    }
    return array
}

console.log(bubbleSort(arr))
console.log('count = ', count)
```