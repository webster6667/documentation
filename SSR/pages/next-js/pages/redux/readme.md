# Redux
> Для подключения redux нужно выполнить следующие этапы

&emsp;&emsp; 🔹 Создать `wrapper` в главном файле стора - `store/index.ts`      

```typescript jsx
import {createWrapper, HYDRATE} from "next-redux-wrapper";
import { combineReducers, configureStore, AnyAction } from '@reduxjs/toolkit'
import {profileReducer, usersReducer} from "./reducers"

const rootReducer = combineReducers({
  profileReducer,
  usersReducer
})

const reducer = (state: ReturnType<typeof rootReducer>, action: AnyAction) => {

  if (action.type === HYDRATE) { // 👉🏼 Надстройка для hydrate
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};


export type RootState = ReturnType<typeof rootReducer>

export const createStore = () => configureStore({reducer})

type Store = ReturnType<typeof createStore>;

export const wrapper = createWrapper(createStore, {debug: true});
export type AppDispatch = Store['dispatch'];
```

<br>

&emsp;&emsp; 🔹 Обернуть все приложение в созданный `wrapper` - `/pages/_app.tsx`      

```typescript jsx
import React, {FC} from 'react'
import {AppProps} from 'next/app';
import {wrapper} from "./../store"
import {Layout} from "./../layout"
import './globals.scss'

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
          <Layout>
                <Component {...pageProps} />
          </Layout>
  )
}

export default wrapper.withRedux(WrappedApp);
```

&emsp;&emsp; 🔹 Обернуть `getInitialProps`, в `wrapper.getInitialPageProps`, для получения `dispatch` и `getState`       

```typescript jsx
import React from "react"
import {fetchUsers} from "@actions"
import {Card1 as User} from "@components/cards"
import {wrapper} from "./../store"
import { useSelector } from 'react-redux';

const Main = () => {
      const { users } = useSelector((state) => state.usersReducer);
    
      return (<div>
                {users.map((userdata) => <User {...userdata} key={userdata.id} />)}
      </div>)
}

Main.getInitialProps = wrapper.getInitialPageProps(({ dispatch, getState }) => async () => {
            await dispatch(fetchUsers())
    }
);

export default Main;
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**