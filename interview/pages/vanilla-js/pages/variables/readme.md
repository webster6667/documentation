# Переменные

<details>
<summary> Чем отличаеться <code>let, const, var</code></summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `var` поднимает хостинг в лексическое окружение     
&emsp;&emsp; 👆 И дает возможность обращатся еще до объявления   
  
🎯 `let/const` так же поднимается хостингом в лексическое окружение  
&emsp;&emsp;   👆 Но попадает в `ВМЗ` и получить к ним доступ до объявления нельзя  

🎯 `var` доступны за пределами скобок    
🎯 `let/const` доступны только в блочной области видимости    
🎯 `const` нельзя изменять, но можно мутировать  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**