# Image
👆🏽 Список определенных библиотек

&emsp;&emsp; 🎯 `image` только для чтения  
&emsp;&emsp;&emsp;&emsp; 👆 Запустив образ в конейнере, его уже нельзя изменить

Для изменения образа нужно:

🥏 Останавливать контейнер     
🥏 Изменять образ  
🥏 Пересобирать  
🥏 Перезапускать конейнер с новым образом

&emsp;&emsp; 🔹 `docker images`  
&emsp;&emsp;&emsp;&emsp; 👆 Список образов

&emsp;&emsp; 🔹 `docker build /path`  
&emsp;&emsp;&emsp;&emsp; 👆 Собрать образ, по указанному пути  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 В папке куда указывает path, должен лежать Dockerfile

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `-t imageName` Даст имя новому образу

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `-t imageName:tagname` Даст имя новому образу, и укажет версию(тег)

&emsp;&emsp; 🔹 `docker rmi imageId`  
&emsp;&emsp;&emsp;&emsp; 👆 Удалить образ

&emsp;&emsp; 🔹 `docker image prune`  
&emsp;&emsp;&emsp;&emsp; 👆 Удалит все имеджи, которые не используються внутри контейнера

<br>

💠 **Dockerfile**  
👆🏽 Файл который описывает новый образ, который потом будет запущен в контейнере


&emsp;&emsp; 🔹 `FROM image:version`   
&emsp;&emsp;&emsp;&emsp; 👆 Команда указывающая какой взять образ (По дефолту будет взята latest version)

❓ Может ли быть несколько FROM, например как поставить PHP и Node одновременно в контейнер

&emsp;&emsp; 🔹 `WORKDIR /path`   
&emsp;&emsp;&emsp;&emsp; 👆 Указывает относительно какой папки будет смотреть контейнер внутри Dockerfile

&emsp;&emsp; 🔹 `COPY /localfiles /container `   
&emsp;&emsp;&emsp;&emsp; 👆 Команда копирующая файлы в докер контейнер

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `localfiles` ищуться относительно файла `Dockerfile`  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `container` смотрит относительно корня контенера, либо той папки что указанна в WORKDIR

&emsp;&emsp; 🔹 `RUN command`   
&emsp;&emsp;&emsp;&emsp; 👆 Команда запускающая команды в консоли

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; ❗ Инструкция после run срабатывает только при сборе образа(например для того что бы один раз загрузить node_modules при создании образа)

&emsp;&emsp; 🔹 `CMD ['node', 'app.js']`   
&emsp;&emsp;&emsp;&emsp; 👆 Команда запускающая команды в консоли

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; ❗ Инструкция после CMD срабатывает только при запуска контейнера (например для запуска ноды)

&emsp;&emsp; 🔹 `EXPOSE portnumber`   
&emsp;&emsp;&emsp;&emsp; 👆 Говорит на каком порту запускать команду внутри контейнера

&emsp;&emsp; 🔹 `ENV name value`   
&emsp;&emsp;&emsp;&emsp; 👆 Создает env переменную `name` внутри контейнера, с дефолтным значением `value`

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 Далее внутри `Dockerfile`, можно обращаться к этой переменной через `$name`

```
ENV PORT 4000

EXPOSE $PORT 
```

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 env переменные можно узказывать при запуске контейнера, через параметры или env файл
```
docker start 3000:3001 -e PORT=3001 -e MOD=dev container id

docker start 3000:3001 --env-file /path container id
```

💠 **Docker ignore**  
Файл в котором описываем какие файлы папки не полетят при COPY в образ(обычно это git, node_modules)


<br>

### ⟵ **<a href="../../readme.md">Назад</a>**