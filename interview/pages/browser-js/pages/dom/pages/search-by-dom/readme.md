# Поиск по DOM дереву  

<details>
<summary> Как получить доступ к элементу в <code>DOM</code></summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

При помощи команд:  

🎯 `document.querySelector`   
🎯 `document.querySelectorAll`   
🎯 `document.getElementById`   
🎯 `document.getElementsByClassName`     
🎯 `document.getElementsByTagName`   

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какая разница между <code>querySelector</code> и <code>getElements</code></summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `querySelector`      
&emsp;&emsp; 👆 Выбирает нужные данные, и хранит их в переменной, никак не реагируя на изменения      
  
🎯 `getElements`      
&emsp;&emsp; 👆 Выбирает живые элементы, содержимое которых обновляется в зависимости от реального `dom`    


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какая разница между <code>Node</code> и <code>Element</code>?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `node`       
&emsp;&emsp; 👆 Нодой может быть и текст  
  
🎯 `element`      
&emsp;&emsp; 👆 Конкрентый `html` элемент    

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Перемещение по родственникам</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

<details>
<summary> <sup>⭐</sup>❓ Как получить родительский элемент?</summary>

---

`element.parentElement`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как получить соседний элемент?</summary>

---

🎯 `element.nextElementSibling`    

🎯 `element.previousElementSibling`    

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как получить все дочерние элементы?</summary>

---

`element.children`    
&emsp;&emsp; 🛑 `Не childNodes`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как получить первый и последний дочерний элемент?</summary>

---

🎯 `element.firstElementChild`      

🎯 `element.lastElementChild`

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как перебирать коллекцию элементов?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Любыми способами, исключая `for in`, так как там можно достать немного лишнего   

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как найти ближайшего родителя с указанным селектором?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

`element.closest(.test);`

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**