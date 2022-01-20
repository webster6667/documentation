# Импорт библиотек

🔹 imp:rct - импорт реакта
```javascript
import React from 'react'
```

<br>
<br>

🔹 imp:rrd - импорт реакт роутер дом
```javascript
import { Link } from 'react-router-dom'
```

<br><br>

🔹 imp:stc - импорт стилизированных компонентов
```javascript
import styled, {css} from 'styled-components'
```

<br><br>

🔹 imp:stc:f - импорт файл стилизированных компонентов
```javascript
import { $componentName$ } from './styles'
```

<br><br>

🔹 imp:stc:th - импорт главной темы стилизированных компонентов
```javascript
import { theme } from '@src/styled'

const { tablet, desktop } = theme.mediaMobileFirst
const { mainFont, border } = theme.colors
```

<br><br>

🔹 imp:cmp - компонентов из папки
```javascript
import {$name$} from './components/$path$'
```

<br><br>

🔹 imp:hlp - импорт хелпера
```javascript
import {$name$} from './helpers/$path$'
```

<br><br>

🔹 imp:@cmp - компонентов из папки общей папки
```javascript
import {$name$} from '@components/$path$'
```

<br><br>

🔹 imp:@tpg:h - Импорт заголовков
```javascript
import {$name$} from '@titles'
```

<br>

🔹 imp:@tpg:t - Импорт текста
```javascript
import {$name$} from '@text-components'
```

<br>

🔹 imp:ts:f - Импорт файла с типами
```javascript
import {$name$} from './types'
```

<br>

🔹 imp:@cnst - Импорт глобальных констант
```javascript
import {$name$} from '@const/$path$'
```

<br>
<br>

🔹 imp:@ui - из ui
```javascript
import {$name$} from '@ui/$path$'
```

<br>
<br>

🔹 imp:@stc:mix - импорт миксин
```javascript
import {$name$} from '@styled-mixins/$path$'
```