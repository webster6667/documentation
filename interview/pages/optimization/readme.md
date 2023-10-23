# Optimization

<details>
<summary> Как бы оптимизировал приложение? </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

1. Сжатие медиа(img/code)
2. Сжатие входящего медиа на беке  
3. Отдавать статику с nginx
4. Отдавать статику с разных доменов(с одного домена происходит не более 30 паралельных запросов) или юзать https2 
5. Использование cdn  
6. Использовать кеш(useQuery/rtkQuery)
7. Помнить про abortController
8. Не использовать бездумно spreed
9. Использовать lazyLoading как для картинок так и для страничек  
10. Использовать PWA  
11. mobileFirst
12. Ставить линтер (не используемые переменные и тд)
13. Правильно меморизировать данные (юзать только там, где пересоздания дороже операции меморизации )
14. Следить за лишними ререндерами(redux, formik)  
15. Переодически делать снимки потребляемой памяти, и искать места протечек 
16. Виртуализация скролла  


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>





<br>

### ⟵ **<a href="../../readme.md">Назад</a>**