# request-animation-frame
👆🏽 Функция выполняющая отрисовку в <ins>[максимально удобное для браузера время](## "При перерисовке след кадра")</ins>

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

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**