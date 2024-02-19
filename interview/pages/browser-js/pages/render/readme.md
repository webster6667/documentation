# Render

<details>
<summary> Влияние <code>async/defer</code> на загрузку html странички</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🔹 `async`         
&emsp;&emsp; 🎯 Ассинхронный скрипт, не блокирующий поток  
&emsp;&emsp; 🎯 Загружает в произвольном порядке  
&emsp;&emsp; 🎯 Запускается сразу, даже если `dom` не готов           

🔹 `deffer`        
&emsp;&emsp; 🎯 Ассинхронный скрипт, не блокирует поток  
&emsp;&emsp; 🎯 Загрузяться только после полной загрузки странички      
&emsp;&emsp; 🎯 Запустятся в порядке объявления     

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как происходит процесс рендеринга странички</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Идет запрос в `dns` для определения доменного имени   
🎯 Получаем `ip`, установка соединения, проходит запрос на сервер        
🎯 Сервер возращает `html` файл  
🎯 Браузер парсит `html` документ, создавая `DOM` и `CSSOM`             
🎯 Если встречаются скрипты без тега `async/deffer`, блокируют создание `DOM`   
🎯 Далее идет сопоставление `DOM` и `CSSOM` для того что бы создать (`дерево рендера` | `renderTree`), которое включает в себя только те теги и стили, которые нужно отрисовать в браузере  
🎯 Далее идет стадия `Layout` || `Reflow`, в которой отрисовываеться геометрия и расположение блоков  
🎯 Далее идет `paint` - процесс раскрашивание пикселей    
🎯 Последним идет `Composite` - вынос отрисованой картинки на видео карту, и любая работа со слоями(Вынос элемента на новый слой, opacity, transform)    

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое <code>Reflow</code> и <code>Repaint</code></summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 `Reflow`       
&emsp;&emsp 👆 Изменение геометрии, затрагивающее позицию всех остальных элементов    
  
🎯 `Repaint`      
&emsp;&emsp 👆 Перекраска только одного элемента   

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какая разница между изменением через left и transform</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🔹 Left  
&emsp;&emsp; 🎯 Работает на `CPU`        
&emsp;&emsp; 🎯 Без сглаживания  
&emsp;&emsp; 🎯 Вызывает `Relayout`    
&emsp;&emsp;&emsp;&emsp; 🥏 Так как изменяет геометрию элемента  
&emsp;&emsp;&emsp;&emsp; 🥏 Пересчитывает позиционирование в зависимости от родительских блоков  
&emsp;&emsp;&emsp;&emsp; 🥏 Перекрашивает элемент на новой позиции              
&emsp;&emsp;&emsp;&emsp; 🥏 Выносит новую картинку на видеокарту

🔹 Transform  
&emsp;&emsp; 🎯 Работает на `GPU`  
&emsp;&emsp; 🎯 Работает с сглаживанием  
&emsp;&emsp; 🎯 Трансформирует слой, не затрагивая соседние   

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary>Что делает свойство will-change</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Выности элемент на отдельный слой, перед началом анимации

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как можно вынести элемент на отдельный слой GPU, без will-change</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

`translateZ(0)`

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Почему бы не сделать will-change по дефолту на всех анимациях?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Все элементы которые сейчас не анимируються, будут вынесенны на отдельные слои.    
🎯 В следствии чего GPU будет перегружен данными, и не сможет так быстро и красиво разрисовывать анимации        
🎯 На GPU нужно выносить только те элементы, с которыми сейчас будет происходить анимация  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> В какой момент лучше всего выносить элемент на новый слой</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

При событии hover или focus на блок или его родителя

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> GPU может быть перегруженым, какие есть хитрости и правила для его оптимизации</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Убирать за собой слои с GPU, которые сейчас не анимируються  
🎯 Не анимировать то что не попадает в область видимости экрана      
🎯 Не анимировать загруженную до конца картинку      
&emsp;&emsp; 👆 Так как каждый этап ее дозагрузки, будет вызывать перерисовку, и тормозить анимацию     
 
