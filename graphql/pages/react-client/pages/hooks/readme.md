# React хуки

💠 **useQuery`(qraphqlRequest, { variables: {...params} }))`**   
👆🏽 Хук запроса данных

<br>

&emsp;&emsp; 🔹 Параметры запроса обязательно передаються в `variables`  

```javascript
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

const GET_ONE_USER = gql`
  query getUser($id: ID) {
    getUser(id: $id) {
      id
      username
    }
  }
`

const [data, loading, error, refetch] = useQuery(GET_ONE_USER, {variables: {id: 1}})
``` 

<br>
<br>

💠 **useMutation`(qraphqlRequest, { variables: {...params} }))`**   
👆🏽 Хук получения метода мутации

<br>

&emsp;&emsp; 🔹 Параметры запроса обязательно передаються в `variables`

```javascript
import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client";

const CREATE_USER = gql`
  mutation createUser($id: ID) {
    createUser(input: { id: $id }) {
      returning {
        name
      }
    }
  }
`;

const [createUser] = useMutation(CREATE_USER)

createUser({variables: {id: 1}})
``` 

<br>
<br>

### ⟵ **<a href="../../readme.md">Назад</a>**