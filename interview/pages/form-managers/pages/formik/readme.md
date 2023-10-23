# Formik

<details>
<summary> Что делать если пришедшие на редактирование данные с бека, не подходят под стейт формы?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Преобразовываем данные через функцию `getPrepareInitFormState`

```typescript jsx
const getUserFormInitState = (data: UserResponse) => {
    const initData = {
        email: '',
        password: '',
        birthday: '',
        starDate: '',
        finishDate: '',
        country: '',
        courses: [],
        acceptTerms: false,
        frontSkills: [],
        backSkills: [],
        sex: '',
        projects: [
            {
                name: '',
                url: '',
            },
        ],
        ...data
    }
    
    if (initData.country) {
        initData.country = initData.country.name
    }

    return initData
}

<Formik initialValues={getUserFormInitState(userData)} />
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как соединять чистый ui элемент и Field формика?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

В отдельном хоке на подобии этого

```typescript jsx
import { Field } from "formik";
import React, {FC, ReactElement} from "react";
import {PrimaryTextFieldProps, TextComponentProps} from './types'

export const PrimaryTextField = <T extends FC<TextComponentProps>>({Component, ...props}:PrimaryTextFieldProps<T>):ReactElement => {
    return (<Field {...props} >{({
                                     field,
                                     meta: {touched, error},
                                 }) => {
        return (
            <Component {...field} {...props} error={touched && error} />
        )
    }}</Field>)
}
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как реализовать валидацию форм?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Используя схемы `yup`

<details>
<summary>📜 <code>form/schemas</code></summary>

```typescript jsx

const ruTranslate = {
    "labels": {
        "password": "Пароль",
        "email": "Эмеил",
        "name": "Имя",
        "url": "Путь",
    },
    "errorMessages": {
        "required": "Поле '{{inputLabel}}' обязательно для заполнения",
        "maxLength": "Поле '{{inputLabel}}' не должно превышать {{maxLength}} кол-во символов",
        "minLength": "Поле '{{inputLabel}}' должно быть не короче {{maxLength}} символов",
        "invalidEmail": "Эмеил '{{inputValue}}' не валиден"
    }
}

const getRequiredErrorMessage = (t) => ({label}) => {
    return t('errorMessages.required', {inputLabel: label})
}

const getMaxLengthErrorMessage = (t) => ({label, max}) => {
    return t('errorMessages.max', {inputLabel: label, maxLength: max})
}

const getMinLengthErrorMessage = (t) => ({label, min}) => {
    return t('errorMessages.min', {inputLabel: label, minLength: min})
}

const getInvalidEmailMessage = (t) => ({value}) => {
    return t('errorMessages.invalidEmail', {inputValue: value})
}

export const userFormValidateSchema = (t: TFunction) => {
    
    return Yup.object({
        password: Yup.string()
            .label(t('password'))
            .min(3, getMinLengthErrorMessage(t))
            .max(15, getMaxLengthErrorMessage(t))
            .required(getRequiredErrorMessage(t)),
        email: Yup.string()
            .label(t('email'))
            .email(getInvalidEmailMessage(t))
            .required(getRequiredErrorMessage(t))
    })
}
```

</details>

```typescript jsx
<Formik initialValues={getUserFormInitState(userData)} />
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как реализовать валидацию массивов? </summary>

----

```typescript jsx
export const userFormValidateSchema = (t: TFunction) => {
    
    return Yup.object({
        projects: Yup.array().of(
            Yup.object().shape({
                name: Yup.string().label(t('name')).min(4, getMinLengthErrorMessage(t)).required(getRequiredErrorMessage(t)),
                url: Yup.string().label(t('url')).min(3, getMinLengthErrorMessage(t)).required(getRequiredErrorMessage(t)),
            })
        )
    })
}
```

----

</details>

<details>
<summary> Как валидировать boolean?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```typescript jsx

export const userFormValidateSchema = (t: TFunction) => {

    return Yup.object({
        acceptTerms: Yup.bool()
            .oneOf([true], t("You must accept the terms and conditions"))
    })
}
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как валидировать связанные данные?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```typescript jsx

export const userFormValidateSchema = (t: TFunction) => {

    return Yup.object({
        dewormingDate: string()
            .test({
                name: "is-not-later-today",
                message: t("invalidDate", { ns: "common" }),
                test: function (value) {
                    if (value && value.match(/\d{2}.\d{2}.\d{4}/) && isMaskDateFilled(value)) {
                        const valueInDateFormat = new Date(formatDateFromString(value));

                        if (valueInDateFormat.getTime() > new Date().getTime()) {
                            return false;
                        }
                    }

                    return true;
                },
            })
    })
}

```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как валидировать данные после отправки?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```js
<Formik onSubmit={async (values, {setFieldError}) => {
            await sleep(3000);
            const errors: Partial<typeof values> = {}
        
            if (values.email === 'test@mail.ru') {
                errors.email = 'test@mail.ru is exist'
            }
        
            Object.entries(errors).map(([fieldName, error]) => {
                setFieldError(fieldName, error)
            })
}}
/>
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary>Как вывести ошибку не связанную с конкретным полем?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```js
<Formik
    initialValues={{
        frontSkills: [],
        backSkills: []
    }}
    validate={(values) => {
        const errors: Partial<typeof values> = {};
    
        if (!values.frontSkills.length && !values.backSkills.length) {
            errors.skillError = 'Select skills'
        }
    
        return errors;
    }}>
        {({errors}) => {
        return (
            <form onSubmit={handleSubmit}>
                {errors?.skillError && <Text color='error' className='y-offset-md_top' >{errors?.skillError}</Text>}
            </form>
        )
    }}
</Formik>
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)



![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**