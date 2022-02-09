# Express graphql server

```javascript
require('dotenv').config()
const express = require('express')
const {buildSchema} = require('graphql')
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors')
const sequelize = require('./db')

const { User } = require('./models/models')

const schema = buildSchema(`
    type User {
        id: ID
        name: String
    }
    
    input UserInput {
        name: String!
    }
    
    type Query {
        getAllUsers: [User]
        getUser(id: ID): User
    }
    
    type Mutation {
        createUser(input: UserInput): User
    }
`)

const app = express()
app.use(cors())
app.use(express.json())

// 🎯 Методы root, должны иметь такие же имена как type Query, Mutation
// 🎯 А так же принимать и возвращать те же данные что описанны в схеме
const root = { 
    getAllUsers: async () => {
        const users = await User.findAll()

        return users
    },
    getUser: async ({id}) => {
        const user = await User.findOne({where: {id}})

        return user
    },
    createUser: async ({input}) => {
        const user = await User.create({
            ...input
        })

        return user
    },
}

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root
}))

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()

        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
```

<br><br>

&emsp;&emsp; 🔹 `/db` - База      
```javascript
const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)
```

<br><br>

&emsp;&emsp; 🔹 `/db` - Модели
```javascript
const sequelize = require("../db");
const {DataTypes} = require('sequelize')

const User = sequelize.define('users', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    lastName: {type: DataTypes.STRING},
    phone: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    status: {type: DataTypes.INTEGER},
    sex: {type: DataTypes.STRING},
    contentToken: {type: DataTypes.STRING},
})
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**