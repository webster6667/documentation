# Commit
> Добавление проиндексированных файлов в историю git

<br>

🔹 Закомитить все индексированные файлы с сообщением

```
git commit -m "commit message"
```

👆 Флаг `-am "commit message"` добавит в коммит все не проиндексированные файлы

<br>
<br>

🔹 Исправить последний коммит

```
git commit -amend "commit message"
``` 

<details>
<summary> video</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

![illustration](video/git-ammend.mp4)

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

🎯 флаг `--no-edit` накатит новые изменения используя старый `commit message`

🎯 `git commit -amend "commit message"` без измененных файлов, просто изменит сообщение коммита

🎯 `-amend` безопасней всего использовать до вызова `git push`  
&emsp;&emsp; 🥏 Так как он изменяет хеш верхушки дерева, что повлечет за собой конфликты, при последующем git push  
&emsp;&emsp; 🥏 Их можно решить только при помощи `forse push`  
&emsp;&emsp;&emsp;&emsp; 👆 Только в случаи если ветка изолированна и над ней ведет работу только один разработчик  
&emsp;&emsp;&emsp;&emsp; ⚡️В противном случаи лучше делать новый коммит поверх запушеных коммитов, и просто потом убрать их при помощи `git squash`

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**