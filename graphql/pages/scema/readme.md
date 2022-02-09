# Схемы
> Модели описывающие запросы, и сущности запрашиваемых данных на бекенде

💠 **type `typeName`**   
👆🏽 Сущность, описывающая модель желаемых данных для получения

```
type User {
    id: ID
    name: String,
    phone: String
}
```

<br>
<br>

💠 **type Query**   
👆🏽 Сущность, описывающая методы запроса данных

```
type User {
    id: ID
    name: String,
    phone: String
}

type Query {
    getAllUsers: [User]
    getUser(id: ID): User
}
```

<br>
<br>

💠 **input `inputName`**   
👆🏽 Сущность, описывающая параметры, необходимые для выполнения мутации

```
input UserInput {
    name: String!
    lastName: String!
    phone: String!
}
```

<br>
<br>

💠 **type Mutation**   
👆🏽 Сущность, описывающая методы мутаций(`запись, изменение, удаление`)

```
type User {
    id: ID
    name: String,
    phone: String
}

input UserInput {
    name: String!
    lastName: String!
    phone: String!
}

type Mutation {
    createUser(input: UserInput): User
}
```

<br>
<br>

💠 **type Subscription**   
👆🏽 Сущность, описывающая подписку на события

```
type Subscription {
    commentAdded(postID: ID!): String
}
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**
