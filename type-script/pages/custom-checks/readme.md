# Пользовательские проверки
> Проверяет значение на принадлежность к какому либо типу

👆🏽 Если функция пользовательской проверки вернет `true`, то значение переданное для проверки будет считаться типом указанным после `is`   

```typescript
interface User {
    name: string;
    isAdmin?: boolean;
}

interface Admin extends User {
    getPasswords: () => string;
}

// 🎯 Функция пользовательской проверки
function isAdmin(user: any): user is Admin {
    return user.isAdmin;
}

const users = [
    { name: "jon" },
    { name: "ben", isAdmin: true, getPasswords: () => "1" }
];

users.forEach((user) => {
    
    if (isAdmin(user)) { // 👉🏼 Функция пользовательской проверки
        const password = user.getPasswords();
        // 👆 Юзер прошел пользовательскую проверку на админа, и теперь его тип это Admin 
    }

    user.getPasswords();
    // 👆 Тут будет ошибка, так как тип данного юзера точно не известен
});
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**