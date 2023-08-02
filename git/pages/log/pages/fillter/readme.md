# Фильтр логов по условиям

```shell
git log --grep '(message|new)'
```

💠 Ищет используя регулярные выражения  
&emsp;&emsp; 🎯 `-i`    
&emsp;&emsp;&emsp;&emsp; 👆 Сделать поиск регистронезависимым  
  
  
&emsp;&emsp; 🎯 `-F`  
&emsp;&emsp;&emsp;&emsp; 👆 Выключить регулярные выражения, и искать по ключевым словам



<details>
<summary> 🔹 Указать формат регулярных выражений в поиске</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```shell
git config --global grep.patternType perl
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> 🔹 Поиск по словам в описанию коммита</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```shell
git log --grep commit --grep new
```
👆 Найдет коммиты где в описании есть либо `commit` либо `new`  
  
&emsp;&emsp; 🎯 Флаг `--all-match` найдет коммиты где есть и `commit` и `new` в описании 


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> 🔹 По изменениям в коде</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```shell
git log -G'function sayHi(' -p
```
👆 Отобразит код где велась работа над функцией `sayHi`

<br>

```shell
git log -L'/<head>/','/<\/>head>/' -p
```
👆 Отобразит историю изменений в блоке `head`

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> 🔹 Поиск по автору</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```shell
git log --author=Alex
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> 🔹 Поиск по датам</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```shell
git log --before/after '2017-09-13'
```
👆 Поддерживаеться гибкий формат указания дат  
&emsp;&emsp; 🎯 `3 month ago`    
&emsp;&emsp; 🎯 `2017-09-13 08:30:00 +02`

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**