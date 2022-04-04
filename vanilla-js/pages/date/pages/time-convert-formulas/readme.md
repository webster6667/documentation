## 🚩 Таблица едениц времени

🔹 `1y` 👉🏼 `365d`

🔹 `1m` 👉🏼 `31d`

🔹 `1d` 👉🏼 `24h`

🔹 `1h` 👉🏼 `60m`

🔹 `1m` 👉🏼 `60s`

🔹 `1s` 👉🏼 `1000ms`        

🔹 `1ms`


## 🚩 Формулы форматирования в другие еденицы

🔹 Форматирования к верхней единице времени: `z = x / y`

```javascript
const minutes = 120,
      minutesInHour = 60,
      hours = Math.floor(minutes / minutesInHour)

console.log(hours) // 👉🏼 2
```

<br>

🔹 Форматирования на две единицы времени выше: `z = (x / y) / c`

```javascript
const seconds = 3600,
      secondsInMinute = 60,
      minutesInHour = 60,
      hours = Math.floor((seconds / secondsInMinute) / minutesInHour)

console.log(hours) // 👉🏼 1
```

<br>

🔹 Форматирования к нижней единице времени: `z = x * y`

```javascript
const minutes = 2,
      secondInMinute = 60,
      seconds = minutes * secondInMinute

console.log(seconds) // 👉🏼 120
```

<br>

🔹 Форматирования на две единицы времени ниже: `z = (x * y) * c`

```javascript
const hour = 1,
      minutesInHour = 60,
      secondsInMinute = 60,
      seconds = (hour * minutesInHour) * secondsInMinute

console.log(seconds) // 👉🏼 3600
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**