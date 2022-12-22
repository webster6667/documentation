# Манипуляция строками в TS
> Утилиты помогающие удобно собирать новые типы из уже существующих

```typescript
type Admin = {
    UserName: string;
    userAge: string;
};

type MyUser1 = Record<Lowercase<keyof Admin>, string>;    // 👉🏼 MyUser1: { username: string, userage: string}
type MyUser2 = Record<Uppercase<keyof Admin>, string>;    // 👉🏼 MyUser2: { USERNAME: string, USERAGE: string}
type MyUser3 = Record<Capitalize<keyof Admin>, string>;   // 👉🏼 MyUser3: { UserName: string, UserAge: string}
type MyUser4 = Record<Uncapitalize<keyof Admin>, string>; // 👉🏼 MyUser4: { userName: string, userAge: string}
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**
