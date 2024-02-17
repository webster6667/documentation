# Хостинг в JS

<details>
<summary> Что такое хостинг?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Поднятие переменных и функций в начало кода до начала его выполнения  
🎯 `var` и `function Declarations` поднимаются вверх, и доступны еще до присвоения им значений   
🎯 Просто `var` будет равен `undefined`, а `function Declarations`, можно будет использовать раньше чем его объявили  
🎯 На `let`, `const` и `function expression` так же срабатывает хостинг, но они попадают в так называемую `ВМЗ`, откуда к ним нельзя до момента определения      

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Хостинг срабатывает сразу на весь код, или отрабатывает при вхождении в каждую область видимости?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Входит в каждую область

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что выведет этот код?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
var a = 5;

function f() {
    if (a) {
        console.log(a)
        var a = 10
    }
}
f()
```

<details>
<summary> ✅ Ответ</summary>

---

🎯 Хоть переменная `a` уже есть на глобальном уровне    
🎯 Когда компилятор кода попадает внутрь функции, срабатывает хостинг переменной `a` которая лежит внутри  
🎯 Таким образом идет обращение к внутренней `a`, еще до объявления      
🎯 Она будет равна `undefined`, и условие не отработает      

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что выведет этот код? </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
fnFirst()

function fnFirst() {
   console.log(fnSecond())
   return 'first'
}

function fnSecond() {
    return 'second'
}
```

<details>
<summary> ✅ Ответ</summary>

---

🎯 Хостинг поднимет все эти функции еще до использования       
🎯 Во время вызова `fnFirst()`, будут уже доступны все функции, и лог выведет `second`    


---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**