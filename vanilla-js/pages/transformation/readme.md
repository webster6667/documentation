# Преобразование типов
> Правила и методы преобразования одного типа в другой

## 🚩 Строковое

💠 **Методы**

&emsp;&emsp; 🔹 `1 + ''` = `'1'`   
&emsp;&emsp; 🔹 `String(1)` = `'1'`        

<br> 

💠 **Правила**
	
&emsp;&emsp; 🔹 `String(true)` = `'true'`  
&emsp;&emsp; 🔹 `String(null)` = `'null'`  
&emsp;&emsp; 🔹 `String(undefined)` = `'undefined'`    
&emsp;&emsp; 🔹 `String(NaN)` = `'NaN'`      
&emsp;&emsp; 🔹 `String(1)` = `'1'`               	
&emsp;&emsp; 🔹 `String({a: 1})` = `'[object Object]'`   
&emsp;&emsp; 🔹 `String([1, 2])` = `'1, 2'`  

	

## 🚩 Численное

💠 **Методы**

&emsp;&emsp; 🔹 `+’1’` = `1`  
&emsp;&emsp; 🔹 `Number(‘1’)` = `1`  
&emsp;&emsp; 🔹 `parseInt('12px')` = `12`  

<br>

💠 **Правила**

&emsp;&emsp; 🔹 `'6' / '2'` = `3`   
&emsp;&emsp;&emsp;&emsp; 👆 Интерпретатор попробует преобразовать строки к числам   
&emsp;&emsp;&emsp;&emsp; если не выйдет вернет `NaN`

&emsp;&emsp; 🔹 `'6' / '2px'` = `NaN` 

&emsp;&emsp; 🔹 `'6' + '2'` = `'62'`   
&emsp;&emsp;&emsp;&emsp; 👆 Оператор сложения объединяет строки

&emsp;&emsp; 🔹 `'6' + Number(2)` --> `'6' + '2'` = `'62'`      
&emsp;&emsp; 🔹 `'6' + true` --> `'6' + 'true'` = `'6true'`    
&emsp;&emsp;&emsp;&emsp; 👆 Если при сложении среди операндов есть строка   
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 Все операнды будут преобразованны к строке  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 После чего строки склеются

&emsp;&emsp; 🔹 `Number('01')` = `1`

&emsp;&emsp; 🔹 `Number('012')` = `12`

&emsp;&emsp; 🔹 `Number(01)` = `1`    
&emsp;&emsp;&emsp;&emsp; 👆 Префикс 0 в js означает восмеричную систему



&emsp;&emsp; 🔹 `Number(012)` = `10`  
&emsp;&emsp;&emsp;&emsp; 👆 `12` в восмеричной системе это `10`

&emsp;&emsp; 🔹 `Number(true)` = `1`

&emsp;&emsp; 🔹 `Number(false)` = `0`

&emsp;&emsp; 🔹 `Number('str')` = `NaN`

&emsp;&emsp; 🔹 `Number(undefined)` = `NaN`

&emsp;&emsp; 🔹 `Number(null)` = `0`

<br>

## 🚩 Логическое

💠 **Методы**

&emsp;&emsp; 🔹 `Boolean(1)` = `true`  
&emsp;&emsp; 🔹 `!!1` = `true`

<br>

💠 **Правила**

&emsp;&emsp; 🔹 `Boolean(1)` = `true`

&emsp;&emsp; 🔹 `Boolean(-1)` = `true`
  
&emsp;&emsp; 🔹 `Boolean('0')` = `true`
  
&emsp;&emsp; 🔹 `Boolean('string')` = `true`
  
&emsp;&emsp; 🔹 `Boolean(0)` = `false`

&emsp;&emsp; 🔹 `Boolean('')` = `false`  
  
&emsp;&emsp; 🔹 `Boolean(null)` = `false`
  
&emsp;&emsp; 🔹 `Boolean(undefined)` = `false`

&emsp;&emsp; 🔹 `Boolean(NaN)` = `false`
  
    
<br>

### ⟵ **<a href="../../readme.md">Назад</a>**