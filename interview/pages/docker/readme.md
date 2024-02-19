# Docker

<details>
<summary> Что такое образ?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Набор правил определяющий версию библиотек, порядок запуска команд и структуру папок   

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое контейнер?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Запущенный изолированный экземпляр образа

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое Dockerfile?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Файл в котором пишется образ

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Раскажи цикл работы докера?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Разработчик пишет или берет готовый образ       
🎯 Образы можно наслаивать друг на друга         
&emsp;&emsp; 👆 Например берем версию ноды, и наслаиваим на нее свои изменения  
  
```dockerfile
# Используем базовый образ node версии 14
FROM node:14

# Установка рабочей директории внутри контейнера
WORKDIR /app   

# Копируем файл package.json из локальной директории в контейнер
COPY package.json .

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы из локальной директории в контейнер
COPY . .

# Определяем порт, который будет использоваться контейнером
EXPOSE 3000

# Команда для запуска приложения внутри контейнера
CMD ["npm", "start"]
```
🎯 Запускает контейнеры из образов      
🎯 Синхронизирует контейнеры по мере необходимости       


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

---

<details>
<summary> Можно ли изменять данные контейнера после запуска?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Нет, для этого нужно:   
🎯 Остановить контейнер    
🎯 Изменить образ   

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Список команд с образом?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

<details>
<summary> <sup>⭐</sup>❓ Получить список всех образов?</summary>

---

```
docker images   
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как собрать образ?</summary>

---

```
docker build parth/to/dockerfile
```

&emsp;&emsp;&emsp; 🎯 `-t imageName` Даст имя новому образу   

&emsp;&emsp;&emsp; 🎯 `-t imageName:tagname` Даст имя новому образу, и укажет версию(тег)  

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как удалить образ?</summary>

---


🎯 Удалит по `id`       

```
docker rmi imageId
```

---

🎯 Удалит все имеджи, которые не используються внутри контейнера    
```
`docker image prune`
```
 

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Список конструкций внутри докер файла</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

<details>
<summary> <sup>⭐</sup>❓ Как взять стартовый образ?</summary>

---

```dockerfile
FROM image:version   
```
👆 Команда указывающая какой взять образ (По дефолту будет взята latest version)

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Указать папку, куда будет дальше смотреть образ?</summary>

---

```dockerfile
WORKDIR /usr/src/app
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как скопировать данные из локальной папки в докер контейнер?</summary>

---

```dockerfile
COPY . .
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как запустить консольные команды?</summary>

---

🎯 Во время сборки образа   
&emsp;&emsp; 👆 Установка зависимостей  
```dockerfile
RUN npm install 
```

---

🎯 Во время запуска контейнер      
&emsp;&emsp; 👆 Запуск сервера при запуске контейнера   
```dockerfile
CMD ["node", "server.js"]
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как указать порт на котором будет запущен контейнер?</summary>

---

```dockerfile
# Определяем порт, который будет использоваться контейнером
EXPOSE 3000
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как указать <code>env</code> переменную?</summary>

---

```dockerfile
ENV PORT 4000

EXPOSE $PORT
```  
👆 Если не указать `ENV` переменную, по дефолту будет `4000`    
  
<br>

<details>
<summary> <sup>⭐</sup>❓ Как указать <code>ENV</code> переменную при запуске контейнера?</summary>

---

🎯 В консоли напрямую     
```
docker start 3000:3001 -e PORT=3001 -e MOD=dev container id  
```

<br>

🎯 Указать файл с `env` переменными        
```
docker start 3000:3001 --env-file /path container id
```

---

</details>


---

</details>

<details>
<summary> <sup>⭐</sup>❓ Приведи пример простого <code>dockerfile</code></summary>

---

```dockerfile
# Используем базовый образ node версии 14
FROM node:14

# Установка рабочей директории внутри контейнера
WORKDIR /app   

# Копируем файл package.json из локальной директории в контейнер
COPY package.json .

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы из локальной директории в контейнер
COPY . .

# Определяем порт, который будет использоваться контейнером
EXPOSE 3000

# Команда для запуска приложения внутри контейнера
CMD ["npm", "start"]
```

---

</details>


<details>
<summary> <sup>⭐</sup>❓ Как поставить две библиотеки в один образ?</summary>

---

```dockerfile
# Этап 1: Сборка приложения Node.js
FROM node:14 as node_builder

WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости Node.js
RUN npm install

# Копируем исходный код приложения
COPY . .

# Собираем приложение Node.js
RUN npm run build

# Этап 2: Использование PHP и Apache
FROM php:7.4-apache

