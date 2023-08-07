# Commit
> Добавление проиндексированных файлов в историю git

<br>

<details>
<summary> 🔹 Закомитить все индексированные файлы с сообщением </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```shell
git commit -m "commit message"
```

👆 Флаг `-am "commit message"` сразу добавит в коммит все не проиндексированные файлы

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>


<br>

<details>
<summary> 🔹 Исправить последний коммит </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```shell
git commit -amend "commit message"
``` 

<details>
<summary> <img src="https://raw.githubusercontent.com/webster6667/documentation/ebfd5a1acdc772d2de59331f5e127a76d08c9a8b/documentation-data/illustrations/video.svg" height="20px" title="ts" alt=""></summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

https://github.com/webster6667/documentation/assets/83826752/4946844a-c27e-48b0-ab42-d11720b75ac1

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

🎯 флаг `--no-edit` накатит новые изменения используя старый `commit message`

🎯 `git commit -amend "commit message"` без измененных файлов, просто изменит сообщение коммита

🎯 `-amend` безопасней всего использовать до вызова `git push`  
&emsp;&emsp; 🥏 Так как он изменяет хеш верхушки дерева, что повлечет за собой конфликты, при последующем `git push`  
&emsp;&emsp; 🥏 Их можно решить только при помощи `forse push`  
&emsp;&emsp;&emsp;&emsp; 👆 Только в случаи если ветка изолированна и над ней ведет работу только один разработчик  
&emsp;&emsp;&emsp;&emsp; ⚡️ В противном случаи лучше сделать изменения при помощи нового комита, и просто потом убрать его при помощи `git squash`

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**
