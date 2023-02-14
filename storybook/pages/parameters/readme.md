# Parameters
👆 Настройка кастомных параметров  

📜 `.storybook/const/custom-viewports.ts`
```typescript
export const customViewports = {
    mobile: {
        name: 'mobile',
        styles: {
            width: '320px',
            height: '568px',
        },
    },
    tablet: {
        name: 'tablet',
        styles: {
            width: '768px',
            height: '1024px',
        },
    },
    desktop: {
        name: 'desktop',
        styles: {
            width: '1440px',
            height: '768px',
        },
    },
}
```

📜 `.storybook/preview.js`
```typescript
import { customViewports } from './const'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" }, // 👉🏼 Все параметры начинающийся на on считать экшенами
  controls: {
    matchers: {
      radio: /color/i, // 👉🏼 Все параметры начинающийся на color отображать как radiobutton
      date: /Date$/,   // 👉🏼 Все параметры начинающийся на Date отображать датапикером
    },
  },
  viewport: { viewports: customViewports }, // 👉🏼 Подключение кастомных размеров устройств
}
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**