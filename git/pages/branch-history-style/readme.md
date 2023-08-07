# Методология ведения истории веток

  
<details>
<summary> 🔹 Тематические </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

![illustration](img/illustration.png)

👆 Ведет продакшен версию в `master`, постепенно вливая новый функционал из тематических веток  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> 🔹 Релизные </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

![illustration](img/illustration-2.png)

👆 Хранит в репозитории несколько версия проекта  
&emsp;&emsp; ❗ Используеться чаще для библиотек

<details>
<summary> 🔹 Разработка всех фичь ведеться в master</summary>

----

👆 Как только код проекта заканчивает пул каких-то наработок, эту версию отделяют в отдельную релизную ветку и дорабатывают отдельно от `master`

----

</details>

<details>
<summary> 🔹 В релизную ветку не льются доработки из master</summary>

----

👆 Любые новые наработки которые нужны в продакшене заводят как новую релизную ветку, на котороую можно переключиться

----

</details>



![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

 
<br>

<details>
<summary> 🔹 Git Flow </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

![illustration](img/illustration-3.png)
👆 Методика обьединяющая в себе `релизный` и `тематический` подход  


<details>
<summary> 🔹 Main</summary>

----

Продакшен ветка

----

</details>

<br>

<details>
<summary> 🔹 Develop</summary>

----

Хранит в себе набор всех фич и багфиксов перед релизом

----

</details>

<br>

<details>
<summary> 🔹 Release 1.2.0</summary>

----

Фиксирует в себе список наработок релиза, позволяя отдельно тестировать пул наработок, и не блокировать новый поток фич в `develop`

&emsp;&emsp; 🎯 В Релиз ветку можно лить фикс ветки    

&emsp;&emsp; 🛑 После правки всех фиксов, релиз ветку как в `master`, так и в `dev`  
&emsp;&emsp;&emsp;&emsp; 👆 Что бы получить фиксы из релиза в разработке 


----

</details>

<br>

<details>
<summary> 🔹 Hotfix</summary>

----

Ветки для быстрого исправления продашкеша, минуя весь флоу

&emsp;&emsp; 🛑 Так же льються в `dev`   
&emsp;&emsp;&emsp;&emsp; 👆 Что бы не потерять фиксы при след релизах

----

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**