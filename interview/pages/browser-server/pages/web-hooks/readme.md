# Web-hooks
👆🏽 Способ общения между серверами без постоянного соединения  

<details>
<summary> 🔹 Алгоритм работы</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Сервер ожидающий события вписывает `url`, по которому он ожидает оповещение        
🎯 Сервис от которого ожидают событий, вешает колбеки на необходимые события  
🎯 После отработки события(`запись в db`), шлет всем подписчикам веб хук о сработанном событии    
🎯 Подписчики получают запросы, и обновляют данные у себя  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>    



<details>
<summary> 🔹 Особенности </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Могут доходить с задержкой      
🎯 Приходят не соблюдая очередь      
🎯 Не тянут большой нагрузки  

👆 Лучше использовать просто как оповещатель о событиях, после которого будет сделан нормальный запрос на `API` сервиса

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> 🔹 Плюсы </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Не нужно держать соединения для получения актуальных данных

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>  

<details>
<summary> 🔹 Минусы </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Не соблюдает очередь        
🎯 Идет с задержкой        
🎯 Может не дойти

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>  

<details>
<summary> 🔹 Примеры</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `gitlab`      
🎯 `stripe`    

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>  


<br>

### ⟵ **<a href="../../readme.md">Назад</a>**