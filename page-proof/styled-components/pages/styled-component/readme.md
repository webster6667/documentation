# Стилизированный компонент

```jsx harmony
import React from 'react';
import styled from "styled-components";

const Title = styled.h1` // 🎯 Сгенерирует h1 тег с описанными ниже стилями
  font-size: 14px;
  text-align: center;
  color: red;
`;

export default function App() {
  return (
    <div>
      <Title>
        My title
      </Title>
    </div>
  );
}
```

> 📗 Процесс создания стилизированного компонента

🎯 `styled-components` создает компонент  

🎯  Привязывает ему уникальный класс  

🎯  Описывает указанные стили к созданному уникальному классу  

🎯  Добавляет стилизированный уникальный класс в тег `<style>`  

🎯  Сгенерированный `<style>`, попадает на страничку раньше компонентов  

🎯  Компонент отрисуеться исходя из стилей которые сгенерировались в `<style>`  

<br>

⟵ **<a href="../../readme.md">Назад</a>**