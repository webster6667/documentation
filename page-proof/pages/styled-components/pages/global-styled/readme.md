# Глобальные стили
> Объявление и хранение глобальных стилей

```jsx harmony
import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './app';

const GlobalStyle = createGlobalStyle` // 🎯  Сгенерирует  <style> тег
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

ReactDOM.render(
    <>
      <GlobalStyle /> // 🎯  Интеграция глобальных стилей в приложение
      <App />
    </>,
    document.getElementById('root'),
);
```

<br>

⟵ **<a href="../../readme.md">Назад</a>**