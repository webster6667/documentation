#Symbol 

<br>

💠 **Symbol.for`('mySymbol').description`**
👆🏽 Вернет имя метки символа

<br><br>

💠 **Symbol.for`('mySymbol')`**  
👆🏽 Создает уникальный ключь, или возвращает существующий

<br>

🎯 Метод for, создает `Symbol` с именем, и заносит его в глобальный реестр  

🎯 Если в реестре уже есть `Symbol` с таким именем, то `for` возвращает ссылку на него

🎯 В таком случаи два `Symbol` созданные через `for`, будут равны друг другу
```javascript
const symbol1 = Symbol('mySymbol'),
      symbol2 = Symbol('mySymbol')
      
console.log(symbol1 == symbol2) //false
      
const symbol3 = Symbol.for('mySymbol2'),
      symbol4 = Symbol.for('mySymbol2')

console.log(symbol3 == symbol4) //true
```


### **<a href="../../readme.md">Назад</a>**