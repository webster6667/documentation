# Mutation Observer

<details>
<summary> Как отследить не желательные внедрение <code>html</code>?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Для этого есть `mutationObserver`

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как работает обсервер?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Создаем элемент наблюдателя с колбеками       
```javascript
let observer = new MutationObserver(function(mutations) {
    
  mutations.forEach(function(mutation) {
    // Перебираем все мутации
    mutation.addedNodes.forEach(function(node) {
      // Проверяем, является ли добавленный узел элементом
      if (node.nodeType === Node.ELEMENT_NODE) {
        console.log('Добавлен новый элемент:', node);
      }
    });
  });
  
});
```

🎯 Настраиваем конфиги наблюдения      
```javascript
let config = { 
    childList: true,
    subtree: true
};
```

🎯 Устанавливаем наблюдение за элементом и удаляем по необходимости    
```javascript
const element = document.getElementById('obs');

observer.observe(element, config);

setTimeout(() => {
    observer.disconect(); 
}, 5000)
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**