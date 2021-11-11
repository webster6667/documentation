# Жизненный цикл компонента
> Определенные этапы, которые проходит комопнент в момент его (определения, изменения, удаления) 

💠 **Этапы инициализации**  

&emsp;&emsp; 🔹 `constructor()`

&emsp;&emsp;&emsp;&emsp; 👆 Относиться к API vanylla-js, а не к реакту, но среди всех `init` этапов, отработает первым

<br>
<br>  


&emsp;&emsp; 🔹 `componentWillMout()`

&emsp;&emsp;&emsp;&emsp; 👆 Отработает перед началом рендера комопнента, в этот момент комопнент еще не готов

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 Нестоит изменять стейт    
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 Изменить возможно, но комопонент до конца не отрендерен, можно поймать баг

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 Нестоит изменять `JSX`, он еще не готов 

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 Годиться только для какого-то отстука аналитики  

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 Готовиться на deprecated, но пока работает  

<br>  
<br>  


&emsp;&emsp; 🔹 `render()`

&emsp;&emsp;&emsp;&emsp; 👆 Происходит внедрение `JSX` в реальный дом

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 Нестоит изменять стейт   
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 Вызовет бесконечный цикл

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 Можно объявлять переменные влияющие на отрисовку   

<br> 
<br>  


&emsp;&emsp; 🔹 `componentDidMout()`

&emsp;&emsp;&emsp;&emsp; 👆 Компонент полностью в монитрован в реальный `DOM`

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 Можно изменять стейт

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 Можно работать с `DOM` элементами (через ref или querySelector)

<br>  
<br>  
<br>  


💠 **Этапы изменения**  

<br>

❗️ Ререндер компонента происходит в двух случаях

&emsp;&emsp; 🎯 Изменили пропсы входящие в компонент  
&emsp;&emsp; 🎯 Изменили стейт внутри комопнента

<br>
<br>


&emsp;&emsp; 🔹 `componentWillReceiveProps(newProps)`

&emsp;&emsp;&emsp;&emsp; 👆 Срабатывает как только входящие пропсы в комопнент были изменены

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 В момент вызова компонент еще не отрисован     

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `newProps` объект, в котором хряниться все пропсы включая измененные  

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 В момент вызова, еще есть доступ к пропсам до изменения `this.props`

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 Метод может вызваться даже если пропсы не были изменены  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 Нужно сравнивать с текущими пропсами самостоятельно

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 Не срабатывает, при изменения стейта внутри компонента  

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 Предназначен для изменения стейта компонента, если стейт зависит от внешних пропсов  

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 Признан не безопасным, готовиться к deprecated

<br>  
<br> 

&emsp;&emsp; 🔹 `shouldComponentUpdate(newProps, newState)` 

&emsp;&emsp;&emsp;&emsp; 👆 Срабатывает при каждом рендеринге компонента (кроме инициализирующего)   

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 В момент вызова компонент еще не отрисован   

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 Компонент всегда должен возвращать `true/false`  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `true` - перерендерить компонент  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `false` - не ререндерить комопнент, даже если изменился пропс или стейт компонента

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `React.PureComponent`, компонент от которого наследуються вместо `React.Component`

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 Отличаеться от `React.Component` только тем, что внутри него, уже реализован метод `shouldComponentUpdate`, который сделает ререндер, если хоть один `props` или свойство стейта, не будет совпадать с предыдущими 

<br>  
<br>

&emsp;&emsp; 🔹 `componentWillUpdate(newProps, newState)`

&emsp;&emsp;&emsp;&emsp; 👆 Срабатывает при изменении пропсов или стейта компонента  

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 В момент вызова компонент еще не отрисован       

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `newProps` объект, в котором хряниться все пропсы  включая измененные  

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `newState` объект, в котором хряниться все свойства нового стейта  

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 В момент вызова, еще есть доступ к пропсам и стейту до изменения `this.props`, `this.props`

<br>  
<br>

&emsp;&emsp; 🔹 `render()`    
&emsp;&emsp;&emsp;&emsp; 👆 Происходит внедрение `JSX` в реальный дом (срабатывает как при ините так и при апдейте)    

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 Нестоит изменять стейт   
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 Вызовет бесконечный цикл

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 Можно объявлять переменные влияющие на отрисовку

<br>  
<br>

&emsp;&emsp; 🔹 `componentDidUpdate(prevProps, prevState)`  

&emsp;&emsp;&emsp;&emsp; 👆 Срабатывает после каждого рендеринга компонента (кроме инициализирующего)      
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 Изменения компонента были отрисованы  

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 Можно изменять стейт  

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 Есть доступ к пропсам и стейту до изменения `prevProps, prevState`  

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 Актуальные пропсы и стейт доступны в `this.state, this.props`     

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 DOM элементы и их данные соответствуют отрисованным   

<br>  
<br>  
<br>

💠 **Этапы удаления**  

&emsp;&emsp; 🔹 `componentWillUnmount()`  

&emsp;&emsp;&emsp;&emsp; 🎯 Срабатывает перед удалением компонента из `DOM`  
&emsp;&emsp;&emsp;&emsp; 🎯 Используеться в основном для очищения памяти(снятия слушателей и т.д)

<br>  
<br>  
<br>

💠 **Этапы ошибки**  

&emsp;&emsp; 🔹 `componentDidCatch(error, info)`  

&emsp;&emsp;&emsp;&emsp; 👆 Этап доступный только в классовом компоненте с названием `ErrorBoundary`         

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 Метод ловит не обработаные ошибки во время рендера дочерних компонентов  

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 Ошибки внутри хендлеров, `componentDidCatch` не поймает

```jsx harmony
import React, { Component } from "react";

const User = () => {
  
  if (Math.random() > 0.7) {
    throw new Error("myError");
  }

  return (
    <div>
      <button>throw error</button>
    </div>
  );
};

export default class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  componentDidCatch(error, info) {
    console.log(error);
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;

    return <div>{hasError ? <h1>Ошибка</h1> : <User />}</div>;
  }
}
```

<br>

⟵ **<a href="../../readme.md">Назад</a>**


