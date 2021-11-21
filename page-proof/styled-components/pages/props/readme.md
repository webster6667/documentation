# Взаимодействие с пропсами

🔹 Передача пропсов в стилизированные компоненты  
&emsp;&emsp; 👆 В стилизированные компоненты, можно передаать пропсы, которые влияют на сгенерированные стили

&emsp;&emsp; ⚡️ Сокращенная версия использования пропсов `${({color = 'black'}) => color}`

```jsx harmony
const H1 = styled.h1`
  font-size: 18px;
  text-align: center;
  color: ${(props) => props.color || "black"}; // 🎯 Отрисует переданный цвет в пропсе color или черный
`;

export default function App() {
  
  return (
    <div>
      <H1>Black title</H1>
      <H1 color={'red'} >Red title</H1> // 🎯 Передает пропс цвета текста
    </div>
  );
}
```

<br>
<br>

🔹 Группировка стилей, на основании пропсов
```jsx harmony
import styled, { css } from "styled-components";

const H1 = styled.h1`
  font-size: 18px;
  line-height: 24px;
  text-align: center;

  ${({ size }) =>
    size == "lg" &&
    css`                 // 🎯 Создаст комопнент с этими стилями если передадут пропс size='lg' 
      font-size: 32px;
      line-height: 60px;
    `}

  ${({ dark }) =>
    dark &&             // 🎯 Создаст комопнент с этими стилями если передадут пропс dark={true}
    css`
      background: black;
      color: silver;
    `}
`;

export default function App() {
  return (
    <div>
      <H1 size={'lg'} >Title</H1>
      <H1 dark >Title</H1>
    </div>
  );
}
```

<br>

⟵ **<a href="../../readme.md">Назад</a>**