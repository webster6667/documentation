# cherry-pick
👆🏽 Скопировать указанный комит из другой ветку в указанную ветку  

   


<details>
<summary> 🔹 Скопировать указанный коммит</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```shell
git cherry-pick 'commitHash'
```
👆 Добавить коммит `commitHash` над `HEAD` веткой  
  
&emsp;&emsp; 🔹 `-n` флаг     
&emsp;&emsp;&emsp;&emsp; 👆 Подтянет изменения в `workDirectory`, но без комита   
  


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>


<details>
<summary> 🔹 Скопировать все комиты отстутствующие в HEAD из указанной ветки</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```shell
git cherry-pick master..feature
```
👆 Скопировать все комиты из `feature`, которых нет в `master`  

&emsp;&emsp; 🔹 `-n` флаг     
&emsp;&emsp;&emsp;&emsp; 👆 Подтянет изменения в `workDirectory`, но без комита

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>


<br>

### ⟵ **<a href="../../readme.md">Назад</a>**