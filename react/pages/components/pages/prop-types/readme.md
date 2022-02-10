# PropTypes
> Внешняя библиотека реакта, позволяющая типизировать пропсы без использования `TypeSript`

🔹 Для работы библиотеки нужно импортировать ее в каждый файл

🔹 Описывать в объекте `propTypes`, типы всех пропсов компонента

<br>
<br>

💠 **Типы пропсов**

&emsp;&emsp; 🎯 `string`

&emsp;&emsp; 🎯 `number`

&emsp;&emsp; 🎯 `symbol`

&emsp;&emsp; 🎯 `bool`

&emsp;&emsp; 🎯 `func`

&emsp;&emsp; 🎯 `object`

&emsp;&emsp; 🎯 `array`

&emsp;&emsp; 🎯 `any`  
&emsp;&emsp;&emsp;&emsp; 👆 Любой тип, обычно используеться в связке с `any.isRequired`

&emsp;&emsp; 🎯 `node`  
&emsp;&emsp;&emsp;&emsp; 👆 Все, что может быть отрендерено: числа, строки, элементы или массивы

&emsp;&emsp; 🎯 `element`  
&emsp;&emsp;&emsp;&emsp; 👆 Реакт элемент(кусок jsx для рендеринга, а не компонент)

&emsp;&emsp; 🎯 `elementType`    
&emsp;&emsp;&emsp;&emsp; 👆 строка, функция, Реакт элемент(кусок jsx для рендеринга или компонент)

```jsx harmony
import React from "react";
import PropTypes from "prop-types";

const User = ({ name, age, authCallback }) => {
  return (
    <div>
      <input type="text" value={name} placeholder="Имя" />
      <br />
      <input type="text" value={age} placeholder="Возврост" />
    </div>
  );
};

User.propTypes = { // 🎯 Типизация пропсов компонета
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  authCallback: PropTypes.func
};

const App = () => {
  return (
    <div>
      <User name='Jon' age={22} />
    </div>
  );
};

export default App;
```

<br>
<br>

💠 **Свойства и методы PropTypes**

&emsp;&emsp; 🎯 `instanceOf(constructorName)`  
&emsp;&emsp;&emsp;&emsp; 👆 Говорит о том что, описанный пропс должен быть экземляром указанного констуктора 
```javascript
MyComponent.propTypes = {
  date: PropTypes.instanceOf(Date) //ожидает пропс экземпляра new Date() 
};
```

<br>

&emsp;&emsp; 🎯 `oneOf([val1, ..., valN]])`  
&emsp;&emsp;&emsp;&emsp; 👆 Описывает простые значения которые может принять пропс
```javascript
MyComponent.propTypes = {
  name: PropTypes.oneOf(['Jon', 'Ben']) //ожидает в name 'Jon' или 'Ben'
};
```

<br>

&emsp;&emsp; 🎯 `oneOfType([type1, ..., typeN]])`  
&emsp;&emsp;&emsp;&emsp; 👆 Описывает список типов которые может принять пропс
```javascript
MyComponent.propTypes = {
  age: PropTypes.oneOfType([ //Ожидает в age тип string или number
      PropTypes.number,
      PropTypes.string
  ]) 
};
```

<br>

&emsp;&emsp; 🎯 `arrayOf(PropTypes.number)`  
&emsp;&emsp;&emsp;&emsp; 👆 Массив с значениями указанного типа  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 📗 Можно указать только один тип

<br>

&emsp;&emsp; 🎯 `objectOf(PropTypes.number)`  
&emsp;&emsp;&emsp;&emsp; 👆 Объект с свойствами указанного типа  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 📗 Можно указать только один тип

<br>

&emsp;&emsp; 🎯 `shape({key: type}})`  
&emsp;&emsp;&emsp;&emsp; 👆 Метод описывающий каждое свойство объекта  
```javascript
MyComponent.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number
  }) 
}
```

<br>

&emsp;&emsp; 🎯 `exact({key: type}})`  
&emsp;&emsp;&emsp;&emsp; 👆 Метод описывающий каждое свойство объекта    
&emsp;&emsp;&emsp;&emsp; 🛑 Если в свойство объекта попадут не объявленные свойства, выдаст в консоль ошибку
```javascript
MyComponent.propTypes = {
  userData: PropTypes.exact({
    name: PropTypes.string.isRequired,
    age: PropTypes.number
  })
}
```

<br>

&emsp;&emsp; 🎯 `isRequired`  
&emsp;&emsp;&emsp;&emsp; 👆 Можно добавить к любому типу    
&emsp;&emsp;&emsp;&emsp; 🛑 Без типа `isRequired` не работет. Если тип неизвестен но поле обязательно, добавляем к типу `any`
```javascript
MyComponent.propTypes = {
    name: PropTypes.string.isRequired,  // 🎯 Жесткий тип
    age: PropTypes.any.isRequired       // 🎯 Тип неизвестен, но поле обязательно
}
```

