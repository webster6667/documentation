# Трансформация объекта в массив
```javascript
const user = {
    name: 'Ben',
    age: 22
}
```

* `Object.keys` - вернет ключи объекта `['name', 'age']` 
* `Object.values` - вернет значениея объекта `['Ben', 2]` 
* `Object.entries` - вернет значениея объекта `[ ["name","Ben"], ["age",22] ]`
* `Object.fromEntries(array)` - преобразует результат `Object.entries(object)`, обратно в объект 