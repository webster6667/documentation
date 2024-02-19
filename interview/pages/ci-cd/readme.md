# ci-cd

<details>
<summary> Что это такое?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Цикл безопасной не прерывной интеграции, когда настроны все тесты, линтеры, тс, и перед каждым коммитом на отдельной машине происходит попытка билда и прогона всех тестов, если что-то отвалилось, разработчик будет оповещенн, а mr, не пройдет

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое ранер?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Сервер выполняющий `piplines`

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое pipeline?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Операция объекдиняющая выполнение джобов(build, test, deploy)

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какой опыт?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Работал в командах где все это уже было настроенно   
🎯 Работал `gitlab ci/cd`       
🎯 Если все `pipelines` удачно отрабатывали, разработчик указывал на какой серв выкатывать смержденную ветку   

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Простой пример</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```yaml
# Определение переменных окружения
variables:
  NODE_TLS_REJECT_UNAUTHORIZED: "0"

# Определение этапов и задач
stages:
  - build
  - deploy

# Задача сборки приложения
build:
  stage: build
  image: node:14  # Используем образ с Node.js
  script:
    - npm install   # Установка зависимостей
    - npm run build # Сборка приложения
  artifacts:
    paths:
      - build/       # Путь к собранному приложению

# Задача развертывания приложения
deploy:
  stage: deploy
  image: alpine:latest  # Используем образ Alpine Linux
  script:
    - apk add --no-cache rsync   # Установка rsync для копирования файлов
    - rsync -avz --delete build/ /path/to/deploy/folder   # Копирование собранного приложения на сервер
  only:
    - master  # Развертывать только при изменениях в ветке master
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**