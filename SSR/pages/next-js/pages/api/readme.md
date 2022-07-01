# API
> В папке `pages/api` можно создавать файлы, которые будут генерировать свое api       

🔹 Методы `api` будут доступны по пути `/api/[filename]` 

🔹 Под капотом лежит `express`       

```typescript jsx
const User = (req, res) => {
    res.end()
}

export default User
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**