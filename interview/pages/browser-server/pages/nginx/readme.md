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


     



```
server {
    listen 80;
    server_name yourdomain.com;

    root /path/to/your/react/app/build;

    index index.html;

    location / {
        try_files $uri /index.html;
    }

    location /static {
        alias /path/to/your/react/app/build/static;
    }

    location ~* \.(?:ico|css|js|gif|jpe?g|png)$ {
        expires max;
        add_header Pragma public;
        add_header Cache-Control "public, must-revalidate, proxy-revalidate";
    }

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

    # Optional: If you want to serve the application through HTTPS, uncomment the following lines
    # listen 443 ssl; 
    # ssl_certificate /path/to/your/ssl_certificate.crt;
    # ssl_certificate_key /path/to/your/ssl_certificate_key.key;
    # ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    # ssl_prefer_server_ciphers on;
    # ssl_ciphers "EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH";

    # Optional: Enable HTTP/2 support
    # http2 on;
}
```

<a href="https://www.youtube.com/watch?v=fo5KYjqPfWs&t=926s"><img src="https://raw.githubusercontent.com/webster6667/documentation/ebfd5a1acdc772d2de59331f5e127a76d08c9a8b/documentation-data/illustrations/video.svg" height="20px" title="ts" alt=""> NGINX</a>

<details>
<summary> Как подключить сайт к <code>nginx</code>?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Для этого нужно создать конфиг в папке `site-avialables`, перенести его в `site-enabled`, и рестартнуть `nginx`   

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**