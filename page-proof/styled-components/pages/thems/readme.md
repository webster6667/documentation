# Темы
> `styled-components` умеет прокидывать различные переменные в props, что может быть полезно для создания стилизованых тем


💠 **Инициализация темы**
```jsx harmony
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import styled, { ThemeProvider } from "styled-components";

const theme = {                 // 🎯 1. Объект с темой сайта
  colors: {
    brand: "#0045FF",
    bg: "#F2F2F2"
  }
};

const H1 = styled.h1(({ 
  theme,                       // 🎯 3. Объект темы сайта доступный в props
  color = theme.colors.brand 
}) => ({
  fontSize: "18px",
  textAlign: "center",
  color
}));

ReactDOM.render(
  <ThemeProvider theme={theme}> // 🎯 2. HOC, прокидывающий объект темы в props
    <div>
      <H1>Black title</H1>
    </div>
  </ThemeProvider>,
  document.getElementById("root")
);
```

&emsp;&emsp; 🔹 В пропсы `styled-component`, можно прокидывать не только тему  
&emsp;&emsp;&emsp;&emsp; 👆 Например переменную, описывающую размер устройства

&emsp;&emsp; 🔹 Тема может быть не только для всего сайта  
&emsp;&emsp;&emsp;&emsp; 👆 Можно делать темы для отдельных компонентов

<br>

⟵ **<a href="../../readme.md">Назад</a>**