# Прокси
> Ловушки позволяющие перехватывать различные запросы сущности, кешируя их или расширяя

📗  **<a href="https://github.com/webster6667/documentation/tree/master/vanilla-js/pages/proxy">Детальный обзор proxy</a>**

```javascript
let dictionary = {
    'Hello': 'Hola',
    'Bye': 'Adiós'
};

dictionary = new Proxy(dictionary, {
    get(target, phrase) {           // перехватываем чтение свойства в dictionary
        if (phrase in target) {     // если перевод для фразы есть в словаре
            return target[phrase];  // возвращаем его
        } else {
                                    // иначе возвращаем непереведённую фразу
            return phrase;
        }
    }
});

console.log(dictionary['Hello']);            // 👉🏼 Hola
console.log(dictionary['Welcome to Proxy']); // 👉🏼 Welcome to Proxy (нет перевода)
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**