# Docker

💠 **Image**   
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


<br><br>

💠 **Container**   
👆🏽 Оболчка, которая запускает в себе список образов, и работает

&emsp;&emsp; 🔹 `docker run --help`  
&emsp;&emsp;&emsp;&emsp; 👆 дока

&emsp;&emsp; 🔹 `docker run (imageId || imageName)`  
&emsp;&emsp;&emsp;&emsp; 👆 Запустить контейнер на основе образа

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `-p` шарит порты из докера на локалку  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 `-p 3000(wantSeeOnLocal):3000(containerPortOnDocker)`

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `-d` detached запуск контейнера, без погружения внутрь  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 `docker start` тоже самое что и `docker run -d`

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `-name` Задать нормальное имя контейнеру

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `--rm` Удалить контейнер из списка, как только он остановиться

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `-e name=value` env переменные  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 указываються по очереди `... -e name=value -e name=value...`   

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `--env-file /path` путь к файлу с env переменными

&emsp;&emsp; 🔹 `docker ps`   
&emsp;&emsp;&emsp;&emsp; 👆 список контенеров

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `-a` все контейнеры  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 По дефолту видны только запущенные    

&emsp;&emsp; 🔹 `docker rm containerId`   
&emsp;&emsp;&emsp;&emsp; 👆 Удалить контейнер по id

&emsp;&emsp; 🔹 `docker container prune`   
&emsp;&emsp;&emsp;&emsp; 👆 Удалить все не запущенные контейнеры

&emsp;&emsp; 🔹 `docker stop containerId`   
&emsp;&emsp;&emsp;&emsp; 👆 Остановить запущенный контейнер

&emsp;&emsp; 🔹 `docker logs containerId`   
&emsp;&emsp;&emsp;&emsp; 👆 Посмотреть что происходило в контейнере(консоль логи и прочее)

&emsp;&emsp; 🔹 `docker exec containerId`   
&emsp;&emsp;&emsp;&emsp; 👆 Создать новую баш консоль внутри докер контейнера

&emsp;&emsp; 🔹 `docker attach containerId`   
&emsp;&emsp;&emsp;&emsp; 👆 зайти внутрь докер контейнера

<br><br>

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

💠 **Volume**  
👆🏽 Область памяти которая храниться отделно от образа, и монтируеться к контейнеру при запуске 

💠 **Make file**  
👆🏽 Файл с шорткатами для докера (на подобии scripts в package.json)

&emsp;&emsp; 🔹 makefile
```
run:
    docker start 3000:3001 ...
```

&emsp;&emsp; 🔹 запуск `make` команд
```
make run
```

💠 **Docker compose**  
👆🏽 Файл в котором можно более красиво, структурно собрать запуск нескольких докер контейнеров
```
version: "3.8" // версия docker-compose

volumes:
    my_volume:
    
services:
    myFirstApp:
        image: imageName
        build: pathToDirWithImageOnLocal
        //используем либо image либо build
        
        context: . // Папка относительно которой будет искать docker-compose
        dockerfile: Dockerfile // имя искомого докер файла(по дефолту Dockerfile)
        
        restart: always //Перезапускать докер заново при рестарте PC
        enviroment:
            - PORT=4000
         
        ports:
            - "3000:3000"    
        volumes: 
            - my_volume: /path/to/volume/data
        
        command: node app.js // команды которые будут выполнены (во време сборки образа или контейнера)
        
        //Список команд
        command: > 
        sh -c "sleep 20s && npm start"
        
        depends_on: // myFirstApp запуститься только после запуска контейнера db
            - db
            
        stdin_open: true, // когда вам нужно работать над проектом вне контейнера Docker.

        tty: true // когда вам нужно работать над проектом внутри контейнера Docker.
    
    db:
        image: postgres
        
```

&emsp;&emsp; 🔹 `docker-compoe` создает сеть контейнеров по умолчанию

&emsp;&emsp; 🔹 запуск `docker-compoe` файла происходит через команду `docker-compose up -d`

&emsp;&emsp;&emsp;&emsp; ❗ `docker-compoe up --force-recreate` - пересоздаст контейнеры при запуске


💠 **Docker ignore**  
Файл в котором описываем какие файлы папки не полетят при COPY в образ(обычно это git, node_modules)


[comment]: <> (💠 **Deploy на докерхаб**)

[comment]: <> (use custom npm)

[comment]: <> (https://medium.com/@Quigley_Ja/specifying-npm-version-in-dockerfile-ee6e71a60945)


[comment]: <> (https://makefiletutorial.com/#automatic-variables - about @ before command)

[comment]: <> (https://www.youtube.com/watch?v=Sm8GbC02MlE&ab_channel=AhsanNasir - react docker nginx)

[comment]: <> (https://www.youtube.com/watch?v=SF2oub6C6kc&ab_channel=PrettyCode - докер сетки)

[comment]: <> (https://www.youtube.com/watch?v=3xDAU5cvi5E&ab_channel=SanjeevThiyagarajan - докер реакт)