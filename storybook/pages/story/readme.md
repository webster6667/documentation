# Story
👆 Пример сториса  

```typescript
import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import {PrimaryButton} from "./primary-button"
import { ButtonProps } from "./types";

export default {
  title: "UI-kit/Button/Primary", // 👉🏼 Путь к сторису в структуре сторибука
  component: PrimaryButton,
  argTypes: { // 👉🏼 В ts сторисе, аргументы интерфейса подхватываються автоматически из файла типизации, но их всегда можно дописать в ручную
        color: {
            control: 'radio',
            options: ['red', 'white', 'black']
        }
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => { // 👉🏼 args значение пропсов настроеное через интерфейс
    return (<PrimaryButton {...args} />)
};

export const primaryButton = Template.bind({}); // 👉🏼 Экземпляр сториса
primaryButton.args = { label: "Button", sizeMod: "sm", mod: 'primary' }; // 👉🏼 Пропсы экземпляра по умолчанию
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**