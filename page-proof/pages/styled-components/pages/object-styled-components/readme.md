# ⚡️ Работа с `styled-components` в объектном стиле

```jsx harmony
const Box = styled.div({  // 🎯 1.Статический компонент
  background: "palevioletred",
  height: "50px",
  width: "50px",
})


const H1 = styled.h1(({   // 🎯 2.Компонент зависящий от пропсов  
  color = 'black'         // 🎯 Ожидаемый пропс, и его дефолтное значение
}) => ({
    fontSize: '18px',
    textAlign: 'center',
    color                 // 🎯 Стили пишуться объектом, и такой пропс можно сразу закинуть в свойства 
  })
);

export default function App() {
  
  return (
    <div>
      <H1>Black title</H1>
      <H1 color={'red'} >Red title</H1>
    </div>
  );
}
```

<br>
<br>


🔹 Группировка стилей, на основании пропсов

```javascript
const Btn = styled.div(
  {
    fontSize: "14px",
    opacity: 0
  },

  ({ disabled }) => disabled && {
      color: "silver",
      cursor: 'auto'
  },

  ({ visible }) => visible && {
      opacity: 1
  }
);

export default function App() {
  return (
    <div>
      <Btn disabled>Send</Btn>
    </div>
  );
}
```

<br>
<br>

🔹 Обращение к дочерним элементам

```javascript
const ImgWrapper = styled.div({
  backgroundColor: "silver"
})

const Box = styled.div({
  width: '100px',
  height: '100px',  
  background: "black",

  [`> ${ImgWrapper}`]: {
    width: '50px',
    height: '50px'
  },

  `&:hover`: {
    background: "red",
  },

  `& .img`: {
    position: 'absolute'
  }

})
```

<br>
<br>

🔹 Работа с `media-queries`

```javascript
const Container = styled.div({
  padding: '0 20px'

  '@media(min-width: 788px)': {
    padding: '0 25px'
  }

})
```

<br>

⟵ **<a href="../../readme.md">Назад</a>**