🎯 Уменьшить фактический вес слоя передаваемого на gpu, например:  
&emsp;&emsp; 🥏 Квадрат 1px, заскелить что бы получить 100px квадрат    
&emsp;&emsp; 🥏 Следить за оптимизацией картинок вынесенных на `gpu`   
&emsp;&emsp; 🥏 Свертсать то что сделанно картинкой   

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какая разница между дискретной и встроенной видеокартой</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Дискретная карта быстрее, и включаеться по мере необходимости

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как можно насильно включить дискретную видео карту</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

```javascript
try {
    const canvas = document.createElement('canvas').getContext("webgl", { powerPreference:"high-performance" });
    document.body.appendChild(canvas)
} catch(e) {
    
}
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое ForcedReflow</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Досрочная рекалькуляция данных  

🎯 Браузер оптимизирует различные изменения геометрии, и может выполнять их не сразу    
🎯 Если запросить данные геометрии блока сразу же после его изменения, то браузер запустит перерисовку этого блока, не дожидаясь оптимального для этого времени          
🎯 Если сделать это в цикле, это повлечет за собой большие проблемы в производитености  

```javascript
div.style.height = div.offsetHeight + 1 // Вызвано изменении геометрии блока, помечаеться браузером как изменить в благоприятное время
div.style.height = div.offsetHeight + 1 // Повторный вызов div.offsetHeight заставит браузер сделать reflow для div, не дожидаясь благоприятного времени, это и есть ForcedReflow     
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какие проблемы в этом коде, как их пофиксить</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

