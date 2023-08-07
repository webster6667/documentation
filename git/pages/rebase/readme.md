# Rebase
👆🏽 Инструмент переписывания истории

<br>

<details>
<summary> 🔹 Перебазирование веток </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

👆 Слияние веток, без дополнительного коммита слияния, путем набрасывания комитов ветки `feature`, над вершиной ветки `master`, с последующим смещением указателя вершины `feature` на самый последний коммит наброшенный над `master`     

<details>
<summary> 📗 Описание назначения веток </summary>

---

🎯 `feauter`    
&emsp;&emsp; 👆 Ветка на которой мы работаем когда то отпочковавшись от `master`

🎯 `master`  
&emsp;&emsp; 👆 Основная ветка, с новыми изменениями, которые нужно подтянуть в `feature`

---

</details>


https://github.com/webster6667/documentation/assets/83826752/94a0f75c-f7af-4c4a-bbf7-be359efa0293


&emsp;&emsp; 🎯 Комит который делает идентичные изменения в `feauter` и `master`, будет пропущен при накидывание поверх `master`

&emsp;&emsp; 🎯 `rebase` накидывая комиты на `master` меняет хеши всех комитов из `feature`  

&emsp;&emsp; 🎯 С `reabse` без `reflog` невозможно отследить когда были подтянуты изменения из `master`

&emsp;&emsp; 🎯 `rebase` лучше всего использовать только когда работаешь один над `feature` веткой 

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> 🔹 Продолжить rebase после решения конфликта</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```shell
git add .
git rebase --continue
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> 🔹 Выход из rebase состояния </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)
```shell
git rebase --abort
```
👆 Если в процессе перебазирования произойдет конфликт, слияние остановиться, и проект останеться в состоянии `отделенный HEAD`   

<br>

❗ По этому `git reset --hard`, не подойдет для отмены слияния   
&emsp;&emsp; 👆 Так как не откатит `HEAD` обратно на старую вершину `feature`


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> 🔹 Возврат к состоянию до rebase </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```shell
git reset --hard ORIG_HEAD
```
👆 Самый надежный способ это найти в `reflog` комит с ремаркой `rebase`, и взять хеш комита лежащий перед ним   
  
<details>
<summary> ❓ </summary>

----

&emsp;&emsp;  Так как впроцессе ребейза `ORIG_HEAD` может быть переписан неправильным значением

----

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**
