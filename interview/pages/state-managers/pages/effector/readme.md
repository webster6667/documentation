# effector

<details>
<summary> На каких принципах строится эффектор</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `Store`      
Атом для хранения данных  

🎯 `Event`      
Событие, при вызове которого обновляються все подписанные сторы  

🎯 `Effect`  
Функция оборачивающая ассинхронное события, возвращающая статусы промиса, на которые можно подписатся   
.done, .fail, .pending и .finally


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какие есть правила по наименованию функций</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 store начинаеться с $    
🎯 эффект заканчиваеться на fx  
🎯 Евенты описывают действие изменяющее стор  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какая логика структуры папок?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

1. Хранить все в папке model
2. Хранить все в папке model, но создание ивентов и сторов держать в отдельной паке init  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое sample?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Декларативный метод позволяющий описать в одном месте логику работы цепочки событий    

🎯 `clock` Говорит когда должен срабатывать семпл  
🎯 `source` Обьединяет в себе несколько сторов, для работы с данными в дальнейшей функции target     
🎯 `targer` Функция отрабатывающая если clock и filter === true, храня в аргументах данные из source  
🎯 `filter` позволяет предотвращать вызовы реакция если он возвращает false  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Зачем combain?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Обьединяет два атома стора, и при любом их изменении возвращает на выходе новый стор   

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> В чем смысл дробить на атомные сторы?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

При изменении каждого микростора, остальные не перерисовываются

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Напиши модель для заполнения поля и отправки формы</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
const getUsersWithLoginFx = createEffect(async ({name}) => {
    const url = `https://api.github.com/users/${name}/repos`
    const req = await fetch(url)
    return req.json()
})

export const changeInput = createEvent()
export const submitButtonClicked = createEvent()
export const $loginInput = createStore()

$loginInput.on($loginInput, (_, value) => value)

sample({
    source: $loginInput,
    clock: submitButtonClicked,
    filter: getUsersWithLoginFx.isPending,
    target: getUsersWithLoginFx,
})
```

<details>
<summary> Почему создание эфекто лучше локализироваьт?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Если эффект глобальный, он отработает везде где на него подписаны, даже если этого не видно  
Эффектор 

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> В чем приемущество эффектора над остальными стейт менеджерами?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

?

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**