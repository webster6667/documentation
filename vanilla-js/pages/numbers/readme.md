# Числа

## 🚩 Преобразование к числу

<br>

🔹 `Number(‘1’)`      

🔹 `+’5’`

🔹 `parseInt('1')`

<br>

## 🚩 Преобразование отрицательного в положительное и на оборот 

<br>

💠 **Math.abs`(number)`**   
👆🏽 Преобразование в положительное
```javascript
Math.abs(-1) // 1
```


<br>
<br>

💠 **-Math.abs`(number)`**   
👆🏽 Преобразование в отрицательное
```javascript
-Math.abs(1) // -1
```

<br>

## 🚩 NaN - Not a Number

<br>

🛑 NaN не равно NaN, по этому проверка `if(number === NaN)` не сработает    
&emsp;&emsp;&emsp;&emsp; 👆 В js для этого есть специальный метод `isNaN`    

<br>

💠 **isNaN`(variable)`**   
👆🏽 преобразует переменную к числу, и смотрит является ли она NaN

<br>

## 🚩 Умное преобразование к числу

<br>

💠 **parseInt`(variable: string | number)`**   
👆🏽 Срежет все символы после целого числа и преобразует к числу
```javascript
parseInt('10.55px') // => 10
parseInt('10px') // => 10
``` 

<br>
<br>

💠 **parseFloat`(variable: string | number)`**   
👆🏽 Срежет все символы после числа с точкой
```javascript
parseFloat('10.55px') // => 10.55
parseFloat('10px') // => 10
``` 

<br>

## 🚩 Округление

<br>

💠 **Math.floor`()`**   
👆🏽 Округление в меньшую сторону
```javascript
Math.floor(10.8) // => 10
```  

<br>
<br>

💠 **Math.ceil`()`**   
👆🏽 Округление в большую сторону
```javascript
Math.ceil(10.2) // => 11 
```  

<br>
<br>

💠 **Math.round`()`**   
👆🏽 Округление к ближайшему целому
```javascript
Math.round(10.5) // => 11
Math.round(10.4) // => 10 
```  

<br>
<br>

💠 **myNumber.toFixed`(n)`**   
👆🏽 Округлит к ближайшему целому, оставив `n` символов после запятой
```javascript
10.5.toFixed() // => 11
10.4.toFixed() // => 10

10.5.toFixed(1) // => 10.5
10.55.toFixed(1) // => 10.6
10.54.toFixed(1) // => 10.5 
```  

<br>

> **floor** - пол   
  **ceil** - потолок

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**