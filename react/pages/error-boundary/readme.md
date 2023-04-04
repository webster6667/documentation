# error-boundary  
👆🏽 Самый верхний обработчик ошибок

🔹 Оборачивает весь `App`  
🔹 Ловит `throw error`, выпавшие через все обработчи     
🔹 Реализован на классах  
🔹 Имеет доп стадию жизнкнного цикла `componentDidCatch`

```javascript
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

const MyComponent = () => {
    useEffect(() => {
      setTimeout(() => {
          throw new Error('Oops!');
      }, 1000)  
    },[])
}

function App() {
    return (
        <ErrorBoundary>
            <MyComponent />
        </ErrorBoundary>
    );
}

```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**