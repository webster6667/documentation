# useMemo()
👆🏽 `hook` Предотвращий пересоздание переменной внутри компонента, если при ререндере небыли изменены `deeps`  

&emsp;&emsp; 🔹 Может кешировать не только значения, но и комопненты   
```js
const memoCard = useMemo(() => (<Card name={name} />), [name])

return (<div>
    {memoCard}
</div>)
```

**<a href="https://codesandbox.io/s/confident-shannon-t9ugvy">Demo</a>**

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**