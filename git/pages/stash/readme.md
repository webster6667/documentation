# stash
👆🏽 Локальный буфер обмена для гита  
  
<details>
<summary> 🔹 Закинуть все индексированные изменения в буфер</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```shell
git stash
```

🎯 Добавив `save 'stashName'`, индексированные изменения сохраняться под кастомным именем `stashName`    

🎯 `-u` добавить `untracked` файлы в `stash`

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> 🔹 Получить список stash данных</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```shell
git stash list
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> 🔹 Достать данные из stash</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```shell
git stash <apply|pop> <name|number>
```
🎯 Скопировать данные из `stash` в проект    
🎯 Вырезать данные из `stash` в проект

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> 🔹 Достать только один файл из stash</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```shell
git checkout stash@{id} fileName
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**