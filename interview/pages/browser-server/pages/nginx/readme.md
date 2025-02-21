# Nginx

<details>
<summary>❓ Что ты знаешь о <code>Nginx</code>? </summary>

---

👆🏽 `Web` или `Proxy` сервер позволяющий быстро обрабатывать большое кол-во подключений

🎯 Может перехватывать и перенаправлять различные запросы с клиента         
🎯 Отдавать главный файл сайта    
🎯 Быстро отдавать статику  
🎯 Выступать балансировщиком нагрузки  

---

</details>

<details>
<summary> ❓ Приведи пример базовых настроек <code>nginx</code> для react приложения</summary>

---

```
# Фронтенд сервер
server {
    listen 80;
    server_name yourdomain.com;

    # Указываем корневую директорию, где расположены скомпилированные файлы
    root /path/to/your/react/app/build;

    # Указываем имя главного индекса (например, index.html)
    index index.html;

    # Задаем правило для маршрутизации всех запросов к index.html React-приложеня
    # Необходимо для корректной работы react router
    location / {
        try_files $uri /index.html;
    }
    
    # Перенаправляем все запрсы на апи, если он на отдельном серваке
	location /api {
		proxy_pass http://<b>ЗДЕСЬ_АЙПИ_МОЕГО_СЕРВЕРА</b>:4000/;
		proxy_http_version 1.1;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection 'upgrade';
		proxy_set_header Host $host;
		proxy_cache_bypass $http_upgrade;
	}	
	

    # Отправляем отправляем запрос с статикой по алиасу
    location /static {
        alias /path/to/your/react/app/build/static;
    }

    # Настройки кэша для статических файлов (CSS, JS, изображений)
    location ~* \.(?:ico|css|js|gif|jpe?g|png)$ {
        expires max;
        add_header Pragma public;
        add_header Cache-Control "public, must-revalidate, proxy-revalidate";
    }
    
    # Настройка логов для этого сайта
    error_log /var/log/nginx/your-react-app-error.log;
    access_log /var/log/nginx/your-react-app-access.log;

    gzip on;
    gzip_comp_level 6;
    gzip_min_length 1100;
    gzip_buffers 16 8k;
    gzip_proxied any;
    gzip_types
        text/plain
        text/css
        text/js
        text/xml
        text/javascript
        application/javascript
        application/x-javascript
        application/json
        application/xml
        application/rss+xml
        image/svg+xml;

    # Опциональные настройки SSL сертификата
    # listen 443 ssl; 
    # ssl_certificate /path/to/your/ssl_certificate.crt;
    # ssl_certificate_key /path/to/your/ssl_certificate_key.key;
    # ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    # ssl_prefer_server_ciphers on;
    # ssl_ciphers "EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH";

    # OОпциональные включение SSL сертификата
    # http2 on;
}

# Настройка бекенда, если он на том же сервер, но на другом порту
upstream backend {

  # Указываем сервера балансировщики, между которыми будет распределяться нагрузка
  ip_hash;
  server 192.168.0.1:31300 weight=5;
  server 192.168.0.1:31301 weight=1;
  server 192.168.0.1:31302 max_fails=3 fail_timeout=30s weight=1;

}

proxy_cache_path /etc/nginx/cache keys_zone=my_cache:10m max_size=100m inactive=60m use_temp_path=off;


server {
  listen 9090;

  location / {
        proxy_cache my_cache;
        proxy_cache_valid 200 30s;
        proxy_cache_methods GET HEAD POST;
        proxy_cache_min_uses 1;
        proxy_cache_use_stale error timeout http_500 http_502 http_503 http_504;
        proxy_pass http://backend;
        proxy_redirect     off;
        proxy_set_header   Host $host;
        proxy_set_header   X-Real-IP $remote_addr;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Host $server_name;
  }

}

```

---

</details>
     

<details>
<summary> ❓ Какие действия нужно произвести, для запуска приложения на <code>nginx</code> </summary>

---

🎯 Для этого нужно создать конфиг по аналогии выше, в папке `site-avialables`   
🎯 Перенести его в `site-enabled`   
🎯 Перечитать конфигурации `nginx`   
&emsp;&emsp; 👆`nginx -s reload`

---

</details>

<a href="https://www.youtube.com/watch?v=fo5KYjqPfWs&t=926s"><img src="https://raw.githubusercontent.com/webster6667/documentation/ebfd5a1acdc772d2de59331f5e127a76d08c9a8b/documentation-data/illustrations/video.svg" height="20px" title="ts" alt=""> NGINX</a>

<a href="https://www.youtube.com/watch?v=6Df5vJC-G8Q"><img src="https://raw.githubusercontent.com/webster6667/documentation/ebfd5a1acdc772d2de59331f5e127a76d08c9a8b/documentation-data/illustrations/video.svg" height="20px" title="ts" alt=""> NGINX</a>


<br>

### ⟵ **<a href="../../readme.md">Назад</a>**