[![Edit custom-bind](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/forced-reflow-t58w3z)

<details>
<summary> css</summary>

----

````css
body {
    overflow: hidden;
}

.circle {
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 18px;
    font-weight: bold;

    width: 1px;
    height: 1px;
    background: green;
    border-radius: 50%;
    transform: translateX(-50%) translateY(-50%);
    will-change: "width, height";
    text-align: center;
}
````

----

</details>

<details>
<summary> js</summary>

----

```javascript
const body = document.querySelector("body");
let circleCount = 1;

// Создать круг в рандомном месте
function createCircleOnRandomPosition(x, y) {
    const newCircle = document.createElement("div");
    newCircle.classList.add("circle");
    newCircle.style.left = `${x}px`;
    newCircle.style.top = `${y}px`;
    newCircle.innerText = circleCount;
    body.appendChild(newCircle);
    circleCount++;
}

// Расширяет все круги на страничке
function resizeBlocks() {
    const circleList = Array.from(document.querySelectorAll(".circle"));

    circleList.forEach((circle) => {
        const newSize = circle.offsetWidth + 1 + Math.random() * 6;
        const isBlockLarge = newSize > 400;
        circle.style.width = `${newSize}px`;
        circle.style.height = `${newSize}px`;
        circle.style.opacity = (400 - newSize) / 400;

        if (isBlockLarge) {
            circle.remove();
        }
    });
}

// Цикл расширяющий все круги
function loop() {
    window.requestAnimationFrame(() => {
        resizeBlocks();
        loop();
    });
}
loop();

// Рандомно добавляем круги на страничку
setInterval(() => {
    createCircleOnRandomPosition(
        Math.floor(Math.random() * 600),
        Math.floor(Math.random() * 400)
    );
    createCircleOnRandomPosition(
        Math.floor(Math.random() * 600),
        Math.floor(Math.random() * 400)
    );
}, 300);
```

----

</details>

Ставим низко производиельное устройство  
Для мака `m1`, меняем `intervalTimeout` на `0` 

--- 

🔹 Проблема  
&emsp;&emsp; 🎯 Цикл с `circleList` реализует `forcedReflow`      
&emsp;&emsp; 🎯 В каждой итерации мы изменяем `width/height`, которые влияют на соседние элементы   
&emsp;&emsp; 🎯 Так же в каждой итерации, мы запрашиваем геометрические данные, что и вызывает `frocedReflow`        
&emsp;&emsp; 🎯 Если в первой итерации все нормально, получили текущую ширину и отправили запрос на ее изменения      
&emsp;&emsp; 🎯 То во второй итерации при запросе геометрических данных круга, будет вызвана досрочная рекалькуляция стилей круга из первой итерации, не дожидаясь благоприятного времени      
&emsp;&emsp; 🎯 Это происходит из за того, что изменения `width/height` воздействуют на окружающие элементы        
&emsp;&emsp; 🎯 И прежде чем запросить данные для круга из второй итерации, нужно срочно применить изменения к первому  
&emsp;&emsp; 🎯 Что бы взять учет его воздействия на круг из второй итерации      

🔹 Решение    
&emsp;&emsp; 👆 Для решения этой проблемы достаточно следовать правилу, сначала считай, потом рисуй  

```javascript
//Считай размеры  
const newSizes = circleList.map((circle) => 
    (circle.offsetWidth + 1 + Math.random() * 6)
)

//Рисуй, без запроса данных геометрии в каждой итерации  
circleList.forEach((circle, index) => {
    const newSize = newSizes[index];
    const isBlockLarge = newSize > 400;
    circle.style.width = `${newSize}px`;
    circle.style.height = `${newSize}px`;
    circle.style.opacity = (400 - newSize) / 400;

    if (isBlockLarge) {
        circle.remove();
    }
});
```

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое requestAnimationFrame</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Колбек, который срабатывает перед отрисовкой следующего кадра, что обеспечивает более плавную анимацию

<details>
<summary> 🔹 Анимация сработающая за нужное время </summary>

----

```javascript
function animate(props) {
    const { 
        startTime = Date.now(), 
        duration, 
        onProgress, 
        onComplete 
    } = props;

    const currentTime = Date.now();
    const elapsedTime = Math.min(currentTime - startTime, duration);

    const progress = elapsedTime / duration;
    onProgress(progress);

    if (elapsedTime < duration) {
        requestAnimationFrame(() => animate(props));
    } else {
        onComplete();
    }
}

//transform animation
animate({
    startTime: Date.now(),
    duration: 1000,
    onProgress: (progress) => {

        const startPosition = 0;
        const endPosition = 100;
        const newPosition =
            startPosition + progress * (endPosition - startPosition);
        block.style.left = newPosition + "%";
    },
    onComplete: () => {
        console.log("Animation complete");
    }
});
```

----

</details>

<details>
<summary> 🔹 Анимация сработающая с указанным шагом  </summary>

----

```javascript
let currentPosition = 0;
let maxPosition = 100;

function move() {
  window.requestAnimationFrame(() => {
    const block = document.querySelector(".line");
    currentPosition = currentPosition + 5;
    const newPosition = currentPosition;
    block.style.transform = `translateX(${newPosition}%)`;

    if (newPosition < maxPosition) {
      move();
    }
  });
}

move();
```

----

</details>
     


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое requestIdleCallback</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Колбек срабатывающий период простоя браузера, создан для выполнение низкоприотритетных операций

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое web animation API</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

API позволяющее работать с `keyframes` анимациями используя `js`  

То что траньше писалось на `css` и тоглилось классами на js 

<details>
<summary> CSS example</summary>

----

```css
#alice {
  animation: aliceTumbling infinite 3s linear;
}

@keyframes aliceTumbling {
  0% {
    color: #000;
    transform: rotate(0) translate3D(-50%, -50%, 0);
  }
  30% {
    color: #431236;
  }
  100% {
    color: #000;
    transform: rotate(360deg) translate3D(-50%, -50%, 0);
  }
}
```

----

</details>

Сейчас можно написать на `js`, и управлять состояниями `play/paused` 

<details>
<summary> JS example</summary>

----

```javascript
document.getElementById("alice").animate(
  [
    { transform: "rotate(0) translate3D(-50%, -50%, 0)", color: "#000" },
    { color: "#431236", offset: 0.3 },
    { transform: "rotate(360deg) translate3D(-50%, -50%, 0)", color: "#000" },
  ],
  3000,
);
```

----

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое FLIP анимации</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🔹 First   
&emsp;&emsp; 👆 Ставим элемент в первую стадию анимации, и записываем размеры, стили и координаты    

🔹 Last  
&emsp;&emsp; 👆 Без анимирования переводим элемент в последнюю стадию анимации, и записываем размеры, стили и координаты      

🔹 Invert  
&emsp;&emsp; 👆 Когда элемент находиться в конечной стадии, и нам известные координаты и стили первого кадра, мы можем перевести элемент в первую стадию используя `css frandly` стили     

🔹 Play    
&emsp;&emsp; 👆 Для запуска анимации, достаточно будет добавить `transition` стили, и обнулить добавленные `css frandly` стили  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**