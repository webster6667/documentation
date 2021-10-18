# Классы
> Новый синтаксис языка, реализованный на прототипах

## 🚩 Объявление класса
🔹 Объявляется при помощи конструкции `class`  

🔹 Пишется с большой буквы

```javascript
class User {}
```

<br>
<br>

## 🚩 Конструктор класса
Метод для инициализации переданных свойств в объект 
```javascript
class DomElement {
    
	constructor(selector = '#root') {
		this.selector = document.querySelector(selector)
	}
	
}
```

<br>
<br>

## 🚩 Методы класса
Методы класса пишутся без разделения запятой
```javascript
class DomElement {
    
	constructor(selector = '#root') {
		this.domElement = document.querySelector(selector)
	}

	getWidth() {
		return this.domElement.offsetWidth
	}
	
}
```

<br>
<br>

## 🚩 Аксцессоры класса
🔹 Имя аксцессора, не должно совпадать с названием свойства с которым он работает  
🔹 Свойство с которым работает аксцессор называем через ниженее подчеркивание
```javascript
class DomElement {
	constructor(selector = '#root') {
		this.domElement = document.querySelector(selector)
		this._width = this.domElement.offsetWidth;
	}

	get width() {
		return `${this._width}px`; 
	}
	
	set width(size) {
		this._width = size;
		return `${this._width}px`; 
	}

}
```

<br>
<br>

## 🚩 Статические свойства и методы
🔹 Используют для объявлении на уровне всего класса, а не его экземпляра  

🔹 Статика наследуется  

🔹 Для работы с статическими методами необходимо обращаться к самому классу, а не к его экземпляру  

```javascript
class DomElement {
  static radius = 10;
  static getRadius() {
    return DomElement.radius;
  }

  constructor(selector = "#root") {
    this.domElement = document.querySelector(selector);
  }
}

console.log(DomElement.getRadius()); // обращение к статическому методу
console.log(DomElement.radius); //обращение к статическому свойству
```

<br>
<br>

## 🚩 Приватные и защищенные методы и свойства
🔹 Нужны для того что бы ограничить доступ инстанса к более сложной логике класса     
&emsp;&emsp; 👆 Изменения которой может повлечь за собой глобальные ошибки

🔹 Так же позволяет делать своего рода валидаторы   
&emsp;&emsp; 👆 При помощи аксцессоров или функций 

```javascript
class NameOfClass {

	constructor(selector = '#root') {
		this.domElement = document.querySelector(selector)
		this._width = this.domElement.offsetWidth;
	}

	get width() {
		return `${this._width}px`; 
	}
} 
```
Ширину можно только получить, но нельзя изменить     
Этого может потребовать безопасность любой программы 

<br>
<br>

## 🚩 Наследование классов
🔹 Позволяет расширять возможности уже существующего класса   
&emsp;&emsp;&emsp;&emsp; 👆 Наследуя его свойства и методы     

🔹 Позволяет расширять или переписывать родитеслькие методы

🔹 Если в дочернем классе не указан `constructor`, вызывается родительский

```javascript
class DomElement {

	constructor(selector = '#root') {
		this.domElement = document.querySelector(selector)
		this._width = this.domElement.offsetWidth;
	}

	getWidth() {
		return `${this._width}px`; 
	}
} 



class Div extends DomElement {
    
	getHeight() {
		return 'Высота не известна'
	}

}

let DivInstance = new Div('#body')

console.log(DivInstance.getHeight()) // Свой метод
console.log(DivInstance.getWidth()) //Унаследованный метод
```

<br>
<br>

## 🚩 Переопределение методов

🔹 Необходимо для расширения или переопределения родительского метода

🔹 Если написать в классе метод с таким же именем как в родительском, родительский будет переопределен

🔹 Для расширения родительского метода, нужно его вызвать при помощи `super.parentMethod()`  
```javascript
class DomElement {

	constructor(selector = '#root') {
		this.domElement = document.querySelector(selector)
		this._width = this.domElement.offsetWidth;
	}

	getWidth() {
		return `${this._width}px`; 
	}
} 



class Div extends DomElement {

	getWidth() {
		let elementWidth = super.getWidth();

		return parseInt(elementWidth) 
	}

}
```
Сейчас был вызван родительский метод, и доработан дочерним

<br>
<br>

## 🚩 Переопределение и расширение свойств
> Немного сложнее чем переопределение методов  
  Так как свойства определяются через конструктор

🎯 Для добавления новыъ свойств в объект, или переопределись существующих  

🎯 Определить конструкто

🎯 В нем вызвать родительский, передав параметры

🎯 После вызова родительксого конструктора, определить нужные свойства


```javascript
class DomElement {

	constructor(selector = '#root') {
		this.domElement = document.querySelector(selector)
		this._width = this.domElement.innerWidth;
	}

	getWidth() {
		return `${this._width}px`; 
	}
} 



class Nav extends DomElement {

	constructor(selector = '#root', isNavOpen = true) {
		super(selector)
		this.navState = isNavOpen
	}

}
```
Так сработает родительский конструктор     
И будет дополнен свойствами наследуемого класса

<br>
<br>

## 🚩 Контекст при наследования
🎯 Если вызвать унаследованный метод из инстанса дочернего класса  
🎯 В унаследованный метод, попадет сам инстанс(правило точки) 
```javascript
class DomElement {
  constructor(selector = "#root") {
    this.domElement = document.querySelector(selector);

    this._width = this.domElement.offsetWidth || this.domElement.innerWidth;
  }

  getWidth() {

    console.log(this) // => {domElement: HTMLInputElement, _width: 153, navState: true}
    // 🎯 В this, родителя попадает дочерний(правло точки)

    return `${this._width}px`;
  }
}



class Nav extends DomElement {
  constructor(selector = "#root", isNavOpen = true) {
    super(selector);
    this.navState = isNavOpen;
  }
}

let divInstance = new Nav("nav");

console.log(divInstance.getWidth());
```  
Это бывает удобно при использовании абстрактных классов  
Для того что-бы получить доступ к дочерним методам в родительских  

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**