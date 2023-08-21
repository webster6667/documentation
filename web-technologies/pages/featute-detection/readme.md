# Определение браузерных возможностей пользователя

* **Feature detection**  
Определяет, поддерживает ли браузер, кусок кода  
Если да, то запускается, если нет, использует аналог или поллифил

```javascript
var supports = 'querySelector' in document,
    element

if (supports) {
    document.querySelector('.element')
} else {
    document.getElementsByClassName('element')[0]
}

element.style.color = 'red'
```

* **Feature inference** - Предполагает что браузер уже поддерживает тот или иной функционал(не устанавливая проверку)

* **useAgent** - определяет тип браузера и операционной системы, по заголовкам

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**