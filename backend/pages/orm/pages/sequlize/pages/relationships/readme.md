# relationships

💠 `@HasOne`  
👆🏽 Получить `author`, для `post`, по `post.authorId`  

У каждого поста может быть только один автор


💠 `@BelongsTo`  
👆🏽 Указать что только одна строка из `author` может принадлежать одному `post` по `id`



💠 `@HasMany`  
👆🏽 Получить список `projects`, для `user`, по ключу `project.userId`

У каждого юзера может быть несколько проектов, но проекты могут принадлежать только одному юзеру

```typescript
@Table({tableName: 'user'})
export class User extends Model<User> {

    @HasMany(() => Projects, 'user_id')
    projects: Projects[];
}
```

<br>


💠 `@BelongsToMany`  
👆🏽 Получить список `roles`, для `user`, через таблицу `user_roles` по ключу `user_roles.roleId`

```typescript
@Table({tableName: 'user'})
export class User extends Model<User> {

    @BelongsToMany(() => Roles, () => UserRoles)
    roles: Roles[];
}
```

Одному юзеру может принадлежать несколько ролей, одна роль может быть у нескольких юзеров