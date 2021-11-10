# Компоненты

&emsp;&emsp; 🔹 Объявляються с большой буквы      

&emsp;&emsp; 🔹 Деляться на функциональные и классовые      

&emsp;&emsp; 🔹 Бывають простыми и сложными          
&emsp;&emsp;&emsp;&emsp; 🎯 **Простые** - отвечают только за отрисовку входных данных, без реализации логики  
&emsp;&emsp;&emsp;&emsp; 🎯 **Сложные** - реализуют различный функционал, работают со стейтом, содержат разные условия и влияют на отрисовку простых компонентов    

&emsp;&emsp; 🔹 Объявление пропросов происходит через атрибуты `jsx` элемента      
```jsx harmony
<User name={'Ben'} />
```

* **<a href="./pages/jsx/readme.md">Функциональные</a>**
* **<a href="./pages/components/readme.md">Классовые</a>**
* **<a href="./pages/life-cicle/readme.md">Этапы жизненного цикла</a>**
* **<a href="./pages/rerender/readme.md">Ререндер компонента</a>**

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**

<br>

## 🚩 Функциональный компонент
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

&emsp;&emsp; 🔹 `JSX` пишеться в скобках, после конструкции `return`                               
&emsp;&emsp;&emsp;&emsp; ⚡️ Если компонент объявлен стрелочной функцией и просто возвращает `JSX`, можно исключить фигурные скобки и конструкцию `return`    
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 Особенности стрелочных функций, то что написанно в круглых скобках будет воспринять как после `return`                  

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

## 🚩 Классовый компонент
> Более сложный компонент, содержащий внутри себя работу со стейтом и этапами жизненного цикла
 
```jsx harmony
import React, { Component } from "react";

class User extends Component { 

  render() {
    const {name} = this.props

    return (
      <div>
        <h2>
            {name} // 🎯 => "Jon"
        </h2>               
      </div>
    )
  }

}

export default class MyApp extends Component {

  render() {
    return (
          <div>
            <User name="Jon" />
          </div>
        )
	}

}
``` 
 
&emsp;&emsp; 🔹 Требует наследование от `React.Component`  
&emsp;&emsp;&emsp;&emsp; 👆 Именно в `React.Component`, реализованы все свойства и методы(`render`, этапы жизненного цикла, работа с `state`)

&emsp;&emsp; 🔹 Требуем больше памяти для реализации

&emsp;&emsp; 🔹 `JSX` пишеться в скобках, после конструкции `return` внутри метода `render`

&emsp;&emsp; 🔹 Внутри `render` до конструкции `return`, можно проводить различные `js` операции              
              
&emsp;&emsp; 🔹 Внутри функционального компонента, идет работа с динамической конструкцией `this`  
&emsp;&emsp;&emsp;&emsp; 👆 Важно помнить об этом, так как контекст может быть потерян или изменен

&emsp;&emsp; 🔹 Переданые пропсы попадают в `props` свойство класса, как в комопненте `User`      
              
&emsp;&emsp; 🔹 Переданный контент внутрь компонента, попадает в `props` свойство класса, под ключем `this.props.children`       
```jsx harmony
import React, { Component } from "react";

class User extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        {children} // => <h1>Jon</h1>
      </div>
    )
  }
}

export default class MyApp extends Component {
  render() {
    return (
      <div>
        <User>
          <h1>Jon</h1>  
        </User>
      </div>
    )
  }
}
```

<br>
<br>

💠 **Инициализация стейта**   
👆🏽 В классовых компонентах бывает двух видов
 
<br>

&emsp;&emsp; 🔹 В объекте `state`
```jsx harmony
import React, { Component } from "react"

class User extends Component {
  state = {
    name: "Jon"
  }

  render() {
    return <div>{this.state.name}</div>;
  }
}
```

&emsp;&emsp; 🔹 Через конструктор
```jsx harmony
import React, { Component } from "react"

class User extends Component {
  constructor(props) { // 🎯 Конструктор для объявления стейта
    super(props)       // 🎯 Вызов конструктора Component с пропсами, для корректной работы реакта

    this.state = {     // 🎯 Инициализация стейта в свойстве конструкторе
      name: "Jon"
    }
  }

  render() {
    return <div>{this.state.name}</div>;
  }
}
```

<br>
<br>

💠 **Изменение стейта**  
👆🏽 В классовых компонентах происходит через метод `this.setState`
         
&emsp;&emsp; 🔹 Под капотом изменение через `this.setState` происходит ассинхронно      

&emsp;&emsp; 🔹 `this.setState(arg)` Принимает в аргументы:

&emsp;&emsp;&emsp;&emsp; 🎯 Объект свойства которого будут записаны(или перезаписаны) в стейт    
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 При обращении к `this.state`, из объекта **myObject** `this.setState(myObject)`  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Есть риск получить не предыдущий стейт, а уже измененный другими вызовами `setState` стейт.   
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Это происходит из за ассинхронного выполнения `setState`  

```jsx harmony
class User extends Component {
  state = {
    name: "Jon",
    age: 22
  };

  clickHandler = () => {
    this.setState({ age: this.state.age + 1 });
    // стейт после клика {name: "Jon", age: 23}
  };

  render() {
    const { name, age } = this.state;

    return (
      <div>
        <span>
          name: {name}, age: {age}
        </span>
        <br />
        <button onClick={this.clickHandler}>setState</button>
      </div>
    );
  }
}
```

<br>

&emsp;&emsp;&emsp;&emsp; 🎯 Функция возвращающая объект, свойства которого будут записаны(или перезаписаны) в стейт  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 Функция принимает в себя аргумент `prevState`, обращение к которому гарантирует  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Что вызваный стейт будет равен тому стейту который был на момент вызова функции

```jsx harmony
class User extends Component {
  state = {
    name: "Jon",
    age: 22
  };

  clickHandler = () => {
    this.setState(prevState => {{ age: prevState.age + 1 }});
    // стейт после клика {name: "Jon", age: 23}
  };

  render() {
    const { name, age } = this.state;

    return (
      <div>
        <span>
          name: {name}, age: {age}
        </span>
        <br />
        <button onClick={this.clickHandler}>setState</button>
      </div>
    );
  }
}
```

Этапы жизненого цикла       