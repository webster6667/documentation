# Observer
> Патерн позволяющий следить одному объекту за изменением другово

```javascript
class News {

    constructor() {
        this.news = '';
        this.actions = [];
    }

    setNews(text) {
        this.news = text;
        this.notifyAll();
    }

    notifyAll() {
        return this.actions.forEach(subs => subs.inform(this));
    }

    register(observer) {
        this.actions.push(observer);
    }

    unregister(observer) {
        this.actions = this.actions.filter(el => !(el instanceof observer));
    }
};

class User {
    constructor({name, onNewsPosted}) {
        this.name = name
        this.onNewsPosted = onNewsPosted
    }

    inform(message) {
        this.onNewsPosted(message.news)
    }
};

const news = new News(),
      user = new User({
        name: 'Jon',
        onNewsPosted: (news) => {
            console.log(`was created news '${news}'`);
        }
      })

news.register(user) // 🎯 1. Регистрируем наблюдателя за изменениями 
news.setNews('vk has new theme') // 🎯 2. Вызываем метод который изменяет данные, и оповещает всех подписанных наблюдателей
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**