# Declare
> Конструкция добавляющая типы в глобальную область видимости

❗ Конструкция декларирует файлы только в файлах с расширением `*.d.ts`

💠 Подключение расширений для `ts`

```typescript
//custom.d.ts

declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

declare module '*.png' {
    const src: string;
    export default src;
}
```

<br>

💠 Типизация библиотеки

```typescript
//custom.d.ts

declare module 'jquery' {
    const $: any
    export default $
}
```

<br>

💠 Расширение интерфейсов библиотеки   
```typescript
//custom.d.ts

import 'styled-components';
import {primaryTheme} from "@app-theme";
type CustomTheme = typeof primaryTheme;

declare module "styled-components" {
    export interface DefaultTheme extends CustomTheme {}
    // 👆 Расширил интерфейс библиотеки, свойствами созданной темы
}
```

<br>

💠 Расширение глобальных типов
```typescript
//custom.d.ts

declare global {
    interface Number {
        isEven(): boolean
    }
}
```

<br>

💠 Подключение других деклараций в общий файл деклараций
```typescript
//custom.d.ts

/// <reference types="fileWithDeclaration.d.ts" />
```

<br>

💠 Подключение файла деклараций через `tsconfig.json`
```json
{
    "include": [
        "custom.d.ts"
    ]
}
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**
