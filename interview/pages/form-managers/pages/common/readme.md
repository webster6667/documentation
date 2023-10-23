# Менеджер по работе с формами  

<details>
<summary> Зачем нужен?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Самописки долго писать и отлаживать, и в итоге прийдеш к уже готовому решению крутящемся на одном и том же патерне   
🎯 Оборачивают все приложение одной фиксированной логикой        
🎯 Позволяет разделять чистый `ui`, `клиенсткую валидацию`, и `бизнес логику`    
&emsp;&emsp; 👆 Своего рода стор для формы  


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какие бывают?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Контролируемые      
&emsp;&emsp; 👆 Каждое действие проходит через стейт, и только после этого отрисовываеться, `Formik`    

🎯 Не контролируемые      
&emsp;&emsp; 👆 Каждый инпут управляеться императивным подходом, заранее заготовленными функциями используя рефы и ванильный `js`      

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какие плюсы и минусы в каждом из подходов?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Контролируемые      
&emsp;&emsp; ✅ Логика работы хорошо связана, простая и предсказуемая    
&emsp;&emsp;&emsp;&emsp; 👆 Из любого места внутри формы можно получить или изменить данные стора

&emsp;&emsp; ❌ Каждое микро событие (`touched`) перебирает весь стор  
&emsp;&emsp;&emsp;&emsp; 👆 Как результат либо много перерисовок, либо много кеширования      

---

🎯 Не контролируемые       
&emsp;&emsp; ✅ Меньше перерисовок, так как изменение инпутов происходит императивным путем    
&emsp;&emsp; ❌ Из за императивности гораздо сложнее выстроить связи между инпутами, а логика этих связей становиться не очевидной  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Каких бы правил придерживался при реализации </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Разделять `ui` и `field` на два независимых слоя  
🎯 Хранить абстрактные `fields`, например `text, radio, number`      
🎯 Если логика работы одного и того же абстрактного `field` отличаются, то разбить абстракцию на два разных инстанса `primart`, `secondary`        
🎯 Работать с `validateSchema`, например `yup`        
🎯 Если данные ожидаемые формой, и данные возвращаемые с апи разняться в форматах, готовить отдельный обьект преобразованых данных функцией `getPrepareInitFormState`      
🎯 Если данные возвращаемые формой и модель ожидаемая `API` разняться, преобразовывать новый обьект фунцией `getPrepareDataForBackend`, в ивенте `onSubmit`  


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**