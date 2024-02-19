# Размеры элемента


<details>
<summary> Как получить ширину элемента?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `element.offsetWidth`     
&emsp;&emsp; 👆 Полная ширина элемента

🎯 `element.clientWidth`      
&emsp;&emsp; 👆 Полная ширина за исключением бордера

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как получить высоту элемента</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `element.offsetHeight`      
&emsp;&emsp; 👆 Полная высота элемента

🎯 `element.clientOffset`      
&emsp;&emsp; 👆 Полная высота за исключением бордера

<details>
<summary> <sup>⭐</sup>❓ Какая тонкость есть у <code>clientWidth</code> с полосой прокрутки?</summary>

---

`clientOffset` дает ширину внутри рамок, и вычитает ширину полосы прокрутки(если она есть) из полученных размеров

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как получить отступ от левого/верхнего края?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

`offsetLeft`

`offsetTop`

<details>
<summary> <sup>⭐</sup>❓ Как получить ближайший <code>relative</code> элемент?</summary>

---

Ссылка к нему лежит в `element.offsetParent`, именно от него считаются `offset(Left/Rigth)`

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как получить полную высоту элемента, если у него есть скролл?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Она хранится в свойстве `scrollHeight`

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как получить проскроленную часть элемента?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Она лежит в параметре `scrollTop`

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как проскролить <code>html</code> элемент?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Изменяя свойство `scrollTop`  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как получить отступ справа?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Вычесть из ширины родителя, ширину дочернего элемента + остсуп слева

```javascript
const wrapper = document.getElementById('wrapper');
const child = document.getElementById('child');

const childOffsetRight = wrapper.offsetWidth - (child.offsetWidth + child.offsetLeft);
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как получить отступ снизу?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Вычесть из высоты родителя, высоту дочернего элемента + остсуп сверху

```javascript
const wrapper = document.getElementById('wrapper');
const child = document.getElementById('child');

const childOffsetRight = wrapper.offsetHeight - (child.offsetHeight + child.offsetTop);
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как работать с <code>border</code> и полосой прокрутки?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)



![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как получить размер <code>border</code>?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `clientTop`

🎯 `clientLeft`

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как получить ширину полосы прокрутки?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Указать у мок элемента `border: none;`  
🎯 Задать `overflow: scroll:`   
🎯 `offsetWidth - clientWidth`

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>


<br>

### ⟵ **<a href="../../readme.md">Назад</a>**