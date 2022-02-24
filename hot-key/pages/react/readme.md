# React hot key

💠 Hooks

🔹 use:st - use state
```typescript
const [$state$, set$setState$] = useState($initState$)$END$
```

<br><br>

🔹 use:ef - use effect
```typescript
useEffect(() => {
    $callback$
}, [$dep$])
```

<br><br>

💠 PropTypes

🔹 cmp:ppt - component propTypes
```typescript
$componentName$.propTypes = {
    $prop$: PropTypes.$val$,
}
```

💠 Create component

🔹 c:pcmp - create pure components
```typescript
import React from 'react'

export const $componentName$ = ({children, props}) => ($cmp$)
```
