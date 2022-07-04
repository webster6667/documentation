# Singleton
> Гарантирует наличие только одного экземпляра класса, даже при повторной попытке инициализации

```javascript
class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instance
    }
    Database.instance = this
    Database.exists = true
    this.data = data
  }

  getData() {
    return this.data
  }
}

const mongo = new Database('MongoDB')
console.log(mongo.getData()) // 👉🏼 MongoDB

const mysql = new Database('MySQL')
console.log(mysql.getData()) // 👉🏼 MongoDB, так как первый инстанс был сохранен, и при повторной инициализации вернеться первый инстанс 
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**