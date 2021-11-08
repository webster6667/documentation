# Let Const
> Ts позволяет хранить в переменных значения, которые можно использовать в типах

```typescript
let inputTypes: 'phone' | 'number' | 'text' | 'password' | 'radio' | 'checkbox' | 'select' | 'date'

type Input = {
  type: typeof inputTypes,
  name: string
}
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**