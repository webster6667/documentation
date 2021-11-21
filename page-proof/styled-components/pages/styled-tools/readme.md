# <a href='https://www.npmjs.com/package/styled-tools' >Styled tools</a>
> Вспомогательная библиотека, упрощающая взаимодействие с пропсами внутри `styled-components`

💠 **prop(waitingProps, defaultValue)**  
👆🏽 Читает свойства из пропсов, задет дефолтные значения

```javascript
const H1 = styled.h1`
  font-size: ${({fontSize}) => fontSize || '14px'};
  font-size: ${prop("fontSize", "14px")} // 🎯 Заменяет верхнюю строку более лаконичной
`;
```

<br>
<br>

💠 **theme(themeProp, defaultValue)**  
👆🏽 Читает свойства из темы, задет дефолтные значения если в теме нет свойства

```javascript
const H1 = styled.h1`
  color: ${theme('colors.brand', 'red')}         // 🎯 Укажет цвет из темы, если в теме нет свойства то 'red' 
`

const H2 = styled.h2`
  color: ${prop('color', theme('colors.brand'))} // 🎯 Укажет цвет из пропса, если пропс пуст, возьмет из темы
`
```

<br>
<br>

💠 **palette(keyOrKeyNumber, keyOrDefaultValue, defaultValue)**  
👆🏽 Читает свойства объекта `palette`, который находиться в теме

```javascript
import { palette } from "styled-tools";


const theme = {
  palette: {
    primary: ["#1976d2", "#2196f3", "#71bcf7", "#c2e2fb"],
    bg: "#fff"
  }
};

const H1 = styled.h1`
  color: ${palette('primary', 0, 'red')} // 🎯 Возьмет элемент с нулевым индексом из pallete.primary, если там пусто, то вставит 'red'
  background: ${palette('bg', 'silver')} // 🎯 Возьмет значение из свойства pallete.bg, если там пусто, то вставит 'silver'
`
```

<br>
<br>

💠 **ifProp(isPropsExist, conditionTrue, conditionFalse)**  
👆🏽 Если 'isPropsExist === true', вернет conditionTrue, в противном случаи conditionFalse

```javascript
const H1 = styled.h1`
  color: ${ifProp("disabled", "silver", "black")};
  font-size: ${ifProp({ size: "large" }, "18px", "14px")};
`;
```

<br>
<br>

💠 **withProp(prop, fn(prop))**  
👆🏽 Возвращает функцию, передавая ей в аргументы prop

```javascript
const H1 = styled.h1`
  font-size: ${withProp("theme.fontSize", fontSize => `${fontSize + 1}px`)}; // 🎯 Достанет fontSize из темы и поместит в функцию
                                                                             // Результат которой будет записан в font-size

  opacity: ${withProp("opacity", opacity => `${opacity / 2}`)}; // 🎯 Достанет opacity из props и поместит в функцию
                                                                // Результат которой будет записан свойство стилей opacity
`;
```

<br>
<br>

💠 **switchProp(value, cases, defaultCase)**  
👆🏽 Возвращает функцию, передавая ей в аргументы `prop`

```jsx harmony
const H1 = styled.h1`
  font-size: ${switchProp(
    'size', // 🎯 пропс, значение которого пройдеться по кейсам      
    {       // 🎯 Кейсы  
      small: '12px',
      medium: '16px',
      large: '18px'
    }, 
    '12px'  // 🎯 Дефолтный кейс  
  )};
`;

export default function App() {
  return (
    <div>
      <H1 size='large' >Title</H1>
    </div>
  );
}
```

<br>

⟵ **<a href="../../readme.md">Назад</a>**