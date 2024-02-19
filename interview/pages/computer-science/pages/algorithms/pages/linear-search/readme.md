# Линейный поиск
> Его еще называют (`brute-force: грубая сила`), так как это просто перебор всех элементов без какой либо логики

```javascript
const array = [1,4,5,8,5,1,2,7,5,2,11]
let count = 0 // 👉🏼 Кол во выполненых проходов в цикле
function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        count += 1
        if (array[i] === item) {
            return i;
        }
    }
    return null
}

console.log(linearSearch(array, 1))
console.log('count = ', count)
```
👆 Сложность алгоритма равна `O(n)`, в худжем случаи прийдеться обойти весь массив

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**