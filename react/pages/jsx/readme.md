# JSX
> Синтаксис написания html тегов внутри реакта, которы компилируеться бейблом в JS объекты

🔹 Без `JSX`, теги внутри реакта выглядят следующим образом
```jsx harmony
const element1 = React.createElement(
  'h1',                    //Имя тега
  {className: 'greeting'}, //Атрибуты тега
  'Привет, мир!'           //Содержимое тега 
);

const element2 = (<h1 className="greeting">Привет, мир!</h1>); // JSX версия
```         

<br>
<br>


🔹 Если содержимое атрибута тега это не просто строка, его нужно обернуть в фигурные скобки
```jsx harmony
export default function App() {
    const additionalClass = 'my-class'
    
    return (
        <div>
    
            <h1 className="greeting">Привет, мир!</h1>      
            
            <h1 className={"greeting"}>Привет, мир!</h1>  
            
            <h1 className={`greeting ${additionalClass}`}>Привет, мир!</h1> 
            //👆 Js обратные кавычки
            
            <h1 className={additionalClass}>Привет, мир!</h1> 
            //👆 Js переменная
            
            <h1 className={`myClass__${new Date().getSeconds()}`}>Привет, мир!</h1> 
            //👆 Js функция
            
            <h1 style={{color: 'red'}} >Привет, мир!</h1> 
            //👆 Js объект
    
        </div>
    )
}
```

<br>
<br>


🔹 Компонент всегда должен возвращать один JSX элемент, оборачивающий контент внутри
```jsx harmony
export default function App() {
    return (<div>Контент</div><p>Контент</p>) // 🛑 Вызовет ошибку
    
    return (<div>Контент</div>) // Корректно работает только один родительский JSX элемент
}
```
&emsp;&emsp; ⚡️ Для решения этой проблемы есть компонент `<React.Fragment>...</React.Fragment>`                    
&emsp;&emsp; ⚡️ Более короткий синтаксис `<>...</>`               
```jsx harmony
export default function App() {
    return (
        <>
            <div>Контент</div>
            <p>Контент</p>
        </>
    )
}
```
🎯 Компонент вернет два соседствующийх `JSX` элемента  
🎯 Они не будут обернуты в лишний `div`

<br>
<br>


🔹 Для выполнения `js` внутри `JSX`, нужно обернуть код в фигурные скобки
```jsx harmony
export default function App() {
    return (<div>
       Дата: {new Date().getDate()}
    </div>)
}
```

<br>
<br>


🔹 Инлайн стили можно писать в двух форматах  
&emsp;&emsp; 🎯 `{'background-color': 'red'}`  
&emsp;&emsp; 🎯 `{backgroundColor: 'red'}`             

<br>

🔹 Тег может быть одиночным, если внутри него нет контента
```jsx harmony
<div className={'my-block'} />
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**