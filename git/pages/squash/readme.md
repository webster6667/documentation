# Squash
👆🏽 Обьединение списка коммитов в один  



<br>

<details>
<summary> 🔹 Подтянуть feature в master, одним коммитом исключив историю коммитов feature</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```shell
git merge --squash feature # Перетянет все изменения из feature векти в stage area
git add .
git commit -m"squash message"
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

<details>
<summary> 🔹 Соединить два комита в истории</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```shell
git rebase -i HEAD~n # или ветка вместо HEAD

pick 45a4a19 comit 1
pick 4c7aa3c comit 2 
fixup a5b84c3 comit 3
squash d996513 comit 4
```

👆 Соединить комиты `2, 3, 4` в один  
  
&emsp;&emsp; 🎯 `fixup` тоже самое что и `squash`, только исключит коментарии коммита из редактора сообщения  


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

### ⟵ **<a href="../../readme.md">Назад</a>**