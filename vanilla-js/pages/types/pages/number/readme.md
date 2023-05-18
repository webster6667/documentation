# Number
> Число, целое или с плавающей точкой, ограниченненное длинной

💠 `NaN`  
👆🏽 Результат ошибки преобразования данных к числу

```js
Number('str') // 👉🏼 NaN
```

&emsp;&emsp; 🔹 `typeof NaN === 'number'`  
&emsp;&emsp; 🛑 `NaN` не равна сама себе <ins>[💬](## "Баг языка")</ins>  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 Для определения `NaN` есть специальная функция `isNan(prop)`

<br>

💠 `Infinity`  
👆🏽 Бесконечность

&emsp;&emsp; 🔹 `Infinity / Infinity 👉🏼 NaN`

&emsp;&emsp; 🔹 Больше любого числа, включая себя самого    
&emsp;&emsp;&emsp;&emsp; 🎯 `Infinity > Infinity 👉🏼 false`  
&emsp;&emsp;&emsp;&emsp; 🎯 `Infinity == Infinity 👉🏼 true`  
&emsp;&emsp;&emsp;&emsp; 🎯 `Infinity === Infinity 👉🏼 true`  

<br>

&emsp;&emsp; 🔹 Может быть получено при:  

&emsp;&emsp;&emsp;&emsp; 🎯 Делении числа больше нуля на ноль  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🥏 `1 / 0 👉🏼 Infinity`     
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🥏 `0 / 0 👉🏼 NaN`

&emsp;&emsp;&emsp;&emsp; 🎯 Просто объявленно  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 👆 `const a = Infinity`  
  

&emsp;&emsp;&emsp;&emsp; 🎯 При <a href="./pages/infinity">определенных математических операциях</a> с `Infinity`
  
<br>

### ⟵ **<a href="../../readme.md">Назад</a>**