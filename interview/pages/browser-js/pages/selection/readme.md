# Выделение

<details>
<summary> Как указать выделение элемента</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Для этого есть классы `Range` и `Selection`   

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как работать с выделением для инпута?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

У инпута свое апи для работы с выделением  

```javascript
area.onselect = function() {
    const selectionStart = area.selectionStart;
    const selectionEnd = area.selectionEnd;
};

area.onfocus = () => {
    // нулевая задержка setTimeout нужна, чтобы это сработало после получения фокуса элементом формы
    setTimeout(() => {
      // мы можем задать любое выделение
      // если начало и конец совпадают, курсор устанавливается на этом месте
      area.selectionStart = area.selectionEnd = 10;
    });
  };
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**