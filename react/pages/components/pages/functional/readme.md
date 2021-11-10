# Функциональный компонент
> Не требует наследования, максимально просто и расширяемый за счет хуков

<br>

```jsx harmony
const User = ({name}) => (  
    <div>
        <h2>{name}</h2>              
    </div>
    )

function App(props) {
    
    return (
        <div>
            <User name={'Ben'} />
        </div>
    )
}
``` 

&emsp;&emsp; 🔹 Переданные пропсы попадают в первый аргумент функции(`объек props`)    
&emsp;&emsp;&emsp;&emsp; ⚡️ Можно сразу деструктуризировать объект `props`, как в `MyComponent`   

<br>

&emsp;&emsp; 🔹 `JSX` пишеться в скобках, после конструкции `return`           

&emsp;&emsp;&emsp;&emsp; ⚡️ Если компонент объявлен стрелочной функцией и просто возвращает `JSX`, можно исключить фигурные скобки и конструкцию `return`    
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 Особенности стрелочных функций, то что написанно в круглых скобках будет воспринять как после `return`                  

<br>

&emsp;&emsp; 🔹 Контент помещенный внутрь компонента, можно получить в `props`, из свойства `props.children`      
```jsx harmony
const MyComponent = ({children}) => (  
    <div>
        {children}                  // 2.🎯 => '<h2>My content</h2>'
    </div>
    )

function MyApp(props) {
    
    return (
        <div>
            <MyComponent >
                <h2>My content</h2> // 1.🎯 Поместит контент в children MyComponent
            </MyComponent>
        </div>
    )
}
``` 

&emsp;&emsp; 🔹 Работа со стейтом происходит при помощи хуков

<br>

⟵ **<a href="../../readme.md">Назад</a>**