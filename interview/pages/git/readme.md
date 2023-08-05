# GIT

<details>
<summary> 1. Что такое git config, какой бывает, зачем он нужен</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🔹 Файл конфигурации, из которого `git` берет дополнительную информацию  
&emsp;&emsp; 🎯 Алиасы  
&emsp;&emsp; 🎯 Игноры  
&emsp;&emsp; 🎯 Данные автора

🔹 Бывают трех видов  
&emsp;&emsp; 🎯 `--system` на всех пользователей `PC`  
&emsp;&emsp; 🎯 `--global` на конкретного пользователя `PC`  
&emsp;&emsp; 🎯 `--local` на каждый проект  
&emsp;&emsp; 🛑 Инклудят друг друга от `--system` до `--local`    

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary>2. Какие статусы бывают у файлов в гите</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🔹 Untracked  
&emsp;&emsp; 👆 Файл не отслеживаеться гитом при любых манипуляциях с репозиторием

🔹 Stage for commit  
&emsp;&emsp; 👆 Либо `Untracked` добавленный в `Stage`, либо файл уже лежащий в репозитории, но измененный

🔹 Commited  
&emsp;&emsp; 👆 Уже закомиченные файлы


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary>3. Как удалить файл из индекса</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🔹 `git rm <filename>`

&emsp;&emsp;   🎯 Флаг `--cached`, удалит файл из гита но оставит локально    

&emsp;&emsp;   🎯 Флаг `--f`, удалит файл полностью

🔹 `git reset <filename>`

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

git checkout

2.Что такое git ammed, особенности и детали
3.Какие дополнительные флаги у гит клон знаешь?
4.Как удалить ветку, нужно ли, в каких случаях, что такое git prune, как удалить ветку на удаленном сервере
5.Что такое git fetch
6.Git clean, очистка, 
7.Что такое гит сташ, как, зачем, smart checkout, как достать один файл из сташа, как запихать untrack файлы в сташ
8.git Reset --hard --soft --keep
9.Статусы файлы changes not staged, untracked, workin directory
10.Merge rebase, что и когда
10.5 черипик(как и когда), no-commit
11.Squash
12.HEAD~i
13.Интерактивный ребейс
14.Forse push?
15.Сбросить stage
16.git revert
17.git checkout
18.reflog
19.Архитектуры

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**