# Копируем собранные файлы Node.js из первого этапа
COPY --from=node_builder /app/dist /var/www/html
```

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как исключить лишние файлы проекта из образа?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Используем `.dockerignore` файл     
🎯 В основном для `node_modules`       

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

--- 

<details>
<summary> Список команд по работе с <code>контейнерами</code></summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

<details>
<summary> <sup>⭐</sup>❓ Дока по докеру</summary>

---

```
docker run --help
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Запустить контейнер на основе образа</summary>

---

```
docker run (imageId || imageName)
```

<details>
<summary> <sup>⭐</sup>❓ По шарить порты</summary>

---

```
docker run (imageId || imageName) -p 3000(wantSeeOnLocal):3000(containerPortOnDocker)  
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Флаги</summary>

---


&emsp;&emsp; 🎯 `-d` detached запуск контейнера, без погружения внутрь   

&emsp;&emsp; 🎯 `-name` Задать нормальное имя контейнеру

&emsp;&emsp; 🎯 `--rm` Удалить контейнер из списка, как только он остановиться   

&emsp;&emsp; 🎯 `-e name=value` env переменные  
&emsp;&emsp;&emsp;&emsp; 👆 Указываються по очереди `... -e name=value -e name=value...`

&emsp;&emsp; 🎯 `--env-file /path` путь к файлу с env переменными

---

</details>

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Показать список запущенных контейнеров</summary>

---

```
docker ps
```

<details>
<summary> <sup>⭐</sup>❓ Показать даже не запущенные</summary>

---

```
docker ps -a   
```

---

</details>

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Удалить контейнер по <code>id</code></summary>

---

```
docker rm containerId
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Удалить все не запущенные контейнеры</summary>

---

```
docker container prune
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Остановить запущенный контейнер по <code>id</code></summary>

---

```
docker stop containerId
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Посмотреть операции в контейнере</summary>

---

```
docker logs containerId
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как запустить консольную команду внутри запущенного контейнера</summary>

---

```
docker exec <containerId> ls -l /app
```

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как зайти в докер контейнер для длительных консольных операций?</summary>

---

```
docker attach containerId
ls -a
```

---

</details>


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>   

---

<details>
<summary> Что такое <code>volume</code></summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Это ячейка памяти, которая монтируется к контейнеру при запуске, для хранения каких либо файлов  

<details>
<summary> <sup>⭐</sup>❓ Для чего это нужно? Почему бы не хранить файлы в контейнере?</summary>

---

🎯 Несет больше нагрузки на докер      
🎯 При перезапуске контейнера, файлы в нем будут стерты       


---

</details>  
  


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

---

<details>
<summary> Что такое <code>makefile</code>?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Список шорт команд докера, на подобии `script` в `package.json`    

<br>

🎯 `makefile`
```makefile
run:
    docker start 3000:3001
```

<br>

🎯 Запуск команд из `makefile`
```
make run
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

---

<details>
<summary> Что такое <code>docker-compose</code>?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Файл в котором можно лаконично описать и связать между собой список контейнеров

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Пример простого <code>docker-compose</code></summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

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

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как запустить <code>docker-compose</code> файл?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```
docker-compose up -d
```

<details>
<summary> <sup>⭐</sup>❓ Как пересоздать контейнеры при запуске?</summary>

---

```
docker-compose up -d --force-recreate
```

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как разделять <code>dev</code> и <code>prod</code> сборку образов?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Обычно разбивают на два файла, и запускают через `makefile`

```
docker-compose.dev.yml   
docker-compose.prod.yml   
```


`.env`
```
MYSQLDB_USER=alex
MYSQLDB_ROOT_PASSWORD=123456
MYSQLDB_DATABASE=test
MYSQLDB_LOCAL_PORT=3307
MYSQLDB_DOCKER_PORT=3306

NODE_LOCAL_PORT=6868
NODE_DOCKER_PORT=8080

REACT_LOCAL_PORT=3005
REACT_DOCKER_PORT=3005
```

```makefile
ifneq (,$(wildcard ./.env))
    include .env
    export
endif

DEV_DOCKERFILE=docker-compose.dev.yml
PROD_DOCKERFILE=docker-compose.prod.yml

up: ## Запуск контейнера
	@docker-compose -f $(DEV_DOCKERFILE) up -d mysql_server

down: ## Остановка контейнера
	@docker-compose -f $(DEV_DOCKERFILE) down

up-prod: ## Запуск контейнера
	@docker-compose -f $(PROD_DOCKERFILE) up
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**