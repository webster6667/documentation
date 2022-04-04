# Дата и время

🔹 `timestamp` - целое число, представляющее собой количество `миллисекунд`, прошедших с начала 1970 года

<br>

💠 **new Date()**     
👆🏽 Конструктор создающий объект методов для работы с текущей датой

```javascript
const dateNow = new Date();

console.log( dateNow ); // 👉🏼 Object: Fri Mar 18 2022 17:46:48 GMT+0300 (Москва, стандартное время)

console.log( dateNow.getFullYear() ); // 👉🏼 2022
```

<br>

&emsp;&emsp; 🔹 В конструкторе даты, можно указать любую дату с которой нужно поработать
```javascript
const dateNow = new Date('2017-01-26');

console.log( dateNow.getFullYear() ); // 👉🏼 2017
```

<br><br>

## 🚩 Правила объявления даты

<br>

💠 **new Date(`YYYY-MM-DDTHH:mm:ss.sss`)**

```javascript
let selectedDate = new Date('2012-01-26T13:51:50.417-07:00');

console.log( selectedDate.getFullYear() ); // 👉🏼 2012
```

&emsp;&emsp; 🎯 `YYYY-MM-DD` – год-месяц-день   
&emsp;&emsp; 🎯 `HH:mm:ss.sss` – часы:минуты:секунды.миллисекунды  
&emsp;&emsp; 🎯 `T` – используется в качестве разделителя

&emsp;&emsp; 🔹 `YYYY` - обязательные параметры  
&emsp;&emsp;&emsp;&emsp; 👆 Остальные параметры по умолчанию формируються с минимальным значением

<br>
<br>

💠 **new Date(`year, month, date, hours, minutes, seconds, ms`)**

```javascript
let selectedDate = new Date(2012, 0);

console.log( selectedDate.getFullYear() ); // 👉🏼 2012
```

&emsp;&emsp; 🎯 `year` – должен состоять минимум из четырёх цифр   
&emsp;&emsp; 🎯 `month` – начинается с 0 (`январь`) по 11 (`декабрь`)    
&emsp;&emsp; 🎯 `date` – день месяца


&emsp;&emsp; 🔹 `year`, `month` - обязательные параметры  
&emsp;&emsp;&emsp;&emsp; 👆 Остальные параметры по умолчанию формируються с минимальным значением

<br>
<br>

## 🚩 Методы получение деталей из даты

🔹 `getFullYear()` 👉🏼 год (4 цифры)  
&emsp;&emsp; 🛑 `getYear()` устаревший метод, не желателен к использованию

🔹 `getMonth()` 👉🏼 месяц   
&emsp;&emsp; 👆 от 0 до 11

🔹 `getDate()` 👉🏼 день месяца  
&emsp;&emsp; 👆 от 1 до 31

🔹 `getDay()` 👉🏼 день недели    
&emsp;&emsp; 🎯 от 0 до 6  
&emsp;&emsp; 🎯 0 - воскресение

🔹 `getHours()` 👉🏼 часы

🔹 `getMinutes()` 👉🏼 минуты

🔹 `getSeconds()` 👉🏼 секунды

🔹 `getMilliseconds()` 👉🏼 милисекунды

```javascript
new Date('2017-01-26').getMonth() // 👉🏼 0
```

<br>

⚡️ Преобразования объекта `Date`, к числу, вернет `timestamp` даты
```javascript
const myDate = new Date('2017-01-26') 

console.log(Number(myDate)) // 👉🏼 1485388800000
```


## 🚩 Методы указания компонентов даты
👆🏽 Результатом вызова метода устанавливающего дату, будет `timestamp`

🔹 `setFullYear(year, ?month, ?date)`

🔹 `setMonth(month, ?date)`

🔹 `setDate(date)`

🔹 `setHours(hour, ?min, ?sec, ?ms)`

🔹 `setMinutes(min, ?sec, ?ms)`

🔹 `setSeconds(sec, ?ms)`

🔹 `setMilliseconds(ms)`

🔹 `setTime(milliseconds)`

```javascript
const myDate = new Date();

myDate.setFullYear(2022, 1, 2); // 👉🏼 1643813738129
```

## 🚩 Остальные нюансы даты

💠 **Автоисправление даты**   
👆🏽 Данные привышающие их диапазон, автоматически распределяться по указанной дате

```javascript
new Date(2022, 0, 35) // 👉🏼 Feb 04 2022
```
&emsp;&emsp; 👆 `35 января`, автоматически было исправленно в `04 февраля`

<br>

💠 **Date.now()**  
👆🏽 Метод получения `timestamp`, на момент вызова

&emsp;&emsp; 🔹 Работает быстрее, не нагружая сборщик мусора

&emsp;&emsp; 🔹 Выполняет действия `new Date().getTime()`, с более коротким синтаксисом

&emsp;&emsp; 🔹 Обычно используеться когда нужно узнать сколько времени прошло между операциями

```javascript
const start = Date.now(); // 👉🏼 timestamp на момент старта операции

// Операция
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

const end = Date.now(); // 👉🏼 timestamp на момент финиша операции

const operationDurationMs = end - start // 👉🏼 Сколько ms ушло на операцию
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**