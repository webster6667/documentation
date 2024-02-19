# Итераторы

<details>
<summary> Каким под капотом работает цикл <code>for of</code>, от чего зависит его работа</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Зависит от скрытого `Symbol.iterator`, которое отвечает за итерацию объекта   

<details>
<summary> <sup>⭐</sup>❓ Как оно работает внутри?</summary>

---

🎯 Хранит в себе метод `next()`, и свойства `value` и `done`   
&emsp;&emsp; 👆 Каждую итерацию дергается метод `next()`, который меняет `value`, до тех пор, пока `done` не станет `true`

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Напиши свой итератор</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)



![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Напиши асинхронный итератор</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)



![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**