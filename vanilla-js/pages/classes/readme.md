# Классы
> Новый синтаксис языка, реализованный на прототипах

## Объявление класса
* Объявляется при помощи конструкции class
* Пишется с большой буквы
```javascript
class User {}
```


## Конструктор класса
Метод для инициализации переданных свойств в объект 

```javascript
class DomElement {
    
	constructor(selector = '#root') {
		this.selector = document.querySelector(selector)
	}
	
}
```



## Методы класса
Методы класса пишутся без разделения запятой

```javascript
class DomElement {
    
	constructor(selector = '#root') {
		this.selector = document.querySelector(selector)
	}

	getWidth() {
		return this.selector.offsetWidth
	}
	
}
```

## Аксцессоры класса
* Имя аксцессора, не должно совпадать с названием свойства с которым он работает
* Свойство с которым работает аксцессор называем через ниженее подчеркивание


```javascript
class DomElement {
	constructor(selector = '#root') {
		this.selector = document.querySelector(selector)
		this._width = this.selector.offsetWidth;
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

## Статические свойства и методы
* Используют для объявлении на уровне всего класса, а не его экземпляра
* Статика наследуется
* Для работы с статическими методами необходимо обращаться к самому классу, а не к его экземпляру

```javascript
class DomElement {
  static radius = 10;
  static getRadius() {
    return DomElement.radius;
  }

  constructor(selector = "#root") {
    this.selector = document.querySelector(selector);
  }
}

console.log(DomElement.getRadius()); // обращение к статическому методу
console.log(DomElement.radius); //обращение к статическому свойству
```



## Приватные и защищенные методы и свойства
Нужны для того что бы ограничить доступ инстанса к более сложной логике класса   
Изменения которой может повлечь за собой глобальные ошибки

Так же позволяет делать своего рода валидаторы для тех или иных свойств при помощи аксцессоров или функций 

```javascript
class NameOfClass {

	constructor(selector = '#root') {
		this.selector = document.querySelector(selector)
		this._width = this.selector.offsetWidth;
	}

	get width() {
		return `${this._width}px`; 
	}
} 
```
Ширину можно только получить, но нельзя изменить. 
Так может потребовать безопасность любой программы 

## Наследование классов
* Позволяет расширять возможности уже существующего класса наследуя его свойства и методы 
* Позволяет расширять или переписывать родитеслькие методы
* При наследовании вызывается унаследованный конструктор

```javascript
class DomElement {

	constructor(selector = '#root') {
		this.selector = document.querySelector(selector)
		this._width = this.selector.offsetWidth;
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


# Переопределение методов
> Используется для того что бы как-то расширить   
  Или в корне переписать родительские метод

> Если написать в классе метод с таким же именем как в родительском  
  То родительский будет полностью переписан

> Но если нужно доработать родительский метод  
  Необходимо использовать ключевое слово super.parentMethod()

```javascript

class DomElement {

	constructor(selector = '#root') {
		this.selector = document.querySelector(selector)
		this._width = this.selector.offsetWidth;
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


# Переопределение и расширение свойств
> Немного сложнее чем переопределение методов  
  Так как свойства определяются через конструктор

При необходимости добавить свойства, или переопределись конструктор  
Нужно сперва вызвать родительский конструктор, и передать ему нужные параметры    
А только после определять новые

```javascript
class DomElement {

	constructor(selector = '#root') {
		this.selector = document.querySelector(selector)
		this._width = this.selector.innerWidth;
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
и будет дополнен свойствами у наследуемого класса

## Контекст при наследования
Если вызвать унаследованный метод   
`new ChildClass().getWidth()` - `this` унаследованного метода, попадет ChildClass   
Вместе своими допиленными свойствами и методами

Это бывает удобно при использовании абстрактных классов,
Для того что-бы получить доступ к дочерним методам в родительских  
