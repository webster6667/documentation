# Изменение документа  

<details>
<summary> Как добавлять <code>dom</code> элементы?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
const newElem = document.createElement("div").innerHTML = 'content'
```

`element.append(newElem)`  
&emsp;&emsp 👆 Вставить в начало дочерней коллекции  

`element.prepend(newElem)`  
&emsp;&emsp 👆 Вставить в конец дочерней коллекции  

`element.before(newElem)`  
&emsp;&emsp 👆 Вставить до элемента

`element.after(newElem)`  
&emsp;&emsp 👆 Вставить после элемента

`element.replaceWidth(newElem)`  
&emsp;&emsp 👆 Заменить указанный элемент на новый  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как добавить <code>html</code> в виде строки?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
const element = document.getElementById('test')

element.insertAdjacentHTML('afterbegin');
```

🎯 `beforeBegin`      
&emsp;&emsp 👆 До элемента    

🎯 `afterBegin`      
&emsp;&emsp 👆 В начало

🎯 `beforeEnd`      
&emsp;&emsp 👆 В конец  

🎯 `afterEnd`      
&emsp;&emsp 👆 Сразу после элемента   

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**