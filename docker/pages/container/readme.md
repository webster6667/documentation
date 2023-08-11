# Container
👆🏽 Изолированая оболочка, в которой демон докера запускает описаны образ

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


<br>

### ⟵ **<a href="../../readme.md">Назад</a>**