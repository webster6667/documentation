# Docker compose
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


<br>

### ⟵ **<a href="../../readme.md">Назад</a>**