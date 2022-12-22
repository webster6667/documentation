# Синтаксис

🔹 Поддерживает работу с амперсантом `&`
```jsx harmony
const Card = styled.div`
  width: 100px;
  height: 100px;
  background: silver;
  &:hover {
      background: red;
  }
`;
```

<br>
<br>


🔹 Поддерживает работу с вложенными стилями
```jsx harmony
const Card = styled.div`
  width: 100px;
  height: 100px;
  background: silver;

  & .circle {
    width: 30px;
    height: 30px;
    background: red; 
    border-radius: 50%;   
  }
`;

export default function App() {
  return (
      <Card >
        <div className='circle' />
      </Card>
  );
}
```

<br>
<br>

🔹 Вложенные `styled-components`

```jsx harmony
const ImgWrapper = styled.div`
  background: black;
`;

const Card = styled.div`
  width: 100px;
  height: 100px;
  background: silver;

  ${ImgWrapper} {
    width: 30px;
    height: 30px;
  }
`;

export default function App() {
  return (
      <Card >
        <ImgWrapper />
      </Card>
  );
}
```

<br>

⟵ **<a href="../../readme.md">Назад</a>**