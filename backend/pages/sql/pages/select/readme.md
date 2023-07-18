# Select
> Выборка данных

<br>

🔹 Выбрать все из нескольких таблиц с условиями
```sql
SELECT * FROM users, posts WHERE posts.users = users.id
```

<details>
<summary> 📈 Result </summary>

___

users.id   | name          | email         | access_role_id | user_projects.id | user_id | project_id 
----       | ------------- | ------------- | -------------- | ---------------- | --------| -------------
1          | user1         | user1@mail.ru | 1

___

</details>


<br>

### ⟵ **<a href="../../readme.md">Назад</a>**