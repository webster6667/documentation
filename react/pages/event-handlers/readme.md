# Обработчики событий
> Особенности обработки событий dom элементов в react

🔹 Реакт обернул все событие в свою обертку `synteticEvents`    
&emsp;&emsp; 👆 `synteticEvents` обеспечивает одинаковое поведение обработчиков на всех устройствах(кросбраузерность)

🔹 Все события навешиваються в `JSX`, отдельно для каждого элемента    
&emsp;&emsp; 🎯 Под капотом реакт содержит по одному обработчику на каждый вид события

&emsp;&emsp; 🎯 При компиляции, реакт собирает все события навешанные каждому элементу в `JSX`

&emsp;&emsp; 🎯 После чего при помощи делегирования событий, на верхнем уровне обрабатывает все навешанные событие ниже

🔹 Для отмены дефолтной работы события сработает только `e.preventDefault()`  
&emsp;&emsp; 👆 `return false` не отменит событие в `synteticEvents`

🔹 Синтаксис навешивания события
```jsx harmony
const MyComponent = () => {
        const clickHandler = (e) => {
            e.preventDefault()
            //Кастомная логика
        }

        return (<div onClick={clickHandler} />)
    }
```

🔹 Проброс пропсов в обработчик
```jsx harmony
const MyComponent = () => {
        const clickHandler = (e, name) => {
            e.preventDefault()
            //🎯 name - проброшеный аргумент
        }

        return (<div onClick={() => clickHandler('Ben')} />)      //🎯 Через замыкание
        return (<div onClick={clickHandler.bind(this, 'Jon')} />) //🎯 Через bind или call, apply
    }
```

🔹 Обработчики событий в классах
&emsp;&emsp; 🎯 Если в качестве функции обработчика указать обычную функцию, она создаст свой контекст

&emsp;&emsp; 🎯 Это вызовет потерю контекста `this` класса в методе

&emsp;&emsp; 🎯 Что повлечет за собой потерю возможности управлять стейтом
```jsx harmony
const MyComponent = () => {
        const clickHandler = (e, name) => {
            e.preventDefault()
            //🎯 name - проброшеный аргумент
        }

        return (<div onClick={() => clickHandler('Ben')} />)      //🎯 Через замыкание
        return (<div onClick={clickHandler.bind(this, 'Jon')} />) //🎯 Через bind или call, apply
    }
```

