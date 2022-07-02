# Command
> Оболочка позволяющая управлять функционалом через другой объект, исключив прямые изменения инстанса 

> 📗 Хорошим примером `command` патерна являеться `Redux`, в нем нельзя просто на прямик изменить `store`, для этого нужно выполнить цепочку команд

```javascript
class MyMath {
  constructor(initialValue = 0) {
    this.num = initialValue
  }

  square() {
    return this.num ** 2
  }

  cube() {
    return this.num ** 3
  }
}

class Command {
  constructor(subject) {
    this.subject = subject
    this.commandsExecuted = []
  }

  execute(command) {
    this.commandsExecuted.push(command)
    return this.subject[command]()
  }
}

const x = new Command(new MyMath(2))

console.log(x.execute('square'))
console.log(x.execute('cube'))

console.log(x.commandsExecuted)
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**