<br>

&emsp;&emsp; 🎯 Кастомная функция типизатор
```javascript
User.propTypes = {
  myProp: (props, propName, componentName) => {
    const propType = typeof props[propName],
      errorMessage = `Проп: ${propName}, имеет неправильное значение`;

    if (propType !== "string") {
      return new Error(errorMessage);
    }
  }
};
```

<br>

&emsp;&emsp; 🎯 Кастомная функция типизатор для `arrayOf` или `objectOf`  
&emsp;&emsp;&emsp;&emsp; 👆 Пробегаеться по всем свойствам объекта или массива    

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `propValues` - массив 
```javascript
User.propTypes = {
  myProp: PropTypes.arrayOf(
    (propValue, key, componentName, location, propFullName) => {
        const itemProp = propValue[key],
              itemPropType = typeof itemProp,
              errorMessage = `Проп: ${propFullName}, имеет неправильное значение`;

      console.log(propValue); // => [1, 2, 3]
      console.log(key); // => 0
      console.log(propFullName); // => myProp[0]

      if (itemPropType !== 'string') {
        return new Error(errorMessage);
      }

    }
  )
}
```

<br>

&emsp;&emsp; 🎯 Кол-во дочерних элементов
```javascript
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  authCallback: PropTypes.func,
  // children: PropTypes.element.isRequired          // => Только один child элемент
  //<User><input /></User>

  // children: PropTypes.arrayOf(PropTypes.element)  // => Обязательно группа child элементов
  //<User><input /><input /></User>
};
```

<br>
<br>

💠 **PropTypes значения по умолчанию**
> Позволяют определить значение пропсов по умолчанию, если в них ничего не передали  

```jsx harmony
import React from "react";
import PropTypes from "prop-types";

const User = ({ name, age, authCallback }) => {
  return (
    <div>
      <input type="text" value={name} placeholder="Имя" />
      <br />
      <input type="text" value={age} placeholder="Возврост" />
    </div>
  );
};

User.propTypes = {    // 🎯 Типизация пропсов компонета
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  authCallback: PropTypes.func
};

User.defaultProps = { // 🎯 Значения по умолчанию
  name:  'user',
  age: 'Укажите возраст'
};

const App = () => {
  return (
    <div>
      <User age={22} />
    </div>
  );
};

export default App;
```

<br>

## 🚩 PropTypes в функциональных и классовых компонентах

<br>

💠 **В функциональных**

&emsp;&emsp; 🔹 Описываеться в отдельных объектах 

```jsx harmony
import React from "react";
import PropTypes from "prop-types";

const User = ({ name, age, authCallback }) => {
  return (
    <div>
      <input type="text" value={name} placeholder="Имя" />
      <br />
      <input type="text" value={age} placeholder="Возврост" />
    </div>
  );
};

User.propTypes = {    // 🎯 Типизация пропсов компонета
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  authCallback: PropTypes.func
};

User.defaultProps = { // 🎯 Значения по умолчанию
  name:  'user',
  age: 'Укажите возраст'
};

const App = () => {
  return (
    <div>
      <User name={"Jon"} age={22} />
    </div>
  );
};

export default App;
```

&emsp;&emsp; ⚡️ <a href='https://www.npmjs.com/package/assign-prop-types' >Библиотека</a> позволяющая описывать типы в функциональном стиле 
```jsx harmony
const User = ({name: PropTypes.string}) => (<h1>{name}</h1>)   
```

<br>
<br>

💠 **В классовых**  

&emsp;&emsp; 🔹 Описываеться в статических свойствах  

&emsp;&emsp; 🔹 Можно описывать в отдельных объектах, как в функциональных
```jsx harmony
import React, { Component } from "react";
import PropTypes from "prop-types";

class User extends Component {

  static propTypes = {    // 🎯 Типизация пропсов компонета
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    authCallback: PropTypes.func
  };  

  static defaultProps = { // 🎯 Значения по умолчанию
    name: "user",
    age: "Укажите возраст"
  };

  render() {
    const { name, age, authCallback } = this.props;
    return (
      <div>
        <input type="text" value={name} placeholder="Имя" />
        <br />
        <input type="text" value={age} placeholder="Возврост" />
      </div>
    );
  }
}

const App = () => {
  return (
    <div>
      <User name={"Jon"} age={22} />
    </div>
  );
};

export default App;
```

<br>

⟵ **<a href="../../readme.md">Назад</a>**