# Контроль загрузки странички  

<details>
<summary> Какие методы для контродя загрузки странички есть в <code>js</code>?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `DomContenLoaded`      
&emsp;&emsp;👆 Дом построен, и с ним можно работать    
  
🎯 `loaded`      
&emsp;&emsp; 👆 Все ресурсы загружены    

🎯 `before`    
&emsp;&emsp; 👆 Событие перед уходом со странички  

🎯 `unload`    
&emsp;&emsp; 👆 Пользователь покинул сраничку   

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как боротся с дергающимися шрифтами?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Загрузить их предварительно `<link rel="preload"`    

🎯 Указать `font-display: swap`, для использования запасного шрифта пока грузится основной      

<details>
<summary> <sup>⭐</sup>❓ Как узнать о подгрузке шрифтов в <code>js</code>?</summary>

---

```javascript
document.fonts.ready.then(() => {
    console.log('loaded');
})
```

---

</details>     


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**