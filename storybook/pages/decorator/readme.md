# Decorator
👆 Обертка вокруг каждого сториса  

&emsp;&emsp; 🔹 Подключение
📜 `.storybook/preview.js`
```typescript
import { withGlobalStyle, withRouter, withTheme } from './decorators'

export const decorators = [withTheme, withGlobalStyle, withRouter]
```

<br>

&emsp;&emsp; 🔹 Примеры декораторов  


📜 `.storybook/decorators/with-theme`
```typescript
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { primaryTheme } from '@app-theme'

export const withTheme = (storyFn: any) => {
    return (
        <ThemeProvider theme={primaryTheme} >
            {storyFn()}
        </ThemeProvider>
    )
}
````

📜 `.storybook/decorators/with-global-styles`
```typescript
import React from 'react'
import { GlobalStyles } from '@global-styles'
import { StoryBookGlobalStyles } from '@app-story-book/styles/global-styles'

export const withGlobalStyle = (storyFn: any) => {
    return (
        <>
            <GlobalStyles />
            <StoryBookGlobalStyles />
            {storyFn()}
        </>
    )
}
````

📜 `.storybook/decorators/with-global-styles`
```typescript
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

export const withRouter = (StoryComponent: any) => {
    return (
        <>
            <BrowserRouter>
                <StoryComponent />
            </BrowserRouter>
        </>
    )
}
````

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**