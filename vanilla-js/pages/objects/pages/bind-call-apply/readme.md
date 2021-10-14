# Методы проброса контекста
Есть три метода проброса контекста

* `bind(context, arg1, arg2, ...)` - пробрасывает контекст с аргументами
    * Не запускает функцию, а возвращает новый экземпляр с переданым контекстом и пропсами
* `call(context, arg1, arg2, ...)` - работает идентично `bind`, но только сразу запускает функцию
* `apply(context, [arg1, arg2, ...])` - работает идентично `call`, только вместо списка, принимает массив пропсов

___

##Собственная реализация метода `bind`

1. Взять контекст(объект) и первые переданные параметры, поместить в замыкние
2. При вызове результата bind, поместить желаемую функцию как метод, внутрь контекста
3. Вызвать функцию как метод внутри контектса, передав туда параметры
> Тогда в this попадут свойства пробрасываемого контекста

[![Edit custom-bind](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/custom-bind-22j7l?fontsize=14&hidenavigation=1&theme=dark)