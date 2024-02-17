# Сравнение данных

<details>
<summary> Как происходит сравнение строк?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Посимвольно  
🎯 Величина каждого символа это порядковый номер в алфавите      
🎯 Сравнение происходит с учетом регистра  
&emsp;&emsp; 👆 Верхний регистр больше такой же буквы в нижнем

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>'А' > 'а'</code></summary>

---

`true` верхний регистр больше нижнего

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Как отработает сравнение <code>'Коты' > 'Коды'</code></summary>

---

Как только посимвольное сравнение доходит до не одинаковых символов, происходит их сравнение, и возвращается результат

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Когда может пригодится сравнение строк?</summary>

---

При сортировке в алфавитном порядке

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какие типы операторы сравнения знаешь?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Строгое      
🎯 Не строгое      
🎯 Математическое      


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как работает строгое сравнение?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Сначала сравнивает типы 
&emsp;&emsp; 👆 Если разные - возвращает `false`   
🎯 Если одинаковые, убеждается что данные одинаковые    
  
<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>5 === '5'</code></summary>

---

`false` - разный тип

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как работает не строгое сравнение?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Не сравнивает типы данных  
🎯 Пытается преобразовать строку в число если это возможно

<details>
<summary> <sup>⭐</sup>❓ К чему приобразуется <code>undefined</code> при не строгом сравнении?</summary>

---

Остаеться `undefined`

---

</details>    

<details>
<summary> <sup>⭐</sup>❓  К чему приобразуется <code>null</code> при не строгом сравнении?</summary>

---

Остается `null`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет сравнение <code>null == 0</code>?</summary>

---

`false`, так как при не строгом преобразовании `null` не преобразуется к `0`      

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет сравнение <code>undefined == undefined</code>?</summary>

---

`true`  

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как работает математическое сравнение?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Пытается преобразовать данные к числу  
&emsp;&emsp; 👆 Даже `null` и `undefined`   
  
<details>
<summary> <sup>⭐</sup>❓ К чему будет преобразован <code>undefined</code> при математическом сравнении?</summary>

---

к `NaN`

---

</details>  

<details>
<summary> <sup>⭐</sup>❓ К чему будет преобразован <code>null</code> при математическом сравнении?</summary>

---

к `0`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>0 >= null</code></summary>

---

`true`, так как `null` преобразуется к `0`, а `0` == `0`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>undefined >= 1</code></summary>

---

`false`, `undefined` преобразуеться к `NaN`, а любое сравнение с `NaN` равно `false`

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Особенности сранения с <code>null, undefined, NaN</code></summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

<details>
<summary> <sup>⭐</sup>❓ В чем особенность сравнения с <code>NaN</code></summary>

---

всегда вернет `NaN`, даже при сравнении с самим собой

---

</details>

<details>
<summary> <sup>⭐</sup>❓ Что вернет <code>undefined >= undefined</code>?</summary>

---

`false`, так как математическое сравнение преобразует все к числу, получаем `NaN`, а `NaN` не равно даже самому себе

---

</details>

<details>
<summary> <sup>⭐</sup>❓ В каких случаях сравнение с <code>undefined</code> вернет <code>true</code>?</summary>

---

🎯 `undefined == undefined`         
🎯 `undefined === undefined`

---

</details>

<details>
<summary> <sup>⭐</sup>❓ В каких случаях <code>null</code> преобразуется к <code>0</code>?</summary>

---

Только при математических сравнениях

---

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**