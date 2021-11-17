# RTK query
> Генератор стандартного сценария работы с сервером(Идет загрузка, получить данные, ошибка), подобие `react query` для `redux`

💠 **Базовая структура**

```javascript
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";


export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    endpoints: (build) => ({
        ...
    })
})
```
&emsp;&emsp; 🎯 `reducerPath` - Уникальное имя редюсера

&emsp;&emsp; 🎯 `baseUrl` - Домен, который будет использоваться в методах запроса
 
&emsp;&emsp; 🎯 `endpoints` - Функция генерирующая методы запроса с хуками и статусами запроса

<br>
<br>

💠 **Endpoint**
> Отдельный метод для работы с API

&emsp;&emsp; 🔹 `endpoints` Бывают двух типов

&emsp;&emsp;&emsp;&emsp; 🎯 `build.query` - для `GET` запросов

&emsp;&emsp;&emsp;&emsp; 🎯 `build.mutation` - для `POST/PUT/DELETE` запросов

```javascript
export const userAPI = createApi({
    ..., // setings
    endpoints: (build) => ({

        fetchAllUsers: build.query({ // 🎯 отдельный build.query endpoint

            query: (limit) => ({
                url: `/users`,
                params: {            // 🎯 GET параметры
                    _limit: limit
                }
            })

        }),

        createUser: build.mutation({ // 🎯 отдельный build.mutation endpoint

            query: (user) => ({
                url: `/users`,
                method: 'POST',
                body: user           // 🎯 Тело запроса
            })

        }),

    })
})
```

<br>
<br>

💠 **TagTypes**
> Алгоритм позволяющий указать зависимости для повторного запроса на сервер и перерисовки данных

> 📗 RTK кеширует запросы. Если сначала был получен и отрисован список юзеров  
После отправки запроса на создания юзера, ранее отрисованный список не будет перерисован с добавленным юзером  
Можно сделать перезапрос вручную, но для того что бы это происходило автоматически  
Нужно объявлять теги сущностей с которыми идет работа
А после выстраивать зависимость между запросами

```javascript
export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    tagTypes: ['User'],
    endpoints: (build) => ({

        fetchAllUsers: build.query({ 

            query: (limit) => ({
                url: `/users`,
                params: {           
                    _limit: limit
                }
            })
            providesTags: result => ['User'] // 🎯 Делать запрос заново и перерисовывать компонент 
                                             //    При воздействии на тег User 
        }),

        createUser: build.mutation({ 

            query: (user) => ({
                url: `/users`,
                method: 'POST',
                body: user           
            })
            invalidatesTags: ['Post'] // 🎯 Сообщить RTK о том что вызов этого метода воздействует на тег User
        }),

    })
})
```

<br>
<br>

💠 **Подключение генератора**

```javascript
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice'
import {userAPI} from "./services/UserService";

const rootReducer = combineReducers({
    userReducer,
    [userAPI.reducerPath]: userAPI.reducer // 🎯 Подключение генератора в rootReducer 
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => // 🎯 Подключение генератора в сторе
            getDefaultMiddleware()
                .concat(userAPI.middleware)
    })
}
```

<br>
<br>

💠 **Типизация генератора**

```javascript
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IPost} from "../models/IPost";


export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({ 
            // IPost[] - Типизация данных возвращаемых хуком fetchAllPosts 
            // number - Типизация аргументов fetchAllPosts(1)

            query: (limit) => ({
                url: `/posts`,
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Post']
        }),
        createPost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts`,
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        updatePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        deletePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Post']
        }),
    })
})
```

<br>
<br>

💠 **Использование в JSX**

```jsx harmony
import React, {useEffect, useState} from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";

const PostContainer = () => {
    
    const {data: posts, error, isLoading, refetch} =  postAPI.useFetchAllPostsQuery(100)

    // 🎯 Сгенерированные хуки
    const [updatePost, {error: updateError, isLoading: updateIsLoading}] = postAPI.useUpdatePostMutation()
    const [createPost, {error: createError, isLoading: createIsLoading}] = postAPI.useCreatePostMutation()
    const [deletePost, {error: deleteError, isLoading: deleteIsLoading}] = postAPI.useDeletePostMutation()

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }

    return (
        <div>
            <div className="post__list">
                <button onClick={handleCreate}>Add new post</button>
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <h1>Произошла ошибка при загрузке</h1>}
                {posts && posts.map(post =>
                    <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post}/>
                )}
            </div>
        </div>
    );
};
```