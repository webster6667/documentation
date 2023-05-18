# Математические операции с Infinity

💠 Сложение

&emsp;&emsp; 🔹 Любое сложение числа с `Infinity`, вернет `Infinity`  

&emsp;&emsp; 🔹 Любое сложение числа с -`Infinity`, вернет -`Infinity`


```
 0 + Infinity    👉🏼 Infinity
 n + Infinity    👉🏼 Infinity
-n + Infinity    👉🏼 Infinity

Infinity + 0     👉🏼 Infinity
Infinity + n     👉🏼 Infinity
Infinity + -n    👉🏼 Infinity

 0 + -Infinity   👉🏼 -Infinity
 n + -Infinity   👉🏼 -Infinity
-n + -Infinity   👉🏼 -Infinity

-Infinity + 0    👉🏼 -Infinity
-Infinity + n    👉🏼 -Infinity
-Infinity + -n   👉🏼 -Infinity
```

💠 Вычитание

&emsp;&emsp; 🔹 Любое число минус `Infinity`, вернет `-Infinity`

&emsp;&emsp; 🔹 `Infinity`, минус любое число вернет `Infinity`

&emsp;&emsp; 🔹 Любое число минус `-Infinity`, вернет `Infinity`

&emsp;&emsp; 🔹 `-Infinity`, минус любое число вернет `-Infinity`

```
 0 - Infinity    👉🏼 -Infinity
 n - Infinity    👉🏼 -Infinity
-n - Infinity    👉🏼 -Infinity

Infinity - 0     👉🏼 Infinity
Infinity - n     👉🏼 Infinity
Infinity - -n    👉🏼 Infinity

 
 0 - -Infinity   👉🏼 Infinity
 n - -Infinity   👉🏼 Infinity
-n - -Infinity   👉🏼 Infinity

-Infinity - 0    👉🏼 -Infinity
-Infinity - n    👉🏼 -Infinity
-Infinity - -n   👉🏼 -Infinity
```

💠 Умножение

&emsp;&emsp; 🔹 Любое умножение нуля с `Infinity`, вернет `NaN`

```
 0 * Infinity    👉🏼 NaN
 n * Infinity    👉🏼 Infinity
-n * Infinity    👉🏼 -Infinity

Infinity * 0     👉🏼 NaN
Infinity * n     👉🏼 Infinity
Infinity * -n    👉🏼 -Infinity

 0 * - Infinity  👉🏼 NaN
 n * -Infinity   👉🏼 -Infinity
-n * -Infinity   👉🏼 Infinity

-Infinity * 0    👉🏼 NaN
-Infinity * n    👉🏼 -Infinity
-Infinity * -n   👉🏼 Infinity
```

💠 Деление

```
 0 / Infinity    👉🏼 0
 n * Infinity    👉🏼 0
-n * Infinity    👉🏼 -0

Infinity / 0     👉🏼 Infinity
Infinity / n     👉🏼 Infinity
Infinity / -n    👉🏼 -Infinity

 0 / -Infinity   👉🏼 -0
 n / -Infinity   👉🏼 -0
-n / -Infinity   👉🏼 0

-Infinity / 0    👉🏼 -Infinity
-Infinity / n    👉🏼 -Infinity
-Infinity / -n   👉🏼 Infinity
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**