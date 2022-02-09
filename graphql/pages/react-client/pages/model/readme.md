# Модель запросов
> graphql запрос, который вставляеться в хук

🔹 При описании аргументов функции, важно поставить `$` перед названием

🔹 При передачи аргументов, `$` игнорируеться

🔹 `!` - Указывает на то что аргумент обязательный

🔹 `methodName()` - скобки не указываються при отсутсвии аргументов

🔹 `{...params}` - Ожидаемые параметры в ответе, не разделяються запятой, идут с новой строки

💠 **query**   
```javascript
import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query {
    users {
      name
      id
    }
  }
`;

export const GET_ONE_USER = gql`
  query getUser($id: ID) {
    getUser(id: $id) {
      id
      username
    }
  }
`;
```

<br>
<br>

💠 **mutation**
```javascript
import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation insert_users($id: ID!, $name: String!) {
    insert_users({ id: $id, name: $name }) {
        name
    }
  }
`;
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**