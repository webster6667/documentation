# Domain Name System


<details>
<summary>❓ Что такое <code>DNC</code></summary>

---

Система доменных имен, позволяющая отдавать `ip адрес`, запрошенного доменного имени  

---

</details>
        
<details>
<summary> <sup>⭐</sup>❓ Расскажи процесс получения <code>ip адреса</code> доменного имени</summary>

---

🎯 Изначально при вводе доменного имени в `url`, браузер ищет `ip` адрес доменного имени в кеше          
🎯 Если находит по домену `test.ru` `ip` адресс `192.158.1.38`, шлет запрос по этому `ip`    
🎯 Если не находи в кеше, шлет запрос на определение `ip` адреса для домена `test.ru` на `dns` сервер провайдера      
🎯 Если `DNS` сервер не вернет `ip` адрес, он выдаст сообщение об ошибке

<details>
<summary> <sup>⭐</sup>❓ Бывает вроде сайт у всех работает, а у тебя нет, какая ошибка связанная с <code>dns</code> может быть?</summary>

---

🛑 Частой ошибкой с полученимем `ip` по доменному имени может быть локальный кеш `DNS`

---

</details>   

---

</details>

<br>

<details>
<summary> 🧠 Образ для заучивания</summary>

---

Все купленные имена для сайта можно узнать в `DNS`-е

<details>
<summary> Процесс получения <code>ip</code>, по доменному имени</summary>

----

🎯 Знаю как называется телефон, например самсунг x5(`domain name`)       
🎯 Хочу посмотреть его в интерент магазине(`найти сайт по доменному имени в интернете`)             
🎯 Но знаю что нужно получить `id` товара(`ip` сайта)    
🎯 Не хочу идти в `dns`, по этому сначала гляну в шкафу в чеках, может я покупал такой телефон, и у меня остался `id`(`сначала смотрим в кеше nscd`)     
🎯 Если нет, идем в `dns`(отправляем запрос на `dns`)      
🎯 Получаем `id` по имени товара(`ip` по доменному имени)          
🎯 Находим нужный телефон по `id`(находим в интернете сайт по `ip`)      

----

</details>

---

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**