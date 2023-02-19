# Connect
👆🏽 Для подключения `mobx` нужно всего два действия 

🎯 Создать стор  
```js
import { makeAutoObservable } from "mobx"

class Profile {
    id = null
    username = ''
    isAuth = false

    constructor() {
        makeAutoObservable(this)
    }

    auth({id, username}) {
        this.id = id
        this.username = username
        this.isAuth = true
    }

    logout() {
        this.id = null
        this.username = ''
        this.isAuth = false
    }

    get profileData() {
        return `${this.id} ${this.username}`
    }
}

export const profile = new Profile()
```

🎯 Обернуть компонент в наблюдатель  
```js
import React, { FC } from "react";
import {observer} from "mobx-react-lite";
import {profile} from '@store/profile'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { Box } from "@grid";
import { PrimaryModal } from "@modal/primary";
import {useSwitch} from '@hook'

import { Wrapper, AuthBtn, Logo, UserData } from "./styles";


import LogoPath from "@icons/logo.svg";
import LoginIconPath from "@icons/login.svg";
import LogoutIconPath from "@icons/logout.svg";

export const Header = observer(() => {
    const [isModalOpen, openModal, closeModal] = useSwitch(false),
        isAuth = profile.isAuth, // 👉🏼 Обновляемые данные из стора
        loginClickHandler = () => {
            profile.auth({id: 1, username: 'Webster'}) // 👉🏼 Экшены из стора
            closeModal()
        },
        logoutClickHandle = () => {
            profile.logout()
        }

    return (
        <Wrapper>
            <PrimaryModal isOpen={isModalOpen} onClose={closeModal} >
                <Button variant="contained" onClick={loginClickHandler} >
                    Войти
                </Button>
            </PrimaryModal>
            <Box alignItems="center" >
                {isAuth && <UserData>
                    {profile.profileData} {/* 👉🏼 Геттер из стора */}
                </UserData>}
                {isAuth
                    ? <AuthBtn onClick={logoutClickHandle} src={LogoutIconPath} alt="logout" />
                    : <AuthBtn onClick={openModal} src={LoginIconPath} alt="login" />
                }
            </Box>
        </Wrapper>
    );
});
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**