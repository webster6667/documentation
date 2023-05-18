# undefined
> Значение всех переменных, до тех пор как им не присвоят значение

&emsp;&emsp; 🛑 `undefined == null 👉🏼 true` <ins>[💬](## "баг языка")</ins>

&emsp;&emsp; 🔹 Сравнение с `undefined` может вернуть `true` только в трех случаях

&emsp;&emsp;&emsp;&emsp; 🎯 `undefined === undefined`   
&emsp;&emsp;&emsp;&emsp; 🎯 `undefined == undefined`   
&emsp;&emsp;&emsp;&emsp; 🎯 `undefined == null`

<br>

&emsp;&emsp; 🔹 Преобразовании `undefined` к числу, вернет `NaN`

&emsp;&emsp; 🔹 `undefined` преобразуется к числу только при математическом сравнении  
&emsp;&emsp;&emsp;&emsp; 👆 При нестрогом сравнении, преобразование не происходит

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `undefined >= 2` 👉🏼 `NaN >= 2`    
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `undefined == 2` 👉🏼 `undefined == 2`

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**