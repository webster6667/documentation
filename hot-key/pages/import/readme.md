# Импорт библиотек

🔹 `imp:rct` - импорт реакта
```javascript
import React from 'react'
```

<br>
<br>

🔹 `imp:rrd` - импорт реакт роутер дом
```javascript
import { Link } from 'react-router-dom'
```

<br>
<br>

🔹 `imp:ppt` - импорт проптайпсов
```javascript
import PropTypes from 'prop-types';
```

<br><br>

🔹 `imp:stc` - импорт стилизированных компонентов
```javascript
import styled, {css} from 'styled-components'
```

<br><br>

🔹 `imp:stc:e` - импорт стилизированных компонентов emotions
```javascript
import styled, {css} from '@emotion/styled/macro'
```

<br><br>

🔹 `imp:st` - импорт файл стилизированных компонентов
```javascript
import './styles'
```

🔹 `imp:st:f` - импорт файл стилизированных компонентов
```javascript
import { $componentName$ } from './styles'
```

<br><br>

🔹 `imp:stc:th` - импорт главной темы стилизированных компонентов
```javascript
import { theme } from '@app-theme'
```

<br>
<br>

🔹 `imp:mu` - импорт material ui 
```javascript
import {$name$} from '@mui/material'
```

<br><br>

🔹 `imp:.` - именованный импорт
```javascript
import {$component$} from "./$path$"
```

<br><br>

🔹 `imp:cmp` - компонентов из папки
```javascript
import {$name$} from './components/$path$'
```

<br><br>

🔹 `imp:hlp` - импорт хелпера
```javascript
import {$name$} from './helpers/$path$'
```

<br><br>

🔹 `imp:@` - импорт алиаса
```javascript
import {$component$} from "@$aliasName$"
```

<br><br>

🔹 `imp:@cmp` - компонентов из папки общей папки
```javascript
import {$name$} from '@components/$path$'
```

<br><br>

🔹 `imp:@tpg` - Импорт типографики
```javascript
import {$name$} from '@typography'
```

<br><br>

🔹 `imp:@gr` - Импорт сетки
```javascript
import {$name$} from '@grid'
```

<br><br>

🔹 `imp:@ui` - из ui
```javascript
import {$name$} from '@ui/$path$'
```

<br><br>

🔹 `imp:@cnst` - Импорт глобальных констант
```javascript
import {$name$} from '@const/$path$'
```

<br><br>

🔹 `imp:ts:f` - Импорт файла с типами
```javascript
import {$name$} from './types'
```

<br><br>

🔹 `imp:@stc:mix` - импорт миксин
```javascript
import {$name$} from '@styled-mixins/$path$'
```

<br><br>

🔹 `exp:.` - экспорт дочерних компонентов
```typescript
export {$component$} from './$path$'
```

<br><br>

🔹 `exp:*` - экспорт всех дочерних компонентов
```typescript
export * from './$path$'
```