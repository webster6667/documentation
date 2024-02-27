# css-modules

<details>
<summary> Как рабоает?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Пишем обычныные и удобные названия классов `.container, .item`       

🎯 Которые после преобразуются в уникальный хеш для каждого модуля, исключая колизии    

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как быть когда нужно воздействовать на конкреный чистый класс, а не на элемент <code>css</code> модуля?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Использовать `:global(.class)`, для воздействия воздействия на все элементы с конкрентым классом, без привязки к модулю       
```scss
:global(.container) {
  padding: 0;
}
```

🎯 Использовать теги или атрибуты    
```scss
.wrapper {
  
  [data-element='option'] {
    background: white;
  }
  
}
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как воздействовать на элемент одного модуля внутри другого?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)



![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**