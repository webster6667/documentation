# Ветки
> Изолированная история комитов

💠 `HEAD`  
👆🏽 Комит, на который сейчас указывает репозиторий

💠 `ORIG_HEAD`  
👆🏽 Хеш комита, с которого был выполнен `git merge`

💠 `Вершина ветки`  
👆🏽 Комит, на который сейчас указывает имя ветки

<br>

<details>
<summary> 🔹 Вывести список веток</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```shell
git branch
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>


<details>
<summary> 🔹 Создать ветку</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```shell
git branch 'branchName'
```

<br>

⚡️ Создать ветку и переключиться на нее одной командой
```shell
git checkout -b 'branchName'
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> 🔹 Переключиться на ветку</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```shell
git checkout 'branchName'
```

👆 `git checkout` имеет ряд своих особенностей, которые будут рассмотренны в <a href="./../checkout/readme.md">отдельной главе</a>

<br>

⚡️ Создать ветку и переключиться на нее одной командой
```shell
git checkout -b 'branchName'
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>  


<details>
<summary> 🔹 Удалить ветку</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```shell
git branch -d 'branchName'
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> 🔹 Стянуть ветку из удаленного репозитория</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```shell
git fetch 'origin' 'branchName'
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> 🔹 Изменить вершину ветки</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```shell
git branch -f 'branchName' 'commitHash'
```
👆 Перед изменения вершины ветки, `git branch` требует покинуть ветку

<br>

⚡️ Изменить вершину ветки, не покидая ветки
```shell
git checkout -B 'branchName' 'commitHash'
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> 🛑 Отделенный HEAD</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Состояние, в котором `HEAD`, указывает не на ветку, а на конкретный коммит.  
👆 Обычно нужный коммит закрепляют за вершиной ветки, и переключаються на нее

<br>

🔹 Перейти в отделенный `HEAD`
```shell
git checkout 'commitHash'
```


🎯 В отделенный `HEAD` обычно переходят, для того что бы просто глянуть состояние проекта на определенном коммите, без создания отдельной ветки 
  
🎯 Если комитить в отделенный `HEAD`, при смене ветки легко потерять хеш своего коммита    

💊 Если в состоянии отделенный `HEAD` были сделаны коммиты, нужно создать новую ветку, и перетащить туда сделанные коммиты при помощи `cherry-pick` 

https://github.com/webster6667/documentation/assets/83826752/1533801a-0a71-4395-b4b9-e3646e319a7a


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

   


### ⟵ **<a href="../../readme.md">Назад</a>**
