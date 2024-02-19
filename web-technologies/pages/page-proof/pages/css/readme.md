# css

<details>
<summary> Какая сила у селекторов?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

В порядке возрастания 

🎯 Тег    
`div`  

🎯 Атрибут    
`[data-type='text']`   

🎯 Класс    
`.item`

🎯 ID      
`#id`


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое псевдоэлементы?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

`css` сущности отрисовывающийся вокруг `html` элементов

```scss
.item {
  
  &:before, &:after {
    width: 10px;
    height: 10px;
  }
  
}
```


<details>
<summary> <sup>⭐</sup>❓ Почему не отображаются?</summary>

---

Не прописано свойство `content: '';`

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какие свойства дисплей знаешь?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `table`    

🎯 `inline-table`    

🎯 `inline`    

🎯 `block`    

🎯 `inline-block`

🎯 `flex`      

🎯 `inline-flex`    

🎯 `grid`      

<details>
<summary> <sup>⭐</sup>❓ Между таблицами есть непонятный отступ, как убрать?</summary>

---

схлопнуть, при помощи `border-collapse: collapse;`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ У двух <code>block</code> элементов по оси <code>y</code>, стоят <code>margin: 10px 0px;</code>, но фактически между ними отступ всего <code>10px</code>, почему?</summary>

---

У блочных элементов, отступы по оси `y`, схлопываются   

---

</details>

<details>
<summary> <sup>⭐</sup>❓ У элемента нет отступа, но фактически он виден, почему?</summary>

---

Возможно выпадает отступ дочернего элемента, для исправления нужно добавить `border` родителю  

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Верстка при помощи <code>float</code></summary>

---

Выдергивает элемент из потока, прижимая его влево.

🎯 При этом остальные элементы перестают видить его размеры.    
&emsp;&emsp 👆 Для решения этой проблемы используем псевдо элемент с `clear: both;`  

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Проблемы <code>inline-block</code></summary>

---

Остается небольшая полоска после контента, из за того что это строка   
&emsp;&emsp 👆 `font-size: 0`. решает эту проблему

---

</details>

<details>
<summary> <sup>⭐</sup>❓ По каким осям ходит <code>flex</code></summary>

---

🎯 `flex-start`      
🎯 `flex-end`     

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Все элементы внутри <code>flex</code>, тулятся в одну строку, даже если тестно, как исправить?</summary>

---

`flex-wrap: wrap;`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как изменить ось флекс контейнера?</summary>

---

`flex-direction: row;`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Чем кординальное отличе <code>grid</code> от <code>flex</code>?</summary>

---

Грид более гибкая структура, позволяет считат соотношениями, писать шаблоны, гибко двигать элемент по всем осям.  
Но зачастую эта гибкость бывает лишней, предпочитаю обычный `flex`  


---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Позиционирование</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

<details>
<summary> <sup>⭐</sup>❓ Относительно чего двигается <code>absolute</code> элемент?</summary>

---

Относительно ближайшего `relative` элемента, или `body`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что будет если внутри <code>fixed</code> элемента, создать <code>absolute</code> элемент? Относительно чего будет считать <code>absolute?</code></summary>

---

Относительно окна браузера

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как строишь сетку?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🔹 С гепами 
&emsp;&emsp; 🎯 `container`        
&emsp;&emsp; 🎯 `row` with gap        
&emsp;&emsp; 🎯 `col`    

🔹 Без гепов    
&emsp;&emsp; 🎯 `container`     
&emsp;&emsp; 🎯 `row` с `margin-x: -{gap}px`     
&emsp;&emsp; 🎯 `col`, с `padding-x; {gap}px`   


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>



<br>

### ⟵ **<a href="../../readme.md">Назад</a>**