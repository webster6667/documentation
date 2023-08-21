# Domain Name System
👆🏽 Система доменных имен, позволяющая отдавать `ip адрес`, запрошенного доменного имени        

![illustration](img/illustration.png)

<details>
<summary> Процесс получения ip адреса по доменному имени</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Изначально при вводе доменного имени в `url`, браузер ищет `ip` адрес доменного имени в кеше          
🎯 Если находит по домену `test.ru` `ip` адресс `192.158.1.38`, шлет запрос по этому `ip`    
🎯 Если не находи в кеше, шлет запрос на определение `ip` адреса для домена `test.ru` на `dns` сервер провайдера      
🎯 Если `DNS` сервер не вернет `ip` адрес, он выдаст сообщение об ошибке        
🛑 Частой ошибкой с полученимем `ip` по доменному имени может быть локальный кеш `DNS`   


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**