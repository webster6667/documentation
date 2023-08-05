# checkout
👆🏽 Команда перемещения между коммитами и ветками  

🔹 `git checkout master` не отработает, если файл в который были внесены изменения, не идентичен на обоих ветках, до внесения изменений  
&emsp;&emsp; 👆 Гит выдаст предупреждение, которое можно обойти несколькими путями  
&emsp;&emsp;&emsp;&emsp; 🎯 `git checkout -f master`, переключит файл на состояние из `master`, удалив все незакомиченные изменения  
&emsp;&emsp;&emsp;&emsp; 🎯 `git stash save 'my-changes''`, сохранит данные в буфер, которые можно будет применить на нужной ветке
  


   
<details>
<summary> 🔹 Переключиться на указанную ветку </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```shell
git checkout 'branchName'
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> 🔹 Переключиться на конкретный коммит</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Бывает нужно просто глянуть состояние проекта на конкрентом коммите
```shell
git checkout 'commitHash'
```
🛑 Переводит в состояние <a href="./../branches/readme.md">отделенный `HEAD`</a>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> 🔹 Отменить все незакомиченные на ветке</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```shell
git checkout -f
```
👆 Перезапишет все файлы в состояния из `HEAD` ветки  
  


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**