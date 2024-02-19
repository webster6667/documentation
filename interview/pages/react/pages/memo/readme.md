# Perfomance

<details>
<summary> 🔥 <code>Shortcut</code></summary>

___

🔹 Меморизация не дешевая операция, пересоздание может быть дешевле  

🔹 `React.memo()` `Hoc` предотвращающий реренде компонента, если при ререндере родителя в меморезированный компонент приходят те же пропсы что и при прошлом рендере  
&emsp;&emsp; 🔸 Не закешированный объект или функция с теми же значениями вызовут ререндер  

🔹 `useMemo` может кешировать как переменные так и компоненты  

🔹 `useCallback` простых функций только для передачи хендлера в `React.memo()` компонент  

🔹 Дешевые способы избежать дорогой меморизации  
&emsp;&emsp; 🎯 Компонент ререндериться при изменении стейта, дешевле меморизации инкапсулировать работу со стейтом друг от друга       
&emsp;&emsp; 🎯 Прокинуть соседа как children  
&emsp;&emsp;&emsp;&emsp; 👆 `children` не ререндериться при изменении стейта внутри компонента куда он проброшен

___

</details>

* **<a href="./pages/react-memo/readme.md">React memo</a>**  
* **<a href="./pages/use-memo/readme.md">useMemo</a>**
* **<a href="./pages/use-callback/readme.md">useCallback</a>**
* **<a href="./pages/before-you-memo/readme.md">before you memo</a>**

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**