# Операторы сравнение
> Как работают операторы сравнение между разными типами

## 🚩 Сравнение строк 

&emsp;&emsp; 🔹 Происходит по символьно        

&emsp;&emsp; 🔹 Останавливается при первом неравенстве символом(`b != a`)        

&emsp;&emsp; 🔹 Равенство символов проверяется по весу символа      
```javascript
'Коты' > 'Коды'
```
* `'К' == 'К'` = `true`
* `'о' == 'о'` = `true`
* `'т' > 'д'` - Дальнейшее сравнение останавливается


<br>

## 🚩 **Сравнение чисел** 

Происходит обычным математическим образом

💠 **Не строгое сравнение разных типов**  
👆🏽 При не строгом сравнении разных типов, происходит преобразование все данные к числам

<br>

&emsp;&emsp; 🔹 `'1' > 0` --> `1 > 0`
  
&emsp;&emsp; 🔹 `’01’ > 0` --> `1 > 0`
   
&emsp;&emsp; 🔹 `’0’ == 0` --> `0 == 0`
  
&emsp;&emsp; 🔹 `true == 1` --> `1 == 1`
     
&emsp;&emsp; 🔹 `false == 0 ` --> `0 == 0`
      
&emsp;&emsp; 🛑 Сравнение с `NaN` всегда вернет `false` 
        
&emsp;&emsp;&emsp;&emsp; 👆 `’my-string’ > 1` --> `NaN > 1`

&emsp;&emsp; 🔹 `null >= 0` --> `0 >= 0` = `true`

&emsp;&emsp; 🔹 `null > 0` --> `0 > 0` = `false`


&emsp;&emsp; 🛑 При не строгом сравнении `==` **null** ничему не равно кроме `undefined` и `null`      
&emsp;&emsp;&emsp;&emsp; 👆 `null == 0` --> `null == 0` = `false`    
&emsp;&emsp;&emsp;&emsp; 👆 `null == null` --> `null == null` = `true`        
&emsp;&emsp;&emsp;&emsp; 👆 `null == undefined` --> `null == undefined` = `true`        


<br>
<br>
    
🛑 Не строгое равенство и математическое сравнение, трансформируют данные по разному
    
💠 `<, >, <=, >=`

&emsp;&emsp; 🔹 Преобразуют `null` к `0`  
&emsp;&emsp; 🔹 Преобразуют `undefined` к `NaN`
    
💠 `==`
      
&emsp;&emsp; 🔹 Преобразуют `undefined` к `undefined`  
&emsp;&emsp; 🔹 Преобразуют `null` к `null`  

> В связи с этими правилами, имеем следующее преобразование

&emsp;&emsp; 🔹 `undefined == 1` --> `undefined == 1`  
&emsp;&emsp; 🔹 `undefined >= 1` --> `NaN == 1`  
&emsp;&emsp; 🔹 `null == 0` --> `null == 0` = `false`      
&emsp;&emsp; 🔹 `null >= 0` --> `0 == 0` = `true`  
    

💠 Сравнение с `null`, `undefined` и `NaN`  

&emsp;&emsp; 🔹 При строгом равенстве `null === undefined` = `false`

&emsp;&emsp; 🔹 При не строгом `null == undefined` = `true`(баг языка)

&emsp;&emsp; 🔹 При не строгом равенстве **null остается null**    
&emsp;&emsp;&emsp;&emsp; 👆 `(null == '0')` --> `(null == 0)` = `false`

&emsp;&emsp; 🔹 При сравнении с математическими операторами **null преобразуется к 0**   
&emsp;&emsp;&emsp;&emsp; 👆 `(null >= '0')` --> `(0 >= 0)` = `true`

&emsp;&emsp; 🔹 При не строгом равенстве  **undefined остается undefined**    
&emsp;&emsp;&emsp;&emsp; 👆 `(undefined == '0')` --> `(undefined == 0)` = `false`

&emsp;&emsp; 🔹 При сравнении с математическими операторами **undefined преобразуется к NaN**   
&emsp;&emsp;&emsp;&emsp; 👆 `(undefined >= '0')` --> `(NaN >= 0)` = `false`

&emsp;&emsp; 🔹 Сравнение с `NaN` всегда вернет `false`, даже при `NaN === NaN`

&emsp;&emsp; 🔹 НЕСРАВНЕННЫЙ `undefined`    
&emsp;&emsp;&emsp;&emsp; 👆 Сравнение с `undefined` всегда вернет `false`   
&emsp;&emsp;&emsp;&emsp; кроме `undefined == null`, `undefined == undefined`, `undefined === undefined`

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**

