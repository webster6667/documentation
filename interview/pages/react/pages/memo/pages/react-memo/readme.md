# React.memo()
👆🏽 `HOC` предотвращий реренде компонента, если при ререндере родителя в меморезированный компонент приходят те же значения что и при прошлом рендере    
&emsp;&emsp; 🔸 Важно при этом помнить что в `js` `{a: 1} !== {a: 1}`, нужна именно ссылка на один и тот же объект  

&emsp;&emsp; 🔹 Вторым аргументом `React.memo()` являеться функция отвечающая за логику меморизации  
&emsp;&emsp;&emsp;&emsp; 👆 Аналог `shouldComponentUpdate`  

**<a href="https://codesandbox.io/s/memo-draft-q9c064">Demo</a>**

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**