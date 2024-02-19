# Тесты

<details>
<summary> Какие бывают тесты?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

<details>
<summary> 💠 Unit Тесты</summary>

----

👆🏽 Тесты проверяющие работоспособность <ins>[отдельного модуля 💬](## "Хелперов, хуков, HOF, UI")</ins> в изолируемом пространстве от других модулей

&emsp;&emsp; 🔹 Проверяет что при получении ожидаемых валидных данных приходит ожидаемый валидный результат    
&emsp;&emsp; 🔹 Проверяет результат работы при невалидных данных  
&emsp;&emsp; 🔹 Должны покрывать большую часть кода

----

</details>

<br>

<details>
<summary> 💠 Integration Тесты   </summary>

----

👆🏽 Тесты проверяющие <ins>[взаимодействие между отдельными модулями 💬](## "App с redux, pages с Router, Api с reactQuery")</ins>

&emsp;&emsp; 🔹 Пытаеться максимально воспроизвести среду пользователя    
&emsp;&emsp; 🔹 Объединяет несколько протестированных по отдельности модуля  
&emsp;&emsp; 🔹 Проверяет валидность их работы

----

</details>


<br>

<details>
<summary> 💠 E2E Тесты</summary>

----

👆🏽 Тесты в реальном браузере, выполняющие реальные действия пользователя

&emsp;&emsp; 🔹 Самые сложные, и времязатратные    
&emsp;&emsp; 🔹 Должны покрывать только тот функционал, без которого сайт бесполезен

----

</details>

<br>

<details>
<summary>💠 Визуальные тесты</summary>

----

👆🏽 Тесты проверяющие визуальное изменение верстки

&emsp;&emsp; 🔹 Делает скриншоты верстки на разных устройствах    
&emsp;&emsp; 🔹 При любых изменениях путем наложения сравнивает новые скрины с предыдущими    
&emsp;&emsp; 🔹 Подсвечивает все места где поплыла верстка  

----

</details>


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> На чем пишеш?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `jest`      
🎯 `react-testing-library`         
🎯 `puppeter|playwright`     

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое <code>TDD</code></summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Сначала пишутся тесты ожидаемого поведения   
🎯 После начинается разработка под них       


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

* **<a href="./pages/jest/readme.md">Jest</a>**  
* **<a href="./pages/react-testing-library/readme.md">React testing library</a>**   
* **<a href="./pages/playwright/readme.md">Playwright</a>**

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**