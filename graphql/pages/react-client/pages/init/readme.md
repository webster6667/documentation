# Подключение к реакту

🔹 `index.js` ApolloProvider      
```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql",
    cache: new InMemoryCache()
});

import App from './app'

ReactDOM.render(<ApolloProvider client={client}><App /></ApolloProvider>, document.getElementById('root'))
```


<br>

### ⟵ **<a href="../../readme.md">Назад</a>**