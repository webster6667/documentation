# Область видимости  


<details>
<summary> Назови области видимости в js</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Глобальная      
&emsp;&emsp; 👆 Доступна из любого место приложения     
  
🎯 Локальная      
&emsp;&emsp; 👆 Доступна внутри функции  

🎯 Блочная      
&emsp;&emsp; 👆 Доступная внутри блока обернутого скобками, наример `if`  
  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Чем отличаеться область видимости у <code>var</code> и <code>let, const</code></summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `var` хранится в локальной области, и доступен за пределами скобок  
🎯 `let, const` хранится в блочной области, и не доступен за пределами скобок  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Опиши детальней работу с областью видимости под капотом</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 При обработке каждого блока кода, `js` обьявляет скрытую переменную `[[Scope]]`, в которой хранит все локальные переменные объявленные в данной области видимости   

🎯 При обращении за переменной, `js` сначала ищет значение в локальном `[[Scope]]`, если не находит, ищет в родительском и так вверх до глоблальной области  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что вернет данный код?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
const isDev = true
const isMainPage = true

if (isDev) {
    let dateNow = Date.now()
} 

if (isMainPage) {
    var data = 'main page'
}

console.log(data)
console.log(dateNow)
```

<details>
<summary> ✅ Ответ</summary>

---

`main page`
`dateNow is not defined`  

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**