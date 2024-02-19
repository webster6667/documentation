# Работа с ошибками   

<details>
<summary> Как работают ошибки в <code>Js</code></summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Летят наверх к ближайшему обработчику ошибок `catch`  

<details>
<summary> <sup>⭐</sup>❓ Что будет если в <code>catch</code> выпадет ошибка?</summary>

---

Полетит к след `try/catch`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Какие ошибки не ловит <code>try/catch</code></summary>

---

Синтаксические, и внутри таймаутов  

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что будет если ошибка вылетит на самый верх?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

`js` вывалит ошибку в консоль, и скрипт перестанет работать   

<details>
<summary> <sup>⭐</sup>❓ Как такого не допустить?</summary>

---

Поставить перехватчик на самый верхний уровень  

```javascript
window.onerror = function(msg, url, lineNo, columnNo, error) {
  // ... обработка ошибки ...
  return false;
}
```

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>



<br>

### ⟵ **<a href="../../readme.md">Назад</a>**